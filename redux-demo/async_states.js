const redux =require("redux")
const createStore = redux.createStore
const applyMiddleware = redux.applyMiddleware
const axios = require("axios")
const thunkMiddleware = require("redux-thunk").default

const initialState ={
    loading:"false",
    user:[],
    err :""
     
 }

 const FETCH_USERS_REUESTED ="FETCH_USERS_REUESTED"
 const FETCH_USERS_SUCCEDED ="FETCH_USERS_SUCCEDED"
 const FETCH_USERS_FAILED ="FETCH_USERS_FAILED"

 function fetchUsersReq(){
    return{
        type:FETCH_USERS_REUESTED,
    }
    }

 const    fetchUsersSucceded=(user)=>{
        return{
            type:FETCH_USERS_SUCCEDED,
            payload: user
        }
        }  

     const    fetchUsersFailedd=(err)=>{
            return{
                type:FETCH_USERS_SUCCEDED,
                payload: err
            }
            }  


            
            const reducer = (state=initialState,action)=>{
                switch(action.type){
                   case FETCH_USERS_REUESTED:
                   return{
                    ...state,
                   loading:true
                   }
                   case FETCH_USERS_SUCCEDED :
                    return{
                        loading:false,
                        user:action.payload,
                        err:""
                    }
                    case FETCH_USERS_FAILED :
                        return{
                            loading:false,
                            user: [],
                            err:action.payload,

                        }
                      
                   default :
                   return state
                }
            }


            const fetchUsers=()=>{
                return function(dispatch){
axios
    .get("https://jsonplaceholder.typicode.com/users")   
    .then((response)=>{
   const users = response.data.map((user)=>user.id)
   dispatch(fetchUsersSucceded(users))
})   
.catch((err)=>{
    // console.log("err",err)
    dispatch(fetchUsersFailedd(err.message))
} )         }
            }
            const store = createStore(reducer,applyMiddleware(thunkMiddleware))
 store.subscribe(()=>{
    console.log("Update state",store.getState())

})

store.dispatch(fetchUsers())
