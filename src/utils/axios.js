import axios from 'axios'
import Config from 'react-native-config'

import Storage from './storage'

const instance = axios.create({
    baseURL: Config.API,
    timeout: 15 * 1000
    //  timeoutErrorMessage: t('timeoutErrorMessage')
})

instance.interceptors.request.use(async (request) => {
    const accessToken = await Storage.getItem('accessToken')

    if (accessToken) {
        // eslint-disable-next-line no-param-reassign
        request.headers.authorization = accessToken
    }

    return request
})

instance.interceptors.response.use((response) => response.data, (error) => Promise.reject(error))

export default instance
