import axios from "axios/index";

export function login(data, callback) {
    return dispatch => {

        axios.post('https://www.baidu.com/', {}, {})
            .then(function (res) {

                if (res.code === 1) {
                    dispatch({
                        type: 'DOWN_ORDER_SUCCESS'
                    })
                }
            })
            .catch(function (err) {
                dispatch({
                    type: 'USER_LOGIN_SUCCESS',
                    data:{account:'erhrey35'}
                })
            })
    }
}

export function logout(data, callback) {
    return dispatch => {

        axios.post('https://www.baidu.com/', {}, {})
            .then(function (res) {

                if (res.code === 1) {
                    dispatch({
                        type: 'DOWN_ORDER_SUCCESS'
                    })
                }
            })
            .catch(function (err) {
                dispatch({
                    type: 'USER_LOGOUT_SUCCESS',
                    data:{account:'erhrey35'}
                })
            })
    }
}