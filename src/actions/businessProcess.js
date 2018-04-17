import axios from 'axios'

export function editSearch(data, callback) {
    return dispatch => dispatch({
        type: 'EDIT_SEARCH',
        data: {
            search: data
        }
    })
}

export function changeBusinessStep(data, callback) {
    return dispatch => dispatch({
        type: 'CHANGE_BUSINESS_STEP',
        data: {
            step: data.step
        }
    })
}

export function getAdList(data, callback) {
    return dispatch => {
        dispatch({type: 'GET_AD_LIST_ING'})
        axios.post('https://www.baidu.com/', {}, {})
            .then(function (res) {

                if (res.code === 1) {
                    dispatch({
                        type: 'GET_LATEST_NOTICE_SUCCESS',
                        data: {
                            adList: data.list
                        }
                    })
                } else {
                    dispatch({type: 'GET_AD_LIST_FAIL', data: res.error})
                }

            })
            .catch(function (err) {
                console.log(err);
            })
    }
}

export function getAdDetails(data, callback) {
    return dispatch => {
        axios.get('http://www.dianping.com/', {}, {})
            .then(function (res) {
                console.log(1111111112);
                if (res.code === 1) {
                    dispatch({
                        type: 'GET_AD_DETAILS_SUCCESS',
                        data: {
                            adDetails: data.adDetails
                        }
                    })
                }
            })
            .catch(function (err) {
                dispatch({
                    type: 'GET_AD_DETAILS_SUCCESS',
                    data: {
                        nickname: '2352626',
                        adUptime: '36373756',
                        portrait: 'http://p1.meituan.net/mobilem/ff63f017a1363c29eef79f32cd39a46e5120.png',
                        tradeMode: [
                            {alipay: true, checked: true},
                            {weixin: false},
                            {bankCard: true}
                        ],
                        isCertifiedBusiness: false,
                        price: 71111.23,
                        tradeQuota: {
                            min: 40,
                            max: 1000
                        },
                        payPeriod: 15,
                        tradeNum: 77,
                        praise: 56,
                        tradeTotal: 4.9,
                        state: 1
                    }

                })
            })
    }
}

export function downOrder(data, callback) {
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
                console.log(err);
            })
    }
}