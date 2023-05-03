import { isValidPhoneNumber } from 'libphonenumber-js'
import * as Yup from 'yup'

const YUP_PHONE_METHOD = 'phone'
const CLDR_REGION_CODE_SIZE = 2

const isValidCountryCode = (countryCode) => typeof countryCode === 'string'
  && countryCode.length === CLDR_REGION_CODE_SIZE

Yup.addMethod(
    Yup.string,
    YUP_PHONE_METHOD,
    function yupPhoneLite(countryCode, errorMessage) {
        if (!isValidCountryCode(countryCode)) {
            // eslint-disable-next-line no-param-reassign
            countryCode = 'US'
        }

        const errMsg = typeof errorMessage === 'string' && errorMessage
            ? errorMessage
            : `\${path} must be a valid phone number for region ${countryCode}`

        return this.test(YUP_PHONE_METHOD, errMsg, (value) => {
            try {
                if (value === undefined || value === '') {
                    return true
                }

                // check if the countryCode provided should be used as default country code or strictly followed
                return isValidPhoneNumber(value, countryCode)
            } catch {
                return false
            }
        })
    }
)
