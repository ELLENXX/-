import React,{Component} from 'react';
import {connect} from 'react-redux';
import {actionCreators} from '../store';
import {Link ,Route} from 'react-router-dom';
import Carousels from '../../common/ui/carousel';
import Comment from '../../common/ui/comment';
import './index.less';
import { Menu, Icon, Collapse ,Row,Col,Table } from 'antd';

class Laborationies extends Component{
    state = {
        current: [],
        labnew:this.props.labnew,
      }
   componentWillMount(){
       this.props.getlabmenu();
       this.props.getlab(1);
       this.props.getcomment(1);
    
   }
      handleClick = (e) => {
        console.log('click ', e);
        this.setState({
          current: e.key,
        });
      }

      handlelab=(num)=>{
        this.props.getlab(num);
        this.props.getcomment(num);
        this.setState({
            current:this.props.comment
        })
      
      }
    
    render(){
        const columns=[
            {title:"姓名",dataIndex:'name',key:'name'},
            { title: '性别', dataIndex: 'sex', key: 'sex' },
            { title: 'email', dataIndex: 'email', key: 'email' },
        
            { title: '学位', dataIndex: 'level', key: 'level' },
            { title: '研究', dataIndex: 'info', key: 'info' },
          
        ];
        const Panel=Collapse.Panel;
        return (
            <div className='lab_wapper'>
                <Carousels />
                <div className="lab_content">
                <Row>
                    <Col className='left_nav' style={{background:"#E0F2FC"}} span={4}>
                    <Menu>
                        {
                            this.props.labmenu.map((item)=>{
                                return  <Menu.Item  style={{background:"#E0F2FC",marginTop:0,marginBottom:0}} key={item.key} onClick={()=>this.handlelab(item.key)}>
                                <Icon type={item.icon} />
                                <span>{item.title}</span>
                                </Menu.Item>
                            })
                        }
                    </Menu>
                    </Col>
                    <Col span={20}>
                    <div className="lab_nav">
                  
                    </div>
                    <div className="nav_content">
                  
                    <div className="nav_title">
                        <h1 style={{textAlign:'center',fontWeight:'900',fontSize:'30px'}}>{this.props.labnew.name}</h1>
                        <br />
                        <p style={{textAlign:'center',fontSize:20}}>{this.props.labnew['name']}</p>
                        <br />
                        <span>
                            <h1 style={{fontSize:20,fontWeight:'700',}}>实验室简介</h1>
                            <p>{this.props.labnew.info}</p>
                        </span>
                    </div>
                    <Collapse style={{background:"#E0F2FC"}} bordered={false} defaultActiveKey={['1']}>
                        <Panel  header="实验室成员" key="1">
                        {
                            <Table 
                            bordered
                                columns={columns}
                                dataSource={this.props.labmenber}
                                pagination={false} //是否要分页
                               
                            >
                            </Table>
                        }
                        </Panel>
                        <Panel header="科研方向" key="2">
                        {this.props.labnew.direction}
                        </Panel>
                        <Panel header="研究成果" key="3">
                        {this.props.labnew.project}
                        </Panel>
                    </Collapse>
  
                    </div>
                   
                    <Comment itdata={this.state.current}/>
                
                    </Col>
                    
                </Row>
                        
                </div>
            </div>
        )
    }
}
const mapState=(state)=>({
    labmenu:state.getIn(['page','labmenu']),
    labnew:state.getIn(['page','labnew']),
    labmenber:state.getIn(['page','labmenber']),
    comment:state.getIn([])
});

const mapDispatch=(dispatch)=>({
    getlabmenu(){
        dispatch(actionCreators.getlabmenu());
    },
    getlab(num){
        dispatch(actionCreators.getlab(num));
    },
    getcomment(num){

    }
});


export default connect(mapState,mapDispatch)(Laborationies);