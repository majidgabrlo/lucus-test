import { combineReducers } from "redux";
import authReducer from "./auth/authSlice";
import postReducer from './posts/postSlice'
import imageSlice from './pictures/picturesSlice'

const rootReducer = combineReducers({
    auth:authReducer,
    post:postReducer,
    image:imageSlice
});

export type RootState=ReturnType<typeof rootReducer>
export default rootReducer;
