import React from 'react'

import {
    View, TouchableOpacity, Image, Text, StyleSheet
} from 'react-native'

import colors from '../../styles/colors'
import fonts from '../../styles/fonts'
import { shadow } from '../../styles/theme'

export default ({
    text, selected, setSelected, icon
}) => (
    <View style={styles.container}>
        <TouchableOpacity style={selected === text ? styles.greenButton : styles.grayButton} onPress={() => setSelected(text)}>
            <Image source={icon} style={selected === text ? styles.icon : styles.grayIcon} />
        </TouchableOpacity>
        <View style={[ styles.greenLine, { opacity: selected === text ? 1 : 0 }]} />
        <Text style={selected === text ? styles.greenText : styles.grayText}>{text}</Text>
    </View>
)

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginHorizontal: 16,
        ...shadow.sm
    },
    greenButton: {
        backgroundColor: colors.primary,
        width: 70,
        height: 60,
        borderRadius: 22,
        justifyContent: 'center',
        alignItems: 'center'
    },
    grayButton: {
        backgroundColor: colors.white,
        width: 70,
        height: 60,
        borderRadius: 22,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: { height: 32, width: 32, tintColor: colors.white },
    grayIcon: { height: 32, width: 32, tintColor: colors.blackGray },
    greenLine: {
        height: 3,
        backgroundColor: colors.primary,
        width: 20,
        marginVertical: 5
    },
    greenText: {
        color: colors.primary,
        fontSize: 12,
        fontFamily: fonts.ceraProBold
    },
    grayText: {
        color: colors.blackGray,
        fontSize: 12,
        fontFamily: fonts.ceraProBold
    }
})
