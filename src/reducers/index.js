import React from 'react'
import  streamReducer  from './StreamReducer'
import { reducer as formReducer } from 'redux-form'
import { combineReducers } from 'redux'

import AuthReducer from './AuthReducer'

export default combineReducers({
  userStatus: AuthReducer,
  form: formReducer,
  streams: streamReducer
})
