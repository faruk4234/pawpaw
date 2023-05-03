import React from 'react'

import { useNavigation } from '@react-navigation/native'
import { useUpdateAtom } from 'jotai/utils'
import {
    Image, StyleSheet, Text, TouchableOpacity, View
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

const Settings = () => {
    const navigation = useNavigation()
    const setUser = useUpdateAtom(userAtom)

    return (
        <View style={styles.page}>
            <View
                style={styles.header}>
                <View style={styles.iconBar}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={require('../../../assets/back-icon.png')} style={styles.menuİcon} />
                    </TouchableOpacity>

                    <UserProfileImageButton />

                </View>
                <Text style={styles.headerTitle}>
                    Settings
                </Text>
            </View>
            <View style={styles.contentContainer}>
                <IconTextButton style={{ height: 22, width: 22, marginRight: 3 }} icon={require('../../../assets/edit-icon.png')} text='Edit Profile' onPress={() => navigation.navigate(routes.ChangeProfile)} />
                <IconTextButton style={{ height: 24, width: 24, marginRight: 2 }} icon={require('../../../assets/bell-icon.png')} text='Notification Settings' />
                <IconTextButton style={{ height: 24, width: 24, marginRight: 3 }} icon={require('../../../assets/help-circle-icon.png')} text='Help' />
                <IconTextButton style={{ height: 24, width: 24, marginRight: 3 }} icon={require('../../../assets/info-icon.png')} text='About us' />
            </View>
        </View>
    )
}

export default PageHoc(Settings, {
    scroll: false
})

const styles = StyleSheet.create({
    page: {
        alignSelf: 'stretch',
        backgroundColor: colors.primary
    },
    header: {
        paddingLeft: 23,
        paddingRight: 21,
        height: 80

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
    menuİcon: { width: 14, height: 14 },
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
        backgroundColor: colors.lightGray,
        height: heightPercentageToDP(95) - 68,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingTop: 35,
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
    }
})
