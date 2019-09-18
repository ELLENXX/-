import React ,{Component} from 'react';
import { Menu, Icon,Progress } from 'antd';
import {Link,Switch,Route} from 'react-router-dom';
import './index.less';


class Ownpage extends Component{
    state = {
        current: 'check',
       text:"未审核",
        percent:0,
      }
      componentDidMount(){
   
      }
      
    
      handleClick = (e) => {
        console.log('click ', e);
        this.setState({
          current: e.key,
        });
      }
    render(){
        return(
            <div className="own_wapper">
                <div className="own_content">
                   <div className="own_menu">
                   <Menu
                    onClick={this.handleClick}
                    selectedKeys={[this.state.current]}
                    mode="horizontal"
                    >
                        <Menu.Item key="check" style={{marginLeft:"20px"}}>
                        <Icon type="star" />
               <Link to={'/user/ownpage/progress'}> 我的审核</Link>
                </Menu.Item>
                <Menu.Item key="mail" style={{marginLeft:"20px"}}>
                <Icon type="mail" /><Link to={'/user/ownpage/new'}>修改密码</Link>
                </Menu.Item>
                <Menu.Item key="set" style={{marginLeft:"20px"}}>
                <Icon type="setting" /><Link to={'/user/ownpage/set'}>我的设置</Link>
                </Menu.Item>

                </Menu>
      </div>
                  
                   <div className="own_item">
                   <div style={{ width:" 90%" }}>
                   {this.props.children}
                  {/**<div>{this.state.text}</div>
                <Progress percent={this.state.percent} size="small" />*/} 
  </div>, 
                   </div>
                </div>
            </div>
        )
    }
}

export default Ownpage;