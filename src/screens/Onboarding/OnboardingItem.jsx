import React from 'react'

import {
    View, Image, Text, StyleSheet, useWindowDimensions
} from 'react-native'

import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

const OnboardingItem = ({ item }) => {
    const { width } = useWindowDimensions()

    return (
        <View style={{ }}>
            <Image source={item.image} style={[ styles.image, { width }]} />

            <View style={styles.textContainer}>
                <Text style={styles.headerText}>
                    {item.title}
                </Text>
                <Text style={styles.descriptionText}>
                    {item.description}

                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        marginTop: 50,
        resizeMode: 'contain',
        flex: 0.7
    },
    headerText: {
        marginTop: 27,
        color: colors.white,
        fontSize: 28,
        width: 225,
        textAlign: 'center',
        fontWeight: '700',
        lineHeight: 35,
        fontFamily: fonts.ceraProBold
    },
    descriptionText: {
        paddingTop: 11,
        color: colors.white,
        fontSize: 16,
        width: 300,
        textAlign: 'center',
        fontWeight: '500',
        lineHeight: 20.11,
        fontFamily: fonts.ceraProBold
    },
    textContainer: {
        flex: 0.38,
        alignItems: 'center'
    }
})

export default OnboardingItem
