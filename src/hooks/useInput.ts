import {useState} from 'react'


function useInput(initialState:string | number) {
    const [state, setState] = useState(initialState)

    return [{value:state,onChange:(e:any)=>setState(e.target.value)},()=>setState("")]
}

export default useInput
