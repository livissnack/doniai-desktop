import request from './check_live'

export async function checkLiveUrl(url) {
    console.log(url, 'debug2---------')
    return request('get', `${url}`, {})
}