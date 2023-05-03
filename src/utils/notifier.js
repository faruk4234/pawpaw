import { t } from 'i18next'
import { DeviceEventEmitter } from 'react-native'
import { showMessage } from 'react-native-flash-message'

const Notifier = {
    showMessage,
    showRequestFailedMessage: () => {},
    showValidationFailedMessage: () => {}
}

export default Notifier
