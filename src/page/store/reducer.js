import {fromJS} from 'immutable';
import * as constants from './constants';

const defaultState= fromJS({
  pic:[],
  newsList:[],
  article:{},
  labmenu:[],
  labnew:{},
  recruitsc:false,
  questions:[],
  teacherlist:[],
  labmenber:[],
  checkdata:[],
  comment:[],
  userdata:[],
  ans:{},
  ansed:false,
});



export default (state=defaultState,action)=>{
    switch(action.type){
        case constants.GET_PIC:
        return state.set('pic',action.pic)
        case constants.GET_NEWS:
        return state.set('newsList',action.list)
        case constants.GET_ARTICLE:
        return state.set('article',action.article)
        case constants.GET_LABMENU:
        return state.set('labmenu',action.labmenu)
        case constants.GET_LAB:
        return state.set('labnew',action.labnew)
        case constants.GOVEN:
        return state.set('recruitsc',action.recruitsc)
        case constants.GET_QUESTIONS:
        return state.set('questions',action.questions)
        case constants.GET_LABMENB:
        return state.set('labmenber',action.data)
        case constants.GET_CHECK:
        return state.set('checkdata',action.checkdata)
        case constants.GET_COMMENT:
        return state.set('comment',action.comment)
        case constants.USER_DATA:
        return state.set('userdata',action.userdata)
        case constants.GOVEN_ANS:
        return state.set('ans',action.data).set('ansed',true)
        default:
        return state;
    }
}