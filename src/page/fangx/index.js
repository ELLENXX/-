import React,{Component} from 'react';
import {connect} from 'react-redux';
import Carousel from '../../common/ui/carousel';
import {NavLink} from 'react-router-dom';
import '../questions/index.less';
import {Card,Row,Col} from 'antd';

class  FangX extends Component{
	render(){
        return(
        <div>
            <Carousel />
            <div className="que_que">
            <Card title="我们的推荐，仅供参考哦" style={{background:'#E0F2FC'}}>
               <div className="que_item rad-border-shadow">
               <Row>
               <Col span={24} style={{fontSize:'20px', fontWeight:'700',marginBottom:"20px",textAlign:'center' }}>{this.props.data.name}</Col>
             <Col span={24}><div style={{borderBottom:"1px solid #C4E5F5 " ,height:"20px"}}></div></Col>
               <Col style={{paddingBottom:"20px"}} span={4}>实验室简介</Col><Col span={20}>{this.props.data.info}</Col>
               <Col span={24}><div style={{borderBottom:"1px solid #C4E5F5",height:"20px"}}></div></Col>
               <Col style={{paddingBottom:"20px"}}   span={4}>研究方向</Col><Col span={20}>{this.props.data.direction}</Col>
               <Col span={24}><div style={{borderBottom:"1px solid #C4E5F5",height:"20px"}}></div></Col>
               <Col style={{paddingBottom:"20px"}}  span={4}>实验室项目</Col><Col span={20}>{this.props.data.project}</Col>
      
               </Row>
               </div></Card>
   </div>
        </div>)
	}
}
const mapState=(state)=>({
   
 data:state.getIn(['page','ans'])
});

const mapDispatch=(dispatch)=>({
    
     
    
})

export default connect(mapState,mapDispatch) (FangX);