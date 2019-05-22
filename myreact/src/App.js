import React from 'react';
import './App.css';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import mine from './components/mine'
import shouye from './components/shouye'
import Children from './components/Children'
import store from './store';
import add from './action';

function App() {
  return (
    <div className="App">
      <button onClick={()=>{
        console.log("呵呵");
        store.dispatch(add());
      }}>add</button>

      <Router>
        <Link to="/">首页</Link>
        -
        <Link to="/mine">我的</Link>
        -
        <Link to="/children"></Link>
        <Route exact path="/" component={shouye}></Route>
        <Route exact path="/mine" component={mine}></Route> 
        <Route path="/children" children={(props)=>{
          let str = props.match?'111':'000';
          return <Children str={str}></Children>
        }}></Route>
      </Router>
    </div>
  );
}

export default App;
