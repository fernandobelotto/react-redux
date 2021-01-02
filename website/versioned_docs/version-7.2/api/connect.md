---
id: connect
title: Connect
sidebar_label: connect()
hide_title: true
---

# `connect()`

## Visão geral

A função `connect()` conecta um componente React a uma Redux store.

Ele fornece a seu componente conectado as partes dos dados de que precisa da store e as funções que pode usar para despachar actions para a store.

Ele não modifica a classe de componente que você passou a ela; em vez disso, ela retorna uma nova classe de componente conectado que envolve o componente que você passou.

```js
function connect(mapStateToProps?, mapDispatchToProps?, mergeProps?, options?)
```

O `mapStateToProps` e `mapDispatchToProps` lida com o `state` e `dispatch` de sua Redux store, respectivamente. `state` e `dispatch` serão fornecidos para suas funções `mapStateToProps` ou` mapDispatchToProps` como o primeiro argumento.

Os retornos de `mapStateToProps` e `mapDispatchToProps` são referidos internamente como `stateProps` e `dispatchProps`, respectivamente. Eles serão fornecidos a `mergeProps`, se definidos, como o primeiro e o segundo argumento, onde o terceiro argumento será `ownProps`. O resultado combinado, comumente referido como `mergedProps`, será então fornecido ao seu componente conectado.

## Parâmetros da `connect()`

`connect` aceita quatro parâmetros diferentes, todos opcionais. Por convenção, eles são chamados de:

1. `mapStateToProps?: Função`
2. `mapDispatchToProps?: Função | Objeto`
3. `mergeProps?: Função`
4. `options?: Objeto`

### `mapStateToProps?: (state, ownProps?) => Object`

Se uma função `mapStateToProps` for especificada, o novo componente envolvido irá assinar as atualizações da Redux store. Isso significa que sempre que o armazenamento for atualizado, `mapStateToProps` será chamado. Os resultados de `mapStateToProps` devem ser um objeto simples, que será mesclado nas propriedades do componente encapsulado. Se você não quiser assinar para armazenar atualizações, passe `null` ou `undefined` no lugar de `mapStateToProps`.

#### Parâmetros

1. `state: Objeto`
2. `ownProps?: Objeto`

