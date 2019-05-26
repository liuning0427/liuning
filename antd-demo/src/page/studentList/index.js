import React, { Component } from 'react'
import {Table} from 'antd'
import './index.css'
import axios from 'axios'

export default class studentList extends Component {
    constructor(params){
        super(params);
        this.state={
            dataSource:[]
        }
    }
    componentWillMount(){
        axios.get('https://www.easy-mock.com/mock/5cea3b3d8347da71af1d4b81/student-list/studentlist')
        .then((result)=>{
          console.log("成功");
            this.setState({
                dataSource:result.data.data.projects
            })
        })
    }
    render() {
        const dataSource = [
            {
              key: '1',
              name: '胡彦斌',
              age: 32,
              address: '西湖区湖底公园1号',
            },
            {
              key: '2',
              name: '胡彦祖',
              age: 42,
              address: '西湖区湖底公园1号',
            },
          ];
          
          const columns = [
            {
              title: '姓名',
              dataIndex: 'name',
              key: 'name',
            },
            {
              title: '年龄',
              dataIndex: 'age',
              key: 'age',
            },
            {
              title: '住址',
              dataIndex: 'address',
              key: 'address',
            },
          ];
        return (
            <div className="list">
                <Table dataSource={this.state.dataSource} columns={columns} />;
            </div>
        )
    }
}
