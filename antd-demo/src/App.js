import React, { Component } from 'react';
import { 
  Row,
  Col,
 } from 'antd';
import './App.css';
import Left from './component/Left';
import CommonHeader from './component/commonHeader'
import HOME from './page/HOME'

  class App extends Component {
    render() {
      return (
        <div className="App">
          <Row>
            <Col span={5}>
              <Left></Left>
            </Col>
            <Col span={19}>
              <CommonHeader></CommonHeader>
              <HOME></HOME>
            </Col>
            </Row>
        </div>
      );
    }
  }

  export default App;
