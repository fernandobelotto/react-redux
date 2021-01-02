---
id: connect-mapdispatch
title: "Connect: Despachando Actions com mapDispatchToProps"
hide_title: true
sidebar_label: "Connect: Despachando Actions com mapDispatchToProps"
---

# Connect: Despachando Actions com `mapDispatchToProps`

Como o segundo argumento passado para `connect`,`mapDispatchToProps` é usado para despachar actions para a store.

`dispatch` é uma função da Redux store. Você chama `store.dispatch` para despachar uma ação.
Essa é a única maneira de acionar uma mudança de estado.

Com React Redux, seus componentes nunca acessam a store diretamente - `connect` faz isso por você.
O React Redux oferece duas maneiras de permitir que os componentes despachem actions:

- Por padrão, um componente conectado recebe `props.dispatch` e pode despachar actions por conta própria.
- `connect` pode aceitar um argumento chamado` mapDispatchToProps`, que permite criar funções que despacham quando chamadas, e passar essas funções como suportes para o seu componente.

As funções `mapDispatchToProps` são normalmente referidas como `mapDispatch` para abreviaçào, mas o nome da variável real usado pode ser o que você quiser.

## Abordagens para despacho

### Padrão: `dispatch` como um Prop

Se você não especificar o segundo argumento para `connect()`, seu componente receberá `dispatch` por padrão. Por exemplo:

```js
connect()(MyComponent)
// que é equivalente a
connect(
  null,
  null
)(MyComponent)

// ou
connect(mapStateToProps /** nenhum segundo argumento */)(MyComponent)
```

Uma vez que você conectou seu componente desta forma, ele recebe `props.dispatch`. Você pode usá-lo para despachar actions para a store.

```js
function Counter({ count, dispatch }) {
  return (
    <div>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
      <span>{count}</span>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>reset</button>
    </div>
  )
}
```

### Fornecendo um parâmetro `mapDispatchToProps`

Fornecer um `mapDispatchToProps` permite que você especifique quais actions seu componente pode precisar despachar. Ele permite que você forneça funções de despacho de actions como props. Portanto, em vez de chamar `props.dispatch (() => increment ())`, você pode chamar `props.increment ()` diretamente. Existem alguns motivos pelos quais você pode querer fazer isso.

#### Mais Declarativo

Primeiro, encapsular a lógica de despacho em função torna a implementação mais declarativa.
Despachar uma action e deixar a Redux store lidar com o fluxo de dados é _como_ implementar o comportamento, ao invés de _o que_ ele faz.

Um bom exemplo seria despachar uma ação quando um botão é clicado. Conectar o botão diretamente provavelmente não faz sentido conceitualmente, e nem mesmo ter a referência de botão `dispatch`.

```js
// botão precisa ter conhecimento da "dispatch"
<button onClick={() => dispatch({ type: "SOMETHING" })} />

// botão sem conhecer "dispatch",
<button onClick={doSomething} />
```
Depois de envolver todos os nossos action creators com funções que despacham as actions, o componente está livre da necessidade de `dispatch`.
Portanto, **se você definir seu próprio `mapDispatchToProps`, o componente conectado não receberá mais` dispatch`.**

#### Passar Lógica de Despacho de action para Componentes Filhos (Desconectados)

Além disso, você também ganha a capacidade de passar as funções de despacho de actions para componentes filhos (provavelmente não conectados).
Isso permite que mais componentes despachem acions, mantendo-os "inconscientes" do Redux.

```jsx
// passa toggleTodo para o componente filho
// tornando Todo capaz de despachar a action toggleTodo
const TodoList = ({ todos, toggleTodo }) => (
  <div>
    {todos.map(todo => (
      <Todo todo={todo} onClick={toggleTodo} />
    ))}
  </div>
)
```
Isso é o que o `connect` do React Redux faz - ele encapsula a lógica de falar com a store do Redux e permite que você não se preocupe com isso. E é disso que você deve fazer uso total em sua implementação.

## Duas formas de `mapDispatchToProps`

