import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {Card, Row,Col,Button,Modal,Input} from 'antd';
import './index.less';
import { actionCreators } from '../store';
import TextArea from 'antd/lib/input/TextArea';

class AdminSys extends Component{
 constructor(props){
     super(props);
     this.state={
         list:this.props.newslist,
         currentlist:{},
         tan:false 
     }
 }
    componentWillMount(){
        this.props.getnewslist();
        console.log(this.state.list);
    }

    handlechange=(data)=>{
        this.setState({
            currentlist:data,
            tan:true
        })
    }
	render(){
           return (<Card title="平台管理">
                <Card title="公告管理"> 
                <Row>
                    <div className="newlist">
                    {
                        this.props.newslist.map((item,index)=>{
                            return (<div className="listitem" key={index}>
                            <Col span={18}>{item.title}</Col>
                            <Col span={6}><Button>删除</Button><Button onClick={()=>this.handlechange(item)}>修改</Button><Button><Link to={"/article/1"} >查看</Link></Button></Col>
                     </div>)
                        })
                    }
                    </div></Row>
                </Card>
                <Modal
                title="修改文章"
                width={'60%'}
                height={700}
                visible={this.state.tan}
                onCancel={()=>{
                    this.setState({
                        tan:false
                    })
                }}
               footer={null}
                >
                  标题： <Input value={this.state.currentlist.title} />
                   日期：<Input value={this.state.currentlist.date} />
                   内容：<TextArea value={this.state.currentlist.content}></TextArea>
                </Modal>
               
            </Card>)
	}
}
const mapState=(state)=>({
    newslist:state.getIn(['page','newsList'])
});

const mapDispatch=(dispatch)=>({
    
    getnewslist(){
        dispatch(actionCreators.getnews(1));
    }
    
})

export default connect(mapState,mapDispatch) (AdminSys);