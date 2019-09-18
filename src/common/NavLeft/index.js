import React, { Component } from 'react';
import './index.less';
import {connect} from 'react-redux';
import {NavLink,Link} from 'react-router-dom';

import { Menu, Icon } from 'antd';
  const SubMenu = Menu.SubMenu;


class NavLeft extends Component {
    state = {
        theme: 'dark',
        current: '1',
      }
  
    
    handleClick=(e)=> {
      console.log('click', e);
    }
  
  render() {

    return (
      <div >
          <div style={{textAlign:"center",marginTop:'20px',background:"#1E66AC",borderRadius:"70px",width:"140px",marginLeft:"30px"}}><img src="http://www.cs.swust.edu.cn/assets/img/logo2.png"/></div>
    <Menu style={{marginTop:'20px',paddingLeft:"20px"}} theme={this.state.theme} onClick={this.handleClick}  mode="vertical">
    <Menu.Item key="1" style={{fontSize:"18px"}}>
    <Icon type="user" /><span ><Link style={{textDecoration:"none",color:"#E7EAED"}} to={"/admin/menber"} >用户管理</Link></span>
          </Menu.Item>
    <Menu.Item key="2" style={{fontSize:"18px"}}>
            <Icon type="file" /><span><NavLink to={"/admin/labset"} style={{textDecoration:"none",color:"#E7EAED"}}>实验室管理</NavLink></span>
          </Menu.Item>
    <Menu.Item key="3" style={{fontSize:"18px"}}>
            <Icon type="mail" /><span><NavLink style={{textDecoration:"none",color:"#E7EAED"}} to={"/admin/news"}>消息管理</NavLink></span>
          </Menu.Item>
    <Menu.Item key="4" style={{fontSize:"18px"}}>
             <Icon type="laptop" /><span><NavLink style={{textDecoration:"none",color:"#E7EAED"}} to={"/admin/sysmty"}>平台管理</NavLink></span>
          </Menu.Item>
  </Menu>
      </div>

    );
  }
}

const mapState=(state)=>({
   
});

const mapDispatch=(dispatch)=>({
    
})

export default connect(mapState,mapDispatch)(NavLeft);