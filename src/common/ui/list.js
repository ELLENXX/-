import React,{Component} from 'react';
import {connect} from 'react-redux';
import {ListWapper,ListUl,ListLi} from './style';
import {Link} from 'react-router-dom';
import {actionCreators} from '../../page/store';
import {Icon} from 'antd';

class List extends Component{
     
    componentWillMount(){
        this.props.getnews(1);
    }
   
	render(){
        return (
           <ListWapper>
               <ListUl>
                   {
                       this.props.list.map((item,index)=>{
                           if(index%2==0)
                            return <ListLi key={index} className='nong'>
                              <Icon type="smile" />  <Link to={"/article/"+item.id} >{item.title}</Link>
                            </ListLi>
                            else
                            return   <ListLi key={index} className='dan'>
                            <Icon type="smile" /><Link to={"/article/"+item.id} >{item.title}</Link>
                        </ListLi>
                       })
                   }
                 
               </ListUl>
           </ListWapper>
        )
	}
}
const mapState=(state)=>({
   list:state.getIn(['page','newsList'])
});

const mapDispatch=(dispatch)=>({
    
    getnews(num){
        dispatch(actionCreators.getnews(num));
  }
    
})

export default connect(mapState,mapDispatch) (List);