let initialState = {
    account: localStorage.getItem('account'),
    loading: false,
    error: ''
}

export default function user(state = initialState, action = {}) {

    switch (action.type) {

        case 'USER_LOGIN_ING':
            state.loading = true
            return Object.assign({}, state, {})

        case 'USER_LOGIN_SUCCESS':
            let {account} = action.data
            localStorage.setItem('account',account)
            state.account = account
            state.loading = false
            return Object.assign({}, state, {})

        case 'USER_LOGIN_FAIL':
            var {error} = action.data
            state.error = error
            state.loading = false
            return Object.assign({}, state, {})

        case 'USER_LOGOUT_SUCCESS':
            localStorage.removeItem('account')
            state.account = ''
            return Object.assign({}, state,{})

        case 'USER_REGIST_ING':
            state.loading = true
            return Object.assign({}, state, {})

        case 'USER_REGIST_SUCCESS':
            state.loading = false
            return Object.assign({}, state, {})

        case 'USER_REGIST_FAIL':
            state.loading = false
            var {error} = action.data
            state.error = error
            return Object.assign({}, state, {})

        case 'FORGET_PWD_SUCCESS':
            state.forgetPwd = true
            return Object.assign({}, state, {})

        case 'FORGET_PWD_FAIL':
            var {error} = action.data
            state.error = error
            return Object.assign({}, state, {})

        default:
            return state
    }

}

export function getSignStatus(state) {
    return state.sign.show
}
