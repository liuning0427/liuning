import React, { Component } from 'react'
import { Row } from 'antd';
import './index.css'
import formatDate from './../../utils/formatDate'

export default class index extends Component {
    constructor(params){
        super(params);
        this.state={
            timer:''
        }
    }
    componentWillMount(){
        setInterval(() => {
            let now = new Date();
            let timer = formatDate(now);
            this.setState({
                timer
            })
        },1000)
    }

    render() {
        return (
            <div>
                <Row className="top">
                    <a href="#">退出</a>
                    <span>欢迎你，x同学</span>                   
                </Row>
                <Row className="bottom">
                    {this.state.timer}
                </Row>
            </div>
        )
    }
}
