import React from "react"
import {useSelector,useDispatch} from "react-redux"
import {ordered,iceCreamRestock} from "./iceCreamSlice"
export const IceCreamView =()=>{
    const[value,setValue]=React.useState(1)
    const numoficecream = useSelector((state)=>state.iceCream.numOfIcecreams)
    const dispatch = useDispatch()

return( <div>
    <h2>Number of IceCream -{numoficecream}</h2>
    <button onClick={()=>dispatch(ordered())}>Order IceCream</button>
    <input
    type="number"
    value={value}
    onChange={(e)=>setValue(parseInt(e.target.value))}
    />
    <button onClick={()=>dispatch(iceCreamRestock(value))}>Restock IceCream</button>

        </div>
)
}