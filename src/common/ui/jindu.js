import React,{Component} from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import {Progress,Card} from 'antd';

class  Jindu extends Component{
	render(){
        return(
            <Card title='审核进度'>
                <Progress percent={30} />
            </Card>
        )

	}
}
const mapState=(state)=>({
   
    usermenu:state.getIn(['header','menu'])
});

const mapDispatch=(dispatch)=>({
    
     
    
})

export default connect(mapState,mapDispatch) (Jindu);