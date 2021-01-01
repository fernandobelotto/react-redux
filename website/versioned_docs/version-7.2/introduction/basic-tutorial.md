---
id: basic-tutorial
title: Tutorial Básico
hide_title: true
sidebar_label: Tutorial Básico
---

# Tutorial Básico

Para ver como usar o React Redux na prática, mostraremos um exemplo passo a passo criando um aplicativo de lista de tarefas.

## Um exemplo de lista de tarefas

**Pule para**

- 🤞 [Apenas me mostre o código](https://codesandbox.io/s/9on71rvnyo)
- 👆 [Fornecendo a store](#providing-the-store)
- ✌️ [Conectando o Componente](#connecting-the-components)

**Os componentes da UI do React**

Implementamos nossos componentes React UI da seguinte maneira:

- `TodoApp` é o componente de entrada para nosso aplicativo. Ele renderiza os header e os componentes `AddTodo`, `TodoList`, e `VisibilityFilters`.
- `AddTodo` é o componente que permite ao usuário inserir um item de tarefa e adicioná-lo à lista ao clicar no botão “Add todo”:
  - Ele usa uma input controlado que define o estado após `onChange`.
  - Quando o usuário clica no botão “Add Todo”, ele despacha a action (que iremos fornecer usando React Redux) para adicionar a tarefa à store.
- `TodoList` é o componente que renderiza a lista de tarefas:
  - Ele renderiza a lista filtrada de tarefas quando um dos `VisibilityFilters`(filtros de visibilidade) é selecionado.
- `Todo` é o componente que renderiza um único item de tarefa:
  - Ele renderiza o conteúdo de tarefas e mostra que uma tarefa foi concluída fazendo um risco.
  - Ele despacha a action para alternar o status completo da tarefa após `onClick`.
- `VisibilityFilters` renderiza um conjunto simples de filtros: _all_, _completed_ e _incomplete._ Clicar em cada um deles filtra as tarefas:
  - Aceita uma prop `activeFilter` do pai que indica qual filtro está selecionado atualmente pelo usuário. Um filtro ativo é renderizado com um sublinhado.
  - Ele despacha a action `setFilter` para atualizar o filtro selecionado.
- `constantes` contém os dados constantes para nosso aplicativo.
- E, finalmente, `index` renderiza nosso aplicativo para o DOM.

<br />

**A Redux Store**

A parte Redux do aplicativo foi configurada usando os [padrões recomendados na documentação do Redux](https://redux.js.org):

- Store
  - `todos`: um reducer normalizado de tarefas. Ele contém um mapa `byIds` de todos as tarefas e um `allIds` que contém a lista de todos os ids.
  - `visibilityFilters`: A simple string `all`, `completed`, or `incomplete`.
- Action Creators
  - `addTodo` cria a action para adicionar tarefas. Ele pega uma única variável de string `content` e retorna uma action `ADD_TODO` com `payload` contendo um `id` e um `content` auto-incrementado
  - `toggleTodo` cria a action para alternar tarefas. Leva um único número variável `id` e retorna uma action `TOGGLE_TODO` com `payload` contendo apenas `id`
  - `setFilter` cria a action para definir o filtro ativo do aplicativo. Ele pega uma única variável de string `filter` e retorna uma action `SET_FILTER` com `payload` contendo o próprio `filter`
- Reducers
  - O reducer `todos`
    - Acrescenta o `id` ao campo `allIds` e define a tarefa dentro do campo `byIds` ao receber a action `ADD_TODO`
    - Alterna o campo `completed` para a tarefa ao receber a action `TOGGLE_TODO`
  - O reducer `visibilityFilters` define sua fatia de armazenamento para o novo filtro que recebe o payload da action `SET_FILTER`
- Action Types
  - Usamos um arquivo `actionTypes.js` para manter as constantes dos actions types a serem reutilizados
- Selectors
  - `getTodoList` retorna a lista `allIds` da store `todos`
  - `getTodoById` acha a tarefa na store dado um `id`
  - `getTodos` é um pouco mais complexo. Ele pega todos os `id`s de` allIds`, encontra cada tarefa em `byIds` e retorna o array final de tarefas.
  - `getTodosByVisibilityFilter` filtra as tarefas de acordo com o filtro de visibilidade

Você pode verificar [este CodeSandbox](https://codesandbox.io/s/6vwyqrpqk3) para o código-fonte dos componentes UI e a Redux store desconectada descrita acima.

<br />

Vamos agora mostrar como conectar esta store ao nosso aplicativo usando React Redux.

### Fornecendo a Store

Primeiro, precisamos disponibilizar a `store` para nosso aplicativo. Para fazer isso, envolvemos nosso aplicativo com a API `<Provider />` fornecida pelo React Redux.

```jsx
// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import TodoApp from './TodoApp'

import { Provider } from 'react-redux'
import store from './redux/store'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  rootElement
)
```

Observe como nosso `<TodoApp />` agora está envolvido com o `<Provider />` com `store` passado como um prop.

![](https://i.imgur.com/LV0XvwA.png)

### Conectando os componentes

React Redux fornece uma função `connect` para você ler os valores da store Redux (e reler os valores quando a store for atualizada).

A função `connect` leva dois argumentos, ambos opcionais:

- `mapStateToProps`: chamado toda vez que o estado da store muda. Ele recebe todo o estado da store e deve retornar um objeto de dados de que esse componente precisa.

- `mapDispatchToProps`: este parâmetro pode ser uma função ou um objeto.
  - Se for uma função, será chamada uma vez na criação do componente. Ele receberá `dispatch` como um argumento e deve retornar um objeto cheio de funções que usam `dispatch` para despachar actions.
  - Se for um objeto cheio de action creators, cada action creator será transformado em uma função prop que despacha automaticamente sua action quando chamada. **Nota**: Recomendamos o uso deste forma de “abreviação de objeto”.

Normalmente, você chamará `connect` desta forma:

```js
const mapStateToProps = (state, ownProps) => ({
  // ... dados calculados do estado e opcionalmente ownProps
})

const mapDispatchToProps = {
  // ... normalmente é um objeto cheio de action creators
}

// `connect` retorna uma nova função que aceita o componente para envolver:
const connectToStore = connect(
  mapStateToProps,
  mapDispatchToProps
)
// e essa função retorna o componente envolvido conectado:
const ConnectedComponent = connectToStore(Component)

// Normalmente fazemos ambos em uma etapa, assim:
connect(
  mapStateToProps,
  mapDispatchToProps
)(Component)
```

Vamos trabalhar no `<AddTodo />` primeiro. Ele precisa acionar mudanças na `store` para adicionar novas tarefas. Portanto, ele precisa ser capaz de `despachar` actions para a store. É assim que fazemos.

Nosso action creator `addTodo` se parece com isto:

```js
// redux/actions.js
import { ADD_TODO } from './actionTypes'

let nextTodoId = 0
export const addTodo = content => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content
  }
})

// ... outras action
```

Ao passá-lo para `connect`, nosso componente o recebe como prop e irá despachar automaticamente a action quando for chamado.

```js
// components/AddTodo.js

// ... outras importações
import { connect } from 'react-redux'
import { addTodo } from '../redux/actions'

class AddTodo extends React.Component {
  // ... implementação de componente
}

export default connect(
  null,
  { addTodo }
)(AddTodo)
```
Observe agora que `<AddTodo />` é envolvido com um componente pai chamado `<Connect(AddTodo) />`. Enquanto isso, `<AddTodo />` agora ganha uma prop: a action `addTodo`.

![](https://i.imgur.com/u6aXbwl.png)

Também precisamos implementar a função `handleAddTodo` para deixá-la despachar a action `addTodo` e redefinir a entrada

```jsx
// components/AddTodo.js

import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../redux/actions'

class AddTodo extends React.Component {
  // ...

  handleAddTodo = () => {
    // despacha uma action para adicionar uma tarefa
    this.props.addTodo(this.state.input)

    // define o estado de volta para uma string vazia
    this.setState({ input: '' })
  }

  render() {
    return (
      <div>
        <input
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
        />
        <button className="add-todo" onClick={this.handleAddTodo}>
          Add Todo
        </button>
      </div>
    )
  }
}

export default connect(
  null,
  { addTodo }
)(AddTodo)
```
Agora nosso `<AddTodo />` está conectado à store. Quando adicionamos uma tarefa, ele despacha uma action para alterar a store. Não o vemos no aplicativo porque os outros componentes ainda não estão conectados. Se você tiver a extensão Redux DevTools conectada, deverá ver a action sendo despachada:

![](https://i.imgur.com/kHvkqhI.png)

Você também deve ver que a store mudou de acordo:

![](https://i.imgur.com/yx27RVC.png)

The `<TodoList />` component is responsible for rendering the list of todos. Therefore, it needs to read data from the store. We enable it by calling `connect` with the `mapStateToProps` parameter, a function describing which part of the data we need from the store.

Our `<Todo />` component takes the todo item as props. We have this information from the `byIds` field of the `todos`. However, we also need the information from the `allIds` field of the store indicating which todos and in what order they should be rendered. Our `mapStateToProps` function may look like this:

O componente `<TodoList />` é responsável por renderizar a lista de tarefas. Portanto, ele precisa ler os dados da store. Nós o habilitamos chamando `connect` com o parâmetro `mapStateToProps`, uma função que descreve qual parte dos dados que precisamos do armazenamento.

Nosso componente `<Todo />` recebe o item tarefa como props. Temos essa informação no campo `byIds` do `todos`. No entanto, também precisamos das informações do campo `allIds` da store indicando quais tarefas e em que ordem eles devem ser processados. Nossa função `mapStateToProps` pode ter a seguinte aparência:

```js
// components/TodoList.js

// ...outras importações
import { connect } from "react-redux";

const TodoList = // ... Implementação do componente de UI

const mapStateToProps = state => {
  const { byIds, allIds } = state.todos || {};
  const todos =
    allIds && allIds.length
      ? allIds.map(id => (byIds ? { ...byIds[id], id } : null))
      : null;
  return { todos };
};

export default connect(mapStateToProps)(TodoList);
```

Felizmente, temos um selector que faz exatamente isso. Podemos simplesmente importar o selector e usá-lo aqui.

```js
// redux/selectors.js

export const getTodosState = store => store.todos

export const getTodoList = store =>
  getTodosState(store) ? getTodosState(store).allIds : []

export const getTodoById = (store, id) =>
  getTodosState(store) ? { ...getTodosState(store).byIds[id], id } : {}

export const getTodos = store =>
  getTodoList(store).map(id => getTodoById(store, id))
```

```js
// components/TodoList.js

// ...outras importações
import { connect } from "react-redux";
import { getTodos } from "../redux/selectors";

const TodoList = // ... Implementação do componente de UI

export default connect(state => ({ todos: getTodos(state) }))(TodoList);****
```
Recomendamos encapsular quaisquer pesquisas ou cálculos complexos de dados em funções selectors. Além disso, você pode otimizar ainda mais o desempenho usando [Reselect](https://github.com/reduxjs/reselect) para escrever selectors “memoizados” que podem pular trabalhos desnecessários. (Veja [a página Redux docs em Computing Derived Data](https://redux.js.org/recipes/computingderiveddata#sharing-selectors-across-multiple-components) e a postagem do blog [Idiomatic Redux: Usando selectors do Relesect para encapsulamento e desempenho]​​(https://blog.isquaredsoftware.com/2017/12/idiomatic-redux-using-reselect-selectors) para obter mais informações sobre por que e como usar as funções selectors.)

Agora que nosso `<TodoList />` está conectado à store. Ele deve receber a lista de tarefas, mapear sobre eles e passar cada tarefa para o componente `<Todo />`. `<Todo />`, por sua vez, os renderizará na tela. Agora tente adicionar uma tarefa. Deve aparecer na nossa lista de tarefas!

![](https://i.imgur.com/N68xvrG.png)

Vamos conectar mais componentes. Antes de fazermos isso, vamos fazer uma pausa e aprender um pouco mais sobre `connect` primeiro.

### Formas comuns de chamar `connect`

Dependendo dos tipos de componentes com os quais você está trabalhando, existem diferentes maneiras de chamar `connect`, com as mais comuns resumidas a seguir:

|                               | Não inscreve a Store                           |  inscreve a Store                                         |
| ----------------------------- | ---------------------------------------------- | --------------------------------------------------------- |
| Não injeta action creators    | `connect()(Component)`                         | `connect(mapStateToProps)(Component)`                     |
| Injeta action creators        | `connect(null, mapDispatchToProps)(Component)` | `connect(mapStateToProps, mapDispatchToProps)(Component)` |

#### Não assina a store e não injete action creators

Se você chamar `connect` sem fornecer nenhum argumento, seu componente irá:

- _não_ vai re-renderizar novamente quando a store mudar
- receber `props.dispatch` que você pode usar para despachar manualmente a ação

```js
// ... Componente
export default connect()(Component) // O componente receberá `dispatch` (assim como nosso <TodoList />!)
```

#### Assina a store e não injete action creators

Se você chamar `connect` apenas com `mapStateToProps`, seu componente irá:

- Assina os valores que `mapStateToProps` extrai da store e renderize novamente apenas quando esses valores forem alterados
- receba `props.dispatch` que você pode usar para despachar manualmente a action

```js
// ... Componente
const mapStateToProps = state => state.partOfState
export default connect(mapStateToProps)(Component)
```

#### Não assina a store e injete action creators

Se você chamar `connect` apenas com `mapDispatchToProps`, seu componente irá:

- _não_ renderizar novamente quando a store muda
- receba cada um dos action creator que você injeta com `mapDispatchToProps` como props e despacha automaticamente as actions ao serem chamadas

```js
import { addTodo } from './actionCreators'
// ... Component
export default connect(
  null,
  { addTodo }
)(Component)
```
#### Assina na store e injete os actions creators

Se você chamar `connect` com `mapStateToProps` e `mapDispatchToProps`, seu componente irá:

- inscreve os valores que `mapStateToProps` extrai da store e renderiza novamente apenas quando esses valores forem alterados
- receba todos os action creator que você injeta com `mapDispatchToProps` como props e despacha automaticamente as actions ao serem chamadas.

```js
import * as actionCreators from './actionCreators'
// ... Component
const mapStateToProps = state => state.partOfState
export default connect(
  mapStateToProps,
  actionCreators
)(Component)
```
Esses quatro casos cobrem os usos mais básicos de `connect`. Para ler mais sobre `connect`, continue lendo nossa [seção API](../api/connect.md) que explica em mais detalhes.

<!-- TODO: Put up link to the page that further explains connect -->

---

Agora vamos conectar o restante do nosso `<TodoApp />`.

Como devemos implementar a interação de alternar tarefas? Um leitor interessado já pode ter uma resposta. Se você configurou seu ambiente e o acompanhou até este ponto, agora é um bom momento para deixá-lo de lado e implementar o recurso por conta própria. Não seria nenhuma surpresa que conectamos nosso `<Todo />` para despachar `toggleTodo` de uma forma semelhante:

```js
// components/Todo.js

// ... outras importações
import { connect } from "react-redux";
import { toggleTodo } from "../redux/actions";

const Todo = // ... implementação do componente

export default connect(
  null,
  { toggleTodo }
)(Todo);
```

Agora, nossas tarefas podem ser alternadas para concluídas. Estamos quase lá!

![](https://i.imgur.com/4UBXYtj.png)

Finalmente, vamos implementar nosso recurso `VisibilityFilters`.

O componente `<VisibilityFilters />` precisa ser capaz de ler da store qual filtro está ativo no momento e despachar actions para a store. Portanto, precisamos passar um `mapStateToProps` e `mapDispatchToProps`. O `mapStateToProps` aqui pode ser um acessador simples do estado `visibilityFilter`. E o `mapDispatchToProps` conterá o action creator `setFilter`.

```js
// components/VisibilityFilters.js

// ... outras importações
import { connect } from "react-redux";
import { setFilter } from "../redux/actions";

const VisibilityFilters = // ... implementação do componente

const mapStateToProps = state => {
  return { activeFilter: state.visibilityFilter };
};
export default connect(
  mapStateToProps,
  { setFilter }
)(VisibilityFilters);
```

Enquanto isso, também precisamos atualizar nosso componente `<TodoList />` para filtrar todos de acordo com o filtro ativo. Anteriormente, o `mapStateToProps` que passamos para a chamada da função `<TodoList />` `connect` era simplesmente o selector que seleciona toda a lista de tarefas. Vamos escrever outro selector para ajudar a filtrar tarefas por seu status.

```js
// redux/selectors.js

// ... outros selectors
export const getTodosByVisibilityFilter = (store, visibilityFilter) => {
  const allTodos = getTodos(store)
  switch (visibilityFilter) {
    case VISIBILITY_FILTERS.COMPLETED:
      return allTodos.filter(todo => todo.completed)
    case VISIBILITY_FILTERS.INCOMPLETE:
      return allTodos.filter(todo => !todo.completed)
    case VISIBILITY_FILTERS.ALL:
    default:
      return allTodos
  }
}
```

E conectando-se à store com a ajuda do selector:

```js
// components/TodoList.js

// ...

const mapStateToProps = state => {
  const { visibilityFilter } = state
  const todos = getTodosByVisibilityFilter(state, visibilityFilter)
  return { todos }
}

export default connect(mapStateToProps)(TodoList)
```

Agora terminamos um exemplo muito simples de um aplicativo de tarefas com React Redux. Todos os nossos componentes estão conectados! Não é incrível? 🎉🎊

![](https://i.imgur.com/ONqer2R.png)

## Links

- [Uso com React](https://redux.js.org/basics/usage-with-react)
- [Usando as ligações React Redux](https://blog.isquaredsoftware.com/presentations/workshops/redux-fundamentals/react-redux.html)
- [Componentes de ordem superior a fundo](https://medium.com/@franleplant/react-higher-order-components-in-depth-cf9032ee6c3e)
- [Computando Dados Derivados](https://redux.js.org/recipes/computing-derived-data#sharing-selectors-across-multiple-components)
- [Redux idiomático: Usando Reselect Selectors para encapsulamento e desempenho](https://blog.isquaredsoftware.com/2017/12/idiomatic-redux-using-reselect-selectors/)

## Obtenha mais ajuda

- [Reactiflux](https://www.reactiflux.com) canal do Redux
- [StackOverflow](https://stackoverflow.com/questions/tagged/react-redux)
- [GitHub Issues](https://github.com/reduxjs/react-redux/issues/)
