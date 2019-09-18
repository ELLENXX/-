import axios from "axios";
import * as constants from './constants';
import {fromJS} from 'immutable';

export const changeUserSet=()=>({
    type:constants.CHANG_USER_SET
});

export const changeMenu=(data)=>({
    type:constants.CHANG_MENU,
    menu:data
});




export const getMenu=(num)=>{
    return (dispatch)=>{
        let Url;
        if(num==1)
        {
            Url="/config/usermeun.json";
        }
        else{
            Url="/config/teachermenu.json"
        }
        axios.get(Url).then((res)=>{
            const result=res.data.data;
      
           dispatch(changeMenu(result));
        })
    }
}


