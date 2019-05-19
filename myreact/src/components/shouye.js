import React, { Component } from 'react'

export default class shouye extends Component {
  render() {
    return (
      <div>
        首页
        <button onClick={()=>{
            this.props.history.push('/mine');
        }}>jump to mine</button>
      </div>
    )
  }
}
 // 在函数里直接props.xxxxx 在class声明的组件里用class