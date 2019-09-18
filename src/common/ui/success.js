import React,{Component} from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {} from 'antd';

class  Success extends Component{
	render(){
        return  <div>
            <div style={{color:"#4DCA61",fontSize:"20px",marginTop:"10%"}}>申请成功<NavLink to={'/user/userhome'}>返回首页</NavLink></div>
        </div>

	}
}
const mapState=(state)=>({
   
    usermenu:state.getIn(['header','menu'])
});

const mapDispatch=(dispatch)=>({
    
     
    
})

export default connect(mapState,mapDispatch) (Success);