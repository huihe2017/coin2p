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
                dispatch({
                    type: 'GET_AD_LIST_SUCCESS',
                    data: [{
                        key: '1',
                        name: {name:'小飞机',online:true,portrait: 'http://img5.imgtn.bdimg.com/it/u=3468481793,3455309356&fm=27&gp=0.jpg',time:1524104423593,tradeMode: [
                                {alipay: false, checked: true},
                                {weixin: true},
                                {bankCard: true}
                            ],shop:true},
                        credit: {num:123,rela:50},
                        quota: {fnum:123,lnum:123,part:'CNY'},
                        price: {price:123123,fpart:'CNY',lpart:'BTC'},
                    }, {
                        key: '2',
                        name: {name:'飞机',online:true,pay:false,portrait: 'http://img5.imgtn.bdimg.com/it/u=1825135465,545203264&fm=27&gp=0.jpg',time:1524105428593,tradeMode: [
                                {alipay: true, checked: true},
                                {weixin: false},
                                {bankCard: false}
                            ],shop:false},
                        credit: {num:1233,rela:90},
                        quota: {fnum:123,lnum:123,part:'USDT'},
                        price: {price:45345,fpart:'CNY',lpart:'BTC'},
                    }, {
                        key: '3',
                        name: {name:'大飞机',online:false,pay:true,portrait: 'http://img2.imgtn.bdimg.com/it/u=3905682784,1406008946&fm=27&gp=0.jpg',time:1524105628553,tradeMode: [
                                {alipay: false, checked: true},
                                {weixin: true},
                                {bankCard: true}
                            ],shop:false},
                        credit: {num:123231,rela:100},
                        quota: {fnum:123,lnum:123,part:'BTC'},
                        price: {price:124515,fpart:'USDT',lpart:'BTC'},
                    }, {
                        key: '4',
                        name: {name:'大大飞机',online:false,portrait: 'http://p1.meituan.net/mobilem/ff63f017a1363c29eef79f32cd39a46e5120.png',pay:false,time:1524105428593,tradeMode: [
                                {alipay: true, checked: true},
                                {weixin: true},
                                {bankCard: false}
                            ],shop:true},
                        credit: {num:1223,rela:80},
                        quota: {fnum:123,lnum:123,part:'CNY'},
                        price: {price:124515,fpart:'USDT',lpart:'BTC'},
                    }]
                })
            })
    }
}

export function getAdDetails(data, callback) {
    return dispatch => {
        dispatch({
            type: 'GET_AD_DETAILS_ING'
        })
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
                        adUptime: '1524018157000',
                        portrait: 'http://p1.meituan.net/mobilem/ff63f017a1363c29eef79f32cd39a46e5120.png',
                        tradeMode: [
                            {alipay: true, checked: true},
                            {weixin: true},
                            {bankCard: true}
                        ],
                        isCertifiedBusiness: true,
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
        dispatch({
            type: 'GET_AD_DETAILS_ING'
        })
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
                    type: 'DOWN_ORDER_SUCCESS',
                    data:34643636
                })
            })
    }
}

export function getOrderDetails(data, callback) {
    return dispatch => {
        dispatch({
            type: 'GET_ORDER_DETAILS_ING'
        })
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
                    type: 'GET_ORDER_DETAILS_SUCCESS',
                    data: {
                        nickname: '2352626',
                        adUptime: '1524018157000',
                        portrait: 'http://p1.meituan.net/mobilem/ff63f017a1363c29eef79f32cd39a46e5120.png',
                        tradeMode: [
                            {alipay: true, checked: true},
                            {weixin: true},
                            {bankCard: true}
                        ],
                        isCertifiedBusiness: true,
                        price: 71111.23,
                        tradeQuota: {
                            min: 40,
                            max: 1000
                        },
                        payPeriod: 15,
                        tradeNum: 77,
                        praise: 56,
                        tradeTotal: 4.9,
                        state: 1,
                        realCurrencyValue:45435,
                        virtualCurrencyValue:3.2,
                        orderNo:'252jb52jkb5k2b52k5b25b',
                        serviceCharge:'免费',
                        remarks:'转账时请备注【订单编号后4位】 以加快确认速度\n' +
                        '请勿在汇款备注内填写比特币，BTC，OTC'
                    }

                })
            })
    }
}