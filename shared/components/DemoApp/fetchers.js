const NO_CONNECTION = {status: false, message: 'Gagal terhubung ke server.'}

const fetchGet = (urlPath) => {
    return fetch(urlPath, {credentials: "include"})
        .then(response => {
            return (response.ok) ? response.json() : Promise.reject(new Error('error'))
        })
        .catch(error => {
            return Promise.reject(new Error(error))
        })
}

const fetchPost = (urlPath, params, token = null) => {
    const requestBody = JSON.stringify(params)
    const requestHeaders = {"Content-Type": "application/json", "authorization": token}

    return fetch(urlPath, {
        credentials: "include",
        headers: requestHeaders,
        body: requestBody,
        method: "POST"
    })
    .then(response => {
        return (response.ok) ? response.json() : Promise.reject(new Error('error'))
    })
    .catch(error => {
        return Promise.reject(new Error(error))
    })
}

export { NO_CONNECTION, fetchGet, fetchPost }
