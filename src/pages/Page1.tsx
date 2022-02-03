import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import axios from '../axios/post.axios'
import { useAppDispatch } from '../store/hooks';
import { setRouteAction,getAllPosts } from '../store/posts/postActions';
import { RootState } from '../store/store';
function Page2() {

    const dispatch = useAppDispatch();
    const { route,postsList } = useSelector((state: RootState) => state.post);
    

    useEffect(() => {
        const getData =()=>{
            dispatch(getAllPosts(route))
        }
        getData()
    }, [route])



    return (
        <div>
            First Page
        </div>
    )
}

export default Page2
