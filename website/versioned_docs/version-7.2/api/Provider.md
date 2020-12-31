---
id: provider
title: Provider
sidebar_label: Provider
hide_title: true
---

# `Provider`

## Visão geral

O `<Provider />` torna a Redux `store` disponível para quaisquer componentes aninhados que foram agrupados na função`connect()`.

Como qualquer componente React em um aplicativo React Redux pode ser conectado, a maioria dos aplicativos renderizará um `<Provider>` no nível superior, com toda a árvore de componentes do aplicativo dentro dele.

Normalmente, você não pode usar um componente conectado, a menos que esteja aninhado dentro de um `<Provider>`.

### Props

`store` ([Redux Store](https://redux.js.org/api/store))
A única `store` do Redux em seu aplicativo.

`children` (ReactElement)
A raiz de sua hierarquia de componentes.

`context`
Você pode fornecer uma instância de contexto. Se fizer isso, você precisará fornecer a mesma instância de contexto para todos os seus componentes conectados também. A falha em fornecer o contexto correto resulta em erro de tempo de execução:

> Invariant Violation
>
> Could not find "store" in the context of "Connect(MyComponent)". Either wrap the root component in a `<Provider>`, or pass a custom React context provider to `<Provider>` and the corresponding React context consumer to Connect(Todo) in connect options.

**Nota:** Você não precisa fornecer contexto personalizado para acessar a store.
O React Redux exporta a instância de contexto que usa por padrão para que você possa acessar a store:

```js
import { ReactReduxContext } from 'react-redux'

// em seu componente conectado
render() {
  return (
    <ReactReduxContext.Consumer>
      {({ store }) => {
        // faça algo com a store aqui
      }}
    </ReactReduxContext.Consumer>
  )
}
```

### Exemplo de uso

No exemplo abaixo, o componente `<App />` é nosso componente de nível raiz. Isso significa que está no topo da nossa hierarquia de componentes.

**Exemplo com React Vanilla**

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import { App } from './App'
import createStore from './createReduxStore'

const store = createStore()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
```

**Uso com React Router**

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router-dom'

import { App } from './App'
import { Foo } from './Foo'
import { Bar } from './Bar'
import createStore from './createReduxStore'

const store = createStore()

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route exact path="/" component={App} />
      <Route path="/foo" component={Foo} />
      <Route path="/bar" component={Bar} />
    </Router>
  </Provider>,
  document.getElementById('root')
)
```
