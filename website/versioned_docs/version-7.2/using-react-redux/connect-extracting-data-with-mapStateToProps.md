---
id: connect-mapstate
title: "Connect: Extraindo dados com mapStateToProps"
hide_title: true
sidebar_label: "Connect: Extraindo dados com mapStateToProps"
---

# Connect: Extraindo dados com `mapStateToProps`

Como o primeiro argumento passado para `connect`,` mapStateToProps` é usado para selecionar a parte dos dados do armazenamento que o componente conectado precisa. É frequentemente referido apenas como `mapState` para abreviação.

- É chamado sempre que o estado da store muda.
- Recebe todo o estado da store e deve retornar um objeto de dados de que esse componente precisa.

## Definindo `mapStateToProps`

`mapStateToProps` deve ser definido como uma função:

```js
function mapStateToProps(state, ownProps?)
```
Deve receber um primeiro argumento chamado `state`, opcionalmente um segundo argumento chamado `ownProps`, e retornar um objeto simples contendo os dados que o componente conectado precisa.

Esta função deve ser passada como o primeiro argumento para `connect`, e será chamada toda vez que o estado da Redux store mudar. Se você não deseja assinar a store, passe `null` ou `undefined` para `connect` no lugar de` mapStateToProps`.

**Não importa se uma função `mapStateToProps` é escrita usando a palavra-chave `function` (`function mapState(state) {}`) ou como uma arrow function (`const mapState = (state) => {}`)** - ambas as formas funcionarão.

### Argumentos

1. **`state`**
2. **`ownProps` (opicional)**

#### `state`

O primeiro argumento para uma função `mapStateToProps` é todo o estado da Redux store (o mesmo valor retornado por uma chamada para `store.getState()`). Por causa disso, o primeiro argumento é tradicionalmente chamado apenas de `estado`. (Embora você possa dar ao argumento o nome que quiser, chamá-lo de `store` seria incorreto - é o "valor do estado", não a "instância da store".)

A função `mapStateToProps` deve sempre ser escrita com pelo menos passando `state`.

```js
// TodoList.js

function mapStateToProps(state) {
  const { todos } = state
  return { todoList: todos.allIds }
}

export default connect(mapStateToProps)(TodoList)
```

#### `ownProps` (opicional)

Você pode definir a função com um segundo argumento, `ownProps`,se o seu componente precisa dos dados de seus próprios props para recuperar dados do armazenamento. Este argumento conterá todos os props dados ao componente wrapper que foi gerado pela `connect`.

```js
// Todo.js

function mapStateToProps(state, ownProps) {
  const { visibilityFilter } = state
  const { id } = ownProps
  const todo = getTodoById(state, id)

  // componente recebe adicionalmente:
  return { todo, visibilityFilter }
}

// Posteriormente, em seu aplicativo, um componente pai renderiza:
;<ConnectedTodo id={123} />
// e seu componente recebe props.id, props.todo e props.visibilityFilter
```

Você não precisa incluir valores de `ownProps` no objeto retornado de `mapStateToProps`. `connect` irá automaticamente mesclar essas fontes de props diferentes em um conjunto final de props.

### Retorno

Sua função `mapStateToProps` deve retornar um objeto simples que contém os dados de que o componente precisa:

- Cada campo no objeto se tornará um prop para seu componente atual
- Os valores nos campos serão usados ​​para determinar se seu componente precisa ser renderizado novamente

Por exemplo:

