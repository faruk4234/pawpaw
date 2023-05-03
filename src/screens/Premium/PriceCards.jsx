import React from 'react'

import {
    TouchableOpacity, View, Text, StyleSheet
} from 'react-native'

import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

export default ({
    header, mountCount, text1, text2, text3, text4
}) => (
    <TouchableOpacity style={styles.container}>
        <Text style={styles.header}>{header}</Text>
        <View style={styles.priceContainer}>
            <Text style={styles.mountCount}>{mountCount}</Text>
            <Text style={styles.text1}>{text1}</Text>
            <Text style={styles.text2}>{text2}</Text>
            <Text style={styles.text3}>{text3}</Text>
            <Text style={styles.text4}>{text4}</Text>
        </View>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: colors.white,
        height: 105,
        width: 70,
        marginHorizontal: 7,
        borderRadius: 12,
        backgroundColor: colors.white
    },
    header: {
        fontSize: 8,
        textAlign: 'center'
    },
    priceContainer: {
        flex: 1,
        backgroundColor: colors.black86,
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        justifyContent: 'center',
        alignItems: 'center'
    },
    mountCount: {
        color: colors.white,
        fontSize: 18,
        fontWeight: '300'
    },
    text1: {
        color: colors.white,
        fontSize: 8,
        fontWeight: '500',
        marginTop: 7
    },
    text2: {
        color: colors.gray205,
        fontSize: 8,
        fontWeight: '500',
        marginTop: 3
    },
    text3: {
        color: colors.blue,
        fontSize: 8,
        marginTop: 14,
        fontWeight: '600',
        fontFamily: fonts.ceraProBold
    },
    text4: {
        color: colors.white,
        fontSize: 8,
        fontWeight: '500',
        marginTop: 7,
        marginBottom: 2
    }
})
