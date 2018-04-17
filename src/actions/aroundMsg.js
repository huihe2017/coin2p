import axios from 'axios'

export function getOnlineTradeCount(data, callback) {
    return dispatch => {
        axios.post(url, {}, {})
            .then(function (res) {

                if (res.code === 1) {
                    dispatch({
                        type: 'GET_ONLINE_TRADE_COUNT',
                        data: {
                            onlineTradeCount: data.onlineTradeCount
                        }
                    })
                }
            })
            .catch(function (err) {
                console.log(err);
            })
    }
}

export function getLatestNotice(data, callback) {
    return dispatch => {
        axios.post(url, {}, {})
            .then(function (res) {

                if (res.code === 1) {
                    dispatch({
                        type: 'GET_LATEST_NOTICE_SUCCESS',
                        data: {
                            latestNotice: data.latestNotice
                        }
                    })
                }
            })
            .catch(function (err) {
                console.log(err);
            })
    }
}