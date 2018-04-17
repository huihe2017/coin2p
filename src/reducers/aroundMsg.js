let initialState = {
    onlineTradeCount:'',
    latestNotice:[]


}

export default function aroundMsg(state = initialState, action = {}) {

    switch (action.type) {

        case 'GET_ONLINE_TRADE_COUNT_SUCCESS':
            var {onlineTradeCount} = action.data
            state.onlineTradeCount = onlineTradeCount
            return Object.assign({}, state, {})

        case 'GET_LATEST_NOTICE_SUCCESS':
            var {onlineTradeCount} = action.data
            state.onlineTradeCount = onlineTradeCount
            return Object.assign({}, state, {})

        default:
            return state
    }

}

export function getSignStatus(state) {
    return state.sign.show
}
