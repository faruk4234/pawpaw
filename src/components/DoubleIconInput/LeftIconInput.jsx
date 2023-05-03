import React from 'react'

import {
    View, Image, TextInput, TouchableOpacity, StyleSheet
} from 'react-native'

import colors from '../../styles/colors'

const LeftIconInput = ({ text, setText, leftIcon }) => (
    <View style={styles.inputContainer}>
        <Image
            source={leftIcon}
            style={styles.locationIcon} />
        <TextInput
            selectionColor={{ color: colors.primary }}
            value={text}
            onChangeText={setText}
            style={styles.flex1}
            placeholder='near me' />

        <TouchableOpacity onPress={() => setText()}>
            <Image
                source={require('../../../assets/close-icon.png')}
                style={styles.deleteIcon} />
        </TouchableOpacity>
    </View>
)

export default LeftIconInput

const styles = StyleSheet.create({
    inputContainer: {
        height: 48,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: colors.primary,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: colors.white
    },
    flex1: { flex: 1 },
    deleteIcon: {
        marginHorizontal: 12,
        height: 20,
        width: 18
    },
    locationIcon: {
        marginHorizontal: 12,
        height: 18,
        width: 13
    }
})
