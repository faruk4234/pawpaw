import React from 'react'

import { useNavigation } from '@react-navigation/native'
import {
    Image, StyleSheet, Text, TouchableOpacity, View
} from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'

import Button from '../../components/Button/Button'
import IconTextButton from '../../components/IconTextButton/IconTextButton'
import PageHoc from '../../components/PageHoc/PageHoc'
import PetsBar from '../../components/PetsBar/PetsBar'
import TextAndLine from '../../components/TextandLine/TextAndLine'
import UserProfileImageButton from '../../components/UserProfileImageButton/UserProfileImageButton'
import routes from '../../constants/routes'
import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

const UserProfile = () => {
    const navigation = useNavigation()
    const region = {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    }

    return (
        <View style={styles.page}>
            <View
                style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../../../assets/back-icon.png')} style={styles.backIcon} />
                </TouchableOpacity>
                <View style={styles.userContainer}>
                    <Image
                        style={styles.image}
                        source={require('../../../assets/profileAvatar.jpeg')} />

                    <Text style={styles.nameStyle}>Ryder Pump</Text>
                    <Text style={styles.locationTextStyle}>Los Angels</Text>

                </View>
                <UserProfileImageButton />
            </View>
            <View style={styles.contentContainer}>
                <TextAndLine text='Pets' />
                <PetsBar />
                <View style={styles.margin50}>
                    <TextAndLine text='Location' />
                </View>

                <View style={styles.mapArea} />

                <Button text='Chat' showShadow style={styles.button} />

            </View>
        </View>
    )
}

export default PageHoc(UserProfile, {
    scroll: true
})

const styles = StyleSheet.create({
    page: {
        height: heightPercentageToDP(100),
        alignSelf: 'stretch',
        backgroundColor: colors.primary
    },
    header: {
        flexDirection: 'row',
        paddingLeft: 32,
        paddingRight: 21,
        height: heightPercentageToDP(22),
        transform: [{
            translateY: 18
        }]
    },
    margin50: { marginTop: 50 },
    backIcon: {
        width: 18, height: 18, right: 11, marginTop: 0
    },
    button: { marginTop: 90, marginBottom: 50 },
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
        height: heightPercentageToDP(80),
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingTop: 44,
        paddingHorizontal: 23,
        zIndex: -1
    },
    nameStyle: {
        fontSize: 18,
        color: colors.white,
        fontFamily: fonts.ceraProBold,
        fontWeight: '400',
        marginTop: 10,
        marginBottom: 0
    },
    locationTextStyle: {
        fontSize: 16,
        color: colors.white,
        fontFamily: fonts.ceraProBold,
        fontWeight: '400',
        marginTop: 8,
        marginBottom: 0
    },
    userContainer: {
        justifyContent: 'center', alignItems: 'center', flex: 1, marginBottom: 10
    },
    text: {
        marginRight: 11,
        fontWeight: '500',
        fontSize: 16,
        color: colors.black,
        marginLeft: 17,
        fontFamily: fonts.ceraProBold

    },
    mapArea: {
        height: 150,
        alignSelf: 'stretch',
        backgroundColor: colors.white,
        marginTop: 33,
        borderRadius: 28,
        padding: 3
    }
})
