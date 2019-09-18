import axios from 'axios';
import {Modal} from 'antd';

axios.defaults.withCredentials = true

export default class Aixos{
    static ajax(options){
        return new Promise((resolve,reject)=>{
            let loading;
            //判断是否要Loading处理
            if(options.data&&options.data.isSHowLoading!==false){
                loading=document.getElementById('ajaxLoading');//因为在Html里面，所以可以直接获取
                loading.style.display="block";
            }
            axios({
                url:options.url,
                method:'get',
                baseURL:options.baseApi,
                params:(options.data)||'',//给后台传参，
                xhrFields: {
                    withCredentials: true
                    },
      
            }).then((response)=>{//接收response响应词
                if(options.data&&options.isSHowLoading!==false){
                    loading=document.getElementById('ajaxLoading');//因为在Html里面，所以可以直接获取
                    loading.style.display="none";
                }
                if(response.status==200)
                {
                    let res=response.data;
                  
                        resolve(res);
                   
                }else{
                    reject(response.data);//请求失败
                }

            })
        })
    }
}