import {Dispatch} from '@reduxjs/toolkit'

import {setAuth} from './authSlice'

export const login=(username:string,password:string)=>async (dispatch:Dispatch)=>{
    if(!username.match(/\S+@\S+\.\S+/) || password =="")return
    dispatch(setAuth(true))
}