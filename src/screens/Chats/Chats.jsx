import React, { useState } from 'react'

import { useNavigation } from '@react-navigation/native'
import { useUpdateAtom } from 'jotai/utils'
import {
    Image, StyleSheet, Text, TouchableOpacity, View, TextInput
} from 'react-native'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'

import Button from '../../components/Button/Button'
import IconTextButton from '../../components/IconTextButton/IconTextButton'
import PageHoc from '../../components/PageHoc/PageHoc'
import PetsBar from '../../components/PetsBar/PetsBar'
import UserProfileImageButton from '../../components/UserProfileImageButton/UserProfileImageButton'
import routes from '../../constants/routes'
import colors from '../../styles/colors'
import fonts from '../../styles/fonts'
import { userAtom } from '../../utils/atoms'
import UserItem from './UserItem'

const Chats = () => {
    const navigation = useNavigation()
    const setUser = useUpdateAtom(userAtom)
    const inputRef = React.useRef()

    return (
        <View style={styles.page}>
            <View
                style={styles.header}>
                <View style={styles.iconBar}>
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>
                        <Image source={require('../../../assets/menu-icon.png')} style={styles.menuİcon} />
                    </TouchableOpacity>

                    <UserProfileImageButton />

                </View>
                <View style={styles.headerBar}>

                    <View style={styles.inputBar}>
                        <TextInput
                            ref={inputRef}
                            placeholder='Search'
                            style={styles.input} />
                        <TouchableOpacity onPress={() => {
                            inputRef.current.focus()
                        }}>
                            <Image source={require('../../../assets/search-icon.png')} style={styles.searchIcon} />
                        </TouchableOpacity>
                    </View>

                </View>

            </View>
            <View style={styles.contentContainer}>
                <UserItem
                    name='Ryder Pump'
                    message='Hi, Iwant adopt Daisy'
                    count={1}
                    time='18:06'
                    image={require('../../../assets/profileAvatar.jpeg')}
                    onPress={() => navigation.navigate(routes.LiveChat)} />

                <UserItem
                    name='Darina'
                    message='Image'
                    count={0}
                    time='15:01'
                    image={require('../../../assets/profileAvatar.jpeg')}
                    onPress={() => console.log('soda')} />

            </View>
        </View>
    )
}

export default PageHoc(Chats, {
    scroll: true
})

const styles = StyleSheet.create({
    page: {
        alignSelf: 'stretch',
        backgroundColor: colors.primary
    },
    header: {
        paddingLeft: 23,
        paddingRight: 21,
        height: 120

    },
    iconBar: {
        alignSelf: 'stretch',
        justifyContent: 'space-between',
        flexDirection: 'row'

    },
    headerTitle: {
        fontWeight: '500',
        fontSize: 24,
        color: colors.white,
        opacity: 0.87,
        fontFamily: fonts.ceraProBold
    },
    button: { marginBottom: 70 },
    menuİcon: { width: 18, height: 18, marginTop: 0 },
    image: {
        height: 80,
        width: 80,
        borderRadius: 15,
        backgroundColor: colors.white,
        padding: 10,
        borderWidth: 2,
        borderColor: colors.white
    },
    contentContainer: {
        backgroundColor: colors.white,
        height: heightPercentageToDP(95) - 100,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingTop: 35,
        marginBottom: 35,
        paddingHorizontal: 23,
        zIndex: -1
    },
    nameStyle: {
        fontSize: 18,
        color: colors.white,
        fontFamily: fonts.ceraProBold,
        fontWeight: '400',
        marginTop: 11,
        marginBottom: 0
    },
    userContainer: {
        justifyContent: 'center', alignItems: 'center', flex: 1, marginBottom: 50
    },
    headerBar: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 18 },
    searchIcon: { tintColor: colors.gray2, height: 14, width: 14 },
    input: { flex: 1, marginHorizontal: 20 },
    inputBar: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        backgroundColor: colors.white,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 14,
        flex: 1
    }
})
