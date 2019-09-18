import React,{Component} from 'react';
import {HomeWapper,HomeNews,HomeSreach,HomeContent,NewsTitle} from './style';
import {connect} from 'react-redux';
import {actionCreators} from '../store';
import Carousels from '../../common/ui/carousel.js';
import News from '../../common/ui/News';
import {Link} from 'react-router-dom';
import { Input,Button,Row,Col,Dropdown,Menu } from 'antd';


const Search = Input.Search;
class Home extends Component{
    
    
    componentWillMount(){
        this.props.getpic(); 
        this.props.getnews(1);
    }

    onhandleNav=(e)=>{
        this.clearcolor();
        e.target.style.color='#000';
        e.target.style.borderBottom="1px solid #000";
    }

    clearcolor(){
        var oLi=document.getElementsByTagName('li');
        for(let i=0;i<oLi.length;i++)
        {
            oLi[i].style.color="#666";
            oLi[i].style.borderBottom="";
        }
    }
    handlesearch=()=>{
        this.props.handlesearch('计算');
    }
    render(){
        const menu = (
            <Menu style={{width:1530}}>
              <Menu.Item>
               <Link to={"/user/laboratories"}>智能<span style={{color:'red'}}>计算</span>与模式识别实验室</Link>
              </Menu.Item>
              <Menu.Item>
                <a  rel="noopener noreferrer" href="#"><span style={{color:'red'}}>计算</span>机系统结构研究室</a>
              </Menu.Item>
              <Menu.Item>
                <a rel="noopener noreferrer" href="#/">网络技术与分布式<span style={{color:'red'}}>计算</span>实验室</a>
              </Menu.Item>
            </Menu>
          );
        return(
            <HomeWapper> 
                
                 <Carousels />
                
                <HomeContent> 
                    <NewsTitle>
                        <ul>
                            <li onMouseOver={this.onhandleNav} onClick={()=>this.props.getnews(1)}>招新公告</li>
                        </ul>
                    </NewsTitle>
                    <HomeSreach>
                        <Row>
                            <Col span={20}> <Input /></Col>
                            <Col span={4}> <Dropdown overlay={menu}><Button type="primary" onClick={this.handlesearch} >搜一搜</Button></Dropdown></Col>
                        </Row>
                  

                    </HomeSreach>
               <HomeNews>
                       <News list={this.props.newslist}/>
                </HomeNews>
            </HomeContent>
            
            </HomeWapper>
        )

    }
    
}

const mapState=(state)=>({
    pic:state.getIn(['page','pic']),
    newslist:state.getIn(['page','newsList'])
});

const mapDispatch=(dispatch)=>({
   getpic(){
      dispatch(actionCreators.getpic());
   },
   getnews(num){
         dispatch(actionCreators.getnews(num));
   },
   handlesearch(value){
       dispatch(actionCreators.handlesearch(value));
   }
});

export default connect(mapState,mapDispatch)(Home);
