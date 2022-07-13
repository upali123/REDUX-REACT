import  {configureStore} from "@reduxjs/toolkit"
import CakeReducer from"../features/cake/cakeSlice"
import IcecreamReducer from"../features/iceCream/iceCreamSlice"
import userReducer from"../features/user/userSlice"

// const reduxLogger = require("redux-logger")


// const  logger = reduxLogger.createLogger()

const store = configureStore({
    reducer:{
      cake:  CakeReducer,
       iceCream: IcecreamReducer,
      user:  userReducer 
    },
    // middleware:(getDefaultMiddleware)=> getDefaultMiddleware().concat(logger),
})

export default store