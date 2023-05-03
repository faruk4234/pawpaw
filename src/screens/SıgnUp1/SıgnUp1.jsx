import React, { Component, useState } from 'react'

import { useNavigation } from '@react-navigation/native'
import {
    Text, View, StyleSheet, TextInput, Image, TouchableOpacity
} from 'react-native'

import Button from '../../components/Button/Button'
import LeftIconInput from '../../components/DoubleIconInput/LeftIconInput'
import PageHoc from '../../components/PageHoc/PageHoc'
import routes from '../../constants/routes'
import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

const SignUp1 = () => {
    const navigation = useNavigation()
    const [ nearMe, setNearMe ] = useState('')
    const onSignInPress = () => {
        navigation.navigate(routes.Login)
    }

    const onSignUpPress = () => {
        navigation.navigate(routes.SignUp1)
    }

    return (
        <View style={styles.container}>
            <View style={styles.childContainer}>
                <LeftIconInput text={nearMe} setText={setNearMe} leftIcon={require('../../../assets/location-mark-icon.png')} />
                <TouchableOpacity style={styles.iconTextContainer}>
                    <Image
                        source={require('../../../assets/map-arrow-icon.png')}
                        style={styles.mapArrowIcon} />

                    <Text style={styles.text}>Current Location</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.iconTextContainer}>
                    <Image
                        source={require('../../../assets/location-icon.png')}
                        style={styles.mapArrowIcon} />

                    <Text style={styles.text}>Select Search area on a map</Text>
                </TouchableOpacity>

            </View>

            <View style={styles.buttonContainer}>
                <Button
                    text='Sign up'
                    onPress={onSignUpPress}
                    style={styles.signInButton}
                    showShadow />
                <Button
                    text='Sign in'
                    invert
                    onPress={onSignInPress}
                    style={styles.signUpButton} />
            </View>

        </View>
    )
}

export default PageHoc(SignUp1, {
    style: {
        backgroundColor: colors.lightGray
    }
})

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        marginHorizontal: 21,
        justifyContent: 'space-between',
        flex: 1
    },
    childContainer: { marginTop: 30 },
    iconTextContainer: {
        flexDirection: 'row',
        marginTop: 16,
        alignItems: 'center'
    },
    inputLabel: {
        fontFamily: fonts.ceraProMedium
    },
    mapArrowIcon: {
        width: 18,
        height: 18,
        marginHorizontal: 11
    },
    text: {
        fontWeight: '500',
        fontSize: 17,
        fontFamily: fonts.ceraProMedium
    },
    signInButton: {
        marginTop: 50
    },
    signUpButton: {
        marginTop: 35
    },
    buttonContainer: { marginBottom: 50 }
})
