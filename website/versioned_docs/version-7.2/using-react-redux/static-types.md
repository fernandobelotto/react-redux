---
id: static-typing
title: Tipagem Estática
hide_title: true
sidebar_label: Tipagem Estática
---

# Tipagem Estática

React-Redux é atualmente escrito em JavaScript simples. No entanto, ele funciona bem com sistemas de tipo estático, como TypeScript e Flow.

## TypeScript

O React-Redux não vem com suas próprias definições de tipo. Se você estiver usando o Typescript, você deve instalar as [definições de tipo `@types/react-redux`](https://npm.im/@types/react-redux) do npm. Além de tipar as funções da biblioteca, os tipos também exportam alguns auxiliares para tornar mais fácil escrever interfaces seguras de tipos entre sua  Redux store e seus componentes React.

### Definindo o tipo de estado raiz

Ambos `mapState` e` useSelector` dependem da declaração do tipo do valor completo do estado da Redux store. Embora esse tipo possa ser escrito à mão, a maneira mais fácil de defini-lo é fazer o TypeScript inferir com base no que sua função reducer raiz retorna. Desta forma, o tipo é atualizado automaticamente conforme as funções do reducer são modificadas.

```ts
// rootReducer.ts
export const rootReducer = combineReducers({
  posts: postsReducer,
  comments: commentsReducer,
  users: usersReducer
})

export type RootState = ReturnType<typeof rootReducer>
// {posts: PostsState, comments: CommentsState, users: UsersState}
```

### Tipando o hook `useSelector`

Ao escrever funções selector para uso com `useSelector`, você deve definir explicitamente o tipo do parâmetro `state`. O TS deve ser capaz de inferir o tipo de retorno do selector, que será reutilizado como o tipo de retorno do hook `useSelector`:

```ts
interface RootState {
  isOn: boolean
}

// TS infere o tipo: (state: RootState) => boolean
const selectIsOn = (state: RootState) => state.isOn

// TS infere que `isOn` é booleano
const isOn = useSelector(selectIsOn)
```
Se você quiser evitar repetir a declaração do tipo `state`, você pode definir um hook `useSelector` digitado usando um tipo auxiliar exportado por `@types/react-redux`:

```ts
// reducer.ts
import { useSelector, TypedUseSelectorHook } from 'react-redux'

interface RootState {
  isOn: boolean
}

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

// my-component.tsx
import { useTypedSelector } from './reducer.ts'

const isOn = useTypedSelector(state => state.isOn)
```

### Tipando o hook `useDispatch`

Por padrão, o valor de retorno de `useDispatch` é o tipo `Dispatch` padrão definido pelos tipos do core do Redux, portanto, nenhuma declaração é necessária:

```ts
const dispatch = useDispatch()
```

Se você tiver uma versão personalizada do tipo `Dispatch`, poderá usar esse tipo explicitamente:

```ts
// store.ts
export type AppDispatch = typeof store.dispatch

// MyComponent.tsx
const dispatch: AppDispatch = useDispatch()
```

### Tipando o componente de ordem superior `connect`

#### Tipando Manualmente `connect`

O componente de ordem superior `connect` é um tanto complexo de tipar, porque há 3 fontes de props: ` mapStateToProps`, `mapDispatchToProps` e props passados ​​do componente pai. Aqui está um exemplo completo de como seria fazer isso manualmente.

```tsx
import { connect } from 'react-redux'

interface StateProps {
  isOn: boolean
}

interface DispatchProps {
  toggleOn: () => void
}

interface OwnProps {
  backgroundColor: string
}

type Props = StateProps & DispatchProps & OwnProps

const mapState = (state: RootState) => ({
  isOn: state.isOn
})

const mapDispatch = {
  toggleOn: () => ({ type: 'TOGGLE_IS_ON' })
}

const MyComponent = (props: Props) => (
  <div style={{ backgroundColor: props.backgroundColor }}>
    <button onClick={props.toggleOn}>
      Toggle is {props.isOn ? 'ON' : 'OFF'}
    </button>
  </div>
)

// Uso típico: `connect` é chamado após o componente ser definido
export default connect<StateProps, DispatchProps, OwnProps>(
  mapState,
  mapDispatch
)(MyComponent)
```

Também é possível abreviar um pouco, inferindo os tipos de `mapState` e` mapDispatch`:

```ts
const mapState = (state: RootState) => ({
  isOn: state.isOn
})

const mapDispatch = {
  toggleOn: () => ({ type: 'TOGGLE_IS_ON' })
}

type StateProps = ReturnType<typeof mapState>
type DispatchProps = typeof mapDispatch

type Props = StateProps & DispatchProps & OwnProps
```

No entanto, inferir o tipo de `mapDispatch` dessa forma será interrompido se ele for definido como um objeto e também se referir a thunks.

#### Inferindo as props conectadas automaticamente

`conectar` consiste em duas funções que são chamadas sequencialmente. A primeira função aceita `mapState` e` mapDispatch` como argumentos e retorna uma segunda função. A segunda função aceita o componente a ser envolvido e retorna um novo componente envolvedor que passa os props de `mapState` e` mapDispatch`. Normalmente, as duas funções são chamadas juntas, como `connect(mapState, mapDispatch)(MyComponent)`.

A partir da versão v7.1.2, o pacote `@types/react-redux` expõe um tipo auxiliar,`ConnectedProps`, que pode extrair os tipos de retorno de `mapStateToProps` e` mapDispatchToProps` da primeira função. Isso significa que se você dividir a chamada `connect` em duas etapas, todos os "props do Redux" podem ser inferidos automaticamente, sem ter que escrevê-los à mão. Embora essa abordagem possa parecer incomum se você estiver usando o React-Redux por um tempo, ela simplifica consideravelmente as declarações de tipo.

```ts
import { connect, ConnectedProps } from 'react-redux'

interface RootState {
  isOn: boolean
}

const mapState = (state: RootState) => ({
  isOn: state.isOn
})

const mapDispatch = {
  toggleOn: () => ({ type: 'TOGGLE_IS_ON' })
}

const connector = connect(
  mapState,
  mapDispatch
)

// O tipo inferido será semelhante a:
// {isOn: boolean, toggleOn: () => void}
type PropsFromRedux = ConnectedProps<typeof connector>
```

O tipo de retorno de `ConnectedProps` pode então ser usado para tipar seu objeto de props.

```tsx
interface Props extends PropsFromRedux {
  backgroundColor: string
}

const MyComponent = (props: Props) => (
  <div style={{ backgroundColor: props.backgroundColor }}>
    <button onClick={props.toggleOn}>
      Toggle is {props.isOn ? 'ON' : 'OFF'}
    </button>
  </div>
)

export default connector(MyComponent)
```

Como os tipos podem ser definidos em qualquer ordem, você ainda pode declarar seu componente antes de declarar o conector, se desejar.

```tsx
// alternativamente, declare `type Props = PropsFromRedux & {backgroundColor: string}`
interface Props extends PropsFromRedux {
  backgroundColor: string;
}

const MyComponent = (props: Props) => /* o mesmo que acima */

const connector = connect(/* o mesmo que acima*/)

type PropsFromRedux = ConnectedProps<typeof connector>

export default connector(MyComponent)
```

### Recomendações

A API de ganchos é geralmente mais simples de usar com tipos estáticos. **Se você está procurando a solução mais fácil para usar tipos estáticos com React-Redux, use a API de hooks.**

Se você estiver usando `connect`, **recomendamos usar a abordagem` ConnectedProps <T> `para inferir os props do Redux**, pois isso requer o mínimo de declarações de tipo explícitas.

## Recursos

Para obter informações adicionais, consulte estes recursos adicionais:

- [Redux docs: Usage with TypeScript](https://redux.js.org/recipes/usage-with-typescript): Exemplos de como declarar os tipos para actions, reducers e a para a store
- [Redux Toolkit docs: Advanced Tutorial](https://redux-toolkit.js.org/tutorials/advanced-tutorial): mostra como usar RTK e a API dos hooks React-Redux com TypeScript
- [React+TypeScript Cheatsheet](https://github.com/typescript-cheatsheets/react-typescript-cheatsheet): um guia abrangente para usar React com TypeScript
- [React + Redux in TypeScript Guide](https://github.com/piotrwitek/react-redux-typescript-guide): informações abrangentes sobre os padrões de uso do React e Redux com TypeScript
