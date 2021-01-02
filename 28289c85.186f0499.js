(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{147:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),d=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=d(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=d(n),b=o,m=l["".concat(c,".").concat(b)]||l[b]||p[b]||a;return n?r.a.createElement(m,s(s({ref:t},u),{},{components:n})):r.a.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=b;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var u=2;u<a;u++)c[u]=n[u];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},74:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return d}));var o=n(2),r=n(6),a=(n(0),n(147)),c={id:"accessing-store",title:"Accessing the Store",hide_title:!0,sidebar_label:"Accessing the Store"},s={unversionedId:"using-react-redux/accessing-store",id:"version-7.0/using-react-redux/accessing-store",isDocsHomePage:!1,title:"Accessing the Store",description:"Accessing the Store",source:"@site/versioned_docs\\version-7.0\\using-react-redux\\accessing-store.md",slug:"/using-react-redux/accessing-store",permalink:"/react-redux/7.0/using-react-redux/accessing-store",version:"7.0",sidebar_label:"Accessing the Store",sidebar:"version-7.0/docs",previous:{title:"Connect: Dispatching Actions with mapDispatchToProps",permalink:"/react-redux/7.0/using-react-redux/connect-mapdispatch"},next:{title:"Connect",permalink:"/react-redux/7.0/api/connect"}},i=[{value:"Understanding Context Usage",id:"understanding-context-usage",children:[]},{value:"Providing Custom Context",id:"providing-custom-context",children:[]},{value:"Multiple Stores",id:"multiple-stores",children:[]},{value:"Using <code>ReactReduxContext</code> Directly",id:"using-reactreduxcontext-directly",children:[]},{value:"Further Resources",id:"further-resources",children:[]}],u={rightToc:i};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"accessing-the-store"},"Accessing the Store"),Object(a.b)("p",null,"React Redux provides APIs that allow your components to dispatch actions and subscribe to data updates from the store."),Object(a.b)("p",null,"As part of that, React Redux abstracts away the details of which store you are using, and the exact details of how that\nstore interaction is handled. In typical usage, your own components should never need to care about those details, and\nwon't ever reference the store directly. React Redux also internally handles the details of how the store and state are\npropagated to connected components, so that this works as expected by default."),Object(a.b)("p",null,"However, there may be certain use cases where you may need to customize how the store and state are propagated to\nconnected components, or access the store directly. Here are some examples of how to do this."),Object(a.b)("h2",{id:"understanding-context-usage"},"Understanding Context Usage"),Object(a.b)("p",null,"Internally, React Redux uses ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://reactjs.org/docs/context.html"}),'React\'s "context" feature')," to make the\nRedux store accessible to deeply nested connected components. As of React Redux version 6, this is normally handled\nby a single default context object instance generated by ",Object(a.b)("inlineCode",{parentName:"p"},"React.createContext()"),", called ",Object(a.b)("inlineCode",{parentName:"p"},"ReactReduxContext"),"."),Object(a.b)("p",null,"React Redux's ",Object(a.b)("inlineCode",{parentName:"p"},"<Provider>")," component uses ",Object(a.b)("inlineCode",{parentName:"p"},"<ReactReduxContext.Provider>")," to put the Redux store and the current store\nstate into context, and ",Object(a.b)("inlineCode",{parentName:"p"},"connect")," uses ",Object(a.b)("inlineCode",{parentName:"p"},"<ReactReduxContext.Consumer>")," to read those values and handle updates."),Object(a.b)("h2",{id:"providing-custom-context"},"Providing Custom Context"),Object(a.b)("p",null,"Instead of using the default context instance from React Redux, you may supply your own custom context instance."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"<Provider context={MyContext} store={store}>\n  <App />\n</Provider>\n")),Object(a.b)("p",null,"If you supply a custom context, React Redux will use that context instance instead of the one it creates and exports by default."),Object(a.b)("p",null,"After you\u2019ve supplied the custom context to ",Object(a.b)("inlineCode",{parentName:"p"},"<Provider />"),", you will need to supply this context instance to all of your connected components that are expected to connect to the same store:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"// You can pass the context as an option to connect\nexport default connect(\n  mapState,\n  mapDispatch,\n  null,\n  { context: MyContext }\n)(MyComponent)\n\n// or, call connect as normal to start\nconst ConnectedComponent = connect(\n  mapState,\n  mapDispatch\n)(MyComponent)\n\n// Later, pass the custom context as a prop to the connected component\n;<ConnectedComponent context={MyContext} />\n")),Object(a.b)("p",null,"The following runtime error occurs when React Redux does not find a store in the context it is looking. For example:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"You provided a custom context instance to ",Object(a.b)("inlineCode",{parentName:"li"},"<Provider />"),", but did not provide the same instance (or did not provide any) to your connected components."),Object(a.b)("li",{parentName:"ul"},"You provided a custom context to your connected component, but did not provide the same instance (or did not provide any) to ",Object(a.b)("inlineCode",{parentName:"li"},"<Provider />"),".")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Invariant Violation"),Object(a.b)("p",{parentName:"blockquote"},'Could not find "store" in the context of "Connect(MyComponent)". Either wrap the root component in a ',Object(a.b)("inlineCode",{parentName:"p"},"<Provider>"),", or pass a custom React context provider to ",Object(a.b)("inlineCode",{parentName:"p"},"<Provider>")," and the corresponding React context consumer to Connect(Todo) in connect options.")),Object(a.b)("h2",{id:"multiple-stores"},"Multiple Stores"),Object(a.b)("p",null,Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://redux.js.org/api/store#a-note-for-flux-users"}),"Redux was designed to use a single store"),".\nHowever, if you are in an unavoidable position of needing to use multiple stores, with v6 you may do so by providing (multiple) custom contexts.\nThis also provides a natural isolation of the stores as they live in separate context instances."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"// a naive example\nconst ContextA = React.createContext();\nconst ContextB = React.createContext();\n\n// assuming reducerA and reducerB are proper reducer functions\nconst storeA = createStore(reducerA);\nconst storeB = createStore(reducerB);\n\n// supply the context instances to Provider\nfunction App() {\n  return (\n    <Provider store={storeA} context={ContextA} />\n      <Provider store={storeB} context={ContextB}>\n        <RootModule />\n      </Provider>\n    </Provider>\n  );\n}\n\n// fetch the corresponding store with connected components\n// you need to use the correct context\nconnect(mapStateA, null, null, { context: ContextA })(MyComponentA)\n\n// You may also pass the alternate context instance directly to the connected component instead\n<ConnectedMyComponentA context={ContextA} />\n\n// it is possible to chain connect()\n// in this case MyComponent will receive merged props from both stores\ncompose(\n  connect(mapStateA, null, null, { context: ContextA }),\n  connect(mapStateB, null, null, { context: ContextB })\n)(MyComponent);\n")),Object(a.b)("h2",{id:"using-reactreduxcontext-directly"},"Using ",Object(a.b)("inlineCode",{parentName:"h2"},"ReactReduxContext")," Directly"),Object(a.b)("p",null,"In rare cases, you may need to access the Redux store directly in your own components. This can be done by rendering\nthe appropriate context consumer yourself, and accessing the ",Object(a.b)("inlineCode",{parentName:"p"},"store")," field out of the context value."),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("strong",{parentName:"p"},"Note"),": This is ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("em",{parentName:"strong"},"not")," considered part of the React Redux public API, and may break without notice"),". We do recognize\nthat the community has use cases where this is necessary, and will try to make it possible for users to build additional\nfunctionality on top of React Redux, but our specific use of context is considered an implementation detail.\nIf you have additional use cases that are not sufficiently covered by the current APIs, please file an issue to discuss\npossible API improvements.")),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"import { ReactReduxContext } from 'react-redux'\n\n// in your connected component\nfunction MyConnectedComponent() {\n  return (\n    <ReactReduxContext.Consumer>\n      {({ store }) => {\n        // do something useful with the store, like passing it to a child\n        // component where it can be used in lifecycle methods\n      }}\n    </ReactReduxContext.Consumer>\n  )\n}\n")),Object(a.b)("h2",{id:"further-resources"},"Further Resources"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"CodeSandbox example: ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://codesandbox.io/s/92pm9n2kl4"}),"A reading list app with theme using a separate store"),", implemented by providing (multiple) custom context(s)."),Object(a.b)("li",{parentName:"ul"},"Related issues:",Object(a.b)("ul",{parentName:"li"},Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/reduxjs/react-redux/issues/1132"}),"#1132: Update docs for using a different store key")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/reduxjs/react-redux/issues/1126"}),"#1126: ",Object(a.b)("inlineCode",{parentName:"a"},"<Provider>")," misses state changes that occur between when its constructor runs and when it mounts"))))))}d.isMDXComponent=!0}}]);