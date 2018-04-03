let initialState = {

}

export default function auth(state = initialState, action = {}) {

    switch (action.type) {

        case 'SHOW_LOGIN':
            state.showLoginBox = true
            state.showRegisterBox = false
            state.showResetPwdBox = false
            state.showChangePwd = false
            state.showRegisterTip = false
            state.showForgetTip = false
            return Object.assign({}, state, {})

        default:
            return state
    }

}