Uma função `mapStateToProps` leva no máximo dois parâmetros. O número de parâmetros de função declarados (também conhecido como aridade) afeta quando ela será chamada. Isso também determina se a função receberá ownProps. Veja notas [aqui](#the-arity-of-maptoprops-functions).

##### `state`

Se sua função `mapStateToProps` for declarada como tendo um parâmetro, ela será chamada sempre que o estado da store mudar, e dado o estado da store como o único parâmetro.

```js
const mapStateToProps = state => ({ todos: state.todos })
```

##### `ownProps`

Se sua função `mapStateToProps` for declarada como tendo dois parâmetros, ela será chamada sempre que o estado da store mudar _ou_ quando o componente envolvido receber novos props (com base em comparações de igualdade rasas (shallow equality)). Ele receberá o estado da store como o primeiro parâmetro e os props do componente encolvido como o segundo parâmetro.

O segundo parâmetro é normalmente referido como `ownProps` por convenção.

```js
const mapStateToProps = (state, ownProps) => ({
  todo: state.todos[ownProps.id]
})
```

#### Retorno

Espera-se que suas funções `mapStateToProps` retornem um objeto. Este objeto, normalmente conhecido como `stateProps`, será mesclado como props para o seu componente conectado. Se você definir `mergeProps`, ele será fornecido como o primeiro parâmetro para` mergeProps`.

O retorno de `mapStateToProps` determina se o componente conectado irá renderizar novamente (detalhes [aqui](../using-react-redux/connect-mapstate#return-values-determine-if-your-component-re-renders)).

Para obter mais detalhes sobre o uso recomendado de `mapStateToProps`, consulte [nosso guia sobre como usar` mapStateToProps`](../using-react-redux/connect-mapstate).

> Você pode definir `mapStateToProps` e` mapDispatchToProps` como uma factory function, ou seja, você retorna uma função em vez de um objeto. Neste caso, sua função retornada será tratada como o real `mapStateToProps` ou `mapDispatchToProps`, e será chamada em chamadas subsequentes. Você pode ver notas em [Factory Funcions](#factory-functions) ou nosso guia sobre otimizações de desempenho.

### `mapDispatchToProps?: Object | (dispatch, ownProps?) => Object`

Convencionalmente chamado de `mapDispatchToProps`, este segundo parâmetro para `connect()` pode ser um objeto, uma função ou não ser fornecido.

Seu componente receberá `dispatch` por padrão, ou seja, quando você não fornecer um segundo parâmetro para `connect()`:

```js
// não passe `mapDispatchToProps`
connect()(MyComponent)
connect(mapState)(MyComponent)
connect(
  mapState,
  null,
  mergeProps,
  options
)(MyComponent)
```

Se você definir um `mapDispatchToProps` como uma função, ele será chamado com no máximo dois parâmetros.

#### Parâmetros

1. `dispatch: Função`
2. `ownProps?: Objeto`

##### `dispatch`

Se seu `mapDispatchToProps` for declarado como uma função recebendo um parâmetro, ele receberá o `dispatch` de sua `store`.

```js
const mapDispatchToProps = dispatch => {
  return {
    // despachando actions simples
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' }),
    reset: () => dispatch({ type: 'RESET' })
  }
}
```
##### `ownProps`

Se sua função `mapDispatchToProps` for declarada como tendo dois parâmetros, ela será chamada com `dispatch` como o primeiro parâmetro e os props passados ​​para o componente envolvido como o segundo parâmetro, e serão re-invocados sempre que o componente conectado receber novas props.

O segundo parâmetro é normalmente referido como `ownProps` por convenção.

```js
// vincula-se à re-renderização do componente
<button onClick={() => this.props.toggleTodo(this.props.todoId)} />

// vincula-se à mudança de `props`
const mapDispatchToProps = (dispatch, ownProps) => {
  toggleTodo: () => dispatch(toggleTodo(ownProps.todoId))
}
```
O número de parâmetros de função declarados de `mapDispatchToProps` determina se eles recebem ownProps. Veja notas [aqui](#the-arity-of-maptoprops-functions).

#### Retorno

Espera-se que suas funções `mapDispatchToProps` retornem um objeto. Cada campo do objeto deve ser uma função, chamando a qual se espera que despache uma action para a store.

O retorno de suas funções `mapDispatchToProps` são considerados `dispatchProps`. Ele será mesclado como props ao seu componente conectado. Se você definir `mergeProps`, ele será fornecido como o segundo parâmetro para` mergeProps`.

```js
const createMyAction = () => ({ type: 'MY_ACTION' })
const mapDispatchToProps = (dispatch, ownProps) => {
  const boundActions = bindActionCreators({ createMyAction }, dispatch)
  return {
    dispatchPlainObject: () => dispatch({ type: 'MY_ACTION' }),
    dispatchActionCreatedByActionCreator: () => dispatch(createMyAction()),
    ...boundActions,
    // você pode devolver a dispatch aqui
    dispatch
  }
}
```
Para obter mais detalhes sobre o uso recomendado, consulte [nosso guia sobre como usar `mapDispatchToProps`](../using-react-redux/connect-mapdispatch).


> Você pode definir `mapStateToProps` e` mapDispatchToProps` como uma factory function, ou seja, você retorna uma função em vez de um objeto. Neste caso, sua função retornada será tratada como o real `mapStateToProps` ou` mapDispatchToProps`, e será chamada em chamadas subsequentes. Você pode ver notas em [Factory Functions](#factory-functions) ou nosso guia sobre otimizações de desempenho.

#### Forma abreviada de objeto

`mapDispatchToProps` pode ser um objeto onde cada campo é um [action creator](https://redux.js.org/glossary#action-creator).

```js
import { addTodo, deleteTodo, toggleTodo } from './actionCreators'

const mapDispatchToProps = {
  addTodo,
  deleteTodo,
  toggleTodo
}

export default connect(
  null,
  mapDispatchToProps
)(TodoApp)
```
Neste caso, React-Redux vincula a `dispatch` de sua store a cada um dos action creators usando` bindActionCreators`. O resultado será considerado como `dispatchProps`, que será diretamente mesclado aos componentes conectados ou fornecido a `mergeProps` como o segundo argumento.

```js
// internamente, React-Redux chama bindActionCreators
// para vincular os action creators a dispatch de sua store
bindActionCreators(mapDispatchToProps, dispatch)
```
Também temos uma seção em nosso guia `mapDispatchToProps` sobre o uso da forma abreviada de objeto [aqui](../using-react-redux/connect-mapdispatch#defining-mapdispatchtoprops-as-an-object).

### `mergeProps?: (stateProps, dispatchProps, ownProps) => Object`

Se especificado, define como os props finais para seu próprio componente envolvido são determinados. Se você não fornecer `mergeProps`, seu componente envolvido receberá `{...ownProps, ...stateProps, ...dispatchProps}` por padrão.

#### Parâmetros

`mergeProps` deve ser especificado com no máximo três parâmetros. Eles são o resultado de `mapStateToProps()`, `mapDispatchToProps()` e os `props` do componente envolvido, respectivamente:

1. `stateProps`
2. `dispatchProps`
3. `ownProps`

Os campos no objeto simples que você retorna dele serão usados ​​como props para o componente envolvido. Você pode especificar esta função para selecionar uma parte do estado com base em props ou para ligar os action creators a uma variável particular de props.

#### Retorno

O valor de retorno de `mergeProps` é referido como `mergedProps` e os campos serão usados ​​como props para o componente encapsulado.

### `options?: Object`

```js
{
  context?: Object,
  pure?: boolean,
  areStatesEqual?: Function,
  areOwnPropsEqual?: Function,
  areStatePropsEqual?: Function,
  areMergedPropsEqual?: Function,
  forwardRef?: boolean,
}
```

#### `context: Object`

> Nota: Este parâmetro é compatível com >= v6.0 apenas

React-Redux v6 permite que você forneça uma instância de context customizada para ser usada pelo React-Redux.
Você precisa passar a instância de seu context para `<Provider />` e seu componente conectado.
Você pode passar o contexto para o seu componente conectado passando-o aqui como um campo de opção ou como uma props para o seu componente conectado na renderização.

```js
// const MyContext = React.createContext();
connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { context: MyContext }
)(MyComponent)
```

#### `pure: boolean`

- valor padrão: `true`

Assume que o componente envolvido é um componente "puro" e não depende de nenhuma entrada ou estado além de seus props e o estado da Redux store selecionada.

Quando `options.pure` é verdadeiro, `connect` executa várias verificações de igualdade que são usadas para evitar chamadas desnecessárias para `mapStateToProps`, `mapDispatchToProps`, `mergeProps` e, finalmente, para `render`. Estes incluem `areStatesEqual`, `areOwnPropsEqual`, `areStatePropsEqual` e `areMergedPropsEqual`. Embora os padrões provavelmente sejam apropriados 99% das vezes, você pode desejar substituí-los por implementações personalizadas para desempenho ou outros motivos.

Fornecemos alguns exemplos nas seções a seguir.

#### `areStatesEqual: (next: Object, prev: Object) => boolean`

- valor padrão: `strictEqual: (next, prev) => prev === next`

Quando puro, compara o estado da store de entrada com seu valor anterior.

_Exemplo 1_

```js
const areStatesEqual = (next, prev) =>
  prev.entities.todos === next.entities.todos
```
Você pode desejar sobrescrever `areStatesEqual` se sua função `mapStateToProps` for computacionalmente pesada e também estiver preocupada apenas com uma pequena parte de seu estado. O exemplo acima irá efetivamente ignorar as mudanças de estado para tudo, exceto para aquela parte do estado.

_Exemplo 2_

Se você tiver redutores impuros que alteram o seu estado da store, você pode substituir `areStatesEqual` para sempre retornar falso:

```js
const areStatesEqual = () => false
```
Isso provavelmente afetaria as outras verificações de igualdade também, dependendo de sua função `mapStateToProps`.

`areOwnPropsEqual: (next: Object, prev: Object) => boolean`

- valor padrão: `shallowEqual: (objA, objB) => boolean`
  ( retorna `verdadeiro` quando cada campo dos objetos é igual )

Quando puro, compara os props recebidos com seu valor anterior.

Você pode querer substituir `areOwnPropsEqual` como uma forma de colocar as props de entrada na lista de permissões. Você também teria que implementar `mapStateToProps`,`mapDispatchToProps` e `mergeProps` para também colocar props na lista de permissões. (Pode ser mais simples conseguir isso de outras maneiras, por exemplo, usando [recompose's mapProps](https://github.com/acdlite/recompose/blob/master/docs/API.md#mapprops).)

#### `areStatePropsEqual: (next: Object, prev: Object) => boolean`

- tipo: `function`
- valor padrão: `shallowEqual`

Quando puro, compara o resultado de `mapStateToProps` com seu valor anterior.

#### `areMergedPropsEqual: (next: Object, prev: Object) => boolean`

- valor padrão: `shallowEqual`

Quando puro, compara o resultado de `mergeProps` com seu valor anterior.

Você pode querer sobrescrever `areStatePropsEqual` para usar `strictEqual` se seu `mapStateToProps` usar um seletor memoizado que só retornará um novo objeto se um prop relevante mudou. Isso seria uma pequena melhoria de desempenho, pois evitaria verificações extras de igualdade em props individuais cada vez que `mapStateToProps` fosse chamado.

Você pode querer substituir `areMergedPropsEqual` para implementar um `deepEqual` se seus selectors produzirem props complexos. ex: objetos aninhados, novas matrizes, etc. (A verificação de igualdade profunda pode ser mais rápida do que apenas uma nova renderização.)

#### `forwardRef: boolean`

> Nota: Este parâmetro é compatível com >= v6.0 apenas

Se `{forwardRef: true}` foi passado para `connect`, adicionar um ref ao componente envolvido conectado irá realmente retornar a instância do componente envolvido.

## Retorno da `connect()`

O retorno de `connect()` é uma função que pega seu componente e retorna um componente envolvido com as props adicionais que ele injeta.

```js
import { login, logout } from './actionCreators'

const mapState = state => state.user
const mapDispatch = { login, logout }

// primeira chamada: retorna um hoc (higher order component) que você pode usar para envolver qualquer componente
const connectUser = connect(
  mapState,
  mapDispatch
)

// segunda chamada: retorna o componente wrapper com mergedProps
// você pode usar o hoc para permitir que diferentes componentes obtenham o mesmo comportamento
const ConnectedUserLogin = connectUser(Login)
const ConnectedUserProfile = connectUser(Profile)
```

Na maioria dos casos, a função retornada será chamada imediatamente, sem ser salva em uma variável temporária:

```js
import { login, logout } from './actionCreators'

const mapState = state => state.user
const mapDispatch = { login, logout }

// chame connect para gerar a função wrapper e chame imediatamente
// a função wrapper para gerar o componente envolvido final.

export default connect(
  mapState,
  mapDispatch
)(Login)
```

## Exemplo de uso

Como `connect` é tão flexível, pode ser útil ver alguns exemplos adicionais de como ela pode ser chamada:

- Injete apenas `dispatch` e não dê ouvidos a store

```js
export default connect()(TodoApp)
```

- Injetar todos os action creators (`addTodo`,` completeTodo`, ...) sem assinar na loja

```js
import * as actionCreators from './actionCreators'

export default connect(
  null,
  actionCreators
)(TodoApp)
```

- Injetar `dispatch` e todos os campos no estado global

> Não faça isso! Ele mata qualquer otimização de desempenho porque `TodoApp` irá renderizar novamente após cada mudança de estado.
> É melhor ter `connect()` mais granular em vários componentes em sua hierarquia de visualização, de modo que cada um ouça apenas uma parte relevante do estado.

```js
// não faça isso!
export default connect(state => state)(TodoApp)
```

- Injetar `dispatch` e `todos`

```js
function mapStateToProps(state) {
  return { todos: state.todos }
}

export default connect(mapStateToProps)(TodoApp)
```
- Injetar `todos` e todos os action creators

```js
import * as actionCreators from './actionCreators'

function mapStateToProps(state) {
  return { todos: state.todos }
}

export default connect(
  mapStateToProps,
  actionCreators
)(TodoApp)
```
- Injetar `todos` e todos os action creators (`addTodo`, `completeTodo`, ...) como `actions`

```js
import * as actionCreators from './actionCreators'
import { bindActionCreators } from 'redux'

function mapStateToProps(state) {
  return { todos: state.todos }
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actionCreators, dispatch) }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoApp)
```
- Injetar `todos` e um action creator específico (` addTodo`)

```js
import { addTodo } from './actionCreators'
import { bindActionCreators } from 'redux'

function mapStateToProps(state) {
  return { todos: state.todos }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addTodo }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoApp)
```
- Injetar `todos` e action creators específicos (`addTodo` e `deleteTodo`) com sintaxe abreviada

```js
import { addTodo, deleteTodo } from './actionCreators'

function mapStateToProps(state) {
  return { todos: state.todos }
}

const mapDispatchToProps = {
  addTodo,
  deleteTodo
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoApp)
```
- Injetar `todos`,` todoActionCreators` como `todoActions` e `counterActionCreators` como `counterActions`

```js
import * as todoActionCreators from './todoActionCreators'
import * as counterActionCreators from './counterActionCreators'
import { bindActionCreators } from 'redux'

function mapStateToProps(state) {
  return { todos: state.todos }
}

function mapDispatchToProps(dispatch) {
  return {
    todoActions: bindActionCreators(todoActionCreators, dispatch),
    counterActions: bindActionCreators(counterActionCreators, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoApp)
```
- Injetar `todos`, todoActionCreators e counterActionCreators juntos como `actions`

```js
import * as todoActionCreators from './todoActionCreators'
import * as counterActionCreators from './counterActionCreators'
import { bindActionCreators } from 'redux'

function mapStateToProps(state) {
  return { todos: state.todos }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      { ...todoActionCreators, ...counterActionCreators },
      dispatch
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoApp)
```
- Injetar `todos` e todos os `todoActionCreators` e `counterActionCreators` diretamente como props

```js
import * as todoActionCreators from './todoActionCreators'
import * as counterActionCreators from './counterActionCreators'
import { bindActionCreators } from 'redux'

function mapStateToProps(state) {
  return { todos: state.todos }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { ...todoActionCreators, ...counterActionCreators },
    dispatch
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoApp)
```

- Injetar `todos` de um usuário específico dependendo das props

```js
import * as actionCreators from './actionCreators'

function mapStateToProps(state, ownProps) {
  return { todos: state.todos[ownProps.userId] }
}

export default connect(mapStateToProps)(TodoApp)
```
- Injetar `todos` de um usuário específico dependendo dos props e injetar `props.userId` na action

```js
import * as actionCreators from './actionCreators'

function mapStateToProps(state) {
  return { todos: state.todos }
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  return Object.assign({}, ownProps, {
    todos: stateProps.todos[ownProps.userId],
    addTodo: text => dispatchProps.addTodo(ownProps.userId, text)
  })
}

export default connect(
  mapStateToProps,
  actionCreators,
  mergeProps
)(TodoApp)
```

## Notas

### A Aridade das Funções `mapToProps`

O número de parâmetros de função declarados de `mapStateToProps` e `mapDispatchToProps` determina se eles recebem `ownProps`

> Nota: `ownProps` não é passado para `mapStateToProps` e `mapDispatchToProps` se a definição formal da função contém um parâmetro obrigatório (função tem comprimento 1). Por exemplo, funções definidas como abaixo não receberão `ownProps` como o segundo argumento. Se o valor de entrada de `ownProps` for `undefined`, o valor do argumento padrão será usado.

```js
function mapStateToProps(state) {
  console.log(state) // state
  console.log(arguments[1]) // undefined
}

const mapStateToProps = (state, ownProps = {}) => {
  console.log(state) // state
  console.log(ownProps) // {}
}
```
Funções sem parâmetros obrigatórios ou dois parâmetros\*receberão `ownProps`.

```js
const mapStateToProps = (state, ownProps) => {
  console.log(state) // state
  console.log(ownProps) // ownProps
}

function mapStateToProps() {
  console.log(arguments[0]) // state
  console.log(arguments[1]) // ownProps
}

const mapStateToProps = (...args) => {
  console.log(args[0]) // state
  console.log(args[1]) // ownProps
}
```

### Factory Functions

If your `mapStateToProps` or `mapDispatchToProps` functions return a function, they will be called once when the component instantiates, and their returns will be used as the actual `mapStateToProps`, `mapDispatchToProps`, functions respectively, in their subsequent calls.
Se suas funções `mapStateToProps` ou `mapDispatchToProps` retornarem uma função, elas serão chamadas uma vez quando o componente instanciar, e seus retornos serão usados ​​como as funções reais `mapStateToProps`,` mapDispatchToProps` respectivamente, em suas chamadas subsequentes.

As factory functions são comumente usadas com selectors memoizados. Isso dá a você a capacidade de criar selectors específicos de instância de componente dentro do closure:

```js
const makeUniqueSelectorInstance = () =>
  createSelector(
    [selectItems, selectItemId],
    (items, itemId) => items[itemId]
  )
const makeMapState = state => {
  const selectItemForThisComponent = makeUniqueSelectorInstance()
  return function realMapState(state, ownProps) {
    const item = selectItemForThisComponent(state, ownProps.itemId)
    return { item }
  }
}
export default connect(makeMapState)(SomeComponent)
```
