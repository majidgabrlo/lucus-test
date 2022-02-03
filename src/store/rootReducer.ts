import { combineReducers } from "redux";
import authReducer from "./auth/authSlice";
import postReducer from './posts/postSlice'

const rootReducer = combineReducers({
    auth:authReducer,
    post:postReducer
});

export type RootState=ReturnType<typeof rootReducer>
export default rootReducer;
