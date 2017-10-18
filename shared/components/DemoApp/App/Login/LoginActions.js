import { fetchGet, fetchPost, NO_CONNECTION } from '../../fetchers'

export const RECEIVED_SUBMIT_LOGIN = 'RECEIVED_SUBMIT_LOGIN'
function receivedSubmitLogin(response) {
    return {
        type: RECEIVED_SUBMIT_LOGIN,
        response
    }
}

export const REQUEST_SUBMIT_LOGIN = 'REQUEST_SUBMIT_LOGIN'
function requestSubmitLogin() {
    return {
        type: REQUEST_SUBMIT_LOGIN
    }
}


export function submitLogin(params) {
    const MAGIC = 'IniBuatKitaLoh'
    const API = 'http://test.agri.web.id/api/testHimalkom'
    params.magic = MAGIC
    params.bilik = null

    return dispatch => {
        dispatch(requestSubmitLogin())

        return fetchPost(API, params)
            .then(response => dispatch(receivedSubmitLogin(response)))
            .catch(() => dispatch(receivedSubmitLogin(NO_CONNECTION)))
    }
}
