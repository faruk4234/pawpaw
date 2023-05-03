import React from 'react'

import { View, Text, StyleSheet } from 'react-native'

import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

export default ({ text }) => (
    <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
        <View style={styles.line} />
    </View>
)

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 57
    },
    line: {
        height: 2, flex: 1, backgroundColor: colors.black2
    },
    text: {
        marginRight: 11,
        fontWeight: '500',
        fontSize: 16,
        color: colors.black,
        fontFamily: fonts.ceraProBold,
        marginLeft: 5

    }
})
