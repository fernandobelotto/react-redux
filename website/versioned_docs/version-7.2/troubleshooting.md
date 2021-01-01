---
id: troubleshooting
title: Solução de problemas
sidebar_label: Solução de problemas
hide_title: true
---

## Solução de problemas

Certifique-se de verificar a seção [Solução de problemas do Redux](https://redux.js.org/troubleshooting) primeiro.

### Estou recebendo o seguinte alerta: O acesso a PropTypes por meio do pacote React principal está obsoleto. Use o pacote prop-types do npm.

Este aviso é mostrado ao usar o react 15.5. \ *. Basicamente, agora é apenas um aviso, mas no react16 o aplicativo pode falhar. os PropTypes agora devem ser importados do pacote 'prop-types', e não do pacote react.

Atualize para a versão mais recente do react-redux.

### Minhas views não estão atualizando!

Veja o link acima.
Em resumo,

- Os redutores nunca devem sofrer mutação, eles devem retornar novos objetos ou o React Redux não verá as atualizações.
- Certifique-se de ligar os action creators com o argumento `mapDispatchToProps` para a função `connect()` ou com o método `bindActionCreators() `, ou que você chame manualmente `dispatch()`. Apenas chamar sua função `MyActionCreators.addTodo ()` não funcionará porque ela apenas _retorna_ uma action, mas não achama _dispatch_.

### Minhas views não estão atualizando na mudança de rota com React Router 0.13

Se estiver usando o React Router 0.13, você pode [se topar com este problema](https://github.com/reduxjs/react-redux/issues/43). A solução é simples: sempre que você usar `<RouteHandler>` ou o `Handler` fornecido por `Router.run`, passe o estado do router para ele.

View raiz:

```jsx
Router.run(routes, Router.HistoryLocation, (Handler, routerState) => {
  // observe "routerState" aqui
  ReactDOM.render(
    <Provider store={store}>
      {/* observe "routerState" aqui */}
      <Handler routerState={routerState} />
    </Provider>,
    document.getElementById('root')
  )
})
```

View aninhada:

```js
render() {
  // Continue passando para baixo
  return <RouteHandler routerState={this.props.routerState} />
}
```

Convenientemente, isso dá aos seus componentes acesso ao estado do router!
Você também pode atualizar para React Router 1.0, que não deve ter esse problema. (Deixe-nos saber se isso acontecer!)

### Minhas views não estão atualizando quando algo muda fora do Redux

Se suas visualizações dependem do estado global ou [React “contexto”](http://facebook.github.io/react/docs/context.html), você pode descobrir que as views decoradas com `connect()` falharão ao atualizar.

> Isso ocorre porque `connect()` implementa [shouldComponentUpdate](https://facebook.github.io/react/docs/component-specs.html#updating-shouldcomponentupdate) por padrão, assumindo que seu componente produzirá os mesmos resultados dados as mesmas props e estado. Este é um conceito semelhante ao [PureRenderMixin](https://facebook.github.io/react/docs/pure-render-mixin.html) do React.

A _melhor_ solução para isso é ter certeza de que seus componentes são puros e passar qualquer estado externo a eles por meio de props. Isso garantirá que suas views não sejam renderizadas novamente, a menos que elas realmente precisem ser renderizadas novamente e isso irá acelerar muito seu aplicativo.

Se isso não for prático por algum motivo (por exemplo, se você estiver usando uma biblioteca que depende muito do contexto React), você pode passar a opção `pure: false` para a função `connect()`:

```js
function mapStateToProps(state) {
  return { todos: state.todos }
}

export default connect(
  mapStateToProps,
  null,
  null,
  {
    pure: false
  }
)(TodoApp)
```

Isso removerá a suposição de que `TodoApp` é puro e fará com que ele seja atualizado sempre que seu componente pai for renderizado. Observe que isso deixará seu aplicativo com menor desempenho, portanto, faça isso apenas se não tiver outra opção.

### Não foi possível encontrar "store" no contexto ou props

Se você tiver problemas de contexto,

1. [Certifique-se de não ter uma instância duplicada do React](https://medium.com/@dan_abramov/two-weird-tricks-that-fix-react-7cf9bbdef375) na sua página.
2. Certifique-se de não se esquecer de envolver sua raiz ou algum outro componente ancestral em [`<Provider>`](#provider-store).
3. Verifique se você está executando as versões mais recentes do React e do React Redux.

### Invariant Violation: addComponentAsRefTo(...): Only a ReactOwner can have refs. Isso geralmente significa que você está tentando adicionar uma referência a um componente que não tem um proprietário

Se você estiver usando o React para web, isso geralmente significa que você tem um [React duplicado](https://medium.com/@dan_abramov/two-weird-tricks-that-fix-react-7cf9bbdef375). Siga as instruções no link para corrigir isso.

### Estou recebendo um aviso sobre useLayoutEffect em meus testes de unidade

O ReactDOM emite este aviso se `useLayoutEffect` for usado "no servidor". O React Redux tenta contornar o problema detectando se ele está sendo executado dentro de um contexto de navegador. Jest, por padrão, define o ambiente do navegador o suficiente para que o React Redux pense que está sendo executado em um navegador, causando esses avisos.

Você pode evitar o aviso configurando o `@jest-environment` para um único arquivo de teste:

```jsx
// my.test.jsx
/**
 * @jest-environment node
 */
```

Ou configurando-o globalmente:

```js
// package.json
{
  "name": "my-project",
  "jest": {
    "testEnvironment": "node"
  }
}
```

Veja https://github.com/facebook/react/issues/14927#issuecomment-490426131
