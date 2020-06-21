import streams from '../apis/streams'
import _ from 'lodash'
import history from '../history'

import {
  SIGN_IN ,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  EDIT_STREAM,
  DELETE_STREAM
} from './types'

export const trySignIn = (userId) => {
  return {
    type: SIGN_IN,
    payload: userId
  }
}

export const trySignOut = () => {
  return {
    type: SIGN_OUT
  }
}

export const createStreams = formValues => async (dispatch, getState) => {
  console.log('form values', formValues)
  const {userId} = getState().userStatus
  const response =  await streams.post('/streams', {...formValues, userId})
  dispatch({type: CREATE_STREAM, payload: response.data})
  history.push('/')
}

export const fetchStreams =  () => async dispatch => {
  const response =  await streams.get('/streams')
  dispatch({type: FETCH_STREAMS, payload: response.data})
}

export const fetchStream =  id => async dispatch => {
  const response =  await streams.get(`/streams/${id}`)
  dispatch({type: FETCH_STREAM, payload: response.data})
}

export const editStream = (id, formValues) => async dispatch => {
  const response =  await streams.patch(`/streams/${id}`, formValues)
  dispatch({type: EDIT_STREAM, payload: response.data})
  history.push('/')
}

export const deleteStream = id => async dispatch => {
  const response =  await streams.delete(`/streams/${id}`)
  dispatch({type: DELETE_STREAM, payload: id})
  // history.push('/')
}
