import { t } from 'i18next'
import * as yup from 'yup'

import './yup-phone'

yup.addMethod(yup.string, 'stripEmptyString', function () {
    return this.transform((value) => (value === '' ? undefined : value))
})

const firstName = yup.string().trim(t('firstNameCantBeEmpty')).max(40, t('cantBeLongerThan40')).required(t('firstNameCantBeEmpty'))
const lastName = yup.string().trim(t('lastNameCantBeEmpty')).max(40, t('cantBeLongerThan40')).required(t('lastNameCantBeEmpty'))
const mail = yup.string().email(t('invalidMail')).trim(t('emailCantBeEmpty')).stripEmptyString()
const phone = yup.string().phone(undefined, t('invalidPhone')).trim().stripEmptyString()

export const loginSchema = yup.object().shape({
    phone: phone.required(),
    password: yup.string()
})
