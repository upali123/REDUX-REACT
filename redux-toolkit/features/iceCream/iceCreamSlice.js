const createSlice = require("@reduxjs/toolkit").createSlice
const cakeActions = require("../cake/cakeSlice").cakeActions

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
        builder.addCase(cakeActions.ordered,(state)=>{
            state.numOfIcecreams--
            
        })
    }
})

module.exports = iceCreamSlice.reducer 
module.exports.iceCreamActions = iceCreamSlice.actions 

