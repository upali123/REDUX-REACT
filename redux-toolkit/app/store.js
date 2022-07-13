const configureStore = require("@reduxjs/toolkit").configureStore
const CakeReducer = require("../features/cake/cakeSlice")
const IcecreamReducer = require("../features/iceCream/iceCreamSlice")
const userReducer = require("../features/user/userSlice")

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

module.exports = store