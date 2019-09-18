import React,{Component} from 'react';
import {connect} from 'react-redux';
import {actionCreators} from '../store';
import ChangeSet from '../../common/ui/changeset';
import {Card,Icon,Table,Button ,Modal,message,Input,Select,Form} from 'antd';
import axios from '../../axios';
const FormItem=Form.Item;
const Option = Select.Option;
class AdminMenber extends Component{
    constructor(props){
        super(props);
        this.state={
            dataSource1: '',
            selectedRowKeys1:[],
            selectedRowKeys2:[],
            visible:false,
            selectedItem:{},
            

           
        }
    }
    componentWillMount(){
     
        this.requset(1);
        this.requset(0);
        
       
    }
    handleSubmit=()=>{
        let apply=this.props.form.getFieldsValue();//获取当前表单
      if(apply['name']==''||apply['username']==''||apply['Sclass']==''||apply['introduce']==''||apply['phone'==''||apply['qqNum'=='']])
      {
        message.error('带*号为必填项');
      }
      else{
        var currentDate = new Date();
        let createTime=currentDate.getFullYear()+'-'+(currentDate.getMonth()+1)+ '-'+ currentDate.getDate()+'-'+currentDate.getHours()+':'+currentDate.getMinutes();
        apply['createTime']=createTime;
        apply['state']=0;
        apply['id']=40;
     
        this.props.giveapply(apply);

      }
    }
    

     getBase64=(img, callback)=> {
        const reader = new FileReader();//读取文件对象
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
      }

    handleChange = (info) => {
        if (info.file.status === 'uploading') {
          this.setState({ loading: true });
          return;
        }
        if (info.file.status === 'done') {
          // Get this url from response in real world.
         this.getBase64(info.file.originFileObj, imageUrl => this.setState({
            userImg:imageUrl,
            loading: false,
          }));
        }
      }
 
    requset=(num)=>{
        let Url;
        if(num==0)
        Url='admin/allStudent';
        else
        Url='admin/allTeacher';
        axios.ajax({
            url:'http://192.168.43.5:8080/'+Url,
            data:{//传入参数
               
                //isSHowLoading:false//是否要加loading
            }
        }).then((res)=>{
            console.log(res);
            if(res){
                res.map((item,index)=>{
                    item.key=index;
                })
               
                if(num==1)
                {
                    this.setState({
                        dataSource1:res,
                        selectedRowKeys1:[],//清空，是删除后状态更新
                        selectedRows1:null,//清空，是删除后状态更新
                       
                       
                    })
                }else{
                    this.setState({
                        dataSource2:res,
                        selectedRowKeys2:[],//清空，是删除后状态更新
                        selectedRows2:null,//清空，是删除后状态更新
                       
                    })
                }
            }
        })
    }
   
    //多选执行删除动作
    handleDelete=(num)=>{
        let rows;
        if(num==1)
        rows=this.state.selectedRows1;
        else
         rows=this.state.selectedRows2;
      if(rows){
        let ids=[];
        rows.map((item)=>{
            ids.push(item.id);
        })
        this.requset(num);//刷新数据
        Modal.confirm({
            title:'删除提示',
            content:`您确定要删除这些序号的数据吗？${ids}`,
            onOk:()=>{
                this.props.deletedata(1,ids);
               
            }
        })
      }else{
        message.warning("请选择要删除序号");
      }
       this.requset();
       
    }
    handleChangePassword=(num)=>{
        let rows;
        if(num==1)
        rows=this.state.selectedRows1;
        else
         rows=this.state.selectedRows2;
         if(rows){
            let ids=[];
            rows.map((item)=>{
                ids.push(item.id);
            })
         
            Modal.confirm({
                title:'重置密码提示',
                content:`您确定要重置这些序号用户的密码吗？${ids}`,
                onOk:()=>{
                    this.props.changedata(ids);
                    message.success("重置成功")
                   
                }
            })
         }else{
            message.warning("请选择要重置的序号");
         }
       
    }
    handleadd=()=>{
        this.setState({
            visible:true
        })
    }
  
