import axios from 'axios'

export function editSearch(data, callback) {
    return dispatch({
        type: 'EDIT_SEARCH',
        data: {
            search: data
        }
    })
}

export function changeBusinessStep(data, callback) {
    return dispatch({
        type: 'CHANGE_BUSINESS_STEP',
        data: {
            step: data.step
        }
    })
}

export function getAdList(data, callback) {
    return dispatch => {
        dispatch({type: 'GET_AD_LIST_ING'})
        axios.post(url, {}, {})
            .then(function (res) {

                if (res.code === 1) {
                    dispatch({
                        type: 'GET_LATEST_NOTICE_SUCCESS',
                        data: {
                            adList: data.list
                        }
                    })
                }else{
                    dispatch({type: 'GET_AD_LIST_FAIL',data:res.error})
                }

            })
            .catch(function (err) {
                console.log(err);
            })
    }
}

export function getAdDetails(data, callback) {
    return dispatch => {
        axios.post(url, {}, {})
            .then(function (res) {

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
                console.log(err);
            })
    }
}

export function downOrder(data, callback) {
    return dispatch => {
        axios.post(url, {}, {})
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