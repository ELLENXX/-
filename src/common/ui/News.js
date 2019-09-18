import React,{Component} from 'react';
import {NewWapper,NewsUl,NewsLi,LiItemL,LiItemR} from './style.js';
import {Link} from 'react-router-dom';

 export default class News extends Component{
     
    render(){
       
        return(
            <NewWapper>
                <NewsUl>
                  {
                      this.props.list.map((item,index)=>{
                        return <NewsLi key={index}>
                         <LiItemL><img className="pic" src={item.pic}/></LiItemL>
                         <LiItemR>
                             <div className="title"><Link to={"/article/"+item.id} className="lin" >{item.title}</Link></div>
                             <div className="content">{item.info}
                             </div>
                             <div className="bottom">发布日期：{item.createTime}</div>
                         </LiItemR>
                         </NewsLi>
                         })
                  }
                </NewsUl>
           </NewWapper>
        )
    }
}