O parâmetro `mapDispatchToProps` pode ser de duas formas. Enquanto o forma de função permite mais personalização, a forma de objeto é mais fácil de usar.

- **Forma de função**: permite mais personalização, ganha acesso a `dispatch` e, opcionalmente,` ownProps`
- **Forma abreviada de objeto**: Mais declarativo e fácil de usar

> ⭐ **Nota:** Recomendamos usar a forma de objeto de `mapDispatchToProps`, a menos que você precise personalizar especificamente o comportamento da dispatch de alguma forma.

## Definindo `mapDispatchToProps` como uma função

Definir `mapDispatchToProps` como uma função oferece mais flexibilidade para personalizar as funções que seu componente recebe e como elas despacham as actions.
Você ganha acesso a `dispatch` e `ownProps`.
Você pode usar esta oportunidade para escrever funções personalizadas para serem chamadas por seus componentes conectados.

### Argumentos

1. **`dispatch`**
2. **`ownProps` (opicional)**

**`dispatch`**

A função `mapDispatchToProps` será chamada com `dispatch` como o primeiro argumento.
Você normalmente fará uso disso retornando novas funções que chamam `dispatch()` dentro de si mesmas, e passam um objecto de action simples diretamente ou passam o resultado de um action creator.

```js
const mapDispatchToProps = dispatch => {
  return {
    // despachando ações simples
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' }),
    reset: () => dispatch({ type: 'RESET' })
  }
}
```
Provavelmente, você também desejará encaminhar argumentos para seus action creators:

```js
const mapDispatchToProps = dispatch => {
  return {
    // encaminhando argumentos explicitamente
    onClick: event => dispatch(trackClick(event)),

    // encaminhando argumentos implicitamente
    onReceiveImpressions: (...impressions) =>
      dispatch(trackImpressions(impressions))
  }
}
```

**`ownProps` ( opicional )**

Se sua função `mapDispatchToProps` for declarada como tendo dois parâmetros, ela será chamada com `dispatch` como o primeiro parâmetro e `props` passado para o componente conectado como o segundo parâmetro, e será novamente invocado sempre que o componente conectado recebe novos props.

Isso significa que, em vez de vincular novamente os novos `props` aos despachantes de actions após a re-renderização do componente, você pode fazer isso quando os `props` do seu componente mudarem.

**Vincula-se à montagem do componente**

```js
render() {
  return <button onClick={() => this.props.toggleTodo(this.props.todoId)} />
}

const mapDispatchToProps = dispatch => {
  return {
    toggleTodo: todoId => dispatch(toggleTodo(todoId))
  }
}
```
**Vincula-se à mudança de `props`**

```js
render() {
  return <button onClick={() => this.props.toggleTodo()} />
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleTodo: () => dispatch(toggleTodo(ownProps.todoId))
  }
}
```

### Retorna

Sua função `mapDispatchToProps` deve retornar um objeto simples:

- Cada campo no objeto se tornará uma prop separada para seu próprio componente e o valor normalmente deve ser uma função que despacha uma action quando chamada.
- Se você usar action creators (em oposição a objetos de action simples) dentro de `dispatch`, é uma convenção simplesmente nomear a chave de campo com o mesmo nome do action creator:

```js
const increment = () => ({ type: 'INCREMENT' })
const decrement = () => ({ type: 'DECREMENT' })
const reset = () => ({ type: 'RESET' })

const mapDispatchToProps = dispatch => {
  return {
    // despachando ações retornadas pelos action creators
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    reset: () => dispatch(reset())
  }
}
```
O retorno da função `mapDispatchToProps` será mesclado ao seu componente conectado como props. Você pode chamá-los diretamente para despachar sua action.