```js
function mapStateToProps(state) {
  return {
    a: 42,
    todos: state.todos,
    filter: state.visibilityFilter
  }
}

// componente irá receber: props.a, props.todos, and props.filter
```
> Nota: Em cenários avançados onde você precisa de mais controle sobre o desempenho de renderização, `mapStateToProps` também pode retornar uma função. Nesse caso, essa função será usada como o `mapStateToProps` final para uma instância de componente particular. Isso permite que você faça memoização por instância. Consulte a seção [Uso avançado](./) da documentação para obter mais detalhes, bem como o [PR #279](https://github.com/reduxjs/react-redux/pull/279) e os testes que ele adiciona. A maioria dos aplicativos nunca precisará disso.

## Diretrizes de uso

### Deixar `mapStateToProps` remodelar os dados da store

As funções `mapStateToProps` podem, e devem, fazer muito mais do que apenas `return state.someSlice`. **Eles têm a responsabilidade de "remodelar" os dados da store conforme necessário para esse componente.** Isso pode incluir retornar um valor como um nome de prop específico, combinar pedaços de dados de diferentes partes da árvore de estado e transformar os dados da store de maneiras diferentes.

### Use funções selectors para extrair e transformar dados

Nós encorajamos o uso de funções "seletoras" para ajudar a encapsular o processo de extração de valores de locais específicos na árvore de estado. As funções selectors memorizadas também desempenham um papel importante na melhoria do desempenho do aplicativo (consulte as seguintes seções nesta página e a página [Uso avançado: Desempenho]​​(./) para obter mais detalhes sobre por que e como usar os selectors.)

### Funções `mapStateToProps` devem ser rápidas

Sempre que a store muda, todas as funções `mapStateToProps` de todos os componentes conectados serão executadas. Por causa disso, suas funções `mapStateToProps` devem ser executadas o mais rápido possível. Isso também significa que uma função `mapStateToProps` lenta pode ser um gargalo potencial para seu aplicativo.

Como parte da ideia de "remodelar dados", as funções `mapStateToProps` frequentemente precisam transformar dados de várias maneiras (como filtrar uma matriz, mapear uma matriz de IDs para seus objetos correspondentes ou extrair valores JS simples de objectos do Immutable.js). Essas transformações geralmente podem ser caras, tanto em termos de custo para executar a transformação, quanto se o componente é renderizado novamente como resultado. Se o desempenho for uma preocupação, certifique-se de que essas transformações sejam executadas apenas se os valores de entrada forem alterados.

### Funções `mapStateToProps` devem ser puras e síncronas

Assim como um reducer do Redux, uma função `mapStateToProps` deve ser sempre 100% pura e síncrona. Deve simplesmente receber `state` (e` ownProps`) como argumentos e retornar os dados que o componente precisa como props. Ela _não_ deve ser usada para acionar comportamento assíncrono como chamadas AJAX para obtenção de dados, e as funções não devem ser declaradas como `async`.

## `mapStateToProps` e Desempenho

### Valores de retorno determinam se seu componente é renderizado novamente

O React Redux implementa internamente o método `shouldComponentUpdate`, de forma que o componente que envolve seja renderizado novamente exatamente quando os dados de que o seu componente precisa foram alterados. Por padrão, React Redux decide se o conteúdo do objeto retornado de `mapStateToProps` é diferente usando a comparação` === `(uma verificação de "igualdade superficial") em cada campo do objeto retornado. Se algum dos campos foi alterado, seu componente será renderizado novamente para que possa receber os valores atualizados como props. Observe que retornar um objeto mutado da mesma referência é um erro comum que pode fazer com que seu componente não seja renderizado novamente quando esperado.

To summarize the behavior of the component wrapped by `connect` with `mapStateToProps` to extract data from the store:
Para resumir o comportamento do componente encapsulado por `connect` com` mapStateToProps` para extrair dados do armazenamento:

|                              | `(state) => stateProps`                | `(state, ownProps) => stateProps`                                                            |
| ---------------------------- | -------------------------------------- | -------------------------------------------------------------------------------------------- |
| `mapStateToProps` executa quando: | `state` da store muda                  | `state` da store muda <br /> ou <br />qualquer campo de `ownProps` é diferente                   |
| componente é renderizado novamente quando:   | qualquer campo de `stateProps` é diferente | qualquer campo de `stateProps` é diferente <br /> ou <br /> qualquer campo de `ownProps` é diferente |

### Retorne apenas referências de novos objetos se necessário

React Redux faz comparações superficiais para ver se os resultados de `mapStateToProps` mudaram. É fácil retornar acidentalmente um novo objeto ou referências de array todas as vezes, o que faria com que seu componente fosse renderizado novamente, mesmo se os dados fossem realmente os mesmos.

Muitas operações comuns resultam na criação de novas referências objetos ou arrays:

- Criando novos arrays com `someArray.map ()` ou `someArray.filter()`
- Mesclando arrays com `array.concat`
- Seleção de parte de uma array com `array.slice`
- Copiar valores com `Object.assign`
- Copiar valores com o operador spread `{... oldState, ... newData}`

Coloque essas operações em [funções selectors memoizadas](https://redux.js.org/recipes/computing-derived-data#creating-a-memoized-selector) para garantir que elas sejam executadas apenas se os valores de entrada forem alterados. Isso também garantirá que se os valores de entrada _não mudarem_, `mapStateToProps` ainda retornará os mesmos valores de resultado de antes, e `connect` pode pular a re-renderização.

### Somente execute operações pesadas quando os dados forem alterados

Transformar dados geralmente pode ser caro (_e_ geralmente resulta na criação de novas referências de objeto). Para que sua função `mapStateToProps` seja a mais rápido possível, você só deve executar novamente essas transformações complexas quando os dados relevantes forem alterados.

Existem algumas maneiras de abordar isso:

- Algumas transformações podem ser calculadas em um action creator ou reducer, e os dados transformados podem ser mantidos na store
- As transformações também podem ser feitas no método `render ()` de um componente
- Se a transformação precisa ser feita em uma função `mapStateToProps`, então recomendamos o uso de [funções selectors memoizadas](https://redux.js.org/recipes/computing-derived-data#creating-a-memoized-seletor) para garantir que a transformação seja executada apenas quando os valores de entrada forem alterados.

#### Preocupações com o desempenho de Immutable.js 

Lee Byron, autor do Immutable.js, no Twitter [aconselha explicitamente a evitar `toJS` quando o desempenho for uma preocupação](https://twitter.com/leeb/status/746733697093668864?lang=en):

> Perf tip for #immutablejs: avoid .toJS() .toObject() and .toArray() all slow full-copy operations which render structural sharing useless.

Existem várias outras questões de desempenho a serem levadas em consideração com Immutable.js - consulte a lista de links no final desta página para obter mais informações.

## Comportamento e pegadinhas

### `mapStateToProps` não será executado se o estado da store for o mesmo

O componente que envolve gerado por `connect` assina a Redux store. Cada vez que uma action é despachada, ela chama `store.getState ()` e verifica se `lastState === currentState`. Se os dois valores de estado são idênticos por referência, então ele _não_ reexecutará sua função `mapStateToProps`, porque assume que o resto do estado de armazenamento também não mudou.

A função de utilidade `combineReducers` do Redux tenta otimizar para isso. Se nenhum dos reducers de slice retornou um novo valor, então `combineReducers` retornará o objeto de estado antigo em vez de um novo. Isso significa que a mutação em um reducer pode fazer com que o objeto de estado raiz não seja atualizado e, portanto, a UI não será renderizada novamente.

### O número de argumentos declarados afeta o comportamento

Com apenas `(state)`, a função é executada sempre que o objeto de estado da store raiz for diferente. Com `(state, ownProps)`, ele roda sempre que o estado da store for diferente e TAMBÉM sempre que as propriedades do wraper forem alteradas.

Isso significa que **você não deve adicionar o argumento `ownProps` a menos que você realmente precise usá-lo**, ou sua função` mapStateToProps` será executada com mais freqüência do que o necessário.

Existem alguns casos extremos em torno desse comportamento. **O número de argumentos obrigatórios determina se `mapStateToProps` receberá` ownProps`**.

Se a definição formal da função contém um parâmetro obrigatório, `mapStateToProps` _não_ receberá` ownProps`:

```js
function mapStateToProps(state) {
  console.log(state) // state
  console.log(arguments[1]) // undefined
}
const mapStateToProps = (state, ownProps = {}) => {
  console.log(state) // state
  console.log(ownProps) // undefined
}
```
Ele _receberá_ `ownProps` quando a definição formal da função contiver zero ou dois parâmetros obrigatórios:

```js
function mapStateToProps(state, ownProps) {
  console.log(state) // state
  console.log(ownProps) // ownProps
}

function mapStateToProps() {
  console.log(arguments[0]) // state
  console.log(arguments[1]) // ownProps
}

function mapStateToProps(...args) {
  console.log(args[0]) // state
  console.log(args[1]) // ownProps
}
```

## Links e referências

**Tutoriais**

- [Practical Redux Series, Part 6: Connected Lists, Forms, and Performance](https://blog.isquaredsoftware.com/2017/01/practical-redux-part-6-connected-lists-forms-and-performance/)
- [Redux Idiomático: Usando Reselect Selectors para encapsulamento e desempenho](https://blog.isquaredsoftware.com/2017/12/idiomatic-redux-using-reselect-selectors/)

**Desempenho**

- [Tweet de Lee Byron sugerindo evitar `toJS`,` toArray` e `toObject` para um melhor desempenho](https://twitter.com/leeb/status/746733697093668864)
- [Melhorando o desempenho de React e Redux com Reselect](https://blog.rangle.io/react-and-redux-performance-with-reselect/)
- [Immutable data performance links](https://github.com/markerikson/react-redux-links/blob/master/react-performance.md#immutable-data)

**Perguntas&Respostas**

- [Por que meu componente é rerenderizado com muita frequência?](https://redux.js.org/faq/react-redux/#why-is-my-component-re-rendering-too-often)
- [Por que meu componente não está sendo renderizado novamente ou meu mapStateToProps em execução](https://redux.js.org/faq/react-redux/#why-isnt-my-component-re-rendering-or-my-mapstatetoprops-running)
- [Como posso acelerar meu mapStateToProps?](https://redux.js.org/faq/react-redux/#how-can-i-speed-up-my-mapstatetoprops)
- [Devo conectar apenas meu componente superior ou posso conectar vários componentes em minha árvore?](https://redux.js.org/faq/react-redux/#should-i-only-connect-my-top-component-or-can-i-connect-multiple-components-in-my-tree)
