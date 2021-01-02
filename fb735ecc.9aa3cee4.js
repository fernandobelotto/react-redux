(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{142:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return i})),t.d(a,"metadata",(function(){return c})),t.d(a,"rightToc",(function(){return s})),t.d(a,"default",(function(){return u}));var o=t(2),r=t(6),n=(t(0),t(147)),i={id:"why-use-react-redux",title:"Por que usar React Redux?",hide_title:!0,sidebar_label:"Por que usar React Redux?"},c={unversionedId:"introduction/why-use-react-redux",id:"introduction/why-use-react-redux",isDocsHomePage:!1,title:"Por que usar React Redux?",description:"Por que usar React Redux?",source:"@site/..\\docs\\introduction\\why-use-react-redux.md",slug:"/introduction/why-use-react-redux",permalink:"/react-redux/next/introduction/why-use-react-redux",version:"current",sidebar_label:"Por que usar React Redux?",sidebar:"docs",previous:{title:"Tutorial B\xe1sico",permalink:"/react-redux/next/introduction/basic-tutorial"},next:{title:"Connect: Extracting Data with mapStateToProps",permalink:"/react-redux/next/using-react-redux/connect-mapstate"}},s=[{value:"Integrando Redux com uma UI",id:"integrando-redux-com-uma-ui",children:[]},{value:"Raz\xf5es para usar o React Redux",id:"raz\xf5es-para-usar-o-react-redux",children:[{value:"\xc9 a a biblioteca oficial de liga\xe7\xe3o do Redux para o React",id:"\xe9-a-a-biblioteca-oficial-de-liga\xe7\xe3o-do-redux-para-o-react",children:[]},{value:"Ela incentiva a boa arquitetura React",id:"ela-incentiva-a-boa-arquitetura-react",children:[]},{value:"Ela implementa otimiza\xe7\xf5es de desempenho para voc\xea",id:"ela-implementa-otimiza\xe7\xf5es-de-desempenho-para-voc\xea",children:[]},{value:"Suporte da comunidade",id:"suporte-da-comunidade",children:[]}]},{value:"Links e refer\xeancias",id:"links-e-refer\xeancias",children:[{value:"Compreendendo o React Redux",id:"compreendendo-o-react-redux",children:[]},{value:"Recursos da comunidade",id:"recursos-da-comunidade",children:[]}]}],d={rightToc:s};function u(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(n.b)("wrapper",Object(o.a)({},d,t,{components:a,mdxType:"MDXLayout"}),Object(n.b)("h1",{id:"por-que-usar-react-redux"},"Por que usar React Redux?"),Object(n.b)("p",null,"O pr\xf3prio Redux \xe9 uma biblioteca independente que pode ser usada com qualquer estrutura ou camada de UI, incluindo React, Angular, Vue, Ember e vanilla JS. Embora Redux e React sejam comumente usados \u200b\u200bjuntos, eles s\xe3o independentes um do outro."),Object(n.b)("p",null,'Se voc\xea estiver usando Redux com qualquer tipo de estrutura de UI, normalmente usar\xe1 uma biblioteca de "liga\xe7\xe3o de UI" para amarrar Redux com sua estrutura de UI, em vez de interagir diretamente com a store a partir de seu c\xf3digo de UI.'),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"React Redux \xe9 a biblioteca oficial de liga\xe7\xe3o do React com o Redux"),". Se estiver usando Redux e React juntos, voc\xea tamb\xe9m deve usar React Redux para conectar essas duas bibliotecas."),Object(n.b)("p",null,'Para entender por que voc\xea deve usar o React Redux, pode ser \xfatil entender o que uma "biblioteca de vincula\xe7\xe3o de interface do usu\xe1rio" faz.'),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"Nota"),": Se voc\xea tiver d\xfavidas sobre se deve usar Redux em geral, consulte estes artigos para uma discuss\xe3o de quando e por que voc\xea pode querer usar Redux, e como ele deve ser usado:"),Object(n.b)("ul",{parentName:"blockquote"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://redux.js.org/introduction/motivation"}),"Redux docs: Motiva\xe7\xe3o")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://redux.js.org/faq/general#when-should-i-use-redux"}),"Redux docs: Perguntas Frequentes - Quando devo usar Redux?")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367"}),"Voc\xea pode n\xe3o precisar de redux")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://blog.isquaredsoftware.com/2017/05/idiomatic-redux-tao-of-redux-part-1/"}),"Redux idiom\xe1tico: o Tao do Redux, Part 1 - Implementa\xe7\xe3o e Inten\xe7\xe3o")))),Object(n.b)("h2",{id:"integrando-redux-com-uma-ui"},"Integrando Redux com uma UI"),Object(n.b)("p",null,"Usar Redux com ",Object(n.b)("em",{parentName:"p"},"qualquer")," camada de IU requer ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://blog.isquaredsoftware.com/presentations/workshops/redux-fundamentals/ui-layer.html#/4"}),"o mesmo conjunto consistente de etapas"),":"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Crie uma Redux store"),Object(n.b)("li",{parentName:"ol"},"Subscribe para atualiza\xe7\xf5es"),Object(n.b)("li",{parentName:"ol"},"Dentro da callback de subscription:",Object(n.b)("ol",{parentName:"li"},Object(n.b)("li",{parentName:"ol"},"Obtenha o estado atual da store"),Object(n.b)("li",{parentName:"ol"},"Extraia os dados necess\xe1rios para esta parte da UI"),Object(n.b)("li",{parentName:"ol"},"Atualize a UI com os dados"))),Object(n.b)("li",{parentName:"ol"},"Se necess\xe1rio, renderize a UI com o estado inicial"),Object(n.b)("li",{parentName:"ol"},"Respond to UI inputs by dispatching Redux actions")),Object(n.b)("p",null,"Embora seja poss\xedvel escrever essa l\xf3gica \xe0 m\xe3o, isso se tornaria muito repetitivo. Al\xe9m disso, otimizar o desempenho da IU exigiria uma l\xf3gica complicada."),Object(n.b)("p",null,"O processo de assinatura da store, verifica\xe7\xe3o de dados atualizados e ativa\xe7\xe3o de uma nova renderiza\xe7\xe3o pode ser mais gen\xe9rico e reutiliz\xe1vel. ",Object(n.b)("strong",{parentName:"p"},"Uma biblioteca de liga\xe7\xe3o de IU como a React Redux lida com a l\xf3gica de intera\xe7\xe3o coma a store, ent\xe3o voc\xea n\xe3o precisa escrever esse c\xf3digo sozinho.")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"Nota"),": Para uma vis\xe3o mais aprofundada de como React Redux funciona internamente e como ele lida com a intera\xe7\xe3o com a store para voc\xea, consulte ",Object(n.b)("strong",{parentName:"p"},Object(n.b)("a",Object(o.a)({parentName:"strong"},{href:"https://blog.isquaredsoftware.com/2018/11/react-redux-history-implementation/"}),"Redux idiom\xe1tico: a hist\xf3ria e a implementa\xe7\xe3o do React Redux")),".")),Object(n.b)("h2",{id:"raz\xf5es-para-usar-o-react-redux"},"Raz\xf5es para usar o React Redux"),Object(n.b)("h3",{id:"\xe9-a-a-biblioteca-oficial-de-liga\xe7\xe3o-do-redux-para-o-react"},"\xc9 a a biblioteca oficial de liga\xe7\xe3o do Redux para o React"),Object(n.b)("p",null,"Embora o Redux possa ser usado com qualquer camada da UI, ele foi originalmente projetado e destinado para ser usado com o React. Existem ",Object(n.b)("a",Object(o.a)({parentName:"p"},{href:"https://redux.js.org/introduction/ecosystem#library-integration-and-bindings"}),"camadas de liga\xe7\xe3o de UI para muitos outros frameworks"),", mas React Redux \xe9 mantido diretamente pela equipe do Redux."),Object(n.b)("p",null,"Como \xe9 a biblioteca oficial do Redux para React, o React Redux \xe9 mantido atualizado com quaisquer altera\xe7\xf5es de API de qualquer uma das bibliotecas, para garantir que seus componentes do React se comportem conforme o esperado. O uso pretendido adota os princ\xedpios de design do React - escrevendo componentes declarativos."),Object(n.b)("h3",{id:"ela-incentiva-a-boa-arquitetura-react"},"Ela incentiva a boa arquitetura React"),Object(n.b)("p",null,"Os componentes do React s\xe3o muito parecidos com fun\xe7\xf5es. Embora seja poss\xedvel escrever todo o seu c\xf3digo em uma \xfanica fun\xe7\xe3o, geralmente \xe9 melhor dividir essa l\xf3gica em fun\xe7\xf5es menores, cada uma com uma tarefa espec\xedfica, tornando-as mais f\xe1ceis de entender."),Object(n.b)("p",null,'Da mesma forma, embora voc\xea possa escrever grandes componentes React que lidam com muitas tarefas diferentes, geralmente \xe9 melhor dividir os componentes com base nas responsabilidades. Em particular, \xe9 comum ter componentes de "cont\xeainer" que s\xe3o respons\xe1veis \u200b\u200bpor coletar e gerenciar algum tipo de dados e componentes de "apresenta\xe7\xe3o" que simplesmente exibem a interface do usu\xe1rio com base em quaisquer dados que receberam por props.'),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"The React Redux ",Object(n.b)("inlineCode",{parentName:"strong"},"connect"),' function generates "container" wrapper components that handle the process of interacting with the store for you'),". That way, your own components can focus on other tasks, whether it be collecting other data, or just displaying a piece of the UI. In addition, ",Object(n.b)("strong",{parentName:"p"},Object(n.b)("inlineCode",{parentName:"strong"},"connect")," abstracts away the question of ",Object(n.b)("em",{parentName:"strong"},"which")," store is being used, making your own components more reusable"),"."),Object(n.b)("p",null,"Como um princ\xedpio geral de arquitetura, ",Object(n.b)("strong",{parentName:"p"},'queremos manter nossos pr\xf3prios componentes "inconscientes" do Redux'),". Eles devem simplesmente receber dados e fun\xe7\xf5es como par\xe2metros, assim como qualquer outro componente do React. Em \xfaltima an\xe1lise, isso torna mais f\xe1cil testar e reutilizar seus pr\xf3prios componentes."),Object(n.b)("h3",{id:"ela-implementa-otimiza\xe7\xf5es-de-desempenho-para-voc\xea"},"Ela implementa otimiza\xe7\xf5es de desempenho para voc\xea"),Object(n.b)("p",null,"O React \xe9 geralmente r\xe1pido, mas por padr\xe3o qualquer atualiza\xe7\xe3o de um componente far\xe1 com que o React renderize novamente todos os componentes dentro daquela parte da \xe1rvore de componentes. Isso exige trabalho e, se os dados de um determinado componente n\xe3o foram alterados, provavelmente a nova renderiza\xe7\xe3o \xe9 um esfor\xe7o desperdi\xe7ado porque a sa\xedda da IU solicitada seria a mesma."),Object(n.b)("p",null,"Se o desempenho for uma preocupa\xe7\xe3o, a melhor maneira de melhorar o desempenho \xe9 pular as novas renderiza\xe7\xf5es desnecess\xe1rias, para que os componentes s\xf3 sejam renderizados novamente quando seus dados forem realmente alterados. ",Object(n.b)("strong",{parentName:"p"},"A React Redux implementa muitas otimiza\xe7\xf5es de desempenho internamente, de modo que seu pr\xf3prio componente s\xf3 \xe9 renderizado novamente quando realmente precisa.")),Object(n.b)("p",null,"Al\xe9m disso, ao conectar v\xe1rios componentes em sua \xe1rvore de componentes React, voc\xea pode garantir que cada componente conectado extraia apenas as partes espec\xedficas de dados do estado de armazenamento que s\xe3o necess\xe1rias para aquele componente. Isso significa que seu pr\xf3prio componente precisar\xe1 ser renderizado novamente com menos frequ\xeancia, porque na maioria das vezes esses dados espec\xedficos n\xe3o mudaram."),Object(n.b)("h3",{id:"suporte-da-comunidade"},"Suporte da comunidade"),Object(n.b)("p",null,"Como a biblioteca de liga\xe7\xe3o oficial para React e Redux, React Redux tem uma grande comunidade de usu\xe1rios. Isso torna mais f\xe1cil pedir ajuda, aprender sobre as melhores pr\xe1ticas, usar bibliotecas que se baseiam no React Redux e reutilizar seu conhecimento em diferentes aplicativos."),Object(n.b)("h2",{id:"links-e-refer\xeancias"},"Links e refer\xeancias"),Object(n.b)("h3",{id:"compreendendo-o-react-redux"},"Compreendendo o React Redux"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://blog.isquaredsoftware.com/2018/11/react-redux-history-implementation/"}),"Redux idiom\xe1tico: a hist\xf3ria e a implementa\xe7\xe3o do React Redux")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://gist.github.com/gaearon/1d19088790e70ac32ea636c025ba424e"}),Object(n.b)("inlineCode",{parentName:"a"},"connect.js")," Explicado")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://blog.isquaredsoftware.com/2018/06/redux-fundamentals-workshop-slides/"}),"slides do workshop Redux Fundamentals"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://blog.isquaredsoftware.com/presentations/workshops/redux-fundamentals/ui-layer.html"}),"Integra\xe7\xe3o de camada de UI")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://blog.isquaredsoftware.com/presentations/workshops/redux-fundamentals/react-redux.html"}),"Usando React Redux"))))),Object(n.b)("h3",{id:"recursos-da-comunidade"},"Recursos da comunidade"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Canal no Discord: ",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://discord.gg/0ZcbPKXt5bZ6au5t"}),"#redux no Reactiflux")," (",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://reactiflux.com"}),"Reactiflux link de convite"),")"),Object(n.b)("li",{parentName:"ul"},"Stack Overflow t\xf3picos: ",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://stackoverflow.com/questions/tagged/redux"}),"Redux"),", ",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://stackoverflow.com/questions/tagged/redux"}),"React Redux")),Object(n.b)("li",{parentName:"ul"},"Reddit: ",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://www.reddit.com/r/reactjs/"}),"/r/reactjs"),", ",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://www.reddit.com/r/reduxjs/"}),"/r/reduxjs")),Object(n.b)("li",{parentName:"ul"},"GitHub issues (relat\xf3rios de bugs e solicita\xe7\xf5es de recursos): ",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/reduxjs/react-redux/issues"}),"https://github.com/reduxjs/react-redux/issues")),Object(n.b)("li",{parentName:"ul"},"Tutoriais, artigos e outros recursos: ",Object(n.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/markerikson/react-redux-links"}),"React/Redux Links"))))}u.isMDXComponent=!0},147:function(e,a,t){"use strict";t.d(a,"a",(function(){return m})),t.d(a,"b",(function(){return b}));var o=t(0),r=t.n(o);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,o,r=function(e,a){if(null==e)return{};var t,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=r.a.createContext({}),u=function(e){var a=r.a.useContext(d),t=a;return e&&(t="function"==typeof e?e(a):c(c({},a),e)),t},m=function(e){var a=u(e.components);return r.a.createElement(d.Provider,{value:a},e.children)},l={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},p=r.a.forwardRef((function(e,a){var t=e.components,o=e.mdxType,n=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=u(t),p=o,b=m["".concat(i,".").concat(p)]||m[p]||l[p]||n;return t?r.a.createElement(b,c(c({ref:a},d),{},{components:t})):r.a.createElement(b,c({ref:a},d))}));function b(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var n=t.length,i=new Array(n);i[0]=p;var c={};for(var s in a)hasOwnProperty.call(a,s)&&(c[s]=a[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var d=2;d<n;d++)i[d]=t[d];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"}}]);