import React, { Component } from 'react';
import { Row,Col,Button,Dropdown,Menu } from 'antd';
import {NavLink} from 'react-router-dom';
import './index.less';
import Utils from '../../utils/utils';
import Axios from '../../axios'


class Adminhead extends Component {
  state={
      username:Utils.getCookie('username')
  }
componentWillMount(){
  
 
  setInterval(()=>{
    let sysTime=Utils.getDate(new Date().getTime());//获取时间
    this.setState({
      sysTime
    })
  },1000);
 
}

  

  render() {
    const id=2;
    return (
      <div  className="header">
        <Row className="header-top">
        <Col span={6}><span className="head-tit">实验室招新平台后台管理系统</span></Col>
          <Col span={18}>
          <NavLink  rel="noopener noreferrer" to={"/login/login"}>退出</NavLink>
          </Col>
        </Row>
        <Row className="breadcrumb">
          <Col span="4" className="breadcrumb-title"><NavLink replace={true} to={'/admin/home'}>首页</NavLink></Col>
          <Col span="20" className="weather">
          <span className="date">{this.state.sysTime}</span>
          <span className="weather-detail">
          <img src={this.state.dayPictureUrl} className="weather-pic" alt="" />
          
          </span>
          
          </Col>
        </Row>
      </div>
    );
  }
}

export default Adminhead;