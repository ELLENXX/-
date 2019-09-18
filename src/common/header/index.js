import React,{Component} from 'react';
import {connect} from 'react-redux';
import {HeaderWapper,HeaderTitle,TitlePic,HeaderNav,NavPic,NavItem,ItemBox} from './style';
import {NavLink} from 'react-router-dom';
import UserMenu from '../../config/usermenu';
import Utils from '../../utils/utils';
import './index.less';
import {Link} from 'react-router-dom';
import {Button ,Icon, Menu, Dropdown,Avatar} from 'antd';
import { actionCreators } from '../../common/header/store';

class Header extends Component{

    constructor(props){
        super(props);
        
        this.state={
            username:props.username,
            userpic:''
        }
        
       
    }
    
    componentWillMount()
    {
        this.props.getMenu(this.props.level);
        this.setState({
            userpic:Utils.getCookie('userpic')
        })   
        console.info("111",this.state.userpic);
    }
   
    onhandleNav=(e)=>{
        this.clearcolor();
        e.target.style.color='#1E66AC';
        e.target.style.borderBottom="1px solid #1E66AC";
        if(e.target.innerHTML=='实验室'){
           this.setState({
               itembox:'block'
           })
        }
    }
    handleClickNav=(num)=>{
       this.setState({
           color:num
       })

    }
  

    clearcolor=()=>{
        
        var oLi=document.getElementsByTagName('a');
        for(let i=0;i<oLi.length;i++)
        {
            
            if(i!=this.state.color)
            {
                oLi[i].style.color="#666";
                oLi[i].style.borderBottom="";
            }
            else
            {
                oLi[i].style.color="#1E66AC";
                oLi[i].style.borderBottom="1px solid #1E66AC";
            }
        }
        
    }
   
   
    render(){  
        const menu1 = ( <Menu style={{width:"300px"}}>
            {
                this.props.usermenu.map((item)=>{
                   
                    return  <Menu.Item key={item.key}>
                    <NavLink replace={true} style={{color:'#666',textDecoration:'none'}} to={"/user"+item.key}>
                      {item.title}
                      </NavLink>
                    </Menu.Item>
                    }
            )}
           
            
            </Menu>
          );
        const id=2;
        const menu = (
            <Menu>
              <Menu.Item>
                <Link  rel="noopener noreferrer" to={"/user/ownpage/"}>个人设置</Link>
              </Menu.Item>
              <Menu.Item>
                <NavLink  rel="noopener noreferrer" to={"/login/login"}>退出</NavLink>
              </Menu.Item>
            </Menu>
          );
        return(
            <HeaderWapper >
                <div className="HeaderTitle"><TitlePic></TitlePic><span className="text">实验室招新平台</span></div>
                <HeaderNav className="big">
                
                    <NavPic>
                    <Dropdown overlay={menu} placement="bottomCenter">
  
                    <Avatar  src={Utils.getCookie('userpic')} size="large" />
                    </Dropdown>
                    </NavPic>

                    <div className="NavItem">
                            <ul className="nav">
                                {
                                    this.props.usermenu.map((item,index)=>{
                                       
                                        return <li className="nav_li" key={item.key} onMouseOver={this.onhandleNav} onClick={()=>this.handleClickNav(index)} onMouseLeave={this.clearcolor}>
                                    <NavLink replace={true} style={{color:'#666',textDecoration:'none'}} to={"/user"+item.key}>
                                    {item.title}
                                    </NavLink>
                                    </li>}
                                )}
                            </ul>
                           
                    </div>
                 
                   
                   
                </HeaderNav>
                <div className="display">
                <Dropdown overlay={menu1}>
                 <Icon className="icon" type="menu-fold" />
                 
                 </Dropdown>,
                 </div>
            </HeaderWapper>
        )
       
    
    }
}

const mapState=(state)=>({
    headerdisplay:state.getIn(['login','headerdisplay']),
    username:state.getIn(['login','username']),
    userpic:state.getIn(['login','userpic']),
    userset:state.getIn(['header','userset']),
    usermenu:state.getIn(['header','menu']),
    level:state.getIn(['login','level'])
});

const mapDispatch=(dispatch)=>({
    
        getMenu(num){
            dispatch(actionCreators.getMenu(num));
        },
        
    
})

export default connect(mapState,mapDispatch) (Header);