	render(){
        const {getFieldDecorator}=this.props.form;
        const formItemLayout={
            labelCol:{//屏幕大小配比
                xs:24,//要小于24份
                sm:4,
            },
            wrapperCol:{
                xs:24,
                sm:12
            }
        }
        const offsetLayout={
            wrapperCol:{
                xs:24,
                sm:{
                    span:12,
                    offset:4
                }
            }
        }
        const columns=[
            {title:"序号",dataIndex:'id',key:'id'+'tnum'},
            { title: '姓名', dataIndex: 'name', key: 'id' },
            { title: '账号', dataIndex: 'username', key: 'id' },
           
            { title: '性别', dataIndex: 'sex', key: 'sex' },
            { title: '学院', dataIndex: 'clloge', key: 'clloge' },
          
        ];
        const studcolumns=[
            {title:"序号",dataIndex:'id',key:'id'+'stnum'},
            { title: '姓名', dataIndex: 'name', key: 'id' },
            { title: '账号', dataIndex: 'username', key: 'id' },
           
            { title: '性别', dataIndex: 'sex', key: 'sex' },
            { title: '学院', dataIndex: 'college', key: 'college' },
          
        ];
        const selectedRowKeys1=this.state.selectedRowKeys1;//const {selectedRowKeys}=this.state;//es6的解构
        const selectedRowKeys2=this.state.selectedRowKeys2;
        const rowCheckSelection1={
            type:'checkbox',
            selectedRowKeys1,
            onChange:(selectedRowKeys1,selectedRows1)=>{//selectedRowKeys选中哪一行，selectedRows选中哪些行
                let ids=[];//存下id方便做类似删除的处理
                selectedRows1.map((item)=>{
                   
                    ids.push(item.id);
                })
                this.setState({
                    selectedRowKeys1,
                   // selsectIds:ids//这个不是必须的，是为了方便后续操作
                   selectedRows1
                })
                
            }
        }
        const rowCheckSelection2={
            type:'checkbox',
            selectedRowKeys2,
            onChange:(selectedRowKeys2,selectedRows2)=>{//selectedRowKeys选中哪一行，selectedRows选中哪些行
                let ids=[];//存下id方便做类似删除的处理
                selectedRows2.map((item)=>{
              
                    ids.push(item.id);
                })
                this.setState({
                    selectedRowKeys2,
                   // selsectIds:ids//这个不是必须的，是为了方便后续操作
                   selectedRows2
                })
                
            }
        }
        
        return(
            <div>
                <Card title="老师名单">
                <div style={{margin:'10px 0'}}>
                          <Button onClick={()=>this.handleDelete(1)}>删除</Button>
                          <Button onClick={()=>this.handleChangePassword(1)}>重置密码</Button>
                          <Button onClick={()=>this.handleadd(1)}>添加用户</Button>
                      </div>
                <Table 
                bordered
                rowSelection={rowCheckSelection1}
                    columns={columns}
                    dataSource={this.state.dataSource1}
                    pagination={true} //是否要分页
                   
                >
                </Table>
                </Card>
               
                <Card title="学生名单">
                <div style={{margin:'10px 0'}}>
                          <Button onClick={()=>this.handleDelete(0)}>删除</Button>
                          <Button onClick={()=>this.handleChangePassword(0)}>重置密码</Button>
                          <Button onClick={()=>this.handleadd(0)}>添加用户</Button>
                      </div>
                <Table 
                bordered
                rowSelection={rowCheckSelection2}
                    columns={studcolumns}
                    dataSource={this.state.dataSource2}
                    pagination={true} //是否要分页
                   
                >
                </Table>
                
                </Card>
                <Modal
                title="添加成员"
                width={400}
                height={700}
                visible={this.state.visible}
                onCancel={()=>{
                    this.setState({
                        visible:false
                    })
                }}
               footer={null}
                >
                  <FormItem label="学号" {...formItemLayout}>{/**lable是文本框前面的文字，文字后面不用打冒号，会自动添加 */}
            {
                       getFieldDecorator('username',{//初始化
                           initialValue:'3',
                           rules:[{
                               required:true,
                               message:'学号不能为空'
                           },
                         
                        ]
                       })(<Input prefix={<Icon type="user"/>} placeholder="请输入学号" />)
                   }    
                  
            </FormItem>
                   <FormItem label="我向往的那个实验室" {...formItemLayout}>
            {
                       getFieldDecorator('lab_id',{//初始化
                           initialValue:'1',
                           rules:[{
                            required:true,
                            message:'实验室不能为空'
                        },]
                           },
                       )(
                          <Select>
                              <Option value="1">计算机科学与技术学院</Option>
                              <Option value="2">材料科学与工程学院</Option>
                              <Option value="3">法学院</Option>
                              <Option value="4">国防科技学院</Option>
                              <Option value="5">环境与资源学院</Option>
                              <Option value="6">计算机科学与技术学院</Option>
                              <Option value="7">经济管理学院</Option>
                              <Option value="8">理学院</Option>
                              <Option value="9">马克思主义学院</Option>
                              <Option value="10">生命科学与工程学院</Option>
                              <Option value="11">体育学科部</Option>
                              <Option value="12">土木工程与建筑学院</Option>
                              <Option value="13">外国语学院</Option>
                          </Select>
                       )
                   }    
                  
            </FormItem>
                </Modal>
            </div>
        );

	}
}
const mapState=(state)=>({
  
});

const mapDispatch=(dispatch)=>({
    deletedata(flag,data){
        dispatch(actionCreators.deletedata(flag,data));
    },
    changedata(data){
        dispatch(actionCreators.deletedata(data));
    }
  
    
})

export default connect(mapState,mapDispatch) ( Form.create()(AdminMenber));