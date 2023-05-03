import React from 'react'

import {
    TouchableOpacity, View, Image, Text, StyleSheet
} from 'react-native'

import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

export default ({
    name, message, count, time, image, onPress
}) => (
    <TouchableOpacity style={styles.container} onPress={() => onPress()}>
        <View style={styles.imageContainer}>
            <Image source={image} style={styles.image} />
        </View>

        <View style={styles.textContainer}>
            <Text style={styles.name}>
                {name}
            </Text>

            <Text style={styles.lastMessage}>
                {message}
            </Text>
        </View>

        <View style={styles.timeAndMessageCount}>
            <View style={[ styles.notifacionContainer, { opacity: count === 0 ? 0 : 1 }]}>
                <Text style={styles.notificationCount}>{count}</Text>
            </View>
            <Text style={styles.time}>
                {time}
            </Text>
        </View>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    container: { flexDirection: 'row', marginTop: 24 },
    imageContainer: {
        backgroundColor: colors.white,
        height: 65,
        width: 65,
        borderRadius: 23,
        padding: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        height: 62,
        width: 62,
        borderRadius: 23
    },
    textContainer: { justifyContent: 'center', flex: 1, marginLeft: 24 },
    name: {
        fontWeight: '400',
        fontSize: 16,
        fontFamily: fonts.ceraProBold,
        color: colors.black86
    },
    lastMessage: {
        fontWeight: '400',
        fontSize: 14,
        fontFamily: fonts.ceraProBold,
        color: colors.black5,
        marginTop: 6
    },
    timeAndMessageCount: { justifyContent: 'center', alignItems: 'center' },
    notifacionContainer: {
        width: 17,
        height: 17,
        borderRadius: 30,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center'
    },
    notificationCount: { fontSize: 10, color: colors.white },
    time: {
        fontSize: 14,
        color: colors.primary,
        fontWeight: '500',
        marginTop: 10
    }
})
