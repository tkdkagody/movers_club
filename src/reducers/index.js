import {combineReducers} from 'redux';
import modalReducer from './modalReducer';
import registerReducer from './registerReducer';
import getVideoInfoReducer from './getVideoInfoReducer';
import searchReducer from './searchReducer';
import myinfoReducer from './myinfoReducer';
import userReducer from './userReducer';
import bannerReducer from './bannerReducer';

const rootReducer = combineReducers({
    modalReducer,
    registerReducer,
    getVideoInfoReducer,
    searchReducer,
    myinfoReducer,
    userReducer,
    bannerReducer,
});

export default rootReducer;