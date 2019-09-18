import {fromJS} from 'immutable';
import * as constants from './constants';

const defaultState= fromJS({
    userset:true,
    menu:[]
});



export default (state=defaultState,action)=>{
    switch(action.type){
        case constants.CHANG_USER_SET:
        return state.set('userset',false);
        case constants.CHANG_MENU:
        return state.set("menu",action.menu);
        default:
        return state;
    }
}