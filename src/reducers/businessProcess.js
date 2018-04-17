let initialState = {
    search: {
        currency: '',//1btc2eth
        moneySum: '',
        transactionMode: '',
        currentPage: 1
    },
    step: '',
    lowestPrice: {
        amount: '',
        account: '',
        tradeRange: ''

    },
    highestReput: {
        amount: '',
        account: '',
        tradeRange: ''

    },
    adList: [],
    batchTradeList: [],
    orderDetails: {
        account: '',
        adUptime: '',
        portrait: '',
        tradeMode: [],
        isCertifiedBusiness: false,
        price: '',
        tradeQuota: {
            min: '',
            max: ''
        },
        PayPeriod: '',
        tradeNum: '',
        praise: '',
        tradeTotal: '',
        state: '',
        virtualCurrencyValue: '',
        realCurrencyValue: '',
        isConfirm: false,
        isChatOnline: true,
        chatRecord: [],
        Remarks: '',
        remainderTime: '',
        isAlreadyPay: false,
        serviceCharge: '',
        evaluate: {
            level: '',
            content: ''
        }
    }
}

export default function businessProcess(state = initialState, action = {}) {

    switch (action.type) {

        case 'EDIT_SEARCH':
            state.search = action.data

            return Object.assign({}, state, {})

        case 'CHANGE_BUSINESS_STEP':
            state.step = action.data.step
            if (state.step === 1) {
                return Object.assign({}, state, initialState)
            }
            if (state.step === 2) {
                state.orderDetails= initialState.orderDetails
                return Object.assign({}, state, {})
            }
            if (state.step === 3) {
                state.orderDetails= initialState.orderDetails
                return Object.assign({}, state, {})
            }

        case 'GET_AD_LIST_SUCCESS':
            state.adList = action.data

            return Object.assign({}, state, {})

        case 'GET_AD_DETAILS_SUCCESS':
            state.orderDetails = action.data

            return Object.assign({}, state, {})

        case 'DOWN_ORDER_SUCCESS':
            state.isDownOrder = true

            return Object.assign({}, state, {})

        default:
            return state
    }

}

export function getSignStatus(state) {
    return state.sign.show
}
