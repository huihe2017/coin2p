import {combineReducers} from 'redux'

import merge from 'lodash/merge'

import user from './user'
import auth from './auth'

let states = {

    user,
    auth

}

let _states = {}

for (let i in states) {
    _states[i] = states[i]()
}


export default combineReducers(states)

export const getInitialState = () => {
    return merge({}, _states, {})
}
