import React from 'react'

import {
    TouchableOpacity, Image, Text, StyleSheet
} from 'react-native'

import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

export default ({
    text, icon, onPress, style
}) => (
    <TouchableOpacity onPress={() => onPress()} style={styles.container}>
        <Image style={[ styles.icon, style ]} source={icon} />
        <Text style={styles.text}>
            {text}
        </Text>
    </TouchableOpacity>
)

const styles = StyleSheet.create({
    container: { flexDirection: 'row', alignItems: 'center', marginTop: 27 },
    icon: { width: 27, height: 22, tintColor: colors.primary },
    text: {
        fontWeight: '500', fontSize: 16, color: colors.black, marginLeft: 17, fontFamily: fonts.ceraProBold
    }
})
