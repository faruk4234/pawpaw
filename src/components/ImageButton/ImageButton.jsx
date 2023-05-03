import React from 'react'

import {
    TouchableOpacity, Image, StyleSheet, Text, View
} from 'react-native'

import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

const RenderItem = ({ image, name, onPress }) => (
    <TouchableOpacity
        onPress={onPress}
        style={styles.container}>
        <Image
            style={styles.image}
            source={image} />
        <View style={styles.infoBar}>
            <Text style={styles.nameText}>
                {name}

            </Text>

            <Image
                style={styles.icon}
                source={require('../../../assets/right-arrow-icon.png')} />
        </View>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    container: {
        height: 150,
        alignSelf: 'stretch',
        marginTop: 10,
        marginHorizontal: 20,
        borderRadius: 10,
        backgroundColor: colors.primary
    },
    image: {
        width: '100%',
        height: 106
    },
    infoBar: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    icon: {
        width: 24,
        height: 24,
        tintColor: colors.width,
        color: colors.white
    },
    nameText: {
        color: colors.white,
        fontWeight: '400',
        fontSize: 18,
        fontFamily: fonts.ceraProBold
    }
})

export default RenderItem
