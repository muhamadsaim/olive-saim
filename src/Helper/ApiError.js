export const ApiError = (error) => {
    if (error.response) {
        return error.response.data.message|| error.response.data.error||'Response Error'
    } else if (error.request) {
        return "Network Error"
    } else {
        return error.message
    }
}