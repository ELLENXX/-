import React,{Component} from 'react';
import Carousel from '../../common/ui/carousel';
import {Card,Input, Upload,Form, Button,message, Icon, Checkbox,Radio,Select,Switch,DatePicker,TimePicker, InputNumber} from 'antd';
import './index.less';
import {actionCreators} from '../store';
import {connect } from 'react-redux';
import Recsu from '../../common/ui/recsu';
import qs from 'qs';
const TextArea=Input.TextArea;
const Option = Select.Option;
const FormItem=Form.Item;
const RadioGroup=Radio.Group;
class Receuit extends Component{
    state={
       
    }
    handleSubmit=()=>{
        let apply=this.props.form.getFieldsValue();//获取当前表单
      if(apply['name']==''||apply['username']==''||apply['sClass']==''||apply['introduce']==''||apply['phone'==''||apply['qqNum'=='']])
      {
        message.error('带*号为必填项');
      }
      else{
        var currentDate = new Date();
        let createTime=currentDate.getFullYear()+'-'+(currentDate.getMonth()+1)+ '-'+ currentDate.getDate()+'-'+currentDate.getHours()+':'+currentDate.getMinutes();
        apply['createTime']=createTime;
        apply['state']=0;
       
     
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
        if(!this.props.recsu)
        {
            return (
            <div className='rec_wapper'>
                <Carousel />
                <div className="rec_content">
                   <div className="content_title">
                 <div className="spa"></div>
                   <span style={{float:'left',marginLeft:5}}>招新填报</span>
                   </div> 
                   <div className="from">
                   <Form layout="horizontal">
            <FormItem label="姓名" {...formItemLayout}>{/**lable是文本框前面的文字，文字后面不用打冒号，会自动添加 */}
            {
                       getFieldDecorator('name',{//初始化
                           initialValue:'',
                           rules:[{
                               required:true,
                               message:'姓名不能为空'
                           },
                         
                        ]
                       })(<Input prefix={<Icon type="user"/>} placeholder="请输入姓名" />)
                   }    
                  
            </FormItem>
            <FormItem label="学号" {...formItemLayout}>{/**lable是文本框前面的文字，文字后面不用打冒号，会自动添加 */}
            {
                       getFieldDecorator('username',{//初始化
                           initialValue:'',
                           rules:[{
                               required:true,
                               message:'学号不能为空'
                           },
                         
                        ]
                       })(<Input prefix={<Icon type="user"/>} placeholder="请输入学号" />)
                   }    
                  
            </FormItem>
            <FormItem label="班级" {...formItemLayout}>{/**lable是文本框前面的文字，文字后面不用打冒号，会自动添加 */}
            {
                       getFieldDecorator('sClass',{//初始化
                           initialValue:'',
                           rules:[{
                               required:true,
                               message:'班级不能为空'
                           },
                         
                        ]
                       })(<Input prefix={<Icon type="user"/>} placeholder="请填写班级信息" />)
                   }    
                  
            </FormItem>
          
            <FormItem label="联系电话" {...formItemLayout}>{/**lable是文本框前面的文字，文字后面不用打冒号，会自动添加 */}
            {
                       getFieldDecorator('phone',{//初始化
                           initialValue:'',
                           rules:[{
                               required:true,
                               message:'联系电话不能为空'
                           },
                         
                        ]
                       })(<Input prefix={<Icon type="user"/>} placeholder="请填写联系电话" />)
                   }    
                  
            </FormItem>
            <FormItem label="QQ" {...formItemLayout}>{/**lable是文本框前面的文字，文字后面不用打冒号，会自动添加 */}
            {
                       getFieldDecorator('qqNum',{//初始化
                           initialValue:'',
                           rules:[{
                               required:true,
                               message:'QQ不能为空'
                           },
                         
                        ]
                       })(<Input prefix={<Icon type="user"/>} placeholder="请填写QQ" />)
                   }    
                  
            </FormItem>
            <FormItem label="性别" {...formItemLayout}>
            {
                       getFieldDecorator('sex',{//初始化
                           initialValue:'',
                           },
                         
                        
                       )(
                           <RadioGroup>
                               <Radio value="1">男</Radio>
                               <Radio value="2">女</Radio>
                           </RadioGroup>
                       )
                   }    
                  
            </FormItem>
          
            <FormItem label="我向往的那个实验室" {...formItemLayout}>
            {
                       getFieldDecorator('labId',{//初始化
                           initialValue:'',
                           rules:[{
                            required:true,
                            message:'实验室不能为空'
                        },]
                           },
                       )(
                          <Select>
                              <Option value="1">智能计算与模式识别研究室</Option>
                              <Option value="2">嵌入式研究室</Option>
                              <Option value="3">虚拟现实与仿真研究室</Option>
                              <Option value="4">网络技术与分布式计算研究室</Option>
                              <Option value="5">数据与知识工程研究室</Option>
                              <Option value="6">信息安全理论与技术研究室</Option>
                              <Option value="7">机器视觉研究室</Option>
                              <Option value="8">计算机系统结构研究室</Option>
                          </Select>
                       )
                   }    
                  
            </FormItem>
          
          
            <FormItem label="我的优势" {...formItemLayout}>{/**lable是文本框前面的文字，文字后面不用打冒号，会自动添加 */}
            {
                       getFieldDecorator('prize',{//初始化
                           initialValue:'',
                       })(  <TextArea placeholder="擅长、优点、获奖......"
                        autosize={
                            {
                                minRows:4,maxRows:6 //设置为true，会自适应，设置为对象，就是固定
                            }
                        }
                        />)
                   }    
                  
            </FormItem>
           
            <FormItem label="加入原因" {...formItemLayout}>
            {
                       getFieldDecorator('introduce',{//初始化
                           initialValue:'为什么呢',
                           rules:[{
                            required:true,
                            message:'原因不能为空'
                        },]
                           },
                       )(
                        <TextArea 
                        autosize={
                            {
                                minRows:4,maxRows:6 //设置为true，会自适应，设置为对象，就是固定
                            }
                        }
                        />
                       )
                   }    
                  
            </FormItem>
          
            <FormItem {...offsetLayout}>
                   <Button type="primary"  onClick={this.handleSubmit}>提交申请</Button>
            </FormItem>
        </Form>

                   </div>
                </div>
            </div>
        )
        }
        else{
            return <Recsu />
        }
        
    }
}
const mapState=(state)=>({
  recsu:state.getIn(['page','recruitsc'])
});

const mapDispatch=(dispatch)=>({
    giveapply(apply)
    {
        console.log(apply);
        dispatch(actionCreators.giveapply(apply));
    }
});


export default connect(mapState,mapDispatch)(Form.create()(Receuit));
