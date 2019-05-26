import React, { Component } from 'react'
import { Row } from 'antd';
import './index.css'
import formatDate from './../../utils/formatDate'

export default class commonHeader extends Component {
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
                <div className="header">
                    <Row className="top">
                        <span>欢迎你，x同学</span>  
                        <a>退出</a>                
                    </Row>
                    <Row className="bottom">
                        <p>{this.state.timer}</p>
                    </Row>
                </div>
            </div>
        )
    }
}
