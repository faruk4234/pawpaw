import React from 'react'

import { View, Text, StyleSheet } from 'react-native'

import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

export default ({ item }) => {
    const { message, id } = item.item

    return (
        <View style={id === 0 ? styles.ownContainer : styles.otherUserContainer}>
            <Text style={id === 0 ? styles.ownText : styles.otherText}>
                {message}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    ownContainer: {
        alignSelf: 'flex-end',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary,
        borderTopLeftRadius: 27,
        borderBottomLeftRadius: 27,
        borderTopRightRadius: 27,
        marginTop: 38
    },
    otherUserContainer: {
        alignSelf: 'baseline',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.halfGray,
        borderTopLeftRadius: 27,
        borderTopRightRadius: 27,
        borderBottomRightRadius: 27,
        marginTop: 38
    },
    ownText: {
        fontSize: 14,
        paddingVertical: 16,
        fontWeight: '500',
        color: colors.white,
        fontFamily: fonts.ceraProBold,
        marginRight: 26,
        marginLeft: 13
    },
    otherText: {
        fontSize: 14,
        paddingVertical: 16,
        fontWeight: '500',
        color: colors.halfGray6,
        fontFamily: fonts.ceraProBold,
        marginRight: 13,
        marginLeft: 26
    }
})
