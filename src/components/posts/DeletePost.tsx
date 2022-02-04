import Button from '../Button'
import React from 'react'
import axios from '../../axios/post.axios'
interface propsType{
    id:number
    closeModal:()=>void
    refreshData:()=>void
}

function DeletePost(props:propsType) {

    const deletePost=async(postId:number)=>{
        await axios.delete(`/posts/${postId}`)
        alert("The post deleted successfully")
        props.refreshData()
        props.closeModal()
    }

    return (
        <div>
            Are you sure you want to delete the post?
            <div className="flex justify-around mt-3">
                <Button className="bg-blue-500 text-white px-2 py-1 rounded" onClick={props.closeModal}>
                    No
                </Button>
                <Button onClick={()=>deletePost(props.id)} className="bg-red-700 text-white px-2 py-1 rounded">
                    Yes
                </Button>
            </div>
        </div>
    )
}

export default DeletePost