```js
function Counter({ count, increment, decrement, reset }) {
  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{count}</span>
      <button onClick={increment}>+</button>
      <button onClick={reset}>reset</button>
    </div>
  )
}
```
(O código completo do exemplo do contador esta [neste CodeSandbox](https://codesandbox.io/s/yv6kqo1yw9))

### Definindo a função `mapDispatchToProps` com` bindActionCreators`

Envolver essas funções manualmente é entediante, então Redux fornece uma função para simplificar isso.

> `bindActionCreators` turns an object whose values are [action creators](https://redux.js.org/glossary#action-creator), into an object with the same keys, but with every action creator wrapped into a [`dispatch`](https://redux.js.org/api/store#dispatch) call so they may be invoked directly. See [Redux Docs on `bindActionCreators`](https://redux.js.org/api/bindactioncreators)
> `bindActionCreators` transforma um objeto cujos valores são [action creators](https://redux.js.org/glossary#action-creator), em um objeto com as mesmas chaves, mas com cada action creator envolvido em um [`dispatch`](https://redux.js.org/api/store#dispatch) chamada para que eles possam ser chamados diretamente. Veja [`bindActionCreators` no Docs do Redux](https://redux.js.org/api/bindactioncreators)

`bindActionCreators` aceita dois parâmetros:

1. Uma **`função`** (um action creator) ou um **`objeto`** (cada campo um action creator)
2. `dispatch`

As funções wrapper geradas por `bindActionCreators` irão encaminhar automaticamente todos os seus argumentos, então você não precisa fazer isso manualmente.

```js
import { bindActionCreators } from 'redux'

const increment = () => ({ type: 'INCREMENT' })
const decrement = () => ({ type: 'DECREMENT' })
const reset = () => ({ type: 'RESET' })

// liga um action creator
// retorna (...args) => dispatch(increment(...args))
const boundIncrement = bindActionCreators(increment, dispatch)

// liga um objeto cheio de action creators
const boundActionCreators = bindActionCreators(
  { increment, decrement, reset },
  dispatch
)
// retorna
// {
//   increment: (...args) => dispatch(increment(...args)),
//   decrement: (...args) => dispatch(decrement(...args)),
//   reset: (...args) => dispatch(reset(...args)),
// }
```

Para usar `bindActionCreators` em nossa função` mapDispatchToProps`:

```js
import { bindActionCreators } from 'redux'
// ...

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ increment, decrement, reset }, dispatch)
}

// componente recebe props.increment, props.decrement, props.reset
connect(
  null,
  mapDispatchToProps
)(Counter)
```
### Injetando `dispatch` manualmente

Se o argumento `mapDispatchToProps` for fornecido, o componente não receberá mais o` dispatch` padrão. Você pode trazê-lo de volta adicionando-o manualmente ao retorno de seu `mapDispatchToProps`, embora na maioria das vezes você não precise fazer isso:

```js
import { bindActionCreators } from 'redux'
// ...

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    ...bindActionCreators({ increment, decrement, reset }, dispatch)
  }
}
```

## Definindo `mapDispatchToProps` como um objeto

Você viu que a configuração para despachar action em um componente React segue um processo muito semelhante: definir um action creator, envolvê-lo em outra função que se pareça com `(…args) => dispatch(actionCreator(…args))` e passe essa função como uma prop para seu componente.

Por isso ser tão comum, `connect` suporta uma forma “abreviada de objeto”para o argumento `mapDispatchToProps`: se você passar um objeto cheio de action creators em vez de uma função, `connect` irá automaticamente chamar `bindActionCreators` para você internamente.

**Recomendamos sempre usar a forma “abreviada de objeto” de `mapDispatchToProps`, a menos que você tenha um motivo específico para personalizar o comportamento de despacho.**

Observe que:

- Cada campo do objeto `mapDispatchToProps` é considerado um action creator
- Seu componente não receberá mais `dispatch` como prop

```js
// React Redux faz isso para você automaticamente:
dispatch => bindActionCreators(mapDispatchToProps, dispatch)
```

Portanto, nosso `mapDispatchToProps` pode ser simplesmente:

```js
const mapDispatchToProps = {
  increment,
  decrement,
  reset
}
```
Uma vez que o nome real da variável depende de você, você pode querer dar a ela um nome como `actionCreators`, ou mesmo definir o objeto inline na chamada para` connect`:

```js
import {increment, decrement, reset} from "./counterActions";

const actionCreators = {
  increment,
  decrement,
  reset
}

export default connect(mapState, actionCreators)(Counter);

// ou
export default connect(
  mapState,
  { increment, decrement, reset }
)(Counter);
```
## Problemas comuns

### Por que meu componente não está recebendo `dispatch`?

Também conhecido como

```js
TypeError: this.props.dispatch is not a function
```
Este é um erro comum que acontece quando você tenta chamar `this.props.dispatch`, mas `dispatch` não é injetado em seu componente.

`dispatch` é injetado em seu componente _somente_ quando:

**1. Você não fornece `mapDispatchToProps`**

O `mapDispatchToProps` padrão é simplesmente `dispatch => ({dispatch}) `. Se você não fornecer `mapDispatchToProps`, `dispatch` será fornecido conforme mencionado acima.

Em outras palavras, se você:

```js
// componente recebe `dispatch`
connect(mapStateToProps /** nenhum segundo argumento*/)(Component)
```

**2. Seu retorno de função `mapDispatchToProps` personalizado contém especificamente `dispatch`**

Você pode trazer de volta `dispatch` fornecendo sua função `mapDispatchToProps` personalizada:

```js
const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    reset: () => dispatch(reset()),
    dispatch
  }
}
```
Ou, alternativamente, com `bindActionCreators`:

```js
import { bindActionCreators } from 'redux'

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    ...bindActionCreators({ increment, decrement, reset }, dispatch)
  }
}
```

Veja [esse erro em ação no issue #255 no Github do Redux’s GitHub](https://github.com/reduxjs/react-redux/issues/255).

Há discussões sobre se fornecer `dispatch` para seus componentes quando você especifica `mapDispatchToProps` ( [Dan Abramov’s response to #255](https://github.com/reduxjs/react-redux/issues/255#issuecomment-172089874) ). Você pode lê-los para uma melhor compreensão da intenção de implementação atual.

### Posso `mapDispatchToProps` sem `mapStateToProps` no Redux?

Sim. Você pode pular o primeiro parâmetro passando `undefined` ou` null`. Seu componente não assinará a store, e ainda receberá os props de despacho definidos por `mapDispatchToProps`.

```js
connect(
  null,
  mapDispatchToProps
)(MyComponent)
```

### Posso chamar `store.dispatch`?

É fora de padrão interagir com a store diretamente em um componente React, seja uma importação explícita da store ou acessando-a via contexto ( consulte [Redux FAQ entry on store setup](https://redux.js.org/faq/storesetup#can-or-should-i-create-multiple-stores-can-i-import-my-store-directly-and-use-it-in-components-myself) para obter mais detalhes). Deixe o `connect` do React Redux lidar com o acesso à store e usae o `dispatch` que ele passa como props para despachar as actions.

## Links e referências

**Tutoriais**

- [You Might Not Need the `mapDispatchToProps` Function](https://daveceddia.com/redux-mapdispatchtoprops-object-form/)

**Documentos relacionados**

- [Redux Doc on `bindActionCreators`](https://redux.js.org/api/bindactioncreators)

**Perguntas e Respostas**

- [How to get simple dispatch from `this.props` using connect with Redux?](https://stackoverflow.com/questions/34458261/how-to-get-simple-dispatch-from-this-props-using-connect-w-redux)
- [`this.props.dispatch` is `undefined` if using `mapDispatchToProps`](https://github.com/reduxjs/react-redux/issues/255)
- [Do not call `store.dispatch`, call `this.props.dispatch` injected by `connect` instead](https://github.com/reduxjs/redux/issues/916)
- [Can I `mapDispatchToProps` without `mapStateToProps` in Redux?](https://stackoverflow.com/questions/47657365/can-i-mapdispatchtoprops-without-mapstatetoprops-in-redux)
- [Redux Doc FAQ: React Redux](https://redux.js.org/faq/reactredux)
