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
                    data: {account: 'erhrey35'}
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
                    data: {account: 'erhrey35'}
                })
            })
    }
}

export function getUserDetails(data, callback) {
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
                    type: 'GET_USER_DETAILS_SUCCESS',
                    data: {
                        nickname:'gaga',
                        portrait: 'http://p1.meituan.net/mobilem/ff63f017a1363c29eef79f32cd39a46e5120.png',
                        lastLoginTime: '23563662652',
                        evaluateValue: [34, 56],
                        userAuth: {
                            emailAuth:false,
                            realNameAuth:false,
                            AdvancedAuth:false,
                            twoStepAuth:false,
                            phoneAuth:false
                        }
                    }
                })
            })
    }
}