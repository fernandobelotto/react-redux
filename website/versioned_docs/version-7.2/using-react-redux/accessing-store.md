---
id: accessing-store
title: Acessando a store
hide_title: true
sidebar_label: Acessando a store
---

# Acessando a store

React Redux fornece APIs que permitem que seus componentes despachem actions e assinem atualizações de dados da store.

Como parte disso, o React Redux abstrai os detalhes de qual store você está usando e os detalhes exatos de como essa interação
com a store é tratada. No uso normal, seus próprios componentes nunca devem se preocupar com esses detalhes, e
nunca fará referência à store diretamente. React Redux também lida internamente com os detalhes de como a store e o estado são
propagado para os componentes conectados, para que funcione conforme o esperado por padrão.

No entanto, pode haver certos casos de uso em que você pode precisar personalizar como o armazenamento e o estado são propagados para
componentes conectados ou acessar a store diretamente. Aqui estão alguns exemplos de como fazer isso.

## Usando o hook `useStore`

O [hook `useStore`](../api/hooks.md#useStore) retorna a instância de store atual do `ReactReduxContext` padrão. Se você realmente precisa acessar a store, esta é a abordagem recomendada.

## Compreendendo o uso do Context

Internamente, o React Redux usa o [recurso de "context" do React](https://reactjs.org/docs/context.html) para fazer o
Redux store acessível para componentes conectados profundamente aninhados. A partir do React Redux versão 6, isso normalmente é tratado
por uma única instância do objeto de context padrão gerado por `React.createContext()`, chamado `ReactReduxContext`.

O componente `<Provider>` do React Redux usa `<ReactReduxContext.Provider>` para colocar a Redux store e o estado atual da store no context, e `connect` usa` <ReactReduxContext.Consumer>` para ler esses valores e lidar com as atualizações.

## Fornecendo um Context personalizado

Em vez de usar a instância de contexto padrão do React Redux, você pode fornecer sua própria instância de context personalizada.

```js
<Provider context={MyContext} store={store}>
  <App />
</Provider>
```
Se você fornecer um context personalizado, o React Redux usará essa instância de context em vez daquela que ele cria e exporta por padrão.

Depois de fornecer o contexto personalizado para `<Provider />`, você precisará fornecer esta instância de context para todos os seus componentes conectados que devem se conectar à mesma store:

```js
// Você pode passar o context como uma opção para connect
export default connect(
  mapState,
  mapDispatch,
  null,
  { context: MyContext }
)(MyComponent)

// ou ligue a conexão normalmente para começar
const ConnectedComponent = connect(
  mapState,
  mapDispatch
)(MyComponent)

// Posteriormente, passe o context personalizado como um suporte para o componente conectado
<ConnectedComponent context={MyContext} />
```
O seguinte erro de tempo de execução ocorre quando o React Redux não encontra uma store no context que está procurando. Por exemplo:

- Você forneceu uma instância de context personalizado para `<Provider />`, mas não forneceu a mesma instância (ou não forneceu nenhuma) para seus componentes conectados.
- Você forneceu um context personalizado para seu componente conectado, mas não forneceu a mesma instância (ou não forneceu nenhuma) para `<Provider />`.

> Invariant Violation
>
> Could not find "store" in the context of "Connect(MyComponent)". Either wrap the root component in a `<Provider>`, or pass a custom React context provider to `<Provider>` and the corresponding React context consumer to Connect(Todo) in connect options.

## Multiplas Stores

[Redux foi projetado para usar uma única store](https://redux.js.org/api/store#a-note-for-flux-users).
No entanto, se você está em uma posição inevitável de precisar usar várias stores, com a v6, você pode fazer isso fornecendo (vários) contexts personalizados.
Isso também fornece um isolamento natural das stores, pois elas vivem em instâncias de contexto separadas.

```js
// um exemplo ingênuo
const ContextA = React.createContext();
const ContextB = React.createContext();

// assumindo que reducerA e reducerB são funções reducers adequadas
const storeA = createStore(reducerA);
const storeB = createStore(reducerB);

// fornece as instâncias de context para o Provider
function App() {
  return (
    <Provider store={storeA} context={ContextA} />
      <Provider store={storeB} context={ContextB}>
        <RootModule />
      </Provider>
    </Provider>
  );
}

// busca a store correspondente com componentes conectados
// você precisa usar o context correto
connect(mapStateA, null, null, { context: ContextA })(MyComponentA)

// Você também pode passar a instância de context alternativo diretamente para o componente conectado
<ConnectedMyComponentA context={ContextA} />

// é possível usar connect() em cadeia
// neste caso, MyComponent receberá props mesclados de ambas as stores
compose(
  connect(mapStateA, null, null, { context: ContextA }),
  connect(mapStateB, null, null, { context: ContextB })
)(MyComponent);
```

## Usando `ReactReduxContext` diretamente

Em casos raros, você pode precisar acessar a store Redux diretamente em seus próprios componentes. Isso pode ser feito renderizando
o consumidor de context apropriado, e acessando o campo `store` fora do valor de context.

> **Nota**: Isso **_não_ é considerado parte da API pública do React Redux e pode falhar sem aviso prévio**. Nós reconhecemos
> que a comunidade tem casos de uso onde isso é necessário e tentará possibilitar que os usuários criem
> funcionalidade em cima do React Redux, mas nosso uso específico de context é considerado um detalhe de implementação.
> Se você tiver casos de uso adicionais que não são suficientemente cobertos pelas APIs atuais, registre um problema para discutir
> possíveis melhorias de API.

```js
import { ReactReduxContext } from 'react-redux'

// em seu componente conectado
function MyConnectedComponent() {
  return (
    <ReactReduxContext.Consumer>
      {({ store }) => {
        // faça algo útil com a store, como passá-la para uma componente child
        // onde pode ser usado em métodos de lifecycle
      }}
    </ReactReduxContext.Consumer>
  )
}
```

## Recursos Adicionais

- Exemplo no CodeSandbox: [Um aplicativo de lista de leitura com tema usando uma store separada](https://codesandbox.io/s/92pm9n2kl4), implementado fornecendo (múltiplos) contexts personalizados.
- Assuntos relacionados:
  - [#1132: Update docs for using a different store key](https://github.com/reduxjs/react-redux/issues/1132)
  - [#1126: `<Provider>` misses state changes that occur between when its constructor runs and when it mounts](https://github.com/reduxjs/react-redux/issues/1126)
