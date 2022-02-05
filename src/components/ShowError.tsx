import { Button } from '@mui/material'
import React from 'react'


function ShowError(props:any) {
    return (
        <div className="font-bold text-2xl text-red-500">
            <div>Something went wrong</div>
            {props.children}

            <Button onClick={()=>props.onRetry()}>Retry</Button>
        </div>
    )
}

export default ShowError
