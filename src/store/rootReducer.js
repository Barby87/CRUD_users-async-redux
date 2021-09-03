import { combineReducers } from 'redux';
import usersReducer from './users/userReducer';

const rootReducer = combineReducers({
    users: usersReducer,
})

export default rootReducer;