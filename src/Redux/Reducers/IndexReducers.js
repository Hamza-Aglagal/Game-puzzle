import {combineReducers} from 'redux'
import { AuthReducer } from './AuthReducer'
import { levelReducer } from './levelReducer'

const IndexReducers = combineReducers({
    Redauth : AuthReducer,
    Redlevel : levelReducer
})


export default IndexReducers