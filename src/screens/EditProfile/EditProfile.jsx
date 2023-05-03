import React from 'react'

import { useNavigation } from '@react-navigation/native'
import {
    Image, StyleSheet, Text, TouchableOpacity, View
} from 'react-native'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'

import Button from '../../components/Button/Button'
import IconTextButton from '../../components/IconTextButton/IconTextButton'
import PageHoc from '../../components/PageHoc/PageHoc'
import routes from '../../constants/routes'
import colors from '../../styles/colors'
import fonts from '../../styles/fonts'
import ChangeIteems from './ChangeIteems'

const EditProfile = () => {
    const navigation = useNavigation()

    return (
        <View style={styles.page}>
            <View
                style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../../../assets/back-icon.png')} style={styles.menuİcon} />
                </TouchableOpacity>

                <Text style={styles.editProfile}>
                    Edit Profile
                </Text>
                <View style={styles.userContainer}>
                    <Image
                        style={styles.image}
                        source={require('../../../assets/profileAvatar.jpeg')} />

                    <TouchableOpacity style={styles.changeButton} onPress={() => navigation.navigate(routes.ChangeProfile)}>
                        <Text style={styles.changeProfileText}>
                            Change Profile Picture
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.contentContainer}>
                <View>
                    <ChangeIteems header='Name' onPress={() => console.log('sda')} text='Mathew Party' />
                    <ChangeIteems header='Email' onPress={() => console.log('sda')} text='mathewperry0001@gmail.com' />
                    <ChangeIteems header='Location' onPress={() => console.log('sda')} text='Los Angels' />
                </View>
                <Button
                    text='Save Changes'
                    style={styles.buttonStyle}
                    onPress={() => console.log('sad')}
                    showShadow />
            </View>

        </View>
    )
}

export default PageHoc(EditProfile, {
    scroll: false
})

const styles = StyleSheet.create({
    page: {
        height: heightPercentageToDP(100),
        alignSelf: 'stretch',
        backgroundColor: colors.primary
    },
    header: {
        paddingLeft: 32,
        paddingRight: 21,
        height: 280,
        transform: [{
            translateY: 18
        }]
    },
    backİcon: { width: 14, height: 14, marginRight: 11 },
    image: {
        height: 80,
        width: 80,
        borderRadius: 15,
        backgroundColor: colors.white,
        padding: 10,
        borderWidth: 2,
        borderColor: colors.white
    },
    buttonStyle: { marginBottom: 70 },
    contentContainer: {
        justifyContent: 'space-between',
        backgroundColor: colors.white,
        height: heightPercentageToDP(100) - 290,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingTop: 38,
        paddingHorizontal: 23,
        zIndex: -1
    },
    changeProfileText: {
        fontSize: 18,
        color: colors.primary,
        fontFamily: fonts.ceraProBold,
        fontWeight: '500',
        marginBottom: 0
    },
    userContainer: {
        justifyContent: 'center', alignItems: 'center', flex: 1, marginBottom: 50
    },
    changeButton: {
        borderRadius: 11,
        backgroundColor: colors.white,
        marginTop: 12,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    editProfile: {
        color: colors.white,
        fontWeight: '500',
        fontSize: 24,
        marginTop: 20,
        fontFamily: fonts.ceraProBold
    }
})
