import React,{Component} from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import { Card,Input, Upload,Form, Button,message, Icon, Checkbox,Radio,Select,Switch,DatePicker,TimePicker, InputNumber} from 'antd';
const TextArea=Input.TextArea;
const Option = Select.Option;
const FormItem=Form.Item;
const RadioGroup=Radio.Group;
class LabSet extends Component{
    state={
        
    }
    handleSubmit=()=>{
        let userInfo=this.props.form.getFieldsValue();//获取当前表单
        let lab=userInfo.state;
        let info=userInfo.info;
        let member=userInfo.member;
        let directions=userInfo.directions;
        let projects=userInfo.projects;


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
            return(
                <div>
                    <Card title="设置实验室信息">
                    <FormItem label="选择要修改的实验室" {...formItemLayout}>
            {
                       getFieldDecorator('state',{//初始化
                           initialValue:'1',
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
            <FormItem label="实验室简介" {...formItemLayout}>
            {
                       getFieldDecorator('info',{//初始化
                           initialValue:''
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
          
            <FormItem label="实验室成员" {...formItemLayout}>
            {
                       getFieldDecorator('member',{//初始化
                           initialValue:''
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
            <FormItem label="科研方向" {...formItemLayout}>
            {
                       getFieldDecorator('directions',{//初始化
                           initialValue:''
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
            <FormItem label="研究成果" {...formItemLayout}>
            {
                       getFieldDecorator('projects',{//初始化
                           initialValue:''
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
                   <Button type="primary" onClick={this.handleSubmit}>提交</Button>
            </FormItem>
                    </Card>
                </div>
            )
	}
}
const mapState=(state)=>({
   
    usermenu:state.getIn(['header','menu'])
});

const mapDispatch=(dispatch)=>({
    
     
    
})

export default connect(mapState,mapDispatch) (Form.create()(LabSet));