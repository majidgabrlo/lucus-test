import React from 'react'

function Button(props:any) {
    return (
        <button className="text-white bg-green-800 px-2 py-1 rounded" {...props} >
            {props.children}
        </button>
    )
}

export default Button
