import {configureStore} from "@reduxjs/toolkit"
import usersReducer from './redux/users'
import mainReducer from './redux/main'

const store = configureStore({
  reducer: {
    users: usersReducer,
    main: mainReducer,
  }
})

export default store