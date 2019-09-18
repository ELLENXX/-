import React,{Component} from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import './index.less';
import {Row, Button,Col,Card,Modal,Radio,Collapse,message} from 'antd';
import Carousel from '../../common/ui/carousel';
import { actionCreators } from '../store';
const Panel=Collapse.Panel;

class UserCheak extends Component{
    constructor(props){
        super(props);
        this.state={
            cheakdata:props.cheakdata,
            visible: false
 
        }
    }
    showModal = () => {
        this.setState({
          visible: true,
        });
      }
      handleOk = (e) => {
        console.log(e);
        this.setState({
          visible: false,
        });
      }
      handleCancel = (e) => {
        console.log(e);
        this.setState({
          visible: false,
        });
      }
    
    componentWillMount(){
        this.props.getcheck();
        console.log(this.props.checkdata);
    }
    handlepass(num,id,name){
        this.setState({
            visible: true
        })
        let x;
        if(num==1){
           x='通过';
        }else if(num==2){
            x='不通过';
        }
        Modal.confirm({
            title:'提示',
            content:`您确定要${x}${name}`,
            onOk:()=>{
                this.props.checked(num,id);
                message.success("操作成功")
               
            }
        })
       
    }
  
	render(){
        const columns=[
            {title:"姓名",dataIndex:'name',key:'name'},
            { title: '性别', dataIndex: 'sex', key: 'sex' },
            { title: '学号', dataIndex: 'username', key: 'id' },
        
            { title: '班级', dataIndex: 'sClass', key: 'id' },
            { title: '电话', dataIndex: 'phone', key: 'phone' },
            { title: '理由', dataIndex: 'introduce', key: 'id' },
        
            { title: '优势', dataIndex: 'prize', key: 'id' },
           
        ];
      
       return (
           <div>
                <Carousel />
       <div className="cheak_box">
       <Card title="审核列表">
           <Row>
           <div className="box_content" >
                <Col span={2}>姓名</Col><Col span={3}>申请时间</Col><Col span={19}>查看申请</Col>
                </div>
               {
                   this.props.checkdata.map((item)=>{
                       return <div className="box_content" >
                    <Col  className={"check"+item.state} span={2}>{item.name}</Col><Col span={3}>{item.createTime}</Col><Col span={19} style={{paddingBottom:"20px"}} >  <Collapse defaultActiveKey={['1']} onChange={this.callback}><Panel header="点击查看" key={item.phone}>
      <p><Row >
          <Col span={6} className="size">性别</Col><Col className="size" span={6}>班级</Col><Col className="size" span={6}>QQ号</Col><Col className="size" span={6} >电话</Col>
          <Col span={24}><div style={{height:'20px'}}></div></Col>
          <Col span={6}>{item.sex}</Col><Col span={6}>{item.sClass}</Col><Col span={6}>{item.qqNum}</Col><Col span={6}>{item.phone}</Col>
          <Col span={24}><div style={{height:'20px'}}></div></Col>
          <Col  span={10} className=" bot size">个人优势</Col><Col span={10} className="pad bot size">加入理由</Col><Col  className="pad bot size" span={4}>是否通过</Col>
          <Col span={24}><div style={{height:'10px'}}></div></Col>
          <Col span={10}>{item.prize}</Col><Col className="pad" span={10}>{item.introduce}</Col><Col span={4}>
      <Button onClick={()=>this.handlepass(1,item.id,item.name)} type="primary">通过</Button><Button onClick={()=>this.handlepass(2,item.id,item.name)} style={{marginLeft:5}}>不通过</Button>
          </Col>
          </Row></p>
    </Panel></Collapse></Col>
                     
                     </div>
                   })
               }
           </Row>
           </Card></div>
         
        </div>)
	}
}
const mapState=(state)=>({
    checkdata:state.getIn(['page','checkdata'])
});

const mapDispatch=(dispatch)=>({
    getcheck(){
        dispatch(actionCreators.getcheck()) 
    },
    checked(num,id){
     dispatch(actionCreators.checked(num,id));
    }
     
    
})

export default connect(mapState,mapDispatch) (UserCheak);