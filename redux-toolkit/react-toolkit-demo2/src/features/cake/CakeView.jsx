import React from "react"
import {useSelector,useDispatch} from "react-redux"
import {ordered,cakeRestock} from "./cakeSlice"

export const CakeView =()=>{
    const numofcakes = useSelector((state)=>state.cake.numOfCakes)
    const dispatch = useDispatch()
return( <div>
    <h2>Number of cake -{numofcakes}</h2>
    <button onClick={()=>dispatch(ordered())}>Order cake</button>
    <button onClick={()=>dispatch(cakeRestock(3))}>Restock cake</button>

        </div>
)
}