export function showLogin(data, callback) {
    return dispatch => {
        dispatch({type: 'SHOW_LOGIN'})
        // console.log("reheh",data)
        // console.log("reheh222",callback)
        callback&&callback()
    }
}
