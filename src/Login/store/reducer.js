import {fromJS} from 'immutable';
import * as constants from './constants';

const defaultState= fromJS({
  login:false,
  headerdisplay:false,
  username:'user',
  userpic:'',
  check:'',
  success:'',
  level:''

});



export default (state=defaultState,action)=>{
    switch(action.type){
      case constants.CHANG_LOGIN:
      return state.merge({
        login:action.value,
        headerdisplay:action.headerdisplay,
        success:action.success,
        level:action.level
    });
        default:
        return state;
    }
}