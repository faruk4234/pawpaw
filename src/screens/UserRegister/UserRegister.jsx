import React from 'react'

import { useNavigation } from '@react-navigation/native'
import { useMutation } from '@tanstack/react-query'
import { useUpdateAtom } from 'jotai/utils'
import {
    Image, SafeAreaView, ScrollView, StyleSheet, Text, View
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

const Register = () => {
    const navigation = useNavigation()
    const setUser = useUpdateAtom(userAtom)

    const [ name, setName ] = React.useState('')
    const [ surName, setSurname ] = React.useState('')
    const [ email, setEmail ] = React.useState('')
    const [ password, setPassword ] = React.useState('')
    const [ rePassword, setRePassword ] = React.useState('')

    const onSignInPress = () => {
        navigation.navigate(routes.Login)
    }

    const onSignUpPress = () => {
        navigation.navigate(routes.SignUp1)
    }

    return (
        <View style={styles.page}>
            <View
                style={styles.header}>
                <Text style={styles.welcomeText}>Hello!</Text>
                <Text style={styles.descriptionTitle}>Good to see you here</Text>
                <Image
                    // eslint-disable-next-line global-require
                    source={require('../../../assets/login-dog.png')}
                    style={styles.dogImg} />
            </View>
            <View style={styles.contentContainer}>
                <View style={styles.content}>
                    <View style={styles.flex1} />
                    <View style={{ }}>
                        <View style={styles.nameContainer}>
                            <FloatingLabelInput
                                label='First Name '
                                labelStyles={styles.inputLabel}
                                animationDuration={100}
                                inputStyles={styles.inputStyle}
                                customLabelStyles={customLabelStyle}
                                containerStyles={styles.shortContainerStyle}
                                value={name}
                                onChangeText={setName} />
                            <FloatingLabelInput
                                label='Last Name '
                                labelStyles={styles.inputLabel}
                                animationDuration={100}
                                inputStyles={styles.inputStyle}
                                customLabelStyles={customLabelStyle}
                                containerStyles={styles.shortContainerStyle}
                                value={surName}
                                onChangeText={setSurname} />
                        </View>
                        <FloatingLabelInput
                            label='Email '
                            labelStyles={styles.inputLabel}
                            animationDuration={100}
                            inputStyles={styles.inputStyle}
                            customLabelStyles={customLabelStyle}
                            containerStyles={styles.containerStyle}
                            value={email}
                            onChangeText={setEmail} />
                        <FloatingLabelInput
                            label='Password '
                            labelStyles={styles.inputLabel}
                            animationDuration={100}
                            inputStyles={styles.inputStyle}
                            customLabelStyles={customLabelStyle}
                            containerStyles={[ styles.containerStyle, styles.passwordContainer ]}
                            value={password}
                            onChangeText={setPassword} />

                        <FloatingLabelInput
                            label='Re-Type Password '
                            labelStyles={styles.inputLabel}
                            animationDuration={100}
                            inputStyles={styles.inputStyle}
                            customLabelStyles={customLabelStyle}
                            containerStyles={[ styles.containerStyle, styles.passwordContainer ]}
                            value={rePassword}
                            onChangeText={setRePassword} />

                        <View style={styles.buttonContainer}>
                            <Button
                                text='Sign up '
                                onPress={onSignUpPress}
                                style={styles.signInButton}
                                showShadow />
                            <Button
                                text='Sign in '
                                invert
                                onPress={onSignInPress}
                                style={styles.signUpButton} />
                        </View>
                    </View>
                    <View style={styles.flex2} />
                </View>
            </View>
        </View>
    )
}

export default PageHoc(Register, {
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
    welcomeText: {
        fontFamily: fonts.ceraProBold,
        fontSize: 31,
        fontWeight: '700',
        color: colors.white
    },
    descriptionTitle: {
        fontFamily: fonts.ceraProBold,
        fontSize: 16,
        fontWeight: '500',
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
    buttonContainer: { marginBottom: 50 },
    nameContainer: {
        flexDirection: 'row',
        marginHorizontal: -10,
        marginTop: 40
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
        marginTop: 36,
        height: 50,
        borderBottomWidth: 1
    },
    shortContainerStyle: {
        marginTop: 70,
        height: 50,
        marginHorizontal: 10,
        borderBottomWidth: 1
    },
    passwordContainer: {
        marginTop: 36
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
