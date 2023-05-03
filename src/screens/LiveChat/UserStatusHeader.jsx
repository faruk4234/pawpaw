import React from 'react'

import {
    View, Image, Text, StyleSheet
} from 'react-native'

import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

export default ({ image, name, status }) => (
    <View style={styles.container}>
        <View style={styles.imageContainer}>
            <Image source={image} style={styles.image} />
        </View>

        <View style={styles.textContainer}>
            <Text style={styles.name}>
                {name}
            </Text>

            <Text style={styles.status}>
                {status}
            </Text>
        </View>
    </View>

)

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        marginLeft: 30
    },
    imageContainer: {
        width: 42,
        height: 42,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white,
        borderRadius: 17
    },
    image: { width: 40, height: 40, borderRadius: 17 },
    textContainer: { marginLeft: 14 },
    name: {
        fontWeight: '500',
        fontSize: 16,
        fontFamily: fonts.ceraProBold,
        color: colors.white
    },
    status: {
        marginTop: 2,
        fontWeight: '500',
        fontSize: 10,
        fontFamily: fonts.ceraProBold,
        color: colors.white
    }
})
