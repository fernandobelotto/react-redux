---
id: connect-advanced
title: connectAdvanced
sidebar_label: connectAdvanced()
hide_title: true
---

# `connectAdvanced()`

```js
connectAdvanced(selectorFactory, connectOptions?)
```

Conecta um componente React a uma Redux store. É a base para `connect()`, mas é menos opinativo sobre como combinar `state`,` props` e `dispatch` em seus props finais. Ele não faz suposições sobre padrões ou memorização de resultados, deixando essas responsabilidades para quem chama-lá.

Ele não modifica a classe de componente transmitida a ele; em vez disso, ele _retorna_ uma nova classe de componente conectado para você usar.

A maioria dos aplicativos não precisará usar isso, já que o comportamento padrão em `connect` se destina a funcionar na maioria dos casos de uso.

> Nota: `connectAdvanced` foi adicionado na versão 5.0, e `connect` foi reimplementado como um conjunto específico de parâmetros para `connectAdvanced`.

## Argumentos

- `selectorFactory (dispatch, factoryOptions): selector (state, ownProps): props` \ (_ Function_): Inicializa uma função selector (durante o construtor de cada instância). Essa função selector é chamada sempre que o componente conector precisa computar novos props, como resultado de uma mudança de estado da store ou recebimento de novos props. Espera-se que o resultado de `selector` seja um objeto simples, que é passado como props para o componente encapsulado. Se uma chamada consecutiva para `selector` retornar o mesmo objeto (` === `) que sua chamada anterior, o componente não será renderizado novamente. É responsabilidade do `selector` retornar o objeto anterior quando apropriado.

- [`connectOptions`] _(Objeto)_ Se especificado, personaliza ainda mais o comportamento do conector.

  - [`getDisplayName`] _(Função)_: calcula a propriedade displayName do componente do conector em relação ao componente encapsulado. Normalmente substituído por funções de wrapper. Valor padrão: `name => 'ConnectAdvanced('+name+')'`

  - [`methodName`] _(String)_: mostrado nas mensagens de erro. Normalmente substituído por funções de wrapper. Valor padrão: `'connectAdvanced'`

  - [`renderCountProp`] _(String)_: se definida, uma propriedade chamada este valor será adicionada aos props passados ​​para o componente envolvido. Seu valor será o número de vezes que o componente foi renderizado, o que pode ser útil para rastrear re-renderizações desnecessárias. Valor padrão: `undefined`

  - [`shouldHandleStateChanges`] _(Boolean)_: controla se o componente do conector assinmou para alterações de estado da redux store. Se definido como falso, ele só será renderizado novamente quando o componente pai for renderizado novamente. Valor padrão: `true`

  - [`forwardRef`] _(Boolean)_: se verdadeiro, adicionar um ref ao componente envolvido conectado retornará a instância do componente envolvido.

  - Além disso, quaisquer opções extras passadas por `connectOptions` serão passadas para seu `selectorFactory` no argumento `factoryOptions`.

<a id="connectAdvanced-returns"></a>

## Retorno

Um componente de classe React de ordem superior que cria props a partir do estado da store e os passa para o componente envolvido. Um componente de ordem superior é uma função que aceita um componente como argumento e retorna um novo componente.

### Propriedades estáticas

- `WrappedComponent` _(Componente)_: A classe do componente original passada para `connectAdvanced(...)(Component)`.

### Métodos estáticos

Todos os métodos estáticos originais do componente são içados (hoisted).

## Observações

- Como `connectAdvanced` retorna um componente de ordem superior, ele precisa ser invocado duas vezes. A primeira vez com seus argumentos conforme descrito acima, e uma segunda vez, com o componente: `connectAdvanced(selectorFactory)(MyComponent)`.

- `connectAdvanced` não modifica o componente React passado. Ele retorna um novo componente conectado, que você deve usar no lugar.

<a id="connectAdvanced-examples"></a>

### Exemplos

### Injetar `todos` de um usuário específico dependendo das propriedades e injetar `props.userId` na ação

```js
import * as actionCreators from './actionCreators'
import { bindActionCreators } from 'redux'

function selectorFactory(dispatch) {
  let ownProps = {}
  let result = {}

  const actions = bindActionCreators(actionCreators, dispatch)
  const addTodo = text => actions.addTodo(ownProps.userId, text)

  return (nextState, nextOwnProps) => {
    const todos = nextState.todos[nextOwnProps.userId]
    const nextResult = { ...nextOwnProps, todos, addTodo }
    ownProps = nextOwnProps
    if (!shallowEqual(result, nextResult)) result = nextResult
    return result
  }
}
export default connectAdvanced(selectorFactory)(TodoApp)
```
