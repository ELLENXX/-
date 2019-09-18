//出口文件,所有的store里的·文件都可以通过这个文件访问
//import * as actionCreators from './actionCreators';
//import * as actionType from './actionTypes';
import reducer from './reducer';
import * as actionCreators from './actionCreators';
import * as constants from './constants';

export {reducer,actionCreators,constants};  