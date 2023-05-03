import React from 'react'

import {
    View, Image, TextInput, TouchableOpacity, StyleSheet
} from 'react-native'

import useSheet from '../../hooks/use-sheet'
import colors from '../../styles/colors'

const MessageInput = ({ text, setText, leftIcon }) => {
    const { showSheet } = useSheet()

    return (
        <View style={styles.inputContainer}>
            <TouchableOpacity onPress={() => showSheet({
                buttons: [
                    {
                        label: 'Resim gönder',
                        onPress: () => {}
                    }, {
                        label: 'Konum Gönder',
                        onPress: () => {}
                    }
                ]
            })}>
                <Image
                    source={leftIcon}
                    style={styles.locationIcon} />
            </TouchableOpacity>
            <TextInput
                selectionColor={{ color: colors.primary }}
                value={text}
                onChangeText={setText}
                style={styles.flex1}
                placeholder='near me' />

            <TouchableOpacity onPress={() => setText()}>
                <Image
                    source={require('../../../assets/send-message3x.png')}
                    style={styles.deleteIcon} />
            </TouchableOpacity>
        </View>
    )
}

export default MessageInput

const styles = StyleSheet.create({
    inputContainer: {
        height: 48,
        borderRadius: 14,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: colors.gray
    },
    flex1: { flex: 1 },
    deleteIcon: {
        marginHorizontal: 12,
        tintColor: colors.primary,
        height: 25,
        width: 21
    },
    locationIcon: {
        marginHorizontal: 12,
        height: 18,
        width: 13
    }
})
