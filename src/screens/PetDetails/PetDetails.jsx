import React from 'react'

import { useNavigation } from '@react-navigation/native'
import {
    Image, ImageBackground, Text, TouchableOpacity, StyleSheet, View
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'

import Button from '../../components/Button/Button'
import PageHoc from '../../components/PageHoc/PageHoc'
import useSheet from '../../hooks/use-sheet'
import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

const PetDetails = () => {
    const navigation = useNavigation()
    const { showSheet } = useSheet()

    return (
        <View style={styles.flex1}>
            <ImageBackground source={require('../../../assets/dogBig.png')} style={styles.image}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../../../assets/back-icon.png')} style={{ tintColor: colors.black5 }} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => showSheet({
                    buttons: [
                        {
                            label: 'Kaldır',
                            onPress: () => {}
                        }, {
                            label: 'Düzenle',
                            onPress: () => {}
                        }
                    ]
                })}>
                    <Image source={require('../../../assets/horizontal-more.png')} style={{ tintColor: colors.black, height: 5, width: 20 }} />
                </TouchableOpacity>
            </ImageBackground>

            <ScrollView style={styles.scrollViewStyle}>
                <View style={styles.nameBar}>
                    <Text style={styles.name}>Daisy</Text>
                    <Image source={require('../../../assets/female-icon3x.png')} style={styles.genderIcon} />
                </View>
                <View style={styles.petInfoBar}>

                    <View>
                        <Text style={styles.text1}>Cavalier King</Text>
                        <Text style={styles.text1}>Charles Spaniel</Text>
                    </View>
                    <Text style={styles.text1}>3 years</Text>
                </View>

                <View style={styles.locationBar}>
                    <Image source={require('../../../assets/location-green-icon.png')} style={{ width: 18, height: 22, tintColor: colors.primary }} />
                    <Text style={styles.locationText}>Los Angeles, CA</Text>
                </View>

                <View style={styles.userBar}>
                    <View style={styles.imageContainer}>
                        <Image style={styles.userPhoto} source={require('../../../assets/profileAvatar.jpeg')} />
                    </View>
                    <View style={styles.userTextBar}>
                        <View style={styles.userName}>
                            <Text style={styles.userNameText}>Ryder Pump</Text>
                            <Text style={styles.userStatus}>owner</Text>
                        </View>
                        <Text style={styles.time}>28, April 2020</Text>
                    </View>
                </View>

                <Text style={styles.petDescription}>
                    Daisy was abondoned after six months by his
                    owner because he consumed more food than they
                    expected him to eat. She still strolls around that
                    house despite being chased. Now she is fed by my
                    sister in law but she deserves a loving family.
                </Text>

                <View style={styles.buttonBar}>
                    <TouchableOpacity style={styles.heartButton}>
                        <Image source={require('../../../assets/white-heart-icon.png')} />
                    </TouchableOpacity>
                    <Button text='Adaption' style={styles.button} />
                </View>

            </ScrollView>
        </View>
    )
}

export default PageHoc(PetDetails, {
    scroll: false,
    style: {
        backgroundColor: 'white'
    }
})

const styles = StyleSheet.create({
    image: {
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: heightPercentageToDP(40),
        width: widthPercentageToDP(100)
    },
    flex1: { flex: 1 },
    scrollViewStyle: {
        backgroundColor: colors.white,
        flex: 1,
        paddingHorizontal: 23
    },
    nameBar: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'space-between'
    },
    name: {
        fontWeight: '700',
        fontFamily: fonts.ceraProBold,
        fontSize: 28,
        color: colors.black86
    },
    genderIcon: {
        height: 23,
        width: 18
    },
    petInfoBar: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-between'
    },
    text1: {
        marginTop: 4,
        fontSize: 16,
        fontWeight: '500',
        fontFamily: fonts.ceraProBold,
        color: colors.black5
    },
    locationBar: {
        flexDirection: 'row',
        marginTop: 17
    },
    locationText: {
        marginLeft: 8,
        fontWeight: '500',
        fontSize: 18,
        color: colors.black86
    },
    userBar: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 25
    },
    imageContainer: {
        padding: 2,
        backgroundColor: colors.white,
        borderRadius: 12
    },
    userPhoto: {
        height: 50,
        width: 50,
        borderRadius: 12
    },
    userTextBar: {
        flexDirection: 'row',
        flex: 1,
        marginTop: 6
    },
    userName: {
        flex: 1,
        marginLeft: 13
    },
    userNameText: {
        fontSize: 13,
        fontWeight: '500',
        fontFamily: fonts.ceraProBold,
        color: colors.black86
    },
    userStatus: {
        fontWeight: '500',
        color: colors.black5,
        fontSize: 12,
        marginTop: 2
    },
    time: {
        fontWeight: '500',
        color: colors.black5,
        fontSize: 12,
        marginTop: 2
    },
    petDescription: {
        marginTop: 15,
        fontFamily: fonts.ceraProBold,
        color: colors.black86,
        fontWeight: '500',
        fontSize: 13,
        lineHeight: 18,
        opacity: 0.87,
        marginRight: 10
    },
    buttonBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 52,
        marginBottom: 50
    },
    heartButton: {
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        height: 48,
        width: 48,
        borderRadius: 11
    },
    button: {
        flex: 1,
        marginLeft: 18
    }
})
