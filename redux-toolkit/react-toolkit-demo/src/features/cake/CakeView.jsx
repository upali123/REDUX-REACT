import React from "react"
import {useSelector} from "react-redux"
// import {ordered,cakeRestock} from "./cakeSlice"

export const CakeView =()=>{
    const numofcakes = useSelector((state)=>state.cake.numOfCakes)
    // const dispatch = useDispatch()
return( <div>
    <h2>Number of cake -{numofcakes}</h2>
    <button >Order cake</button>
    <button >Restock cake</button>

        </div>
)
}