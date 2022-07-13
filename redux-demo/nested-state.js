const redux = require("redux")
const createStore = redux.createStore
const produce = require("immer").produce
const initialState ={
    name:"upali",
    Address:{
     street:"UP",
     town:"Ghaziabad",
     address:"Indirapuram"
    }
     
 }
const STREET_UPDATE = "STREET_UPDATE"
function changeStreet(street){
    return{
        type:STREET_UPDATE,
        payload:street
    }
    }
    const StreetReducer = (state=initialState,action)=>{
        switch(action.type){
           case STREET_UPDATE:
        //    return{
        //     ...state,
        //     address:{
        //         ...state.address,
        //         street : action.payload
        //   }
        //    }
         return produce(state,(draft)=>{
            draft.Address.street = action.payload
         })
           default :{
           return state}
        }
    }
    const store = createStore(StreetReducer)
console.log("Initial state",store.getState())
const unSubscribe = store.subscribe(()=>{
    console.log("Update state",store.getState())

})

store.dispatch(changeStreet("noida hyyy"))
unSubscribe()