// import Hello from './components/hello'
import './App.css';
// import WithoutUseEffect from './WithoutUseEffect';
import { WithUseEffect } from './WithUseEffect';
// import { HookCounter4 } from './HookCounter4';
// import { UseStateWithObject } from './UseStateWithObject';
// import { ClickCounter3 } from './ClickCounter3';
// import ClickCounter1 from './ClickCounter1';
// import ClickCounter2 from './ClickCounter2';
// import ClickCounterUsingUsestate from './ClickCounterUsingUsestate';
// import PostForm from './requests/PostForm';
// import ComponentC from './ComponentC';
// import PostList from './requests/PostList';
// import { UserProvider } from './UserContext';
// import ClickCounterTwo from './ClickCounterTwo';
// import Counter from './Counter';
// import OnMouseHoverTwo from './OnMouseHoverTwo';
// import User from './User';
// import ClickCounter from './ClickCounter';
// import OnMouseOver from './OnMouseOver';
// import ErrorBoundary from './ErrorBoundary';
// import Hero from './Hero';
// import FRParentInput from './FRParentInput';
// import FocusInput from './FocusInput';
// import ParentComponent from './ParentComponent';
// import RefsDemo from './RefsDemo';
// import PureComp from './PureComp';

// import Form from './components/Form';
// import LifeCycleA from './LifeCycleA';
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
// import {Greet} from "./components/a"
// import Message from "./components/Message"
// import Welcome from "./components/Welcome"
function App() {
  return (
    <div  className="App">
      {/* <WithoutUseEffect></WithoutUseEffect> */}
      <WithUseEffect></WithUseEffect>
      {/* <HookCounter4></HookCounter4> */}
      {/* <UseStateWithObject></UseStateWithObject> */}
       {/* <ClickCounter3></ClickCounter3> */}
      {/* <ClickCounter1 ></ClickCounter1>
      <br></br>
      <ClickCounterUsingUsestate></ClickCounterUsingUsestate>
      <br></br>
      <ClickCounter2></ClickCounter2> */}
      {/* <PostList></PostList>
      <PostForm></PostForm> */}
      {/* <UserProvider value="akash"> 
      <ComponentC/>
      </UserProvider> */}
      
      {/* <Counter>{(count,handler)=>(<ClickCounterTwo count={count} handler={handler}></ClickCounterTwo>)}</Counter>
      <Counter >{(count,handler)=>(<OnMouseHoverTwo count={count} handler={handler}></OnMouseHoverTwo>)}</Counter> */}
      {/* <ClickCounterTwo ></ClickCounterTwo>
      <OnMouseHoverTwo></OnMouseHoverTwo> */}
      {/* <User name={(isLoggeIn)=>isLoggeIn?'akash':'akash yadav'}></User> */}
      {/* <ClickCounter></ClickCounter> */}
      {/* <OnMouseOver></OnMouseOver> */}
      {/* <ErrorBoundary><Hero heroname="batman"></Hero></ErrorBoundary>
      <ErrorBoundary><Hero heroname="superman"></Hero></ErrorBoundary>
      <ErrorBoundary>   <Hero heroname='joker'></Hero></ErrorBoundary> */}
      
      {/* <FRParentInput></FRParentInput> */}
      {/* <FocusInput></FocusInput> */}
     {/* <ParentComponent></ParentComponent> */}
     {/* <RefsDemo></RefsDemo> */}
      {/* <Form /> */}
      {/* <LifeCycleA></LifeCycleA> */}
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
      <Welcome/>
      */}
    </div>
  );
}

export default App;
