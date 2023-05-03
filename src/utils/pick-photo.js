import ImagePicker from 'react-native-image-crop-picker'
import { RESULTS } from 'react-native-permissions'

export const pickPhoto = async () => {
    // TODO android never throws blocked but ios does.
    // We can ask for permission before forwarding to settings if it is not blocked on ios.
    try {
        return await ImagePicker.openPicker({
            mediaType: 'photo',
            selectionLimit: 1,
            quality: 1,
            width: 1500,
            height: 1500,
            cropping: true
        })
    } catch (e) {
        if ([ 'E_NO_LIBRARY_PERMISSION' ].includes(e.code)) {
            throw new Error(RESULTS.BLOCKED)
        } else {
            throw new Error(RESULTS.UNAVAILABLE)
        }
    }
}
