import React,{Component} from 'react';
import {connect} from 'react-redux';
import {actionCreators } from './store';
import {Redirect} from 'react-router-dom';//重定向


import {LoginWrapper,LoginModule,Loginpic,LoginName,Input,Button,LoginCho,Cho,LoginMiss} from './style';
class Login extends Component{
    constructor(props)
    {
        super(props);
       this.state={
            usercheak:true,
            passwordcheck:true,
            checkts:"",
            checkk:false,
            level:''
       };
    }
handlelevel=(e)=>{
   let le=e.target.value;
   this.setState({
       level:le
   })
}
    componentDidMount(){
        
    }

    check=(accountElem,passwordElem)=>{
     
        if(accountElem)
        {
            this.setState({
                usercheak:true,
                checkk:false
            })
            if(passwordElem){
                this.setState({
                    passwordcheck:true,
                    checkk:false
                })
                this.props.login(accountElem,passwordElem,this.state.level);
            }
            else{
                this.setState({
                    passwordcheck:false,
                    checkts:'请输入密码',
                    checkk:true,
                })
            }
        }
        else
        {
            this.setState({
                usercheak:false,
                checkts:'请输入账号',
                checkk:true,
               
            })
        }
    }
    tsk=()=>{
        if(this.state.checkk){
            return(
            <LoginMiss>{this.state.checkts}</LoginMiss>)
            
         }
    }

    render(){
        const {loginStatus,success}=this.props;
      
        if(!loginStatus){

        return(
            <LoginWrapper>
                {this.tsk()}
            <LoginModule>
                <Loginpic />
                <LoginName>计算机科学与技术学院实验室招新系统</LoginName>
                <Input className={this.state.usercheak?'right':'miss'} placeholder='账号' type="text"  innerRef={(input)=>{this.username=input }} />
                <Input className={this.state.passwordcheck?'right':'miss'}  placeholder='密码' type='password' innerRef={(input)=>{this.password=input }} />
              
                <LoginCho>
                <Cho>
                    <label> <i className='iconfont'>&#xe667;</i> student<input type="radio" value="1" name="level"  onClick={this.handlelevel} /></label>
                    </Cho>
                    <Cho>
                       <label><i className='iconfont'>&#xe600;</i> teacher<input type="radio"  value="2" name="level"  onClick={this.handlelevel}/></label>
                    </Cho>
                    
                   
                </LoginCho>
                <Button onClick={()=>this.check(this.username.value,this.password.value)}>登录</Button>
               
            </LoginModule>
            </LoginWrapper>
            
        )
        
    }
        else{
            if(this.state.level=='1')
            return <Redirect to='/user/userhome' />
            else if(this.state.level=='2')
            return <Redirect to='/user/userhome' />
            else
            return <Redirect to='/admin/home' />
            
        }
    }
}

const mapState=(state)=>({
    loginStatus:state.getIn(['login','login']),
    username:state.getIn(['login','username']),
    userpic:state.getIn(['login','userpic']),
    success:state.getIn(['login','success']),
});

const mapDispatch=(dispatch)=>({
    login(accountElem,passwordElem,level){
       console.log(accountElem,passwordElem,level);
        dispatch(actionCreators.loginfn(accountElem,passwordElem,level));
        
    }
});

export default connect(mapState,mapDispatch)(Login);