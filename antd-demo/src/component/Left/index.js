import React,{Component} from 'react';
import { Menu,Icon } from 'antd';
import './index.css'
import menuList from './../../config/menuconfig'
import {Link} from 'react-router-dom'

const {SubMenu} = Menu;

export default class index extends Component {
    createMenu = (menuList) => {
        return menuList.map((elem)=>{
            if(elem.children){
                return (
                    <SubMenu title={elem.title} key={elem.path}>
                        {this.createMenu(elem.children)}
                    </SubMenu>
                )
            }
            return (
                <Menu.Item key={elem.path}>
                    <Link to={elem.path}></Link>
                    <Icon type={elem.icon}></Icon>
                    {elem.title}
                </Menu.Item>
            )
        }) 
    }
    componentWillMount = () => {
        let list = this.createMenu(menuList);
        this.setState({
            list
        });
    }
    render() {
        return (
            <div className="navleft">
                <Menu mode="inline" theme="dark">
                    {this.state.list}
                </Menu>
            </div>
        )
    }
}
