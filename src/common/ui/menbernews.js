import React,{Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {Card,Input, Button,Form,Icon,message} from 'antd';
import { actionCreators } from '../header/store';

const FormItem=Form.Item;
class MenberNews extends Component{
    getBase64=(img, callback)=> {
        const reader = new FileReader();//读取文件对象
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
      }
      handleSubmit=()=>{
        let userInfo=this.props.form.getFieldsValue();//获取当前表单
       
       
        axios.get('http://192.168.43.5:8080/teacher/changePassword?password='+userInfo.password+'&password1='+userInfo.password1+'&password2='+userInfo.password2).then((res)=>{
        if(res){
          
            if(res.data==1)
            {
                message.success('修改成功');
            }else{
                message.warning('修改失败');
            }
        }
    });
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
            <Card title="修改密码">
                <Form layout="horizontal">
            <FormItem label="输入原密码" {...formItemLayout}>{/**lable是文本框前面的文字，文字后面不用打冒号，会自动添加 */}
            {
                       getFieldDecorator('password',{//初始化
                           initialValue:'',
                           rules:[{
                               required:true,
                               message:'原密码不能为空'
                           },
                         
                        ]
                       })(<Input type='password' prefix={<Icon type="lock"/>} placeholder="请输入原密码" />)
                   }    
                  
            </FormItem>
            <FormItem label="输入新密码" {...formItemLayout}>{/**lable是文本框前面的文字，文字后面不用打冒号，会自动添加 */}
            {
                       getFieldDecorator('password1',{//初始化
                           initialValue:'',
                           rules:[{
                               required:true,
                               message:'新密码不能为空'
                           },
                         
                        ]
                       })(<Input type='password' prefix={<Icon type="lock"/>} placeholder="请输入新密码" />)
                   }    
                  
            </FormItem>
            <FormItem label="重新确认密码" {...formItemLayout}>{/**lable是文本框前面的文字，文字后面不用打冒号，会自动添加 */}
            {
                       getFieldDecorator('password2',{//初始化
                           initialValue:'',
                           rules:[{
                               required:true,
                               message:'密码不能为空'
                           },
                         
                        ]
                       })(<Input type='password' prefix={<Icon type="lock"/>} placeholder="确认密码" />)
                   }    
                  
            </FormItem>
            <FormItem {...offsetLayout}>
                   <Button type="primary" onClick={this.handleSubmit}>提交</Button>
            </FormItem>
            </Form>
            </Card>
        )
	}
}
const mapState=(state)=>({
   

});

const mapDispatch=(dispatch)=>({
   
})

export default connect(mapState,mapDispatch) (Form.create()(MenberNews));