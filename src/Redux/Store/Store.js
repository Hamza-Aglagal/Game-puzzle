import { applyMiddleware, createStore } from 'redux'
import IndexReducers from '../Reducers/IndexReducers'
import thunk from 'redux-thunk'

const Store = createStore(IndexReducers, applyMiddleware(thunk))


export default Store