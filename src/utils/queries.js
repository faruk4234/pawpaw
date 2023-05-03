import instance from './axios'

// fake api

export const login = () => ({
    user: {},
    accessToken: '123'
})

/*
export const login = (loginDto) => instance.post('/auth/login', loginDto)

export const register = (registerDto) => instance.post('/auth/register', registerDto)

export const sendOtp = (sendOtpDto) => instance.post('/auth/send-otp', sendOtpDto)

export const uploadPhoto = (photo) => {
    const formData = new FormData()
    formData.append('file', {
        name: 'file',
        type: photo.mime,
        uri:
            Platform.OS === 'android' ? photo.path : photo.path.replace('file://', '')
    })

    return instance.post('/media/single-file', formData)
}
*/
