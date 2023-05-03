import React from 'react'

import {
    TouchableOpacity, Image, View, StyleSheet
} from 'react-native'

import colors from '../../styles/colors'

export default () => (
    <TouchableOpacity>
        <Image
            style={styles.image}
            source={require('../../../assets/profileAvatar.jpeg')} />
        <View style={styles.orangeDot} />
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    image: {
        height: 40,
        width: 40,
        borderRadius: 15,
        backgroundColor: colors.white,
        padding: 10,
        borderWidth: 2,
        borderColor: colors.white
    },
    orangeDot: {
        marginLeft: 30,
        zIndex: 2,
        position: 'absolute',
        height: 10,
        width: 10,
        borderRadius: 20,
        backgroundColor: colors.yelllow
    }
})
