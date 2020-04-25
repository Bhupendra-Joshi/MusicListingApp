import { combineReducers } from 'redux'
import musicListReducer from './musicListReducer';

export default combineReducers({
    musicListData: musicListReducer,
});