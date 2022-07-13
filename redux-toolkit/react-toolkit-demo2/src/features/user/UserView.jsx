import React,{useEffect} from "react"
import {useSelector,useDispatch} from "react-redux"
import {fetchUsers} from "./userSlice"
export const UserView =()=>{
    const user = useSelector((state)=>state.user)
    const dispatch = useDispatch()

useEffect(()=>{
dispatch(fetchUsers())
},[])
return( <div>
    <h2>Users list</h2>
    {user.loading && <div>loading...</div>}
    {!user.loading && user.err ? <div> Error:{user.err}</div>:null}
{!user.loading && user.users.length?
<ul>{
    user.users.map((user)=>(<li key= {user.id}>
        {console.log({user})}
        {user.name}</li>))
    
}</ul>:null}
        </div>
)
}