import {reducer as loginReducer} from '../Login/store';
import {reducer as header} from '../common/header/store';
import {reducer as page} from '../page/store';
import {combineReducers} from 'redux-immutable';
const reducer=combineReducers({
    login:loginReducer,
    header:header,
    page:page
});

export default reducer;