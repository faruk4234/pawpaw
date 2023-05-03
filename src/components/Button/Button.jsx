import React from 'react'

import {
    StyleSheet, Text, TouchableOpacity, ActivityIndicator
} from 'react-native'

import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

const Button = ({
    text,
    onPress,
    isLoading,
    disabled,
    style,
    invert,
    showShadow = false
}) => (
    <TouchableOpacity
        activeOpacity={0.9}
        style={[
            styles.button,
            showShadow && styles.shadow,
            invert && styles.buttonInvert,
            style
        ]}
        onPress={onPress}
        disabled={isLoading || disabled}>
        {
            isLoading ? (
                <ActivityIndicator color={colors.white} size='small' />
            ) : (
                <Text style={[
                    styles.text,
                    invert && styles.textInvert
                ]}>
                    {text}
                </Text>
            )
        }
    </TouchableOpacity>
)

export default Button

const styles = StyleSheet.create({
    button: {
        height: 48,
        alignSelf: 'stretch',
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary
    },
    shadow: {
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,
        elevation: 8
    },
    buttonInvert: {
        backgroundColor: colors.gray
    },
    text: {
        color: colors.white,
        fontFamily: fonts.ceraProMedium,
        fontSize: 20
    },
    textInvert: {
        color: colors.lightBlack
    }
})
