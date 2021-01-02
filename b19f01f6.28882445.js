(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{115:function(e,o,a){"use strict";a.r(o),a.d(o,"frontMatter",(function(){return s})),a.d(o,"metadata",(function(){return c})),a.d(o,"rightToc",(function(){return i})),a.d(o,"default",(function(){return p}));var t=a(2),n=a(6),r=(a(0),a(147)),s={id:"hooks",title:"Hooks",sidebar_label:"Hooks",hide_title:!0},c={unversionedId:"api/hooks",id:"version-7.2/api/hooks",isDocsHomePage:!1,title:"Hooks",description:"Hooks",source:"@site/versioned_docs\\version-7.2\\api\\hooks.md",slug:"/api/hooks",permalink:"/react-redux/api/hooks",version:"7.2",sidebar_label:"Hooks",sidebar:"version-7.2/docs",previous:{title:"batch",permalink:"/react-redux/api/batch"},next:{title:"Solu\xe7\xe3o de problemas",permalink:"/react-redux/troubleshooting"}},i=[{value:"Usando hooks em um aplicativo React Redux",id:"usando-hooks-em-um-aplicativo-react-redux",children:[]},{value:"<code>useSelector()</code>",id:"useselector",children:[{value:"Compara\xe7\xf5es de igualdade e atualiza\xe7\xf5es",id:"compara\xe7\xf5es-de-igualdade-e-atualiza\xe7\xf5es",children:[]},{value:"Exemplos do <code>useSelector</code>",id:"exemplos-do-useselector",children:[]}]},{value:"Removido: <code>useActions()</code>",id:"removido-useactions",children:[]},{value:"<code>useDispatch()</code>",id:"usedispatch",children:[]},{value:"<code>useStore()</code>",id:"usestore",children:[]},{value:"Contexto personalizado",id:"contexto-personalizado",children:[]},{value:"Avisos de uso",id:"avisos-de-uso",children:[{value:"Stale Props e &quot;Zombie Children&quot;",id:"stale-props-e-zombie-children",children:[]},{value:"Desempenho",id:"desempenho",children:[]}]},{value:"Receita de Hooks",id:"receita-de-hooks",children:[{value:"Receita: <code>useActions()</code>",id:"receita-useactions",children:[]},{value:"Recipe: <code>useShallowEqualSelector()</code>",id:"recipe-useshallowequalselector",children:[]},{value:"Considera\xe7\xf5es adicionais ao usar hooks",id:"considera\xe7\xf5es-adicionais-ao-usar-hooks",children:[]}]}],d={rightToc:i};function p(e){var o=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(t.a)({},d,a,{components:o,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"hooks"},"Hooks"),Object(r.b)("p",null,"As novas ",Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"https://reactjs.org/docs/hooks-intro.html"}),'API\'s "hooks"')," do React fornecem aos componentes de fun\xe7\xe3o a capacidade de usar o estado do componente local, executar efeitos colaterais e muito mais."),Object(r.b)("p",null,"React Redux now offers a set of hook APIs as an alternative to the existing ",Object(r.b)("inlineCode",{parentName:"p"},"connect()")," Higher Order Component. These APIs allow you to subscribe to the Redux store and dispatch actions, without having to wrap your components in ",Object(r.b)("inlineCode",{parentName:"p"},"connect()"),"."),Object(r.b)("p",null,"React Redux agora oferece um conjunto de APIs de hook como alternativa ao componente de ordem superior ",Object(r.b)("inlineCode",{parentName:"p"},"connect()")," existente. Essas APIs permitem que voc\xea asein na Redux store e despache actions, sem ter que envolver seus componentes em ",Object(r.b)("inlineCode",{parentName:"p"},"connect()"),"."),Object(r.b)("p",null,"Esses hooks foram adicionados pela primeira vez na v7.1.0."),Object(r.b)("h2",{id:"usando-hooks-em-um-aplicativo-react-redux"},"Usando hooks em um aplicativo React Redux"),Object(r.b)("p",null,"Tal como acontece com ",Object(r.b)("inlineCode",{parentName:"p"},"connect()"),", voc\xea deve come\xe7ar envolvendo todo o seu aplicativo em um componente ",Object(r.b)("inlineCode",{parentName:"p"},"<Provider>")," para tornar a store dispon\xedvel em toda a \xe1rvore de componentes:"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-jsx"}),"const store = createStore(rootReducer)\n\nReactDOM.render(\n  <Provider store={store}>\n    <App />\n  </Provider>,\n  document.getElementById('root')\n)\n")),Object(r.b)("p",null,"A partir da\xed, voc\xea pode importar qualquer uma das APIs de hooks do React Redux listadas e us\xe1-las nos componentes de sua fun\xe7\xe3o."),Object(r.b)("h2",{id:"useselector"},Object(r.b)("inlineCode",{parentName:"h2"},"useSelector()")),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"const result: any = useSelector(selector: Function, equalityFn?: Function)\n")),Object(r.b)("p",null,"Permite extrair dados do estado da Redux store, usando uma fun\xe7\xe3o selector."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Nota"),": A fun\xe7\xe3o selector deve ser ",Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Pure_function"}),"pura"),", pois \xe9 potencialmente executada v\xe1rias vezes e em momentos arbitr\xe1rios.")),Object(r.b)("p",null,"O selector \xe9 aproximadamente equivalente ao argumento ",Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"../using-react-redux/connect-mapstate"}),Object(r.b)("inlineCode",{parentName:"a"},"mapStateToProps")," da ",Object(r.b)("inlineCode",{parentName:"a"},"connect"))," conceitualmente. O selector ser\xe1 chamado com todo o estado da Redux store como seu \xfanico argumento. O selector ser\xe1 executado sempre que o componente de fun\xe7\xe3o renderizar (a menos que sua refer\xeancia n\xe3o tenha mudado desde uma renderiza\xe7\xe3o anterior do componente para que um resultado armazenado em cache possa ser retornado pelo hook sem executar novamente o selector). ",Object(r.b)("inlineCode",{parentName:"p"},"useSelector()")," tamb\xe9m assinar\xe1 a mundan\xe7as na Redux store e executar\xe1 seu selector sempre que uma action for despachada."),Object(r.b)("p",null,"No entanto, existem algumas diferen\xe7as entre os selectors passados \u200b\u200bpara ",Object(r.b)("inlineCode",{parentName:"p"},"useSelector()")," e uma fun\xe7\xe3o ",Object(r.b)("inlineCode",{parentName:"p"},"mapState"),":"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"O selector pode retornar qualquer valor como resultado, n\xe3o apenas um objeto. O valor de retorno do selector ser\xe1 usado como o valor de retorno do hook ",Object(r.b)("inlineCode",{parentName:"li"},"useSelector()"),"."),Object(r.b)("li",{parentName:"ul"},"Quando uma a\xe7\xe3o \xe9 despachada, ",Object(r.b)("inlineCode",{parentName:"li"},"useSelector()")," far\xe1 uma compara\xe7\xe3o de refer\xeancia do valor de resultado do selector anterior e o valor de resultado atual. Se eles forem diferentes, o componente ser\xe1 for\xe7ado a renderizar novamente. Se eles forem iguais, o componente n\xe3o ser\xe1 renderizado novamente."),Object(r.b)("li",{parentName:"ul"},"A fun\xe7\xe3o selector ",Object(r.b)("em",{parentName:"li"},"n\xe3o")," recebe um argumento ",Object(r.b)("inlineCode",{parentName:"li"},"ownProps"),". No entanto, os props podem ser usados \u200b\u200bpor meio de closure (veja os exemplos abaixo) ou usando um selector de curry."),Object(r.b)("li",{parentName:"ul"},"Cuidado extra deve ser tomado ao usar selectors memoizados (veja exemplos abaixo para mais detalhes)."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"useSelector()")," usa verifica\xe7\xf5es de igualdade de refer\xeancia estritas ",Object(r.b)("inlineCode",{parentName:"li"},"===")," por padr\xe3o, n\xe3o igualdade superficial (veja a se\xe7\xe3o seguinte para mais detalhes).")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Nota"),": Existem casos potenciais com o uso de props em selectors que podem causar erros. Consulte a se\xe7\xe3o ",Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"#avisos-de-uso"}),"Avisos de uso")," desta p\xe1gina para obter mais detalhes.")),Object(r.b)("p",null,"Voc\xea pode chamar ",Object(r.b)("inlineCode",{parentName:"p"},"useSelector()")," v\xe1rias vezes em um \xfanico componente de fun\xe7\xe3o. Cada chamada para ",Object(r.b)("inlineCode",{parentName:"p"},"useSelector()")," cria uma assinatura individual para a store Redux. Por causa do comportamento de atualiza\xe7\xe3o em lote do React usado no React Redux v7, uma action despachada que faz com que v\xe1rios ",Object(r.b)("inlineCode",{parentName:"p"},"useSelector()"),"s no mesmo componente retornem novos valores ",Object(r.b)("em",{parentName:"p"},"deve")," resultar apenas em uma \xfanica re-renderiza\xe7\xe3o."),Object(r.b)("h3",{id:"compara\xe7\xf5es-de-igualdade-e-atualiza\xe7\xf5es"},"Compara\xe7\xf5es de igualdade e atualiza\xe7\xf5es"),Object(r.b)("p",null,"Quando o componente da fun\xe7\xe3o for renderizado, a fun\xe7\xe3o selector fornecida ser\xe1 chamada e seu resultado ser\xe1 retornado do hook ",Object(r.b)("inlineCode",{parentName:"p"},"useSelector()"),". (Um resultado em cache pode ser retornado pelo hook sem executar novamente o selector se for a mesma refer\xeancia de fun\xe7\xe3o que em uma renderiza\xe7\xe3o anterior do componente.)"),Object(r.b)("p",null,"No entanto, quando uma action \xe9 despachada para a Redux store, ",Object(r.b)("inlineCode",{parentName:"p"},"useSelector()")," apenas for\xe7a uma nova renderiza\xe7\xe3o se o resultado do selector parecer diferente do \xfaltimo resultado. A partir da v7.1.0-alpha.5, a compara\xe7\xe3o padr\xe3o \xe9 uma compara\xe7\xe3o de refer\xeancia estrita ",Object(r.b)("inlineCode",{parentName:"p"},"==="),". Isso \xe9 diferente de ",Object(r.b)("inlineCode",{parentName:"p"},"connect()"),", que usa verifica\xe7\xf5es de igualdade superficiais nos resultados das chamadas ",Object(r.b)("inlineCode",{parentName:"p"},"mapState")," para determinar se a re-renderiza\xe7\xe3o \xe9 necess\xe1ria. Isso tem v\xe1rias implica\xe7\xf5es sobre como voc\xea deve usar ",Object(r.b)("inlineCode",{parentName:"p"},"useSelector ()"),"."),Object(r.b)("p",null,"Com ",Object(r.b)("inlineCode",{parentName:"p"},"mapState"),", todos os campos individuais foram retornados em um objeto combinado. N\xe3o importava se o objeto de retorno era uma nova refer\xeancia ou n\xe3o - ",Object(r.b)("inlineCode",{parentName:"p"},"connect()")," apenas comparou os campos individuais. Com ",Object(r.b)("inlineCode",{parentName:"p"},"useSelector()"),", retornar um novo objeto toda vez ",Object(r.b)("em",{parentName:"p"},"sempre")," for\xe7ar\xe1 uma nova renderiza\xe7\xe3o por padr\xe3o. Se quiser recuperar v\xe1rios valores da store, voc\xea pode:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Chamar ",Object(r.b)("inlineCode",{parentName:"li"},"useSelector()")," v\xe1rias vezes, com cada chamada retornando um \xfanico valor de campo"),Object(r.b)("li",{parentName:"ul"},"Use Reselect ou uma biblioteca semelhante para criar um selectors memoizados que retornam v\xe1rios valores em um objeto, mas s\xf3 retorna um novo objeto quando um dos valores foi alterado."),Object(r.b)("li",{parentName:"ul"},"Use a fun\xe7\xe3o ",Object(r.b)("inlineCode",{parentName:"li"},"shallowEqual")," do React-Redux como o argumento ",Object(r.b)("inlineCode",{parentName:"li"},"equalityFn")," para ",Object(r.b)("inlineCode",{parentName:"li"},"useSelector())"),", como:")),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"import { shallowEqual, useSelector } from 'react-redux'\n\n// mais tarde\nconst selectedData = useSelector(selectorReturningObject, shallowEqual)\n")),Object(r.b)("p",null,"A fun\xe7\xe3o de compara\xe7\xe3o opcional tamb\xe9m permite usar algo como ",Object(r.b)("inlineCode",{parentName:"p"},"_.isEqual ()")," do Lodash ou os recursos de compara\xe7\xe3o do Immutable.js."),Object(r.b)("h3",{id:"exemplos-do-useselector"},"Exemplos do ",Object(r.b)("inlineCode",{parentName:"h3"},"useSelector")),Object(r.b)("p",null,"Uso b\xe1sico:"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-jsx"}),"import React from 'react'\nimport { useSelector } from 'react-redux'\n\nexport const CounterComponent = () => {\n  const counter = useSelector(state => state.counter)\n  return <div>{counter}</div>\n}\n")),Object(r.b)("p",null,"Usando props por meio de closure para determinar o que extrair:"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-jsx"}),"import React from 'react'\nimport { useSelector } from 'react-redux'\n\nexport const TodoListItem = props => {\n  const todo = useSelector(state => state.todos[props.id])\n  return <div>{todo.text}</div>\n}\n")),Object(r.b)("h4",{id:"usando-selectors-memoizados"},"Usando Selectors memoizados"),Object(r.b)("p",null,"Ao usar ",Object(r.b)("inlineCode",{parentName:"p"},"useSelector")," com um selector inline como mostrado acima, uma nova inst\xe2ncia do selector \xe9 criada sempre que o componente \xe9 renderizado. Isso funciona, desde que o selector n\xe3o mantenha nenhum estado. No entanto, os selectors memoizados (por exemplo, criados por meio de ",Object(r.b)("inlineCode",{parentName:"p"},"createSelector")," de",Object(r.b)("inlineCode",{parentName:"p"}," reselect"),") t\xeam estado interno e, portanto, deve-se tomar cuidado ao us\xe1-los. Abaixo, voc\xea pode encontrar cen\xe1rios de uso t\xedpicos para selectors memoizados."),Object(r.b)("p",null,"Quando o selector depende apenas do estado, basta garantir que ele seja declarado fora do componente para que a mesma inst\xe2ncia do selector seja usada para cada renderiza\xe7\xe3o:"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-jsx"}),"import React from 'react'\nimport { useSelector } from 'react-redux'\nimport { createSelector } from 'reselect'\n\nconst selectNumOfDoneTodos = createSelector(\n  state => state.todos,\n  todos => todos.filter(todo => todo.isDone).length\n)\n\nexport const DoneTodosCounter = () => {\n  const numOfDoneTodos = useSelector(selectNumOfDoneTodos)\n  return <div>{numOfDoneTodos}</div>\n}\n\nexport const App = () => {\n  return (\n    <>\n      <span>Number of done todos:</span>\n      <DoneTodosCounter />\n    </>\n  )\n}\n")),Object(r.b)("p",null,"O mesmo \xe9 verdade se o selector depende dos props do componente, mas s\xf3 ser\xe1 usado em uma \xfanica inst\xe2ncia de um \xfanico componente:"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-jsx"}),"import React from 'react'\nimport { useSelector } from 'react-redux'\nimport { createSelector } from 'reselect'\n\nconst selectNumOfTodosWithIsDoneValue = createSelector(\n  state => state.todos,\n  (_, isDone) => isDone,\n  (todos, isDone) => todos.filter(todo => todo.isDone === isDone).length\n)\n\nexport const TodoCounterForIsDoneValue = ({ isDone }) => {\n  const numOfTodosWithIsDoneValue = useSelector(state =>\n    selectNumOfTodosWithIsDoneValue(state, isDone)\n  )\n\n  return <div>{numOfTodosWithIsDoneValue}</div>\n}\n\nexport const App = () => {\n  return (\n    <>\n      <span>Number of done todos:</span>\n      <TodoCounterForIsDoneValue isDone={true} />\n    </>\n  )\n}\n")),Object(r.b)("p",null,"No entanto, quando o selector \xe9 usado em v\xe1rias inst\xe2ncias do componente e depende dos props do componente, voc\xea precisa garantir que cada inst\xe2ncia do componente obtenha sua pr\xf3pria inst\xe2ncia do selector (veja ",Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"https://github.com/reduxjs/reselect#accessing-react-props-in-selectors"}),"aqui")," para uma explica\xe7\xe3o mais completa de por que isso \xe9 necess\xe1rio):"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-jsx"}),"import React, { useMemo } from 'react'\nimport { useSelector } from 'react-redux'\nimport { createSelector } from 'reselect'\n\nconst makeNumOfTodosWithIsDoneSelector = () =>\n  createSelector(\n    state => state.todos,\n    (_, isDone) => isDone,\n    (todos, isDone) => todos.filter(todo => todo.isDone === isDone).length\n  )\n\nexport const TodoCounterForIsDoneValue = ({ isDone }) => {\n  const selectNumOfTodosWithIsDone = useMemo(\n    makeNumOfTodosWithIsDoneSelector,\n    []\n  )\n\n  const numOfTodosWithIsDoneValue = useSelector(state =>\n    selectNumOfTodosWithIsDone(state, isDone)\n  )\n\n  return <div>{numOfTodosWithIsDoneValue}</div>\n}\n\nexport const App = () => {\n  return (\n    <>\n      <span>Number of done todos:</span>\n      <TodoCounterForIsDoneValue isDone={true} />\n      <span>Number of unfinished todos:</span>\n      <TodoCounterForIsDoneValue isDone={false} />\n    </>\n  )\n}\n")),Object(r.b)("h2",{id:"removido-useactions"},"Removido: ",Object(r.b)("inlineCode",{parentName:"h2"},"useActions()")),Object(r.b)("h2",{id:"usedispatch"},Object(r.b)("inlineCode",{parentName:"h2"},"useDispatch()")),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"const dispatch = useDispatch()\n")),Object(r.b)("p",null,"Este hook retorna uma refer\xeancia \xe0 fun\xe7\xe3o ",Object(r.b)("inlineCode",{parentName:"p"},"dispatch")," da Redux store. Voc\xea pode us\xe1-lo para despachar actions conforme necess\xe1rio."),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Observa\xe7\xe3o: como no ",Object(r.b)("a",Object(t.a)({parentName:"em"},{href:"https://reactjs.org/docs/hooks-reference.html#usereducer"}),Object(r.b)("inlineCode",{parentName:"a"},"useReducer")),", a identidade da fun\xe7\xe3o ",Object(r.b)("inlineCode",{parentName:"em"},"dispatch")," retornada \xe9 est\xe1vel e n\xe3o mudar\xe1 nos renderizadas seguidas ( a menos que voc\xea altere o ",Object(r.b)("inlineCode",{parentName:"em"},"store")," sendo passado para o",Object(r.b)("inlineCode",{parentName:"em"}," <Provider>"),", o que seria extremamente incomum).")),Object(r.b)("h4",{id:"exemplos"},"Exemplos"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-jsx"}),"import React from 'react'\nimport { useDispatch } from 'react-redux'\n\nexport const CounterComponent = ({ value }) => {\n  const dispatch = useDispatch()\n\n  return (\n    <div>\n      <span>{value}</span>\n      <button onClick={() => dispatch({ type: 'increment-counter' })}>\n        Increment counter\n      </button>\n    </div>\n  )\n}\n")),Object(r.b)("p",null,"Lembrete: ao passar um retorno de chamada usando ",Object(r.b)("inlineCode",{parentName:"p"},"dispatch")," para um componente filho, voc\xea deve memoiz\xe1-lo com ",Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"https://reactjs.org/docs/hooks-reference.html#usecallback"}),Object(r.b)("inlineCode",{parentName:"a"},"useCallback")),", assim como voc\xea deve memoizar qualquer retorno de chamada passado. Isso evita a renderiza\xe7\xe3o desnecess\xe1ria de componentes filhos devido \xe0 refer\xeancia de retorno de chamada alterada. Voc\xea pode passar com seguran\xe7a ",Object(r.b)("inlineCode",{parentName:"p"},"[dispatch]")," no array de depend\xeancia para a chamada ",Object(r.b)("inlineCode",{parentName:"p"},"useCallback")," - visto que ",Object(r.b)("inlineCode",{parentName:"p"},"dispatch")," n\xe3o mudar\xe1, o callback ser\xe1 reutilizado corretamente (como deveria). Por exemplo:"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-jsx"}),"import React, { useCallback } from 'react'\nimport { useDispatch } from 'react-redux'\n\nexport const CounterComponent = ({ value }) => {\n  const dispatch = useDispatch()\n  const incrementCounter = useCallback(\n    () => dispatch({ type: 'increment-counter' }),\n    [dispatch]\n  )\n\n  return (\n    <div>\n      <span>{value}</span>\n      <MyIncrementButton onIncrement={incrementCounter} />\n    </div>\n  )\n}\n\nexport const MyIncrementButton = React.memo(({ onIncrement }) => (\n  <button onClick={onIncrement}>Increment counter</button>\n))\n")),Object(r.b)("h2",{id:"usestore"},Object(r.b)("inlineCode",{parentName:"h2"},"useStore()")),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"const store = useStore()\n")),Object(r.b)("p",null,"Este hook retorna uma refer\xeancia da mesma Redux store que foi passada para o componente ",Object(r.b)("inlineCode",{parentName:"p"},"<Provider>"),"."),Object(r.b)("p",null,"Este hook provavelmente n\xe3o deve ser usado com freq\xfc\xeancia. Prefira ",Object(r.b)("inlineCode",{parentName:"p"},"useSelector()")," como sua escolha principal. No entanto, isso pode ser \xfatil para cen\xe1rios menos comuns que exigem acesso \xe0 store, como a substitui\xe7\xe3o de reducers."),Object(r.b)("h4",{id:"exemplos-1"},"Exemplos"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-jsx"}),"import React from 'react'\nimport { useStore } from 'react-redux'\n\nexport const CounterComponent = ({ value }) => {\n  const store = useStore()\n\n  // EXEMPLO APENAS! N\xe3o fa\xe7a isso em um aplicativo real.\n  // O componente n\xe3o ser\xe1 atualizado automaticamente se o estado da store mudar\n  return <div>{store.getState()}</div>\n}\n")),Object(r.b)("h2",{id:"contexto-personalizado"},"Contexto personalizado"),Object(r.b)("p",null,"O componente ",Object(r.b)("inlineCode",{parentName:"p"},"<Provider>")," permite que voc\xea especifique um contexto alternativo por meio da prop ",Object(r.b)("inlineCode",{parentName:"p"},"context"),". Isso \xe9 \xfatil se voc\xea estiver construindo um componente reutiliz\xe1vel complexo e n\xe3o quiser que sua store entre em conflito com nenhuma Redux store que os aplicativos de seus consumidores possam usar."),Object(r.b)("p",null,"Para acessar um context alternativo por meio da API de hooks, use as fun\xe7\xf5es do hooks creators:"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"import React from 'react'\nimport {\n  Provider,\n  createStoreHook,\n  createDispatchHook,\n  createSelectorHook\n} from 'react-redux'\n\nconst MyContext = React.createContext(null)\n\n// Exporte seus hooks personalizados se desejar us\xe1-los em outros arquivos.\nexport const useStore = createStoreHook(MyContext)\nexport const useDispatch = createDispatchHook(MyContext)\nexport const useSelector = createSelectorHook(MyContext)\n\nconst myStore = createStore(rootReducer)\n\nexport function MyProvider({ children }) {\n  return (\n    <Provider context={MyContext} store={myStore}>\n      {children}\n    </Provider>\n  )\n}\n")),Object(r.b)("h2",{id:"avisos-de-uso"},"Avisos de uso"),Object(r.b)("h3",{id:"stale-props-e-zombie-children"},'Stale Props e "Zombie Children"'),Object(r.b)("p",null,"Um dos aspectos mais dif\xedceis da implementa\xe7\xe3o do React Redux \xe9 garantir que se sua fun\xe7\xe3o ",Object(r.b)("inlineCode",{parentName:"p"},"mapStateToProps")," for definida como ",Object(r.b)("inlineCode",{parentName:"p"},"(state, ownProps)"),', ela ser\xe1 chamada com os "\xfaltimos" props todas as vezes. At\xe9 a vers\xe3o 4, havia bugs recorrentes relatados envolvendo situa\xe7\xf5es extremas, como erros lan\xe7ados de uma fun\xe7\xe3o ',Object(r.b)("inlineCode",{parentName:"p"},"mapState")," para um item da lista cujos dados acabaram de ser exclu\xeddos."),Object(r.b)("p",null,"A partir da vers\xe3o 5, React Redux tentou garantir essa consist\xeancia com ",Object(r.b)("inlineCode",{parentName:"p"},"ownProps"),". Na vers\xe3o 7, isso \xe9 implementado usando uma classe ",Object(r.b)("inlineCode",{parentName:"p"},"Subscription")," personalizada internamente em ",Object(r.b)("inlineCode",{parentName:"p"},"connect ()"),", que forma uma hierarquia aninhada. Isso garante que os componentes conectados na parte inferior da \xe1rvore receber\xe3o notifica\xe7\xf5es de atualiza\xe7\xe3o da store apenas depois que o ancestral conectado mais pr\xf3ximo tiver sido atualizado. No entanto, isso depende de cada inst\xe2ncia ",Object(r.b)("inlineCode",{parentName:"p"},"connect()")," substituindo parte do context interno do React, fornecendo sua pr\xf3pria inst\xe2ncia ",Object(r.b)("inlineCode",{parentName:"p"},"Subscription")," para formar esse aninhamento e renderizando o ",Object(r.b)("inlineCode",{parentName:"p"},"<ReactReduxContext.Provider>")," com esse novo valor de contexto."),Object(r.b)("p",null,'Com hooks, n\xe3o h\xe1 como renderizar um provedor de context, o que significa que tamb\xe9m n\xe3o h\xe1 hierarquia aninhada de assinaturas. Por causa disso, os problemas de "props obsoletos" e "zombie children" podem ocorrer novamente em um aplicativo que depende do uso de hooks em vez de ',Object(r.b)("inlineCode",{parentName:"p"},"connect()"),"."),Object(r.b)("p",null,'Especificamente, "props obsoletos" significa qualquer caso em que:'),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"uma fun\xe7\xe3o selector depende dos props deste componente para extrair dados"),Object(r.b)("li",{parentName:"ul"},"um componente pai ",Object(r.b)("em",{parentName:"li"},"deveria")," renderizar novamente e passar novos props como resultado de uma action"),Object(r.b)("li",{parentName:"ul"},"mas a fun\xe7\xe3o selector deste componente \xe9 executada antes que este componente tenha a chance de renderizar novamente com os novos props")),Object(r.b)("p",null,"Dependendo de quais props foram usados \u200b\u200be qual \xe9 o estado da store atual, isso ",Object(r.b)("em",{parentName:"p"},"pode")," resultar no retorno de dados incorretos do selector ou at\xe9 mesmo em um erro sendo gerado."),Object(r.b)("p",null,'"Zombie child" refere-se especificamente ao caso em que:'),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"V\xe1rios componentes conectados aninhados s\xe3o montados em uma primeira passagem, fazendo com que um componente filho se inscreva na store antes de seu pai"),Object(r.b)("li",{parentName:"ul"},"Uma action \xe9 despachada que exclui dados da store, como um item de tarefa"),Object(r.b)("li",{parentName:"ul"},"O componente pai ",Object(r.b)("em",{parentName:"li"},"deveria")," parar de renderizar aquele filho como resultado"),Object(r.b)("li",{parentName:"ul"},"No entanto, como o filho se inscreveu primeiro, sua inscri\xe7\xe3o \xe9 executada antes que o pai pare de renderiz\xe1-la. Quando ele l\xea um valor da store com base em props, esses dados n\xe3o existem mais e, se a l\xf3gica de extra\xe7\xe3o n\xe3o for cuidadosa, isso pode resultar em um erro.")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"useSelector()")," tenta lidar com isso pegando todos os erros que s\xe3o lan\xe7ados quando o selector \xe9 executado devido a uma atualiza\xe7\xe3o da store (mas n\xe3o quando \xe9 executado durante a renderiza\xe7\xe3o). Quando ocorre um erro, o componente ser\xe1 for\xe7ado a renderizar, momento em que o secletor \xe9 executado novamente. Isso funciona contanto que o selector seja uma fun\xe7\xe3o pura e voc\xea n\xe3o dependa dos erros de lan\xe7amento do selector."),Object(r.b)("p",null,"Se voc\xea preferir lidar com este problema sozinho, aqui est\xe3o algumas op\xe7\xf5es poss\xedveis para evitar esses problemas juntamente com ",Object(r.b)("inlineCode",{parentName:"p"},"useSelector()"),":"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"N\xe3o confie em props em sua fun\xe7\xe3o selector para extrair dados"),Object(r.b)("li",{parentName:"ul"},"Nos casos em que voc\xea depende de props em sua fun\xe7\xe3o selector ",Object(r.b)("em",{parentName:"li"},"e")," esses props podem mudar ao longo do tempo, ",Object(r.b)("em",{parentName:"li"},"ou")," os dados que voc\xea est\xe1 extraindo podem ser baseados em itens que podem ser exclu\xeddos, tente escrever as fun\xe7\xf5es selector defensivamente. N\xe3o v\xe1 direto para ",Object(r.b)("inlineCode",{parentName:"li"},"state.todos[props.id].name")," - leia ",Object(r.b)("inlineCode",{parentName:"li"},"state.todos[props.id]")," primeiro e verifique se ele existe antes de tentar ler ",Object(r.b)("inlineCode",{parentName:"li"},"todo.name"),"."),Object(r.b)("li",{parentName:"ul"},"Como ",Object(r.b)("inlineCode",{parentName:"li"},"connect")," adiciona a ",Object(r.b)("inlineCode",{parentName:"li"},"Subscription")," necess\xe1ria ao provedor de context e atrasa a avalia\xe7\xe3o das assinaturas filhas at\xe9 que o componente conectado seja renderizado novamente, colocar um componente conectado na \xe1rvore de componentes logo acima do componente usando ",Object(r.b)("inlineCode",{parentName:"li"},"useSelector")," ir\xe1 prevenir esses problemas, pois desde que o componente conectado seja renderizado novamente devido \xe0 mesma atualiza\xe7\xe3o de armazenamento do componente hooks.")),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},Object(r.b)("strong",{parentName:"p"},"Note"),": For a longer description of this issue, see ",Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"https://kaihao.dev/posts/Stale-props-and-zombie-children-in-Redux"}),'"Stale props and zombie children in Redux" by Kai Hao'),", ",Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"https://gist.github.com/markerikson/faac6ae4aca7b82a058e13216a7888ec"}),"this chat log that describes the problems in more detail"),", and ",Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"https://github.com/reduxjs/react-redux/issues/1179"}),"issue #1179"),".\n",Object(r.b)("strong",{parentName:"p"},"Observa\xe7\xe3o"),": para obter uma descri\xe7\xe3o mais detalhada desse problema, consulte ",Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"https://kaihao.dev/posts/Stale-props-and-zombie-children-in-Redux"}),'"Props obsoletas e zombie children em Redux" por Kai Hao'),", ",Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"https://gist.github.com/markerikson/faac6ae4aca7b82a058e13216a7888ec"}),"este log de bate-papo que descreve os problemas com mais detalhes")," e a ",Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"https://github.com/reduxjs/react-redux/issues/1179"}),"issue #1179"),".")),Object(r.b)("h3",{id:"desempenho"},"Desempenho"),Object(r.b)("p",null,"Como mencionado anteriormente, por padr\xe3o ",Object(r.b)("inlineCode",{parentName:"p"},"useSelector()")," far\xe1 uma compara\xe7\xe3o de igualdade de refer\xeancia do valor selecionado ao executar a fun\xe7\xe3o selector ap\xf3s uma action ser despachada, e s\xf3 far\xe1 com que o componente seja renderizado novamente se o valor selecionado for alterado. No entanto, ao contr\xe1rio de ",Object(r.b)("inlineCode",{parentName:"p"},"connect()"),", ",Object(r.b)("inlineCode",{parentName:"p"},"useSelector()")," n\xe3o evita que o componente seja renderizado novamente devido \xe0 sua re-renderiza\xe7\xe3o pai, mesmo se os props do componente n\xe3o mudaram."),Object(r.b)("p",null,"Se mais otimiza\xe7\xf5es de desempenho forem necess\xe1rias, voc\xea pode considerar envolver seu componente de fun\xe7\xe3o com ",Object(r.b)("inlineCode",{parentName:"p"},"React.memo()"),":"),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-jsx"}),"const CounterComponent = ({ name }) => {\n  const counter = useSelector(state => state.counter)\n  return (\n    <div>\n      {name}: {counter}\n    </div>\n  )\n}\n\nexport const MemoizedCounterComponent = React.memo(CounterComponent)\n")),Object(r.b)("h2",{id:"receita-de-hooks"},"Receita de Hooks"),Object(r.b)("p",null,"N\xf3s reduzimos nossa API de hooks da vers\xe3o alfa original, focando em um conjunto m\xednimo de primitivas de API. No entanto, voc\xea ainda pode querer usar algumas das abordagens que tentamos em seus pr\xf3prios aplicativos. Esses exemplos devem estar prontos para copiar e colar em sua pr\xf3pria base de c\xf3digo."),Object(r.b)("h3",{id:"receita-useactions"},"Receita: ",Object(r.b)("inlineCode",{parentName:"h3"},"useActions()")),Object(r.b)("p",null,"Este hook estava em nossa vers\xe3o alfa original, mas foi removido em ",Object(r.b)("inlineCode",{parentName:"p"},"v7.1.0-alpha.4"),", com base na ",Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"https://github.com/reduxjs/react-redux/issues/1252#issuecomment-488160930"}),"sugest\xe3o de Dan Abramov"),'.\nEssa sugest\xe3o foi baseada em "binding action creators" n\xe3o sendo t\xe3o \xfateis em um caso de uso baseado em hooks, e causando muita sobrecarga conceitual e complexidade sint\xe1tica.'),Object(r.b)("p",null,"You should probably prefer to call the ",Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"#usedispatch"}),Object(r.b)("inlineCode",{parentName:"a"},"useDispatch"))," hook in your components to retrieve a reference to ",Object(r.b)("inlineCode",{parentName:"p"},"dispatch"),", and manually call ",Object(r.b)("inlineCode",{parentName:"p"},"dispatch(someActionCreator())")," in callbacks and effects as needed. You may also use the Redux ",Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"https://redux.js.org/api/bindactioncreators"}),Object(r.b)("inlineCode",{parentName:"a"},"bindActionCreators")),' function in your own code to bind action creators, or "manually" bind them like ',Object(r.b)("inlineCode",{parentName:"p"},"const boundAddTodo = (text) => dispatch(addTodo(text))"),"."),Object(r.b)("p",null,"However, if you'd like to still use this hook yourself, here's a copy-pastable version that supports passing in action\ncreators as a single function, an array, or an object."),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"import { bindActionCreators } from 'redux'\nimport { useDispatch } from 'react-redux'\nimport { useMemo } from 'react'\n\nexport function useActions(actions, deps) {\n  const dispatch = useDispatch()\n  return useMemo(\n    () => {\n      if (Array.isArray(actions)) {\n        return actions.map(a => bindActionCreators(a, dispatch))\n      }\n      return bindActionCreators(actions, dispatch)\n    },\n    deps ? [dispatch, ...deps] : [dispatch]\n  )\n}\n")),Object(r.b)("p",null,"Este hook estava em nossa vers\xe3o alfa original, mas foi removido em ",Object(r.b)("inlineCode",{parentName:"p"},"v7.1.0-alpha.4"),", com base na ",Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"https://github.com/reduxjs/react-redux/issues/1252#issuecomment-488160930"}),"sugest\xe3o de Dan Abramov"),'.\nEssa sugest\xe3o foi baseada em "binding action creators" n\xe3o sendo t\xe3o \xfateis em um caso de uso baseado em hooks, e causando muita sobrecarga conceitual e complexidade sint\xe1tica.'),Object(r.b)("p",null,"Voc\xea provavelmente deve preferir chamar o hook ",Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"#usedispatch"}),Object(r.b)("inlineCode",{parentName:"a"},"useDispatch"))," em seus componentes para recuperar uma refer\xeancia a ",Object(r.b)("inlineCode",{parentName:"p"},"dispatch"),", e chamar manualmente ",Object(r.b)("inlineCode",{parentName:"p"},"dispatch (someActionCreator())")," em callbacks e efeitos conforme necess\xe1rio. Voc\xea tamb\xe9m pode usar a fun\xe7\xe3o Redux ",Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"https://redux.js.org/api/bindactioncreators"}),Object(r.b)("inlineCode",{parentName:"a"},"bindActionCreators")),' em seu pr\xf3prio c\xf3digo para vincular action creators, ou vincul\xe1-los "manualmente" como ',Object(r.b)("inlineCode",{parentName:"p"},"const boundAddTodo = (text) => dispatch(addTodo(text)) "),"."),Object(r.b)("p",null,"No entanto, se voc\xea ainda quiser usar esse hook, aqui est\xe1 uma vers\xe3o que pode ser copiada e colada, que suporta a passagem de action creators como uma \xfanica fun\xe7\xe3o, um array ou um objeto."),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"import { bindActionCreators } from 'redux'\nimport { useDispatch } from 'react-redux'\nimport { useMemo } from 'react'\n\nexport function useActions(actions, deps) {\n  const dispatch = useDispatch()\n  return useMemo(\n    () => {\n      if (Array.isArray(actions)) {\n        return actions.map(a => bindActionCreators(a, dispatch))\n      }\n      return bindActionCreators(actions, dispatch)\n    },\n    deps ? [dispatch, ...deps] : [dispatch]\n  )\n}\n")),Object(r.b)("h3",{id:"recipe-useshallowequalselector"},"Recipe: ",Object(r.b)("inlineCode",{parentName:"h3"},"useShallowEqualSelector()")),Object(r.b)("pre",null,Object(r.b)("code",Object(t.a)({parentName:"pre"},{className:"language-js"}),"import { useSelector, shallowEqual } from 'react-redux'\n\nexport function useShallowEqualSelector(selector) {\n  return useSelector(selector, shallowEqual)\n}\n")),Object(r.b)("h3",{id:"considera\xe7\xf5es-adicionais-ao-usar-hooks"},"Considera\xe7\xf5es adicionais ao usar hooks"),Object(r.b)("p",null,"Existem algumas compensa\xe7\xf5es arquitet\xf4nicas a serem levadas em considera\xe7\xe3o ao decidir se usar\xe1 hooks ou n\xe3o. Mark Erikson resume isso muito bem em suas duas postagens de blog ",Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"https://blog.isquaredsoftware.com/2019/07/blogged-answers-thoughts-on-hooks/"}),"Thoughts on React Hooks, Redux e Separation of Concerns")," e ",Object(r.b)("a",Object(t.a)({parentName:"p"},{href:"https://blog.isquaredsoftware.com/2019/09/presentation-hooks-hocs-tradeoffs/"}),"Hooks, HOCs e Tradeoffs"),"."))}p.isMDXComponent=!0},147:function(e,o,a){"use strict";a.d(o,"a",(function(){return u})),a.d(o,"b",(function(){return b}));var t=a(0),n=a.n(t);function r(e,o,a){return o in e?Object.defineProperty(e,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[o]=a,e}function s(e,o){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),a.push.apply(a,t)}return a}function c(e){for(var o=1;o<arguments.length;o++){var a=null!=arguments[o]?arguments[o]:{};o%2?s(Object(a),!0).forEach((function(o){r(e,o,a[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(a,o))}))}return e}function i(e,o){if(null==e)return{};var a,t,n=function(e,o){if(null==e)return{};var a,t,n={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],o.indexOf(a)>=0||(n[a]=e[a]);return n}(e,o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],o.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=n.a.createContext({}),p=function(e){var o=n.a.useContext(d),a=o;return e&&(a="function"==typeof e?e(o):c(c({},o),e)),a},u=function(e){var o=p(e.components);return n.a.createElement(d.Provider,{value:o},e.children)},m={inlineCode:"code",wrapper:function(e){var o=e.children;return n.a.createElement(n.a.Fragment,{},o)}},l=n.a.forwardRef((function(e,o){var a=e.components,t=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(a),l=t,b=u["".concat(s,".").concat(l)]||u[l]||m[l]||r;return a?n.a.createElement(b,c(c({ref:o},d),{},{components:a})):n.a.createElement(b,c({ref:o},d))}));function b(e,o){var a=arguments,t=o&&o.mdxType;if("string"==typeof e||t){var r=a.length,s=new Array(r);s[0]=l;var c={};for(var i in o)hasOwnProperty.call(o,i)&&(c[i]=o[i]);c.originalType=e,c.mdxType="string"==typeof e?e:t,s[1]=c;for(var d=2;d<r;d++)s[d]=a[d];return n.a.createElement.apply(null,s)}return n.a.createElement.apply(null,a)}l.displayName="MDXCreateElement"}}]);