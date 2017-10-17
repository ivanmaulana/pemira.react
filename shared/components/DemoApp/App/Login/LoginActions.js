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
    return dispatch => {
        dispatch(requestSubmitLogin())
        dispatch(receivedSubmitLogin(params))
    }
}
