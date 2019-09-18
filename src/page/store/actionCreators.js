import * as constants from './constants';
import { fromJS } from 'immutable';
import Axios from '../../axios/index';
import {message} from 'antd';
import axios from 'axios';
import questions from '../questions';

axios.defaults.withCredentials = true

const gotpic=(data)=>({
    type:constants.GET_PIC,
    pic:data.pic
})

const gotnews=(data)=>({
    type:constants.GET_NEWS,
    list:data
})

const gotarticle=(data)=>({
    type:constants.GET_ARTICLE,
    article:fromJS(data)
})

const gotlabmenu=(data)=>({
    type:constants.GET_LABMENU,
    labmenu:data
})

const gotlab=(data)=>({
    type:constants.GET_LAB,
    labnew:data
})

const goven=()=>({
    type:constants.GOVEN,
    recruitsc:true
})

const gotquestions=(data)=>({
    type:constants.GET_QUESTIONS,
    questions:data
})
const gotlabmen=(data)=>({
    type:constants.GET_LABMENB,
    data:data
})

const gotcheck=(data)=>({
    type:constants.GET_CHECK,
    checkdata:data
})
const gotcomment=(data)=>({
    type:constants.GET_COMMENT,
    comment:data
})

const userdata=(data)=>({
    type:constants.USER_DATA,
    userdata:data
})
const govenans=(data)=>({
    type:constants.GOVEN_ANS,
    data:data,
})



const baseUrl="https://www.easy-mock.com/mock/5c5fbdcd1c8f8e296dedf964/zhaoxin";

export const getpic=()=>{
    return (dispatch)=>{
       
       Axios.ajax({
           url:'/home/pic',
           baseApi:baseUrl,
           data:{
            isSHowLoading:false
           }
       }).then((res)=>{
            if(res.success){
                dispatch(gotpic(res.data));
            }else{
                message.info("图片获取失败");
            }
       })
       
    }
}

//获取招新公告
export const getnews=(num)=>{
    return (dispatch)=>{
      let  childUrl;
        if(num==1)
        {
            childUrl='/home/zhaoxinnews';
        }else if(num==2){
            
            childUrl='/home/history';
        }
    
        Axios.ajax({
            url:'http://192.168.43.5:8080/admin/allNotice',
            baseApi:'',
        }).then((res)=>{
            if(res){
         
                dispatch(gotnews(res));
            }else{
                message.info("招新公告获取失败");
            }
        })
       
    }
}
//获取文章
export const getarticle=(num)=>{
    return (dispatch)=>{
        Axios.ajax({
            url:'/article.json',
            baseApi:'/config',
            data:{
               params:num
            }
        }).then((res)=>{
            if(res.success){
                dispatch(gotarticle(res.data));
            }else{
                message.info("文章获取失败");
            }
        })
    }
}

//传输
export const giveapply=(apply)=>{
    return (dispatch)=>{
          axios({
            method: 'POST',
            url: 'http://192.168.43.5:8080/student/doApply',
            data: JSON.stringify(apply),
           
            xhrFields: {
                withCredentials: true
                },
                headers: {
                    'Content-Type': 'application/json'
                },
                dataType:'json',
    
          })
        dispatch(goven());
       
      
    }
}

//获取实验室菜单
export const getlabmenu=()=>{
    return (dispatch)=>{
        Axios.ajax({
            url:'/labmenu.json',
            baseApi:'/config',
        }).then((res)=>{
            if(res.success){
         dispatch(gotlabmenu(res.data));
            }else{
                message.info("菜单获取失败");
            }
        })
    }
}
//获取实验室信息
export const getlab=(id)=>{
    return (dispatch)=>{
      
      
        axios.get('http://192.168.43.5:8080/student/LabNum?id='+id).then((res)=>{
            const result=res.data;
      
            if(result){
             
                dispatch(gotlabmen(result));
            }else{
                message.info("实验室信息获取失败");
            }
        });
        axios.get('http://192.168.43.5:8080/student/lab?id='+id).then((res)=>{
            const result=res.data;
          console.log("lab",result);
            if(result){
             
                dispatch(gotlab(result));
            }else{
                message.info("实验室信息获取失败");
            }
        });
      
    }
}

//获取题目信息
export const getquestion=(num)=>{
    return (dispatch)=>{
      
        Axios.ajax({
            url:'http://192.168.43.5:8080/student/question',
            baseApi:'',
            data:{
            }
        }).then((res)=>{
            if(res){
          
                dispatch(gotquestions(res));
            }else{
                message.info("题目获取失败");
            }
        })
       
    }
}


//删除
export const deletedata=(flag,dNum)=>{


   
    return (dispatch)=>{
      
          axios.get('http://192.168.43.5:8080/admin/deleteUser?flag='+flag+'&dNum='+dNum).then((res)=>{
            message.success('重置成功');
        });
        
     
       
    }
}

//重置
export const changedata=(dNum)=>{
    return (dispatch)=>{
      console.log("chan",dNum);
        axios.get('http://192.168.43.5:8080/admin/changePassword?dNum='+dNum).then((res)=>{
            message.success('重置成功');
        });
       
    }
}
export const getcheck=()=>{
    return (dispatch)=>{
       
        Axios.ajax({
            url:'http://192.168.43.5:8080/teacher/showApply',
            baseApi:'',
            data:{
            },
           
        }).then((res)=>{
            const result=res;
            console.log("check",result);
              if(result){
               
                  dispatch(gotcheck(result));
              }else{
                  message.info("审核信息获取失败");
              }
        })
    }
}
export const getcomment=(flag)=>{
    return (dispatch)=>{

        axios.get('http://192.168.43.5:8080/admin/deleteUser?flag='+flag).then((res)=>{
            const result=res.data;
            console.log("comment",result);
              if(result){
               
                  dispatch(gotcheck(result));
              }else{
                  message.info("评论获取失败");
              }
        });
       
    }
}

export const checked=(num,id)=>{
    return (dispatch)=>{

        axios.get('http://192.168.43.5:8080/teacher/check?state='+num+'&id='+id).then((res)=>{
        });
       
    }
}


export const getuserdata=()=>{
    return (dispatch)=>{
        Axios.ajax({
            url:'http://192.168.43.5:8080/teacher/info',
            baseApi:'',
            data:{
             
            }
        }).then((res)=>{
            if(res){
                console.log(res);
              dispatch(userdata(res));
            }else{
                message.info("文章获取失败");
            }
        })
    }
}
export const giveans=(ans)=>{
    return (dispatch)=>{

        axios.get('http://192.168.43.5:8080/student/result?ans='+ans).then((res)=>{
            if(res){
                console.log(res);
                dispatch(govenans(res.data));
            }
        });
       
    }
}

export const handlesearch=(value)=>{
    return(dispatch)=>{
        axios.get('http://192.168.43.5:8080/student/select?name='+value).then((res)=>{
            if(res){
              
                //dispatch(govensre(res.data));
            }
        });
    }
}