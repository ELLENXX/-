import React,{Component} from 'react';
import {Card,Input, Upload,Form, Button,message, Icon, Checkbox,Radio,Select,Switch,DatePicker,TimePicker, InputNumber} from 'antd';
import {actionCreators} from  '../../page/store';
import moment from 'moment';
import {connect} from 'react-redux';
const TextArea=Input.TextArea;
const Option = Select.Option;
const FormItem=Form.Item;
const RadioGroup=Radio.Group;
class FormRegister extends Component { 
    constructor(props){
        super(props);
        this.state={
            userdata:this.props.userdata
        }
    }
    state={
  
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.userdata !== this.props.userdata) {
          this.setState({userdata: nextProps.userdata});
        }
      }
    componentWillMount(){
        this.props.getuserdata();
        this.setState({
      
        })
    }
    handleSubmit=()=>{
        let userInfo=this.props.form.getFieldsValue();//获取当前表单
        console.log(JSON.stringify(userInfo));

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
      return(<div>
          <Card title="请填写信息">
          <Form layout="horizontal">
            <FormItem label="姓名" {...formItemLayout}>{/**lable是文本框前面的文字，文字后面不用打冒号，会自动添加 */}
            {
                       getFieldDecorator('name',{//初始化
                           initialValue:this.state.userdata.name,
                           rules:[{
                              
                               message:'用户名不能为空'
                           },
                         
                        ]
                       })(<Input prefix={<Icon type="user"/>}  placeholder="请输入用户名" />)
                   }    
                  
            </FormItem>
            
            <FormItem label="学号" {...formItemLayout}>{/**lable是文本框前面的文字，文字后面不用打冒号，会自动添加 */}
            {
                       getFieldDecorator('username',{//初始化
                           initialValue:this.state.userdata.username,
                           rules:[{
                             
                               message:'班级不能为空'
                           },
                         
                        ]
                       })(<Input disabled  prefix={<Icon type="user"/>} placeholder="请输入用户名" />)
                   }    
                  
            </FormItem>
            <FormItem label="班级" {...formItemLayout}>{/**lable是文本框前面的文字，文字后面不用打冒号，会自动添加 */}
            {
                       getFieldDecorator('Sclass',{//初始化
                           initialValue:'',
                           rules:[{
                             
                             
                           },
                         
                        ]
                       })(<Input />)
                   }    
                  
            </FormItem>
            <FormItem label="联系方式" {...formItemLayout}>{/**lable是文本框前面的文字，文字后面不用打冒号，会自动添加 */}
            {
                       getFieldDecorator('phone',{//初始化
                           initialValue:this.state.userdata.phone,
                       })(<Input  placeholder="请输联系方式" />)
                   }    
                  
            </FormItem>
            <FormItem label="性别" {...formItemLayout}>
            {
                       getFieldDecorator('sex',{//初始化
                           initialValue:this.state.userdata.sex,
                           },
                         
                        
                       )(
                           <RadioGroup>
                               <Radio value="男">男</Radio>
                               <Radio value="女">女</Radio>
                           </RadioGroup>
                       )
                   }    
                  
            </FormItem>
            
           
                  
    
           
           <FormItem label="所在实验室" {...formItemLayout}> <Select>
                              <Option value="智能计算与模式识别研究室">智能计算与模式识别研究室</Option>
                              <Option value="嵌入式研究室">嵌入式研究室</Option>
                              <Option value="虚拟现实与仿真研究室">虚拟现实与仿真研究室</Option>
                              <Option value="网络技术与分布式计算研究室">网络技术与分布式计算研究室</Option>
                              <Option value="数据与知识工程研究室">数据与知识工程研究室</Option>
                              <Option value="信息安全理论与技术研究室">信息安全理论与技术研究室</Option>
                              <Option value="机器视觉研究室">机器视觉研究室</Option>
                              <Option value="计算机系统结构研究室">计算机系统结构研究室</Option>
                          </Select></FormItem>
                          <FormItem label="上传头像" {...formItemLayout}>
            {
                       getFieldDecorator('userImg',
                       )(
                         <Upload 
                         listType="picture-card"
                         showUploadList={false}//是否显示上传列表
                         action="//jsonplaceholder.typicode.com/posts/"
                        onChange={this.handleChange}
                         >
                         {this.state.userImg?<img src={this.state.userImg} />:<Icon type="plus" />}
                         </Upload>
                       )
                   }     
                  
            </FormItem>
           
            <FormItem {...offsetLayout}>
                   <Button type="primary" onClick={this.handleSubmit}>提交</Button>
            </FormItem>
        </Form>
          </Card>
          </div>
               
        );
    }
}
const mapState=(state)=>({
    userdata:state.getIn(['page','userdata']),
    level:state.getIn(['login','level'])
});

const mapDispatch=(dispatch)=>({
    getuserdata(){
        dispatch(actionCreators. getuserdata());
    }
});
export default connect(mapState,mapDispatch)(Form.create()(FormRegister));