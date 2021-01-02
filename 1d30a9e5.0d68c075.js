(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{147:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=u(r),b=n,m=d["".concat(c,".").concat(b)]||d[b]||l[b]||o;return r?a.a.createElement(m,i(i({ref:t},s),{},{components:r})):a.a.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=b;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},70:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(6),o=(r(0),r(147)),c={id:"quick-start",title:"Come\xe7o r\xe1pido",hide_title:!0,sidebar_label:"Come\xe7o r\xe1pido"},i={unversionedId:"introduction/quick-start",id:"version-7.2/introduction/quick-start",isDocsHomePage:!1,title:"Come\xe7o r\xe1pido",description:"Come\xe7o r\xe1pido",source:"@site/versioned_docs\\version-7.2\\introduction\\quick-start.md",slug:"/introduction/quick-start",permalink:"/react-redux/introduction/quick-start",version:"7.2",sidebar_label:"Come\xe7o r\xe1pido",sidebar:"version-7.2/docs",next:{title:"Tutorial B\xe1sico",permalink:"/react-redux/introduction/basic-tutorial"}},p=[{value:"Instala\xe7\xe3o",id:"instala\xe7\xe3o",children:[]},{value:"<code>Provider</code>",id:"provider",children:[]},{value:"<code>connect()</code>",id:"connect",children:[]},{value:"Ajuda e discuss\xe3o",id:"ajuda-e-discuss\xe3o",children:[]}],s={rightToc:p};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"come\xe7o-r\xe1pido"},"Come\xe7o r\xe1pido"),Object(o.b)("p",null,Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/reduxjs/react-redux"}),"React Redux")," \xe9 a liga\xe7\xe3o oficial do ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://reactjs.org/"}),"React")," para o  ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://redux.js.org/"}),"Redux"),". Ele permite que seus componentes React leiam dados de uma Redux store e despache actions para a store para atualizar os dados."),Object(o.b)("h2",{id:"instala\xe7\xe3o"},"Instala\xe7\xe3o"),Object(o.b)("p",null,"React Redux 7.2 requer ",Object(o.b)("strong",{parentName:"p"},"React 16.8.3 ou mais novo.")),Object(o.b)("p",null,"Para usar o React Redux com seu aplicativo React:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npm install react-redux\n")),Object(o.b)("p",null,"ou"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"yarn add react-redux\n")),Object(o.b)("p",null,"Voc\xea tamb\xe9m precisar\xe1 ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://redux.js.org/introduction/installation"}),"instalar o Redux")," e ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://redux.js.org/recipes/configuring-your-store/"}),"configurar uma store Redux")," em seu aplicativo."),Object(o.b)("h2",{id:"provider"},Object(o.b)("inlineCode",{parentName:"h2"},"Provider")),Object(o.b)("p",null,"React Redux fornece o componente ",Object(o.b)("inlineCode",{parentName:"p"},"<Provider />"),", que disponibiliza a store Redux para o resto do seu aplicativo:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import React from 'react'\nimport ReactDOM from 'react-dom'\n\nimport { Provider } from 'react-redux'\nimport store from './store'\n\nimport App from './App'\n\nconst rootElement = document.getElementById('root')\nReactDOM.render(\n  <Provider store={store}>\n    <App />\n  </Provider>,\n  rootElement\n)\n")),Object(o.b)("h2",{id:"connect"},Object(o.b)("inlineCode",{parentName:"h2"},"connect()")),Object(o.b)("p",null,"React Redux fornece a fun\xe7\xe3o ",Object(o.b)("inlineCode",{parentName:"p"},"connect()")," para voc\xea conectar seu componente \xe0 loja."),Object(o.b)("p",null,"Normalmente, voc\xea chamar\xe1 ",Object(o.b)("inlineCode",{parentName:"p"},"connect()")," desta forma:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"import { connect } from 'react-redux'\nimport { increment, decrement, reset } from './actionCreators'\n\n// const Counter = ...\n\nconst mapStateToProps = (state /*, ownProps*/) => {\n  return {\n    counter: state.counter,\n  }\n}\n\nconst mapDispatchToProps = { increment, decrement, reset }\n\nexport default connect(mapStateToProps, mapDispatchToProps)(Counter)\n")),Object(o.b)("h2",{id:"ajuda-e-discuss\xe3o"},"Ajuda e discuss\xe3o"),Object(o.b)("p",null,"O ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(n.a)({parentName:"strong"},{href:"https://discord.gg/0ZcbPKXt5bZ6au5t"}),"canal #redux"))," da ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(n.a)({parentName:"strong"},{href:"http://www.reactiflux.com"}),"comunidade Reactiflux no Discord"))," \xe9 nosso recurso oficial para todas as quest\xf5es relacionadas ao aprendizado e ao uso do Redux. Reactiflux \xe9 um \xf3timo lugar para sair, fazer perguntas e aprender - junte-se a n\xf3s!"),Object(o.b)("p",null,"Voc\xea tamb\xe9m pode fazer perguntas sobre ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://stackoverflow.com"}),"Stack Overflow")," usando a ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("a",Object(n.a)({parentName:"strong"},{href:"https://stackoverflow.com/questions/tagged/redux"}),"tag #redux")),"."))}u.isMDXComponent=!0}}]);