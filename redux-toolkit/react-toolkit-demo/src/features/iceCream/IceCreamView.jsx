import React from "react"
import {useSelector,UseDispatch} from "react-redux"
import {ordered,iceCreamRestock} from "./iceCreamSlice"
export const IceCreamView =()=>{
    const numoficecream = useSelector((state)=>state.iceCream.numOfIcecreams)
    const dispatch = useDispatch()

return( <div>
    <h2>Number of IceCream -{numoficecream}</h2>
    <button onClick={()=>dispatch(ordered())}>Order IceCream</button>
    <button onClick={()=>dispatch(iceCreamRestock(5))}>Restock IceCream</button>

        </div>
)
}