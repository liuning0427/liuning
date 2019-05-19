import React from 'react';
import './App.css';
import {BrowserRouter as Router,Link} from 'react-router-dom'
import mine from './components/mine'
import shouye from './components/shouye'

function App() {
  return (
    <div className="App">
      <Router>
        <Link to="/">首页</Link>
        <Link to="/mine">我的</Link>
        <Router exact path="/" component={shouye}></Router>
        <Router path="/mine" component={mine}></Router> 
      </Router>
    </div>
  );
}

export default App;
