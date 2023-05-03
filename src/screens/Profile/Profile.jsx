import React from 'react'

import { useNavigation } from '@react-navigation/native'
import { useUpdateAtom } from 'jotai/utils'
import {
    Image, StyleSheet, Text, TouchableOpacity, View
} from 'react-native'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'

import IconTextButton from '../../components/IconTextButton/IconTextButton'
import PageHoc from '../../components/PageHoc/PageHoc'
import routes from '../../constants/routes'
import colors from '../../styles/colors'
import fonts from '../../styles/fonts'
import { userAtom } from '../../utils/atoms'

const Profile = () => {
    const navigation = useNavigation()
    const setUser = useUpdateAtom(userAtom)

    return (
        <View style={styles.page}>
            <View
                style={styles.header}>
                <TouchableOpacity onPress={() => navigation.openDrawer()}>
                    <Image source={require('../../../assets/menu-icon.png')} style={styles.menuİcon} />
                </TouchableOpacity>
                <View style={styles.userContainer}>
                    <Image
                        style={styles.image}
                        source={require('../../../assets/profileAvatar.jpeg')} />

                    <Text style={styles.nameStyle}>
                        Methew Parry
                    </Text>
                </View>
            </View>
            <View style={styles.contentContainer}>
                <IconTextButton style={{ height: 22, width: 22, marginRight: 3 }} text='Edit Profile' icon={require('../../../assets/edit-icon.png')} onPress={() => navigation.navigate(routes.EditProfile)} />
                <IconTextButton style={{ height: 19, width: 21, marginRight: 4 }} text='My Pets' icon={require('../../../assets/petPatty-icon.png')} onPress={() => navigation.navigate(routes.MyPets)} />
                <IconTextButton
                    style={{ height: 24, width: 24, marginRight: 3 }}
                    text='Log Out'
                    icon={require('../../../assets/logOut-icon.png')}
                    onPress={() => setUser(null)} />

            </View>
        </View>
    )
}

export default PageHoc(Profile, {
    scroll: false
})

const styles = StyleSheet.create({
    page: {
        alignSelf: 'stretch',
        backgroundColor: colors.primary,
        marginBottom: 70
    },
    header: {
        paddingLeft: 32,
        paddingRight: 21,
        height: 170,
        transform: [{
            translateY: 18
        }]
    },
    menuİcon: {
        width: 18, height: 18, right: 9, marginTop: 2
    },
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
        height: heightPercentageToDP(85) - 120,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingTop: 44,
        paddingLeft: 23,
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
