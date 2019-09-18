import axios from "axios";
import * as constants from './constants';
import U from '../../utils/utils';

const changeLogin=(data,level)=>({
    type:constants.CHANG_LOGIN,
    value:true,
    headerdisplay:true,
    success:data,
    level:level
})
/*
export const Loginout=()=>({
    type:constants.CHANG_LOGINOUT,
    value:false,
})*/

export const loginfn=(username,password,level)=>{
    let Url;
    if(level==="1")
    {
        Url='/student/doLogin';

    }
    else if(level==='2')
    {
        Url='/teacher/doLogin';
    }
    else{
        Url='/admin/doLogin';
    }
    return (dispatch)=>{
     
        axios.get('http://192.168.43.5:8080'+Url+'?username='+username+'&password='+password).then((res)=>{
            const result=res.data;
            console.log("sss",result.img);
            document.cookie="userpic="+result.img+";";
       console.log("u",U.getCookie('userpic'));
            if(result){
               
                dispatch(changeLogin(result,level));
            }else{
                alert('账号或密码错误');
            }
        });
    }
}
