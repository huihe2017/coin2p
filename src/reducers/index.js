import {combineReducers} from 'redux'

import merge from 'lodash/merge'

import user from './user'
import auth from './auth'
import aroundMsg from './aroundMsg'
import businessProcess from './businessProcess'

let states = {
    auth,
    user,
    aroundMsg,
    businessProcess

}

let _states = {}

for (let i in states) {
    _states[i] = states[i]()
}


export default combineReducers(states)

export const getInitialState = () => {
    return merge({}, _states, {})
}
