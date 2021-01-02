---
id: hooks
title: Hooks
sidebar_label: Hooks
hide_title: true
---

# Hooks

As novas [API's "hooks"](https://reactjs.org/docs/hooks-intro.html) do React fornecem aos componentes de função a capacidade de usar o estado do componente local, executar efeitos colaterais e muito mais.

React Redux now offers a set of hook APIs as an alternative to the existing `connect()` Higher Order Component. These APIs allow you to subscribe to the Redux store and dispatch actions, without having to wrap your components in `connect()`.

React Redux agora oferece um conjunto de APIs de hook como alternativa ao componente de ordem superior `connect()` existente. Essas APIs permitem que você asein na Redux store e despache actions, sem ter que envolver seus componentes em `connect()`.

Esses hooks foram adicionados pela primeira vez na v7.1.0.

## Usando hooks em um aplicativo React Redux

Tal como acontece com `connect()`, você deve começar envolvendo todo o seu aplicativo em um componente `<Provider>` para tornar a store disponível em toda a árvore de componentes:

```jsx
const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
```

A partir daí, você pode importar qualquer uma das APIs de hooks do React Redux listadas e usá-las nos componentes de sua função.

## `useSelector()`

```js
const result: any = useSelector(selector: Function, equalityFn?: Function)
```
Permite extrair dados do estado da Redux store, usando uma função selector.

> **Nota**: A função selector deve ser [pura](https://en.wikipedia.org/wiki/Pure_function), pois é potencialmente executada várias vezes e em momentos arbitrários.

O selector é aproximadamente equivalente ao argumento [`mapStateToProps` da `connect`](../using-react-redux/connect-mapstate) conceitualmente. O selector será chamado com todo o estado da Redux store como seu único argumento. O selector será executado sempre que o componente de função renderizar (a menos que sua referência não tenha mudado desde uma renderização anterior do componente para que um resultado armazenado em cache possa ser retornado pelo hook sem executar novamente o selector). `useSelector()` também assinará a mundanças na Redux store e executará seu selector sempre que uma action for despachada.

No entanto, existem algumas diferenças entre os selectors passados ​​para `useSelector()` e uma função `mapState`:

- O selector pode retornar qualquer valor como resultado, não apenas um objeto. O valor de retorno do selector será usado como o valor de retorno do hook `useSelector()`.
- Quando uma ação é despachada, `useSelector()` fará uma comparação de referência do valor de resultado do selector anterior e o valor de resultado atual. Se eles forem diferentes, o componente será forçado a renderizar novamente. Se eles forem iguais, o componente não será renderizado novamente.
- A função selector _não_ recebe um argumento `ownProps`. No entanto, os props podem ser usados ​​por meio de closure (veja os exemplos abaixo) ou usando um selector de curry.
- Cuidado extra deve ser tomado ao usar selectors memoizados (veja exemplos abaixo para mais detalhes).
- `useSelector()` usa verificações de igualdade de referência estritas `===` por padrão, não igualdade superficial (veja a seção seguinte para mais detalhes).

> **Nota**: Existem casos potenciais com o uso de props em selectors que podem causar erros. Consulte a seção [Avisos de uso](#avisos-de-uso) desta página para obter mais detalhes.

Você pode chamar `useSelector()` várias vezes em um único componente de função. Cada chamada para `useSelector()` cria uma assinatura individual para a store Redux. Por causa do comportamento de atualização em lote do React usado no React Redux v7, uma action despachada que faz com que vários `useSelector()`s no mesmo componente retornem novos valores _deve_ resultar apenas em uma única re-renderização.

### Comparações de igualdade e atualizações

Quando o componente da função for renderizado, a função selector fornecida será chamada e seu resultado será retornado do hook `useSelector()`. (Um resultado em cache pode ser retornado pelo hook sem executar novamente o selector se for a mesma referência de função que em uma renderização anterior do componente.)

No entanto, quando uma action é despachada para a Redux store, `useSelector()` apenas força uma nova renderização se o resultado do selector parecer diferente do último resultado. A partir da v7.1.0-alpha.5, a comparação padrão é uma comparação de referência estrita `===`. Isso é diferente de `connect()`, que usa verificações de igualdade superficiais nos resultados das chamadas `mapState` para determinar se a re-renderização é necessária. Isso tem várias implicações sobre como você deve usar `useSelector ()`.

Com `mapState`, todos os campos individuais foram retornados em um objeto combinado. Não importava se o objeto de retorno era uma nova referência ou não - `connect()` apenas comparou os campos individuais. Com `useSelector()`, retornar um novo objeto toda vez _sempre_ forçará uma nova renderização por padrão. Se quiser recuperar vários valores da store, você pode:

- Chamar `useSelector()` várias vezes, com cada chamada retornando um único valor de campo
- Use Reselect ou uma biblioteca semelhante para criar um selectors memoizados que retornam vários valores em um objeto, mas só retorna um novo objeto quando um dos valores foi alterado.
- Use a função `shallowEqual` do React-Redux como o argumento `equalityFn` para `useSelector())`, como:

```js
import { shallowEqual, useSelector } from 'react-redux'

// mais tarde
const selectedData = useSelector(selectorReturningObject, shallowEqual)
```

A função de comparação opcional também permite usar algo como `_.isEqual ()` do Lodash ou os recursos de comparação do Immutable.js.

### Exemplos do `useSelector`

Uso básico:

```jsx
import React from 'react'
import { useSelector } from 'react-redux'

export const CounterComponent = () => {
  const counter = useSelector(state => state.counter)
  return <div>{counter}</div>
}
```
Usando props por meio de closure para determinar o que extrair:

```jsx
import React from 'react'
import { useSelector } from 'react-redux'

export const TodoListItem = props => {
  const todo = useSelector(state => state.todos[props.id])
  return <div>{todo.text}</div>
}
```
#### Usando Selectors memoizados

Ao usar `useSelector` com um selector inline como mostrado acima, uma nova instância do selector é criada sempre que o componente é renderizado. Isso funciona, desde que o selector não mantenha nenhum estado. No entanto, os selectors memoizados (por exemplo, criados por meio de `createSelector` de` reselect`) têm estado interno e, portanto, deve-se tomar cuidado ao usá-los. Abaixo, você pode encontrar cenários de uso típicos para selectors memoizados.

Quando o selector depende apenas do estado, basta garantir que ele seja declarado fora do componente para que a mesma instância do selector seja usada para cada renderização:

```jsx
import React from 'react'
import { useSelector } from 'react-redux'
import { createSelector } from 'reselect'

const selectNumOfDoneTodos = createSelector(
  state => state.todos,
  todos => todos.filter(todo => todo.isDone).length
)

export const DoneTodosCounter = () => {
  const numOfDoneTodos = useSelector(selectNumOfDoneTodos)
  return <div>{numOfDoneTodos}</div>
}

export const App = () => {
  return (
    <>
      <span>Number of done todos:</span>
      <DoneTodosCounter />
    </>
  )
}
```
O mesmo é verdade se o selector depende dos props do componente, mas só será usado em uma única instância de um único componente:

```jsx
import React from 'react'
import { useSelector } from 'react-redux'
import { createSelector } from 'reselect'

const selectNumOfTodosWithIsDoneValue = createSelector(
  state => state.todos,
  (_, isDone) => isDone,
  (todos, isDone) => todos.filter(todo => todo.isDone === isDone).length
)

export const TodoCounterForIsDoneValue = ({ isDone }) => {
  const numOfTodosWithIsDoneValue = useSelector(state =>
    selectNumOfTodosWithIsDoneValue(state, isDone)
  )

  return <div>{numOfTodosWithIsDoneValue}</div>
}

export const App = () => {
  return (
    <>
      <span>Number of done todos:</span>
      <TodoCounterForIsDoneValue isDone={true} />
    </>
  )
}
```
No entanto, quando o selector é usado em várias instâncias do componente e depende dos props do componente, você precisa garantir que cada instância do componente obtenha sua própria instância do selector (veja [aqui](https://github.com/reduxjs/reselect#accessing-react-props-in-selectors) para uma explicação mais completa de por que isso é necessário):

```jsx
import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { createSelector } from 'reselect'

const makeNumOfTodosWithIsDoneSelector = () =>
  createSelector(
    state => state.todos,
    (_, isDone) => isDone,
    (todos, isDone) => todos.filter(todo => todo.isDone === isDone).length
  )

export const TodoCounterForIsDoneValue = ({ isDone }) => {
  const selectNumOfTodosWithIsDone = useMemo(
    makeNumOfTodosWithIsDoneSelector,
    []
  )

  const numOfTodosWithIsDoneValue = useSelector(state =>
    selectNumOfTodosWithIsDone(state, isDone)
  )

  return <div>{numOfTodosWithIsDoneValue}</div>
}

export const App = () => {
  return (
    <>
      <span>Number of done todos:</span>
      <TodoCounterForIsDoneValue isDone={true} />
      <span>Number of unfinished todos:</span>
      <TodoCounterForIsDoneValue isDone={false} />
    </>
  )
}
```

## Removido: `useActions()`

## `useDispatch()`

```js
const dispatch = useDispatch()
```
Este hook retorna uma referência à função `dispatch` da Redux store. Você pode usá-lo para despachar actions conforme necessário.

*Observação: como no [`useReducer`](https://reactjs.org/docs/hooks-reference.html#usereducer), a identidade da função `dispatch` retornada é estável e não mudará nos renderizadas seguidas ( a menos que você altere o `store` sendo passado para o` <Provider>`, o que seria extremamente incomum).*

#### Exemplos

```jsx
import React from 'react'
import { useDispatch } from 'react-redux'

export const CounterComponent = ({ value }) => {
  const dispatch = useDispatch()

  return (
    <div>
      <span>{value}</span>
      <button onClick={() => dispatch({ type: 'increment-counter' })}>
        Increment counter
      </button>
    </div>
  )
}
```
Lembrete: ao passar um retorno de chamada usando `dispatch` para um componente filho, você deve memoizá-lo com [`useCallback`](https://reactjs.org/docs/hooks-reference.html#usecallback), assim como você deve memoizar qualquer retorno de chamada passado. Isso evita a renderização desnecessária de componentes filhos devido à referência de retorno de chamada alterada. Você pode passar com segurança `[dispatch]` no array de dependência para a chamada `useCallback` - visto que `dispatch` não mudará, o callback será reutilizado corretamente (como deveria). Por exemplo:

```jsx
import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'

export const CounterComponent = ({ value }) => {
  const dispatch = useDispatch()
  const incrementCounter = useCallback(
    () => dispatch({ type: 'increment-counter' }),
    [dispatch]
  )

  return (
    <div>
      <span>{value}</span>
      <MyIncrementButton onIncrement={incrementCounter} />
    </div>
  )
}

export const MyIncrementButton = React.memo(({ onIncrement }) => (
  <button onClick={onIncrement}>Increment counter</button>
))
```

## `useStore()`

```js
const store = useStore()
```
Este hook retorna uma referência da mesma Redux store que foi passada para o componente `<Provider>`.

Este hook provavelmente não deve ser usado com freqüência. Prefira `useSelector()` como sua escolha principal. No entanto, isso pode ser útil para cenários menos comuns que exigem acesso à store, como a substituição de reducers.

#### Exemplos

```jsx
import React from 'react'
import { useStore } from 'react-redux'

export const CounterComponent = ({ value }) => {
  const store = useStore()

  // EXEMPLO APENAS! Não faça isso em um aplicativo real.
  // O componente não será atualizado automaticamente se o estado da store mudar
  return <div>{store.getState()}</div>
}
```

## Contexto personalizado

O componente `<Provider>` permite que você especifique um contexto alternativo por meio da prop `context`. Isso é útil se você estiver construindo um componente reutilizável complexo e não quiser que sua store entre em conflito com nenhuma Redux store que os aplicativos de seus consumidores possam usar.

Para acessar um context alternativo por meio da API de hooks, use as funções do hooks creators:

```js
import React from 'react'
import {
  Provider,
  createStoreHook,
  createDispatchHook,
  createSelectorHook
} from 'react-redux'

const MyContext = React.createContext(null)

// Exporte seus hooks personalizados se desejar usá-los em outros arquivos.
export const useStore = createStoreHook(MyContext)
export const useDispatch = createDispatchHook(MyContext)
export const useSelector = createSelectorHook(MyContext)

const myStore = createStore(rootReducer)

export function MyProvider({ children }) {
  return (
    <Provider context={MyContext} store={myStore}>
      {children}
    </Provider>
  )
}
```

## Avisos de uso

### Stale Props e "Zombie Children"

Um dos aspectos mais difíceis da implementação do React Redux é garantir que se sua função `mapStateToProps` for definida como `(state, ownProps)`, ela será chamada com os "últimos" props todas as vezes. Até a versão 4, havia bugs recorrentes relatados envolvendo situações extremas, como erros lançados de uma função `mapState` para um item da lista cujos dados acabaram de ser excluídos.

A partir da versão 5, React Redux tentou garantir essa consistência com `ownProps`. Na versão 7, isso é implementado usando uma classe `Subscription` personalizada internamente em `connect ()`, que forma uma hierarquia aninhada. Isso garante que os componentes conectados na parte inferior da árvore receberão notificações de atualização da store apenas depois que o ancestral conectado mais próximo tiver sido atualizado. No entanto, isso depende de cada instância `connect()` substituindo parte do context interno do React, fornecendo sua própria instância `Subscription` para formar esse aninhamento e renderizando o `<ReactReduxContext.Provider>` com esse novo valor de contexto.

Com hooks, não há como renderizar um provedor de context, o que significa que também não há hierarquia aninhada de assinaturas. Por causa disso, os problemas de "props obsoletos" e "zombie children" podem ocorrer novamente em um aplicativo que depende do uso de hooks em vez de `connect()`.

Especificamente, "props obsoletos" significa qualquer caso em que:

- uma função selector depende dos props deste componente para extrair dados
- um componente pai _deveria_ renderizar novamente e passar novos props como resultado de uma action
- mas a função selector deste componente é executada antes que este componente tenha a chance de renderizar novamente com os novos props

Dependendo de quais props foram usados ​​e qual é o estado da store atual, isso _pode_ resultar no retorno de dados incorretos do selector ou até mesmo em um erro sendo gerado.

"Zombie child" refere-se especificamente ao caso em que:

- Vários componentes conectados aninhados são montados em uma primeira passagem, fazendo com que um componente filho se inscreva na store antes de seu pai
- Uma action é despachada que exclui dados da store, como um item de tarefa
- O componente pai _deveria_ parar de renderizar aquele filho como resultado
- No entanto, como o filho se inscreveu primeiro, sua inscrição é executada antes que o pai pare de renderizá-la. Quando ele lê um valor da store com base em props, esses dados não existem mais e, se a lógica de extração não for cuidadosa, isso pode resultar em um erro.

`useSelector()` tenta lidar com isso pegando todos os erros que são lançados quando o selector é executado devido a uma atualização da store (mas não quando é executado durante a renderização). Quando ocorre um erro, o componente será forçado a renderizar, momento em que o secletor é executado novamente. Isso funciona contanto que o selector seja uma função pura e você não dependa dos erros de lançamento do selector.

Se você preferir lidar com este problema sozinho, aqui estão algumas opções possíveis para evitar esses problemas juntamente com `useSelector()`:

- Não confie em props em sua função selector para extrair dados
- Nos casos em que você depende de props em sua função selector _e_ esses props podem mudar ao longo do tempo, _ou_ os dados que você está extraindo podem ser baseados em itens que podem ser excluídos, tente escrever as funções selector defensivamente. Não vá direto para `state.todos[props.id].name` - leia `state.todos[props.id]` primeiro e verifique se ele existe antes de tentar ler `todo.name`.
- Como `connect` adiciona a `Subscription` necessária ao provedor de context e atrasa a avaliação das assinaturas filhas até que o componente conectado seja renderizado novamente, colocar um componente conectado na árvore de componentes logo acima do componente usando `useSelector` irá prevenir esses problemas, pois desde que o componente conectado seja renderizado novamente devido à mesma atualização de armazenamento do componente hooks.

> **Note**: For a longer description of this issue, see ["Stale props and zombie children in Redux" by Kai Hao](https://kaihao.dev/posts/Stale-props-and-zombie-children-in-Redux), [this chat log that describes the problems in more detail](https://gist.github.com/markerikson/faac6ae4aca7b82a058e13216a7888ec), and [issue #1179](https://github.com/reduxjs/react-redux/issues/1179).
> **Observação**: para obter uma descrição mais detalhada desse problema, consulte ["Props obsoletas e zombie children em Redux" por Kai Hao](https://kaihao.dev/posts/Stale-props-and-zombie-children-in-Redux), [este log de bate-papo que descreve os problemas com mais detalhes](https://gist.github.com/markerikson/faac6ae4aca7b82a058e13216a7888ec) e a [issue #1179](https://github.com/reduxjs/react-redux/issues/1179).

### Desempenho

Como mencionado anteriormente, por padrão `useSelector()` fará uma comparação de igualdade de referência do valor selecionado ao executar a função selector após uma action ser despachada, e só fará com que o componente seja renderizado novamente se o valor selecionado for alterado. No entanto, ao contrário de `connect()`, `useSelector()` não evita que o componente seja renderizado novamente devido à sua re-renderização pai, mesmo se os props do componente não mudaram.

Se mais otimizações de desempenho forem necessárias, você pode considerar envolver seu componente de função com `React.memo()`:

```jsx
const CounterComponent = ({ name }) => {
  const counter = useSelector(state => state.counter)
  return (
    <div>
      {name}: {counter}
    </div>
  )
}

export const MemoizedCounterComponent = React.memo(CounterComponent)
```

## Receita de Hooks

Nós reduzimos nossa API de hooks da versão alfa original, focando em um conjunto mínimo de primitivas de API. No entanto, você ainda pode querer usar algumas das abordagens que tentamos em seus próprios aplicativos. Esses exemplos devem estar prontos para copiar e colar em sua própria base de código.

### Receita: `useActions()`

Este hook estava em nossa versão alfa original, mas foi removido em `v7.1.0-alpha.4`, com base na [sugestão de Dan Abramov](https://github.com/reduxjs/react-redux/issues/1252#issuecomment-488160930).
Essa sugestão foi baseada em "binding action creators" não sendo tão úteis em um caso de uso baseado em hooks, e causando muita sobrecarga conceitual e complexidade sintática.

You should probably prefer to call the [`useDispatch`](#usedispatch) hook in your components to retrieve a reference to `dispatch`, and manually call `dispatch(someActionCreator())` in callbacks and effects as needed. You may also use the Redux [`bindActionCreators`](https://redux.js.org/api/bindactioncreators) function in your own code to bind action creators, or "manually" bind them like `const boundAddTodo = (text) => dispatch(addTodo(text))`.

However, if you'd like to still use this hook yourself, here's a copy-pastable version that supports passing in action
creators as a single function, an array, or an object.

```js
import { bindActionCreators } from 'redux'
import { useDispatch } from 'react-redux'
import { useMemo } from 'react'

export function useActions(actions, deps) {
  const dispatch = useDispatch()
  return useMemo(
    () => {
      if (Array.isArray(actions)) {
        return actions.map(a => bindActionCreators(a, dispatch))
      }
      return bindActionCreators(actions, dispatch)
    },
    deps ? [dispatch, ...deps] : [dispatch]
  )
}
```

Este hook estava em nossa versão alfa original, mas foi removido em `v7.1.0-alpha.4`, com base na [sugestão de Dan Abramov](https://github.com/reduxjs/react-redux/issues/1252#issuecomment-488160930).
Essa sugestão foi baseada em "binding action creators" não sendo tão úteis em um caso de uso baseado em hooks, e causando muita sobrecarga conceitual e complexidade sintática.

Você provavelmente deve preferir chamar o hook [`useDispatch`](#usedispatch) em seus componentes para recuperar uma referência a `dispatch`, e chamar manualmente `dispatch (someActionCreator())` em callbacks e efeitos conforme necessário. Você também pode usar a função Redux [`bindActionCreators`](https://redux.js.org/api/bindactioncreators) em seu próprio código para vincular action creators, ou vinculá-los "manualmente" como `const boundAddTodo = (text) => dispatch(addTodo(text)) `.

No entanto, se você ainda quiser usar esse hook, aqui está uma versão que pode ser copiada e colada, que suporta a passagem de action creators como uma única função, um array ou um objeto.

```js
import { bindActionCreators } from 'redux'
import { useDispatch } from 'react-redux'
import { useMemo } from 'react'

export function useActions(actions, deps) {
  const dispatch = useDispatch()
  return useMemo(
    () => {
      if (Array.isArray(actions)) {
        return actions.map(a => bindActionCreators(a, dispatch))
      }
      return bindActionCreators(actions, dispatch)
    },
    deps ? [dispatch, ...deps] : [dispatch]
  )
}
```

### Recipe: `useShallowEqualSelector()`

```js
import { useSelector, shallowEqual } from 'react-redux'

export function useShallowEqualSelector(selector) {
  return useSelector(selector, shallowEqual)
}
```
### Considerações adicionais ao usar hooks

Existem algumas compensações arquitetônicas a serem levadas em consideração ao decidir se usará hooks ou não. Mark Erikson resume isso muito bem em suas duas postagens de blog [Thoughts on React Hooks, Redux e Separation of Concerns](https://blog.isquaredsoftware.com/2019/07/blogged-answers-thoughts-on-hooks/) e [Hooks, HOCs e Tradeoffs](https://blog.isquaredsoftware.com/2019/09/presentation-hooks-hocs-tradeoffs/).
