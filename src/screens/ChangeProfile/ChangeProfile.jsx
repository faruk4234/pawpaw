import React from 'react'

import { useNavigation } from '@react-navigation/native'
import { useUpdateAtom } from 'jotai/utils'
import {
    Image, StyleSheet, Text, TouchableOpacity, View
} from 'react-native'
import { FloatingLabelInput } from 'react-native-floating-label-input'
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

    const [ name, setName ] = React.useState('')
    const [ surName, setSurname ] = React.useState('')
    const [ email, setEmail ] = React.useState('')
    const [ password, setPassword ] = React.useState('')
    const [ rePassword, setRePassword ] = React.useState('')
    const [ certificate, setSertificate ] = React.useState('')
    const [ location, setLocation ] = React.useState('')

    const customLabelStyle = {
        fontSizeFocused: 16,
        fontSizeBlurred: 16,
        topFocused: -30,
        colorFocused: colors.primary,
        colorBlurred: 'rgba(0, 0, 0, 0.38)'
    }

    return (
        <View style={styles.page}>
            <View
                style={styles.header}>
                <View style={styles.iconBar}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={require('../../../assets/back-icon.png')} style={styles.menuİcon} />
                    </TouchableOpacity>

                </View>
                <Text style={styles.headerTitle}>
                    Edit Profile
                </Text>
            </View>
            <View style={styles.contentContainer}>

                <View style={styles.photoContainer}>
                    <View style={styles.childPhotoContainer}>
                        <Image source={require('../../../assets/profileAvatar.jpeg')} style={styles.photo} />
                        <TouchableOpacity style={styles.plusIcon}>
                            <Image source={require('../../../assets/plus-icon.png')} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.content}>
                    <View style={styles.flex1} />
                    <View style={{ }}>
                        <View style={styles.nameContainer}>
                            <FloatingLabelInput
                                label='First Name'
                                labelStyles={styles.inputLabel}
                                animationDuration={100}
                                inputStyles={styles.inputStyle}
                                customLabelStyles={customLabelStyle}
                                containerStyles={styles.shortContainerStyle}
                                value={name}
                                onChangeText={setName} />
                            <FloatingLabelInput
                                label='Last Name'
                                labelStyles={styles.inputLabel}
                                animationDuration={100}
                                inputStyles={styles.inputStyle}
                                customLabelStyles={customLabelStyle}
                                containerStyles={styles.shortContainerStyle}
                                value={surName}
                                onChangeText={setSurname} />
                        </View>
                        <FloatingLabelInput
                            label='Email'
                            labelStyles={styles.inputLabel}
                            animationDuration={100}
                            inputStyles={styles.inputStyle}
                            customLabelStyles={customLabelStyle}
                            containerStyles={styles.containerStyle}
                            value={email}
                            onChangeText={setEmail} />
                        <FloatingLabelInput
                            label='Password'
                            labelStyles={styles.inputLabel}
                            animationDuration={100}
                            inputStyles={styles.inputStyle}
                            customLabelStyles={customLabelStyle}
                            containerStyles={[ styles.containerStyle, styles.passwordContainer ]}
                            value={password}
                            onChangeText={setPassword} />

                        <FloatingLabelInput
                            label='Re-Type Password'
                            labelStyles={styles.inputLabel}
                            animationDuration={100}
                            inputStyles={styles.inputStyle}
                            customLabelStyles={customLabelStyle}
                            containerStyles={[ styles.containerStyle, styles.passwordContainer ]}
                            value={rePassword}
                            onChangeText={setRePassword} />

                        <FloatingLabelInput
                            label='Veterinary certificate'
                            labelStyles={styles.inputLabel}
                            rightComponent={<Image source={require('../../../assets/document-icon.png')} style={styles.documentIcon} />}
                            animationDuration={100}
                            inputStyles={styles.inputStyle}
                            customLabelStyles={customLabelStyle}
                            containerStyles={[ styles.containerStyle, styles.passwordContainer ]}
                            value={certificate}
                            onChangeText={setSertificate} />

                        <FloatingLabelInput
                            label='Location'
                            labelStyles={styles.inputLabel}
                            rightComponent={<Image source={require('../../../assets/location-icon.png')} style={styles.mapIcon} />}
                            animationDuration={100}
                            inputStyles={styles.inputStyle}
                            customLabelStyles={customLabelStyle}
                            containerStyles={[ styles.containerStyle, styles.passwordContainer ]}
                            value={location}
                            onChangeText={setLocation} />

                        <View style={styles.buttonContainer}>
                            <Button
                                text='Change Profile'
                                style={styles.signInButton}
                                showShadow />
                        </View>
                    </View>
                    <View style={styles.flex2} />
                </View>
            </View>
        </View>
    )
}

export default PageHoc(Settings, {
    scroll: true,
    style: {
    }
})

const styles = StyleSheet.create({
    page: {
        alignSelf: 'stretch',
        backgroundColor: colors.primary
    },
    header: {
        paddingLeft: 23,
        paddingRight: 21,
        height: 70
    },
    iconBar: {
        alignSelf: 'stretch',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    headerTitle: {
        marginTop: 21,
        fontWeight: '500',
        fontSize: 24,
        color: colors.white,
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
    photo: { height: 120, width: 120, borderRadius: 12 },
    contentContainer: {
        backgroundColor: colors.white,
        height: heightPercentageToDP(115) - 90,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingTop: 35,
        marginBottom: -40,
        paddingHorizontal: 23,
        zIndex: -1
    },
    photoContainer: { alignItems: 'center', height: 120 },
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
    inputLabel: {
        fontFamily: fonts.ceraProMedium,
        width: '100%'
    },
    inputStyle: {
        paddingHorizontal: 0,
        fontSize: 16,
        color: colors.black,
        fontFamily: fonts.ceraProMedium
    },
    childPhotoContainer: {
        height: 130,
        width: 150,
        alignItems: 'center'
    },
    containerStyle: {
        marginTop: 36,
        height: 50,
        borderBottomWidth: 1
    },
    shortContainerStyle: {
        marginTop: 70,
        height: 50,
        marginHorizontal: 10,
        borderBottomWidth: 1
    },
    passwordContainer: {
        marginTop: 36
    },
    signInButton: {
        marginTop: 50
    },
    nameContainer: {
        flexDirection: 'row',
        marginHorizontal: -10
    },
    documentIcon: {
        height: 21,
        width: 16,
        marginRight: 8
    },
    mapIcon: {
        height: 21,
        width: 21,
        marginRight: 8
    },
    buttonContainer: { marginBottom: 50 },
    content: {
        borderTopLeftRadius: 47,
        borderTopRightRadius: 47
    },
    plusIcon: {
        right: 0,
        bottom: 0,
        height: 36,
        width: 36,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        position: 'absolute'

    }

})
