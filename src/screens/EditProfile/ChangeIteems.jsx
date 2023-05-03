import React from 'react'

import {
    View, Text, TouchableOpacity, Image, StyleSheet
} from 'react-native'

import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

export default ({
    header, text, onPress, style
}) => (
    <>
        <View style={styles.container}>
            <Text style={styles.text}>{header}</Text>
            <TouchableOpacity onPress={() => onPress()}>
                <Image style={styles.icon} source={require('../../../assets/edit-icon.png')} />
            </TouchableOpacity>
        </View>
        <Text style={styles.descriptiontext}>{text}</Text>
    </>

)

const styles = StyleSheet.create({
    container: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 22 },
    editProfile: {
        color: colors.white,
        fontWeight: '500',
        fontSize: 24,
        marginTop: 20,
        fontFamily: fonts.ceraProBold
    },
    icon: { height: 21, width: 21, tintColor: colors.primary },
    text: {
        fontWeight: '500', fontSize: 16, color: colors.black, marginLeft: 17, fontFamily: fonts.ceraProBold
    },
    descriptiontext: {
        fontWeight: '500', fontSize: 18, color: colors.black, marginLeft: 17, fontFamily: fonts.ceraProBold, marginTop: 6
    }
})
