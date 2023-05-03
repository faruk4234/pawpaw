import React, { Component } from 'react'

import { useNavigation } from '@react-navigation/native'
import {
    Text, View, Image, FlatList, TouchableOpacity, StyleSheet
} from 'react-native'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'

import Button from '../../../components/Button/Button'
import PageHoc from '../../../components/PageHoc/PageHoc'
import routes from '../../../constants/routes'
import colors from '../../../styles/colors'
import fonts from '../../../styles/fonts'

const Photos = () => {
    const navigation = useNavigation()

    const datas = [{ image: require('../../../../assets/profileAvatar.jpeg') },
        { image: require('../../../../assets/profileAvatar.jpeg') },
        { image: require('../../../../assets/profileAvatar.jpeg') },
        { image: require('../../../../assets/profileAvatar.jpeg') },
        { image: require('../../../../assets/profileAvatar.jpeg') },
        { image: require('../../../../assets/profileAvatar.jpeg') }]

    return (
        <View style={styles.container}>

            <View style={styles.textAndPhotos}>
                <View style={styles.textContainer}>
                    <View style={styles.roomBar}>
                        <Text style={styles.roomCount}>Oda Sayısı</Text>
                        <Text style={styles.count}>7</Text>
                    </View>
                    <Text style={styles.photosText}>Fotoğraflar</Text>
                </View>

                <FlatList
                    data={datas}
                    scrollEnabled={false}
                    numColumns={3}
                    style={styles.flatList}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity
                            onPress={() => navigation.navigate(routes.ImageCarousel, { datas, index })}>
                            <Image source={item.image} style={{ height: widthPercentageToDP(33), width: widthPercentageToDP(33) }} />
                        </TouchableOpacity>
                    )} />
            </View>

            <Button text='Chat' style={styles.button} />
        </View>
    )
}
export default PageHoc(Photos, {
    scroll: false,
    style: {
        backgroundColor: colors.white,
        paddingTop: 20
    }
})

const styles = StyleSheet.create({
    container: { flex: 1, alignSelf: 'stretch', backgroundColor: colors.white },
    button: {
        marginBottom: 80,
        marginHorizontal: 20
    },
    textAndPhotos: { justifyContent: 'space-between', flex: 1 },
    roomCount: {
        fontSize: 16,
        fontFamily: fonts.ceraProBold,
        color: colors.black,
        fontWeight: '500',
        lineHeight: 24
    },
    count: {
        fontSize: 18,
        fontFamily: fonts.ceraProBold,
        color: colors.black,
        fontWeight: '700',
        marginTop: 2,
        lineHeight: 24
    },
    photosText: {
        fontSize: 16,
        fontFamily: fonts.ceraProBold,
        color: colors.black,
        fontWeight: '500',
        marginTop: 20,
        lineHeight: 24
    },
    textContainer: { marginLeft: 16 },
    flatList: { marginBottom: 60, marginTop: 30 },
    roomBar: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        justifyContent: 'space-between',
        marginRight: 22
    }
})
