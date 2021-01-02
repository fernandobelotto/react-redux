(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{104:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var o=n(2),a=n(6),i=(n(0),n(147)),r={id:"basic-tutorial",title:"Basic Tutorial",hide_title:!0,sidebar_label:"Basic Tutorial"},c={unversionedId:"introduction/basic-tutorial",id:"version-6.x/introduction/basic-tutorial",isDocsHomePage:!1,title:"Basic Tutorial",description:"Basic Tutorial",source:"@site/versioned_docs\\version-6.x\\introduction\\basic-tutorial.md",slug:"/introduction/basic-tutorial",permalink:"/react-redux/6.x/introduction/basic-tutorial",version:"6.x",sidebar_label:"Basic Tutorial",sidebar:"version-6.x/docs",previous:{title:"Quick Start",permalink:"/react-redux/6.x/introduction/quick-start"},next:{title:"Why Use React Redux?",permalink:"/react-redux/6.x/introduction/why-use-react-redux"}},l=[{value:"A Todo List Example",id:"a-todo-list-example",children:[{value:"Providing the Store",id:"providing-the-store",children:[]},{value:"Connecting the Components",id:"connecting-the-components",children:[]},{value:"Common ways of calling <code>connect</code>",id:"common-ways-of-calling-connect",children:[]}]},{value:"Links",id:"links",children:[]},{value:"Get More Help",id:"get-more-help",children:[]}],s={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h1",{id:"basic-tutorial"},"Basic Tutorial"),Object(i.b)("p",null,"To see how to use React Redux in practice, we\u2019ll show a step-by-step example by creating a todo list app."),Object(i.b)("h2",{id:"a-todo-list-example"},"A Todo List Example"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Jump to")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"\ud83e\udd1e ",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"https://codesandbox.io/s/9on71rvnyo"}),"Just show me the code")),Object(i.b)("li",{parentName:"ul"},"\ud83d\udc46 ",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"#providing-the-store"}),"Providing the store")),Object(i.b)("li",{parentName:"ul"},"\u270c\ufe0f ",Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"#connecting-the-components"}),"Connecting the Component"))),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"The React UI Components")),Object(i.b)("p",null,"We have implemented our React UI components as follows:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"TodoApp")," is the entry component for our app. It renders the header, the ",Object(i.b)("inlineCode",{parentName:"li"},"AddTodo"),", ",Object(i.b)("inlineCode",{parentName:"li"},"TodoList"),", and ",Object(i.b)("inlineCode",{parentName:"li"},"VisibilityFilters")," components."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"AddTodo")," is the component that allows a user to input a todo item and add to the list upon clicking its \u201cAdd Todo\u201d button:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"It uses a controlled input that sets state upon ",Object(i.b)("inlineCode",{parentName:"li"},"onChange"),"."),Object(i.b)("li",{parentName:"ul"},"When the user clicks on the \u201cAdd Todo\u201d button, it dispatches the action (that we will provide using React Redux) to add the todo to the store."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"TodoList")," is the component that renders the list of todos:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"It renders the filtered list of todos when one of the ",Object(i.b)("inlineCode",{parentName:"li"},"VisibilityFilters")," is selected."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"Todo")," is the component that renders a single todo item:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"It renders the todo content, and shows that a todo is completed by crossing it out."),Object(i.b)("li",{parentName:"ul"},"It dispatches the action to toggle the todo's complete status upon ",Object(i.b)("inlineCode",{parentName:"li"},"onClick"),"."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"VisibilityFilters")," renders a simple set of filters: ",Object(i.b)("em",{parentName:"li"},"all"),", ",Object(i.b)("em",{parentName:"li"},"completed"),", and ",Object(i.b)("em",{parentName:"li"},"incomplete.")," Clicking on each one of them filters the todos:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"It accepts an ",Object(i.b)("inlineCode",{parentName:"li"},"activeFilter")," prop from the parent that indicates which filter is currently selected by the user. An active filter is rendered with an underscore."),Object(i.b)("li",{parentName:"ul"},"It dispatches the ",Object(i.b)("inlineCode",{parentName:"li"},"setFilter")," action to update the selected filter."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"constants")," holds the constants data for our app."),Object(i.b)("li",{parentName:"ul"},"And finally ",Object(i.b)("inlineCode",{parentName:"li"},"index")," renders our app to the DOM.")),Object(i.b)("br",null),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"The Redux Store")),Object(i.b)("p",null,"The Redux portion of the application has been set up using the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://redux.js.org"}),"patterns recommended in the Redux docs"),":"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Store",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"todos"),": A normalized reducer of todos. It contains a ",Object(i.b)("inlineCode",{parentName:"li"},"byIds")," map of all todos and a ",Object(i.b)("inlineCode",{parentName:"li"},"allIds")," that contains the list of all ids."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"visibilityFilters"),": A simple string ",Object(i.b)("inlineCode",{parentName:"li"},"all"),", ",Object(i.b)("inlineCode",{parentName:"li"},"completed"),", or ",Object(i.b)("inlineCode",{parentName:"li"},"incomplete"),"."))),Object(i.b)("li",{parentName:"ul"},"Action Creators",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"addTodo")," creates the action to add todos. It takes a single string variable ",Object(i.b)("inlineCode",{parentName:"li"},"content")," and returns an ",Object(i.b)("inlineCode",{parentName:"li"},"ADD_TODO")," action with ",Object(i.b)("inlineCode",{parentName:"li"},"payload")," containing a self-incremented ",Object(i.b)("inlineCode",{parentName:"li"},"id")," and ",Object(i.b)("inlineCode",{parentName:"li"},"content")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"toggleTodo")," creates the action to toggle todos. It takes a single number variable ",Object(i.b)("inlineCode",{parentName:"li"},"id")," and returns a ",Object(i.b)("inlineCode",{parentName:"li"},"TOGGLE_TODO")," action with ",Object(i.b)("inlineCode",{parentName:"li"},"payload")," containing ",Object(i.b)("inlineCode",{parentName:"li"},"id")," only"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"setFilter")," creates the action to set the app\u2019s active filter. It takes a single string variable ",Object(i.b)("inlineCode",{parentName:"li"},"filter")," and returns a ",Object(i.b)("inlineCode",{parentName:"li"},"SET_FILTER")," action with ",Object(i.b)("inlineCode",{parentName:"li"},"payload")," containing the ",Object(i.b)("inlineCode",{parentName:"li"},"filter")," itself"))),Object(i.b)("li",{parentName:"ul"},"Reducers",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("inlineCode",{parentName:"li"},"todos")," reducer",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Appends the ",Object(i.b)("inlineCode",{parentName:"li"},"id")," to its ",Object(i.b)("inlineCode",{parentName:"li"},"allIds")," field and sets the todo within its ",Object(i.b)("inlineCode",{parentName:"li"},"byIds")," field upon receiving the ",Object(i.b)("inlineCode",{parentName:"li"},"ADD_TODO")," action"),Object(i.b)("li",{parentName:"ul"},"Toggles the ",Object(i.b)("inlineCode",{parentName:"li"},"completed")," field for the todo upon receiving the ",Object(i.b)("inlineCode",{parentName:"li"},"TOGGLE_TODO")," action"))),Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("inlineCode",{parentName:"li"},"visibilityFilters")," reducer sets its slice of store to the new filter it receives from the ",Object(i.b)("inlineCode",{parentName:"li"},"SET_FILTER")," action payload"))),Object(i.b)("li",{parentName:"ul"},"Action Types",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"We use a file ",Object(i.b)("inlineCode",{parentName:"li"},"actionTypes.js")," to hold the constants of action types to be reused"))),Object(i.b)("li",{parentName:"ul"},"Selectors",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"getTodoList")," returns the ",Object(i.b)("inlineCode",{parentName:"li"},"allIds")," list from the ",Object(i.b)("inlineCode",{parentName:"li"},"todos")," store"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"getTodoById")," finds the todo in the store given by ",Object(i.b)("inlineCode",{parentName:"li"},"id")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"getTodos")," is slightly more complex. It takes all the ",Object(i.b)("inlineCode",{parentName:"li"},"id"),"s from ",Object(i.b)("inlineCode",{parentName:"li"},"allIds"),", finds each todo in ",Object(i.b)("inlineCode",{parentName:"li"},"byIds"),", and returns the final array of todos"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"getTodosByVisibilityFilter")," filters the todos according to the visibility filter")))),Object(i.b)("p",null,"You may check out ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://codesandbox.io/s/6vwyqrpqk3"}),"this CodeSandbox")," for the source code of the UI components and the unconnected Redux store described above."),Object(i.b)("br",null),Object(i.b)("p",null,"We will now show how to connect this store to our app using React Redux."),Object(i.b)("h3",{id:"providing-the-store"},"Providing the Store"),Object(i.b)("p",null,"First we need to make the ",Object(i.b)("inlineCode",{parentName:"p"},"store")," available to our app. To do this, we wrap our app with the ",Object(i.b)("inlineCode",{parentName:"p"},"<Provider />")," API provided by React Redux."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"// index.js\nimport React from 'react'\nimport ReactDOM from 'react-dom'\nimport TodoApp from './TodoApp'\n\nimport { Provider } from 'react-redux'\nimport store from './redux/store'\n\nconst rootElement = document.getElementById('root')\nReactDOM.render(\n  <Provider store={store}>\n    <TodoApp />\n  </Provider>,\n  rootElement\n)\n")),Object(i.b)("p",null,"Notice how our ",Object(i.b)("inlineCode",{parentName:"p"},"<TodoApp />")," is now wrapped with the ",Object(i.b)("inlineCode",{parentName:"p"},"<Provider />")," with ",Object(i.b)("inlineCode",{parentName:"p"},"store")," passed in as a prop."),Object(i.b)("p",null,Object(i.b)("img",Object(o.a)({parentName:"p"},{src:"https://i.imgur.com/LV0XvwA.png",alt:null}))),Object(i.b)("h3",{id:"connecting-the-components"},"Connecting the Components"),Object(i.b)("p",null,"React Redux provides a ",Object(i.b)("inlineCode",{parentName:"p"},"connect")," function for you to read values from the Redux store (and re-read the values when the store updates)."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"connect")," function takes two arguments, both optional:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"mapStateToProps"),": called every time the store state changes. It receives the entire store state, and should return an object of data this component needs.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("inlineCode",{parentName:"p"},"mapDispatchToProps"),": this parameter can either be a function, or an object."),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"If it\u2019s a function, it will be called once on component creation. It will receive ",Object(i.b)("inlineCode",{parentName:"li"},"dispatch")," as an argument, and should return an object full of functions that use ",Object(i.b)("inlineCode",{parentName:"li"},"dispatch")," to dispatch actions."),Object(i.b)("li",{parentName:"ul"},"If it\u2019s an object full of action creators, each action creator will be turned into a prop function that automatically dispatches its action when called. ",Object(i.b)("strong",{parentName:"li"},"Note"),": We recommend using this \u201cobject shorthand\u201d form.")))),Object(i.b)("p",null,"Normally, you\u2019ll call ",Object(i.b)("inlineCode",{parentName:"p"},"connect")," in this way:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"const mapStateToProps = (state, ownProps) => ({\n  // ... computed data from state and optionally ownProps\n})\n\nconst mapDispatchToProps = {\n  // ... normally is an object full of action creators\n}\n\n// `connect` returns a new function that accepts the component to wrap:\nconst connectToStore = connect(\n  mapStateToProps,\n  mapDispatchToProps\n)\n// and that function returns the connected, wrapper component:\nconst ConnectedComponent = connectToStore(Component)\n\n// We normally do both in one step, like this:\nconnect(\n  mapStateToProps,\n  mapDispatchToProps\n)(Component)\n")),Object(i.b)("p",null,"Let\u2019s work on ",Object(i.b)("inlineCode",{parentName:"p"},"<AddTodo />")," first. It needs to trigger changes to the ",Object(i.b)("inlineCode",{parentName:"p"},"store")," to add new todos. Therefore, it needs to be able to ",Object(i.b)("inlineCode",{parentName:"p"},"dispatch")," actions to the store. Here\u2019s how we do it."),Object(i.b)("p",null,"Our ",Object(i.b)("inlineCode",{parentName:"p"},"addTodo")," action creator looks like this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"// redux/actions.js\nimport { ADD_TODO } from './actionTypes'\n\nlet nextTodoId = 0\nexport const addTodo = content => ({\n  type: ADD_TODO,\n  payload: {\n    id: ++nextTodoId,\n    content\n  }\n})\n\n// ... other actions\n")),Object(i.b)("p",null,"By passing it to ",Object(i.b)("inlineCode",{parentName:"p"},"connect"),", our component receives it as a prop, and it will automatically dispatch the action when it\u2019s called."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"// components/AddTodo.js\n\n// ... other imports\nimport { connect } from 'react-redux'\nimport { addTodo } from '../redux/actions'\n\nclass AddTodo extends React.Component {\n  // ... component implementation\n}\n\nexport default connect(\n  null,\n  { addTodo }\n)(AddTodo)\n")),Object(i.b)("p",null,"Notice now that ",Object(i.b)("inlineCode",{parentName:"p"},"<AddTodo />")," is wrapped with a parent component called ",Object(i.b)("inlineCode",{parentName:"p"},"<Connect(AddTodo) />"),". Meanwhile, ",Object(i.b)("inlineCode",{parentName:"p"},"<AddTodo />")," now gains one prop: the ",Object(i.b)("inlineCode",{parentName:"p"},"addTodo")," action."),Object(i.b)("p",null,Object(i.b)("img",Object(o.a)({parentName:"p"},{src:"https://i.imgur.com/u6aXbwl.png",alt:null}))),Object(i.b)("p",null,"We also need to implement the ",Object(i.b)("inlineCode",{parentName:"p"},"handleAddTodo")," function to let it dispatch the ",Object(i.b)("inlineCode",{parentName:"p"},"addTodo")," action and reset the input"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"// components/AddTodo.js\n\nimport React from 'react'\nimport { connect } from 'react-redux'\nimport { addTodo } from '../redux/actions'\n\nclass AddTodo extends React.Component {\n  // ...\n\n  handleAddTodo = () => {\n    // dispatches actions to add todo\n    this.props.addTodo(this.state.input)\n\n    // sets state back to empty string\n    this.setState({ input: '' })\n  }\n\n  render() {\n    return (\n      <div>\n        <input\n          onChange={e => this.updateInput(e.target.value)}\n          value={this.state.input}\n        />\n        <button className=\"add-todo\" onClick={this.handleAddTodo}>\n          Add Todo\n        </button>\n      </div>\n    )\n  }\n}\n\nexport default connect(\n  null,\n  { addTodo }\n)(AddTodo)\n")),Object(i.b)("p",null,"Now our ",Object(i.b)("inlineCode",{parentName:"p"},"<AddTodo />")," is connected to the store. When we add a todo it would dispatch an action to change the store. We are not seeing it in the app because the other components are not connected yet. If you have the Redux DevTools Extension hooked up, you should see the action being dispatched:"),Object(i.b)("p",null,Object(i.b)("img",Object(o.a)({parentName:"p"},{src:"https://i.imgur.com/kHvkqhI.png",alt:null}))),Object(i.b)("p",null,"You should also see that the store has changed accordingly:"),Object(i.b)("p",null,Object(i.b)("img",Object(o.a)({parentName:"p"},{src:"https://i.imgur.com/yx27RVC.png",alt:null}))),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"<TodoList />")," component is responsible for rendering the list of todos. Therefore, it needs to read data from the store. We enable it by calling ",Object(i.b)("inlineCode",{parentName:"p"},"connect")," with the ",Object(i.b)("inlineCode",{parentName:"p"},"mapStateToProps")," parameter, a function describing which part of the data we need from the store."),Object(i.b)("p",null,"Our ",Object(i.b)("inlineCode",{parentName:"p"},"<Todo />")," component takes the todo item as props. We have this information from the ",Object(i.b)("inlineCode",{parentName:"p"},"byIds")," field of the ",Object(i.b)("inlineCode",{parentName:"p"},"todos"),". However, we also need the information from the ",Object(i.b)("inlineCode",{parentName:"p"},"allIds")," field of the store indicating which todos and in what order they should be rendered. Our ",Object(i.b)("inlineCode",{parentName:"p"},"mapStateToProps")," function may look like this:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),'// components/TodoList.js\n\n// ...other imports\nimport { connect } from "react-redux";\n\nconst TodoList = // ... UI component implementation\n\nconst mapStateToProps = state => {\n  const { byIds, allIds } = state.todos || {};\n  const todos =\n    allIds && allIds.length\n      ? allIds.map(id => (byIds ? { ...byIds[id], id } : null))\n      : null;\n  return { todos };\n};\n\nexport default connect(mapStateToProps)(TodoList);\n')),Object(i.b)("p",null,"Luckily we have a selector that does exactly this. We may simply import the selector and use it here."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"// redux/selectors.js\n\nexport const getTodosState = store => store.todos\n\nexport const getTodoList = store =>\n  getTodosState(store) ? getTodosState(store).allIds : []\n\nexport const getTodoById = (store, id) =>\n  getTodosState(store) ? { ...getTodosState(store).byIds[id], id } : {}\n\nexport const getTodos = store =>\n  getTodoList(store).map(id => getTodoById(store, id))\n")),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),'// components/TodoList.js\n\n// ...other imports\nimport { connect } from "react-redux";\nimport { getTodos } from "../redux/selectors";\n\nconst TodoList = // ... UI component implementation\n\nexport default connect(state => ({ todos: getTodos(state) }))(TodoList);\n')),Object(i.b)("p",null,"We recommend encapsulating any complex lookups or computations of data in selector functions. In addition, you can further optimize the performance by using ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/reduxjs/reselect"}),"Reselect")," to write \u201cmemoized\u201d selectors that can skip unnecessary work. (See ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://redux.js.org/recipes/computingderiveddata#sharing-selectors-across-multiple-components"}),"the Redux docs page on Computing Derived Data")," and the blog post ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://blog.isquaredsoftware.com/2017/12/idiomatic-redux-using-reselect-selectors/"}),"Idiomatic Redux: Using Reselect Selectors for Encapsulation and Performance")," for more information on why and how to use selector functions.)"),Object(i.b)("p",null,"Now that our ",Object(i.b)("inlineCode",{parentName:"p"},"<TodoList />")," is connected to the store. It should receive the list of todos, map over them, and pass each todo to the ",Object(i.b)("inlineCode",{parentName:"p"},"<Todo />")," component. ",Object(i.b)("inlineCode",{parentName:"p"},"<Todo />")," will in turn render them to the screen. Now try adding a todo. It should come up on our todo list!"),Object(i.b)("p",null,Object(i.b)("img",Object(o.a)({parentName:"p"},{src:"https://i.imgur.com/N68xvrG.png",alt:null}))),Object(i.b)("p",null,"We will connect more components. Before we do this, let\u2019s pause and learn a bit more about ",Object(i.b)("inlineCode",{parentName:"p"},"connect")," first."),Object(i.b)("h3",{id:"common-ways-of-calling-connect"},"Common ways of calling ",Object(i.b)("inlineCode",{parentName:"h3"},"connect")),Object(i.b)("p",null,"Depending on what kind of components you are working with, there are different ways of calling ",Object(i.b)("inlineCode",{parentName:"p"},"connect")," , with the most common ones summarized as below:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(o.a)({parentName:"tr"},{align:null})),Object(i.b)("th",Object(o.a)({parentName:"tr"},{align:null}),"Do Not Subscribe to the Store"),Object(i.b)("th",Object(o.a)({parentName:"tr"},{align:null}),"Subscribe to the Store"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"Do Not Inject Action Creators"),Object(i.b)("td",Object(o.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"connect()(Component)")),Object(i.b)("td",Object(o.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"connect(mapStateToProps)(Component)"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(o.a)({parentName:"tr"},{align:null}),"Inject Action Creators"),Object(i.b)("td",Object(o.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"connect(null, mapDispatchToProps)(Component)")),Object(i.b)("td",Object(o.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"connect(mapStateToProps, mapDispatchToProps)(Component)"))))),Object(i.b)("h4",{id:"do-not-subscribe-to-the-store-and-do-not-inject-action-creators"},"Do not subscribe to the store and do not inject action creators"),Object(i.b)("p",null,"If you call ",Object(i.b)("inlineCode",{parentName:"p"},"connect")," without providing any arguments, your component will:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"not")," re-render when the store changes"),Object(i.b)("li",{parentName:"ul"},"receive ",Object(i.b)("inlineCode",{parentName:"li"},"props.dispatch")," that you may use to manually dispatch action")),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"// ... Component\nexport default connect()(Component) // Component will receive `dispatch` (just like our <TodoList />!)\n")),Object(i.b)("h4",{id:"subscribe-to-the-store-and-do-not-inject-action-creators"},"Subscribe to the store and do not inject action creators"),Object(i.b)("p",null,"If you call ",Object(i.b)("inlineCode",{parentName:"p"},"connect")," with only ",Object(i.b)("inlineCode",{parentName:"p"},"mapStateToProps"),", your component will:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"subscribe to the values that ",Object(i.b)("inlineCode",{parentName:"li"},"mapStateToProps")," extracts from the store, and re-render only when those values have changed"),Object(i.b)("li",{parentName:"ul"},"receive ",Object(i.b)("inlineCode",{parentName:"li"},"props.dispatch")," that you may use to manually dispatch action")),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"// ... Component\nconst mapStateToProps = state => state.partOfState\nexport default connect(mapStateToProps)(Component)\n")),Object(i.b)("h4",{id:"do-not-subscribe-to-the-store-and-inject-action-creators"},"Do not subscribe to the store and inject action creators"),Object(i.b)("p",null,"If you call ",Object(i.b)("inlineCode",{parentName:"p"},"connect")," with only ",Object(i.b)("inlineCode",{parentName:"p"},"mapDispatchToProps"),", your component will:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("em",{parentName:"li"},"not")," re-render when the store changes"),Object(i.b)("li",{parentName:"ul"},"receive each of the action creators you inject with ",Object(i.b)("inlineCode",{parentName:"li"},"mapDispatchToProps")," as props and automatically dispatch the actions upon being called")),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"import { addTodo } from './actionCreators'\n// ... Component\nexport default connect(\n  null,\n  { addTodo }\n)(Component)\n")),Object(i.b)("h4",{id:"subscribe-to-the-store-and-inject-action-creators"},"Subscribe to the store and inject action creators"),Object(i.b)("p",null,"If you call ",Object(i.b)("inlineCode",{parentName:"p"},"connect")," with both ",Object(i.b)("inlineCode",{parentName:"p"},"mapStateToProps")," and ",Object(i.b)("inlineCode",{parentName:"p"},"mapDispatchToProps"),", your component will:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"subscribe to the values that ",Object(i.b)("inlineCode",{parentName:"li"},"mapStateToProps")," extracts from the store, and re-render only when those values have changed"),Object(i.b)("li",{parentName:"ul"},"receive all of the action creators you inject with ",Object(i.b)("inlineCode",{parentName:"li"},"mapDispatchToProps")," as props and automatically dispatch the actions upon being called.")),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"import * as actionCreators from './actionCreators'\n// ... Component\nconst mapStateToProps = state => state.partOfState\nexport default connect(\n  mapStateToProps,\n  actionCreators\n)(Component)\n")),Object(i.b)("p",null,"These four cases cover the most basic usages of ",Object(i.b)("inlineCode",{parentName:"p"},"connect"),". To read more about ",Object(i.b)("inlineCode",{parentName:"p"},"connect"),", continue reading our ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"/react-redux/6.x/api/connect"}),"API section")," that explains it in more detail."),Object(i.b)("hr",null),Object(i.b)("p",null,"Now let\u2019s connect the rest of our ",Object(i.b)("inlineCode",{parentName:"p"},"<TodoApp />"),"."),Object(i.b)("p",null,"How should we implement the interaction of toggling todos? A keen reader might already have an answer. If you have your environment set up and have followed through up until this point, now is a good time to leave it aside and implement the feature by yourself. There would be no surprise that we connect our ",Object(i.b)("inlineCode",{parentName:"p"},"<Todo />")," to dispatch ",Object(i.b)("inlineCode",{parentName:"p"},"toggleTodo")," in a similar way:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),'// components/Todo.js\n\n// ... other imports\nimport { connect } from "react-redux";\nimport { toggleTodo } from "../redux/actions";\n\nconst Todo = // ... component implementation\n\nexport default connect(\n  null,\n  { toggleTodo }\n)(Todo);\n')),Object(i.b)("p",null,"Now our todo\u2019s can be toggled complete. We\u2019re almost there!"),Object(i.b)("p",null,Object(i.b)("img",Object(o.a)({parentName:"p"},{src:"https://i.imgur.com/4UBXYtj.png",alt:null}))),Object(i.b)("p",null,"Finally, let\u2019s implement our ",Object(i.b)("inlineCode",{parentName:"p"},"VisibilityFilters")," feature."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"<VisibilityFilters />")," component needs to be able to read from the store which filter is currently active, and dispatch actions to the store. Therefore, we need to pass both a ",Object(i.b)("inlineCode",{parentName:"p"},"mapStateToProps")," and ",Object(i.b)("inlineCode",{parentName:"p"},"mapDispatchToProps"),". The ",Object(i.b)("inlineCode",{parentName:"p"},"mapStateToProps")," here can be a simple accessor of the ",Object(i.b)("inlineCode",{parentName:"p"},"visibilityFilter")," state. And the ",Object(i.b)("inlineCode",{parentName:"p"},"mapDispatchToProps")," will contain the ",Object(i.b)("inlineCode",{parentName:"p"},"setFilter")," action creator."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),'// components/VisibilityFilters.js\n\n// ... other imports\nimport { connect } from "react-redux";\nimport { setFilter } from "../redux/actions";\n\nconst VisibilityFilters = // ... component implementation\n\nconst mapStateToProps = state => {\n  return { activeFilter: state.visibilityFilter };\n};\nexport default connect(\n  mapStateToProps,\n  { setFilter }\n)(VisibilityFilters);\n')),Object(i.b)("p",null,"Meanwhile, we also need to update our ",Object(i.b)("inlineCode",{parentName:"p"},"<TodoList />")," component to filter todos according to the active filter. Previously the ",Object(i.b)("inlineCode",{parentName:"p"},"mapStateToProps")," we passed to the ",Object(i.b)("inlineCode",{parentName:"p"},"<TodoList />")," ",Object(i.b)("inlineCode",{parentName:"p"},"connect")," function call was simply the selector that selects the whole list of todos. Let\u2019s write another selector to help filtering todos by their status."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"// redux/selectors.js\n\n// ... other selectors\nexport const getTodosByVisibilityFilter = (store, visibilityFilter) => {\n  const allTodos = getTodos(store)\n  switch (visibilityFilter) {\n    case VISIBILITY_FILTERS.COMPLETED:\n      return allTodos.filter(todo => todo.completed)\n    case VISIBILITY_FILTERS.INCOMPLETE:\n      return allTodos.filter(todo => !todo.completed)\n    case VISIBILITY_FILTERS.ALL:\n    default:\n      return allTodos\n  }\n}\n")),Object(i.b)("p",null,"And connecting to the store with the help of the selector:"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"// components/TodoList.js\n\n// ...\n\nconst mapStateToProps = state => {\n  const { visibilityFilter } = state\n  const todos = getTodosByVisibilityFilter(state, visibilityFilter)\n  return { todos }\n}\n\nexport default connect(mapStateToProps)(TodoList)\n")),Object(i.b)("p",null,"Now we've finished a very simple example of a todo app with React Redux. All our components are connected! Isn't that nice? \ud83c\udf89\ud83c\udf8a"),Object(i.b)("p",null,Object(i.b)("img",Object(o.a)({parentName:"p"},{src:"https://i.imgur.com/ONqer2R.png",alt:null}))),Object(i.b)("h2",{id:"links"},"Links"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"https://redux.js.org/basics/usagewithreact"}),"Usage with React")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"https://blog.isquaredsoftware.com/presentations/workshops/redux-fundamentals/react-redux.html"}),"Using the React Redux Bindings")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"https://medium.com/@franleplant/react-higher-order-components-in-depth-cf9032ee6c3e"}),"Higher Order Components in Depth")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"https://redux.js.org/recipes/computing-derived-data#sharing-selectors-across-multiple-components"}),"Computing Derived Data")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"https://blog.isquaredsoftware.com/2017/12/idiomatic-redux-using-reselect-selectors/"}),"Idiomatic Redux: Using Reselect Selectors for Encapsulation and Performance"))),Object(i.b)("h2",{id:"get-more-help"},"Get More Help"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"https://www.reactiflux.com"}),"Reactiflux")," Redux channel"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"https://stackoverflow.com/questions/tagged/react-redux"}),"StackOverflow")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"https://github.com/reduxjs/react-redux/issues/"}),"GitHub Issues"))))}p.isMDXComponent=!0},147:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var o=n(0),a=n.n(o);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(n),m=o,u=b["".concat(r,".").concat(m)]||b[m]||d[m]||i;return n?a.a.createElement(u,c(c({ref:t},s),{},{components:n})):a.a.createElement(u,c({ref:t},s))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,r[1]=c;for(var s=2;s<i;s++)r[s]=n[s];return a.a.createElement.apply(null,r)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);