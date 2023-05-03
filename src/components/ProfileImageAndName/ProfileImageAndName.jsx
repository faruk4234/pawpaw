import React from 'react'

import {
    View, Image, Text, StyleSheet
} from 'react-native'

import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

export default ({ name, location, image }) => (
    <View style={styles.userContainer}>
        <Image
            style={styles.image}
            source={image} />

        <Text style={styles.nameStyle}>{name}</Text>
        <Text style={styles.locationTextStyle}>{location}</Text>

    </View>
)

const styles = StyleSheet.create({
    image: {
        height: 80,
        width: 80,
        borderRadius: 15,
        backgroundColor: colors.white,
        padding: 10,
        borderWidth: 2,
        borderColor: colors.white
    },
    nameStyle: {
        fontSize: 18,
        color: colors.white,
        fontFamily: fonts.ceraProBold,
        fontWeight: '400',
        marginTop: 10,
        marginBottom: 0
    },
    locationTextStyle: {
        fontSize: 16,
        color: colors.white,
        fontFamily: fonts.ceraProBold,
        fontWeight: '400',
        marginTop: 8,
        marginBottom: 0
    },
    userContainer: {
        justifyContent: 'center', alignItems: 'center', flex: 1, marginBottom: 10
    }
})
