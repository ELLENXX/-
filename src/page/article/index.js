import React,{Component} from 'react';
import Header from '../../common/header';
import Footer from '../../common/Footer';
import {connect} from 'react-redux';
import {actionCreators} from '../store';
import {withRouter} from 'react-router-dom';
import List from '../../common/ui/list';
import {ArticleWapper,ArticleLeft,ArticleHeader,LeftTitle,
    ArticleContent,ArticleRight,ArticleFooter,LeftDate,LeftContent} from './style';
class Article extends Component{

    componentWillMount(){
        this.props.getnews(1);
    }

    render(){
        return (
            <ArticleWapper>
                <ArticleHeader>
                <Header />
                </ArticleHeader>
                <ArticleContent>
               <ArticleLeft>
                   {
                       this.props.newslist.map((item)=>{
                           if(item.id==this.props.match.params.id)
                           {
                               return  ( <div> <LeftTitle>
                    {item.title}
                </LeftTitle>
                <LeftDate>
                    <div className="date">发布时间：{item.createTime}</div>
                    <div className="share">
                    <div className="bdsharebuttonbox">
                    <a href="#" className="bds_more" data-cmd="more"></a>
                    <a href="#" className="bds_qzone" data-cmd="qzone"></a>
                    <a href="#" className="bds_tsina" data-cmd="tsina"></a>
                    <a href="#" className="bds_tqq" data-cmd="tqq"></a>
                    <a href="#" className="bds_renren" data-cmd="renren"></a>
                    <a href="#" className="bds_weixin" data-cmd="weixin"></a>
                    </div>
                    </div>
                </LeftDate>
                <LeftContent dangerouslySetInnerHTML={{__html:item.info}}>
               
                </LeftContent>
                               </div>)
                           }
                       })
                   }
               
               </ArticleLeft>
                <ArticleRight>
<List />
                </ArticleRight>
                 </ArticleContent>
                <ArticleFooter>
                <Footer />
                </ArticleFooter>
            </ArticleWapper>
        )
    }
}

const mapState=(state)=>({
    newslist:state.getIn(['page','newsList'])
})

const mapDispatch=(dispatch)=>({
    getnews(num){
        dispatch(actionCreators.getnews(num));
  }
})

export default connect(mapState,mapDispatch)( withRouter(Article));