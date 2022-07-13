import {createSlice} from "@reduxjs/toolkit"
import {ordered as cakeOrdered} from "../cake/cakeSlice"
const initialState ={
    numOfIcecreams:20
}

const iceCreamSlice = createSlice({
    name:"iceCream",
    initialState,
    reducers:{
            ordered:(state)=>{
state.numOfIcecreams--
            },
            iceCreamRestock:(state,action)=>{
                state.numOfIcecreams += action.payload
            },
            
    },
    // extraReducers:{
    //     ["cake/ordered"]:(state)=>{
    //         state.numOfIcecreams--
    //     }
    // }

    extraReducers:(builder)=>{
        builder.addCase(cakeOrdered,(state)=>{
            state.numOfIcecreams--
            
        })
    }
})

export default  iceCreamSlice.reducer 
export const {ordered,iceCreamRestock}= iceCreamSlice.actions 

