import React,{Component} from 'react';
import Carousel from '../../common/ui/carousel';
import './index.less';
import Comments from '../../common/ui/comment';
class Contact extends Component{
    render(){
      
        return (
            <div className='cont_wapper'>
             <Carousel />
             <div className="cont_content">
             <h1>联系方式： </h1>
             <br />
            
             QQ:1231234561
             <br />
             <br />
             邮箱：1231234561@qq.com
             <br />
             <br />
             电话:1008611
             <br />
             <br />
             地址：东六综合实验楼
             <div className="">
             <Comments itnum={-1} />
             </div>
             </div>
             
            
            </div>
        )
    }
}

export default Contact;