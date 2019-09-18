import React,{Component} from 'react';
import {} from './style.js';
import {Link} from 'react-router-dom';
import Carousel from '../ui/carousel';

 export default class Recsu extends Component{
     
    render(){
       
        return(
          <div>
          < Carousel  />
          <div style={{textAlign:"center",fontSize:"18px",width:"100%",height:"1000px",marginTop:"100px"}}>
          提交成功
     <br />
          <Link to={'/user/userhome'}>返回首页</Link>
          </div></div>
        )
    }
}
