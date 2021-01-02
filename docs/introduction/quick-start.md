---
id: quick-start
title: Começo rápido
hide_title: true
sidebar_label: Começo rápido
---

# Início rápido

[React Redux](https://github.com/reduxjs/react-redux) é a ligação oficial do [React](https://reactjs.org/) para o [Redux](https://redux.js.org/). Ele permite que seus componentes React leiam dados de uma Redux store e despache actions para a store para atualizar os dados.

## Instalação

React Redux 7.2 requer **React 16.8.3 ou mais atual.**

### Usando com o Create React App

A maneira recomendada de iniciar novos aplicativos com React Redux é usando o [template oficial Redux + JS](https://github.com/reduxjs/cra-template-redux) para [Create React App](https://github.com/facebook/create-react-app), que tira proveito da [Redux Toolkit](https://redux-toolkit.js.org/).

```sh
npx create-react-app my-app --template redux
```

### Com um App React Existente

Para usar o React Redux com seu aplicativo React, instale-o como uma dependência:

```bash
# Se você usa npm:
npm install react-redux

# Ou se você usa Yarn:
yarn add react-redux
```

Você também precisará [instalar o Redux](https://redux.js.org/introduction/installation) e [configurar uma Redux store](https://redux.js.org/recipes/configuring-your-store/) no seu aplicativo.

## `Provider`

React Redux disponibiliza o componente `<Provider />`, que torna a Redux store disponível para o resto dos seus componentes:

```js
import React from 'react'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import store from './store'

import App from './App'

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)
```

## `connect()`

React Redux disponibiliza a função `connect` para você conectar seu componente à store.

Normalmente, você chamará `connect` desta forma:

```js
import { connect } from 'react-redux'
import { increment, decrement, reset } from './actionCreators'

// const Counter = ...

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    counter: state.counter,
  }
}

const mapDispatchToProps = { increment, decrement, reset }

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
```

## Ajuda e discussão

O **[canadl #redux](https://discord.gg/0ZcbPKXt5bZ6au5t)** da **[Comunidade Reactiflux no Discord](http://www.reactiflux.com)** é nosso recurso oficial para todas as questões relacionadas ao aprendizado e ao uso do Redux. Reactiflux é um ótimo lugar para sair, fazer perguntas e aprender - junte-se a nós!

Você também pode fazer perguntas sobre [Stack Overflow](https://stackoverflow.com) usando a **[tag #redux](https://stackoverflow.com/questions/tagged/redux)**.
