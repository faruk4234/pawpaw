import React from 'react'

import { useNavigation } from '@react-navigation/native'
import {
    View, Text, TouchableOpacity, Image, StyleSheet
} from 'react-native'

import useSheet from '../../hooks/use-sheet'
import UserStatusHeader from './UserStatusHeader'

export default ({ name, status, image }) => {
    const navigation = useNavigation()
    const { showSheet } = useSheet()

    return (
        <View
            style={styles.header}>
            <View style={styles.iconBar}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../../../assets/back-icon.png')} style={styles.goBackIcon} />
                </TouchableOpacity>

                <UserStatusHeader name={name} status={status} image={image} />
                <TouchableOpacity onPress={() => showSheet({
                    buttons: [
                        {
                            label: 'Şikayet Et',
                            onPress: () => {}
                        }, {
                            label: 'Engelle',
                            onPress: () => {}
                        }
                    ]
                })}>
                    <Image source={require('../../../assets/more-vertical-icon.png')} style={styles.moreIcon} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        paddingLeft: 23,
        paddingRight: 21,
        height: 60

    },
    iconBar: {
        alignSelf: 'stretch',
        justifyContent: 'space-between',
        flexDirection: 'row'

    },
    moreIcon: { width: 24, height: 24 },
    goBackIcon: { width: 14, height: 14, marginTop: 5 }
})
