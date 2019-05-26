import React, { Component } from 'react';
import { 
  Row,
  Col,
 } from 'antd';
import './App.css';
import Left from './component/Left';
import CommonHeader from './component/commonHeader'
import CommonFooter from './component/commonFooter'
import {Link} from 'react-router-dom'

  function App(props){
      return (
        <div className="App">  
          <Row>
            <Col span={5}>
              <Left>
                <Link to="/home">首页</Link> 
              </Left>
            </Col>
            <Col span={19}>
              <CommonHeader></CommonHeader>
              {props.children} 
              <CommonFooter></CommonFooter>
            </Col>
            </Row>
        </div>
      );
  }

  export default App;
