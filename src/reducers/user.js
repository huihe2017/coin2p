let initialState = {


}

export default function sign(state = initialState, action = {}) {

    switch (action.type) {

        case 'LOGIN':

            const {token,role,email,unReadMsg,_id} = action.data

            localStorage.setItem('token', token)
            localStorage.setItem('role', role)
            localStorage.setItem('userName',email);
            localStorage.setItem('userName',email);
            return Object.assign({}, state, {})

        case 'LOGOUT':
            localStorage.removeItem('token')
            localStorage.removeItem('userName')
            localStorage.removeItem('role')
            localStorage.removeItem('meslist')
            localStorage.removeItem('id')

            return Object.assign({}, state, {})




        default:
            return state
    }

}

export function getSignStatus(state) {
    return state.sign.show
}
