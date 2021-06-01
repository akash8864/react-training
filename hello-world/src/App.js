// import Hello from './components/hello'
import './App.css';
// import Form from './components/Form';
import LifeCycleA from './LifeCycleA';
// import Inline from './components/Inline'
// import Stylesheet from './components/Stylesheet';
// import './components/appStyles.css'
// import style from './components/appStyles.module.css'
// import ViewList from './components/ViewList';
// import ParentComponent from './components/ParentComponent';
// import ClassClick from './components/ClassClick';
// import EventBind from './components/EventBind';
// import FunctionClick from './components/FunctionClick';
// import Counter from './components/counter';
//import {Greet} from "./components/a"
// import Message from "./components/Message"
// import Welcome from "./components/Welcome"
function App() {
  return (
    <div className="App">
      {/* <Form /> */}
      <LifeCycleA></LifeCycleA>
      {/* <h1 className="error">Error</h1> */}
      {/* <h1 className={style.success}>Success</h1> */}
      {/* <Stylesheet primary={true}/> */}
    {/* <Inline /> */}
      {/* <ViewList/> */}
      {/* <ParentComponent/> */}
    {/* <EventBind></EventBind> */}
      {/* <ClassClick/> */}
      {/* <FunctionClick/>       */}
      {/* <Greet name="akash" >
        <p>my name is jarvis</p>
      </Greet>
      <Greet name="anuj" />
      <Greet name="ram" /> 
      <Counter/> 
       <Message/>
       <Hello />
      <Welcome/> */}
     
    </div>
  );
}

export default App;
