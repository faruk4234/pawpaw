import React from 'react'

import { useNavigation } from '@react-navigation/native'
import { useMutation } from '@tanstack/react-query'
import { useUpdateAtom } from 'jotai/utils'
import {
    Image, StyleSheet, Text, View
} from 'react-native'
import { FloatingLabelInput } from 'react-native-floating-label-input'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'

import Button from '../../components/Button/Button'
import PageHoc from '../../components/PageHoc/PageHoc'
import routes from '../../constants/routes'
import colors from '../../styles/colors'
import fonts from '../../styles/fonts'
import { userAtom } from '../../utils/atoms'
import * as Queries from '../../utils/queries'
import Storage from '../../utils/storage'

const customLabelStyle = {
    fontSizeFocused: 16,
    fontSizeBlurred: 16,
    topFocused: -30,
    colorFocused: colors.primary,
    colorBlurred: 'rgba(0, 0, 0, 0.38)'
}

const Login = () => {
    const navigation = useNavigation()
    const setUser = useUpdateAtom(userAtom)

    const [ email, setEmail ] = React.useState('')
    const [ password, setPassword ] = React.useState('')

    const loginMutation = useMutation(Queries.login, {
        onSuccess: async (response) => {
            console.log('here', response)
            const { accessToken, user } = response
            await Storage.setItem('accessToken', accessToken)

            setUser(user)
        }
    })

    const onSignInPress = () => {
        loginMutation.mutate({ email, password })
    }

    const onSignUpPress = () => {
        navigation.navigate(routes.Welcome)
    }

    return (
        <View style={styles.page}>
            <View
                style={styles.header}>
                <Text style={styles.welcomeText}>
                    {'Hi Welcome\nBack'}
                </Text>
                <Image
                    // eslint-disable-next-line global-require
                    source={require('../../../assets/login-dog.png')}
                    style={styles.dogImg} />
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.content}>
                    <View style={styles.flex1} />
                    <View>
                        <FloatingLabelInput
                            label='Email'
                            labelStyles={styles.inputLabel}
                            animationDuration={100}
                            inputStyles={styles.inputStyle}
                            customLabelStyles={customLabelStyle}
                            containerStyles={styles.containerStyle}
                            value={email}
                            onChangeText={setEmail} />
                        <FloatingLabelInput
                            label='Password'
                            labelStyles={styles.inputLabel}
                            animationDuration={100}
                            inputStyles={styles.inputStyle}
                            customLabelStyles={customLabelStyle}
                            containerStyles={[ styles.containerStyle, styles.passwordContainer ]}
                            value={password}
                            onChangeText={setPassword} />
                        <Text style={styles.forgetPassword}>Forget Password?</Text>

                        <View style={styles.buttonContainer}>
                            <Button
                                text='Sign in'
                                onPress={onSignInPress}
                                style={styles.signInButton}
                                showShadow />
                            <Button
                                text='Sign up'
                                invert
                                onPress={onSignUpPress}
                                style={styles.signUpButton} />
                        </View>
                    </View>
                    <View style={styles.flex2} />
                </View>
            </View>
        </View>
    )
}

export default PageHoc(Login, {
    scroll: true
})

const styles = StyleSheet.create({
    page: {
        alignSelf: 'stretch',
        backgroundColor: colors.primary
    },
    header: {
        paddingLeft: 32,
        paddingRight: 21,
        height: widthPercentageToDP(45),
        transform: [{
            translateY: 18
        }]
    },
    buttonContainer: { marginBottom: 50 },
    welcomeText: {
        fontFamily: fonts.ceraProBold,
        fontSize: 31,
        fontWeight: '700',
        color: colors.white
    },
    dogImg: {
        position: 'absolute',
        width: widthPercentageToDP(50),
        height: widthPercentageToDP(40),
        right: 45,
        bottom: 0
    },
    contentContainer: {
        height: heightPercentageToDP(100) - widthPercentageToDP(49),
        backgroundColor: colors.brown,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        zIndex: -1
    },
    content: {
        marginTop: 5,
        flex: 1,
        backgroundColor: colors.white,
        borderTopLeftRadius: 47,
        borderTopRightRadius: 47,
        paddingHorizontal: 20
    },
    inputLabel: {
        fontFamily: fonts.ceraProMedium,
        width: '100%'
    },
    flex1: { flex: 1 },
    flex2: { flex: 2 },
    inputStyle: {
        paddingHorizontal: 0,
        fontSize: 16,
        color: colors.black,
        fontFamily: fonts.ceraProMedium
    },
    containerStyle: {
        height: 50,
        borderBottomWidth: 1
    },
    passwordContainer: {
        marginTop: 65
    },
    forgetPassword: {
        marginTop: 13.5,
        fontSize: 12,
        color: colors.primary,
        alignSelf: 'flex-end',
        fontFamily: fonts.ceraProMedium
    },
    signInButton: {
        marginTop: 50
    },
    signUpButton: {
        marginTop: 35
    }
})
