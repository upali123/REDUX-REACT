const store = require("./app/store")
const cakeActions = require("./features/cake/cakeSlice").cakeActions
const iceCreamActions = require("./features/iceCream/iceCreamSlice").iceCreamActions
const fetchUsers = require("./features/user/userSlice").fetchUsers

console.log("initialState",store.getState())

const unSubscribe = store.subscribe(()=>{
    console.log("updated state",store.getState())
})
store.dispatch(fetchUsers())

// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.ordered())
// store.dispatch(cakeActions.cakeRestock(3))

// // store.dispatch(iceCreamActions.ordered())
// store.dispatch(iceCreamActions.ordered())
// store.dispatch(iceCreamActions.ordered())
// store.dispatch(iceCreamActions.iceCreamRestock(2))
// unSubscribe()