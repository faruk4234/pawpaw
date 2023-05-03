import React, { Component } from 'react'

import { useNavigation } from '@react-navigation/native'
import {
    Text, View, TouchableOpacity, Image, StyleSheet
} from 'react-native'
import MapView from 'react-native-maps'
import { heightPercentageToDP } from 'react-native-responsive-screen'

import routes from '../../../constants/routes'
import colors from '../../../styles/colors'
import fonts from '../../../styles/fonts'

const Map = () => {
    const navigation = useNavigation()

    return (
        <View style={{ flex: 1 }}>
            <MapView style={{ flex: 1 }} />
            <View style={styles.cardContainer}>

                <View style={styles.container}>
                    <Image source={require('../../../../assets/profileAvatar.jpeg')} style={styles.image} />

                    <View style={styles.textContainer}>
                        <Text style={styles.name}>Ryder PUMP</Text>
                        <Text style={styles.range}>5.5 km</Text>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate(routes.Hotels)}>
                        <Image
                            source={require('../../../../assets/chevron-forward.png')}
                            style={{
                                tintColor: colors.primary, height: 18, width: 18, marginRight: 10
                            }} />
                    </TouchableOpacity>
                </View>

                <View style={styles.iconContainer}>
                    <TouchableOpacity style={styles.iconBackground}>
                        <Image source={require('../../../../assets/call-icon.png')} style={{ height: 20, width: 20 }} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.iconBackground}>
                        <Image source={require('../../../../assets/vets-message-icon.png')} style={{ height: 23, width: 20 }} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.iconBackground}>
                        <Image source={require('../../../../assets/icon/Vector.png')} style={{ height: 20, width: 20 }} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Map

const styles = StyleSheet.create({
    container: {
        margin: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch'
    },
    cardContainer: {
        position: 'absolute',
        bottom: '2%',
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white,
        margin: 20,
        pading: 10,
        borderRadius: 11,
        borderWidth: 1,
        borderColor: colors.black2
    },
    image: { height: 50, width: 50, borderRadius: 50 },
    textContainer: { marginLeft: 22, flex: 1 },
    name: {
        fontSize: 15,
        fontFamily: fonts.ceraProBold,
        fontWeight: '400',
        color: colors.black
    },
    range: {
        fontWeight: '400',
        fontSize: 12,
        color: colors.black5,
        marginTop: 2
    },
    iconContainer: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        justifyContent: 'space-between',
        marginHorizontal: 52,
        marginTop: 10,
        marginBottom: 11
    },
    iconBackground: {
        width: 40,
        height: 40,
        backgroundColor: colors.gray,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50
    }
})
