import React from 'react'

import { useNavigation } from '@react-navigation/native'
import { useUpdateAtom } from 'jotai/utils'
import {
    Image, StyleSheet, Text, TouchableOpacity, View
} from 'react-native'
import { heightPercentageToDP } from 'react-native-responsive-screen'

import Button from '../../components/Button/Button'
import PageHoc from '../../components/PageHoc/PageHoc'
import PetsBar from '../../components/PetsBar/PetsBar'
import UserProfileImageButton from '../../components/UserProfileImageButton/UserProfileImageButton'
import colors from '../../styles/colors'
import fonts from '../../styles/fonts'
import { userAtom } from '../../utils/atoms'

const MyPets = () => {
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
                    My Pets
                </Text>
            </View>
            <View style={styles.contentContainer}>

                <View>
                    <PetsBar />
                </View>

                <Button showShadow text='Add new pet' style={styles.button} />
            </View>
        </View>
    )
}

export default PageHoc(MyPets, {
    scroll: false
})

const styles = StyleSheet.create({
    page: {
        alignSelf: 'stretch',
        backgroundColor: colors.primary
    },
    header: {
        paddingLeft: 32,
        paddingRight: 21,
        height: 90,
        transform: [{
            translateY: 10
        }]
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
        justifyContent: 'space-between',
        backgroundColor: colors.white,
        height: heightPercentageToDP(95) - 70,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
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
