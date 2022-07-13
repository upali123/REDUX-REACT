const redux =require("redux")
const createStore = redux.createStore
const bindActionCreators = redux.bindActionCreators
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware

//used to log all details of redux states
const reduxLogger = require("redux-logger")
const  logger = reduxLogger.createLogger()
//Action declaration

const CAKE_OREDRED ="CAKE_OREDRED"
const CAKE_RESTOCK ="CAKE_RESTOCK"

const ICECREAM_OREDRED ="CAKE_OREDRED"
const ICECREAM_RESTOCK ="CAKE_RESTOCK"
function orderedCake(){
return{
    type:CAKE_OREDRED,
    payload:1
}
}
function cakeRestock(qty=1){
    return{
        type:CAKE_RESTOCK,
        payload:qty
    }
    }
    function orderedIcecream(qty=1){
        return{
            type:ICECREAM_OREDRED,
            payload:qty
        }
        }
        function IcecreamRestock(qty=1){
            return{
                type:ICECREAM_RESTOCK,
                payload:qty
            }
            }
const CakeInitialState ={
    numOfCakes: 10,
  
    
}
const IcecreamInitialState ={
   
    numOfIcecreams :10
}

const CakeReducer = (state=CakeInitialState,action)=>{
    switch(action.type){
       case CAKE_OREDRED:
       //it takes a return object
       return{
        // if two values present on the initial state and i want to change only one value 
        //so we can simply copy the same using spread operator and chnage the another value

        ...state,
        numOfCakes : state.numOfCakes - 1
       }
       case CAKE_RESTOCK :
        return{
            ...state,
            numOfCakes : state.numOfCakes + action.payload
        }
      
       default :
       return state
    }
}
const IcecreamReducer = (state=IcecreamInitialState,action)=>{
    switch(action.type){
        case ICECREAM_OREDRED :
        return{
            ...state,
            numOfIcecreams : state.numOfIcecreams -1
        }
        case ICECREAM_RESTOCK :
        return{
            ...state,
            numOfIcecreams : state.numOfIcecreams + action.payload
        }
        case CAKE_OREDRED :
        return{
            ...state,
            numOfIcecreams : state.numOfIcecreams -1
        }
       default :
       return state
    }
}
//STORE handling

const rootReducer = combineReducers({
    cake:CakeReducer,
    icecream:IcecreamReducer
})



// const store = createStore(rootReducer,applyMiddleware(logger))
 const store = createStore(rootReducer)

console.log("Initial state",store.getState())


const unSubscribe = store.subscribe(()=>{
    console.log("Initial state",store.getState())

})

//we can also used action creators for bind action
// store.dispatch(orderedCake())
// store.dispatch(orderedCake())
// store.dispatch(orderedCake())
// store.dispatch(cakeRestock(3))

const actions = bindActionCreators({orderedCake,cakeRestock,orderedIcecream,IcecreamRestock},store.dispatch)
actions.orderedCake()
actions.orderedCake()
actions.orderedCake()
actions.cakeRestock(3)
actions.orderedIcecream()
actions.IcecreamRestock(3)

unSubscribe()