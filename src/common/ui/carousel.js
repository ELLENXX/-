import React,{Component} from 'react';
import {connect} from 'react-redux';
import { HomePic,PicL,PicR,PicPoint,PicIte,TimeItem} from './style.js';
import {actionCreators} from '../../page/store';
import Utils from '../../utils/utils';
class Carousels extends Component{
    constructor(props){
        super(props);
        this.state={ 
            t:0,//轮播图顺序 
            c0:false,c1:false,c2:false,c3:false 
        }
    };
    componentWillMount(){
        setInterval(()=>{
            let sysTime=Utils.getDate(new Date().getTime());//获取时间
            this.setState({
              sysTime
            })
          },1000);
    }
    tick=()=>{
        if(this.state.t==3)
        {
            this.setState({
                t:0
            })
        }
        else{
            let x=this.state.t+1;
            this.setState({
                t:x
            })
        }
        this.clearcolor();
        this.changecolor('c'+this.state.t,true);
    }
    clearcolor=()=>{
        this.changecolor('c0',false);
        this.changecolor('c1',false);
        this.changecolor('c2',false);
        this.changecolor('c3',false);
        
    }
    componentWillMount(){
        this.starttime();
        this.props.getpic();
    }

    stoptime=()=>{
        clearInterval(this.time);
    }
    starttime=()=>{
        this.time=setInterval(this.tick,3000);
    }
    changecolor=(num,flag)=>{
            this.setState({[num]:flag})
    }
    handlepoint=(num,dy)=>{
        this.stoptime();
        num=num+dy;
        if(num==4)
        num=0;
        if(num==-1)
        num=3;
        this.setState({
            t:num,
        })
        this.clearcolor();
        this.changecolor('c'+num,true);
        this.starttime();
    }
    render(){
        return(
            <HomePic  style={{"background":"url("+this.props.pic[this.state.t]+") no-repeat",width:"100%"}}>
            <PicL onClick={()=>this.handlepoint(this.state.t,-1)}  ><i className="iconfont iconf">&#xe630;</i></PicL>
            <PicR onClick={()=>this.handlepoint(this.state.t,1) } ><i className="iconfont iconf">&#xe603;</i></PicR>
            <PicPoint>
            <PicIte className={this.state.c0?"handle":"lea"}  onMouseOver={()=>this.handlepoint(0,0)} ></PicIte>
            <PicIte className={this.state.c1?"handle":"lea"} onMouseOver={()=>this.handlepoint(1,0)}></PicIte>
            <PicIte className={this.state.c2?"handle":"lea"}  onMouseOver={()=>this.handlepoint(2,0)}></PicIte>
            <PicIte className={this.state.c3?"handle":"lea"}  onMouseOver={()=>this.handlepoint(3,0)}></PicIte>
            </PicPoint>
            
            </HomePic>
        )
    }
    componentWillUnmount() {
        clearInterval(this.timerID);
       }
}

const mapState=(state)=>({
    pic:state.getIn(['page','pic']),

});

const mapDispatch=(dispatch)=>({
   getpic(){
      dispatch(actionCreators.getpic());
   },

});

export default connect(mapState,mapDispatch) (Carousels);