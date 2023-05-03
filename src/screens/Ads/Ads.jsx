import React from 'react'

import { useNavigation } from '@react-navigation/native'
import {
    FlatList,
    Image,
    TouchableOpacity,
    View
} from 'react-native'

import PageHoc from '../../components/PageHoc/PageHoc'
import colors from '../../styles/colors'
import AdsItem from './AdsItem'

const Ads = () => {
    const datas = [{
        id: 1, like: true, name: 'pelin', image: [ require('../../../assets/profileAvatar.jpeg'), require('../../../assets/profileAvatar.jpeg'), require('../../../assets/profileAvatar.jpeg'), require('../../../assets/profileAvatar.jpeg'), require('../../../assets/profileAvatar.jpeg'), require('../../../assets/profileAvatar.jpeg') ]
    }, {
        id: 1, like: false, name: 'pelin', image: [ require('../../../assets/profileAvatar.jpeg'), require('../../../assets/profileAvatar.jpeg'), require('../../../assets/profileAvatar.jpeg'), require('../../../assets/profileAvatar.jpeg'), require('../../../assets/profileAvatar.jpeg'), require('../../../assets/profileAvatar.jpeg') ]
    }]
    const navigaiton = useNavigation()

    return (
        <View style={{ alignSelf: 'stretch', flex: 1, marginHorizontal: 11 }}>
            <TouchableOpacity onPress={() => navigaiton.goBack()}>
                <Image source={require('../../../assets/back-icon.png')} style={{ tintColor: colors.black, margin: 10 }} />
            </TouchableOpacity>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={datas}
                renderItem={({ item }) => <AdsItem datas={item} />} />
        </View>
    )
}
export default PageHoc(Ads, {
    scroll: false,
    style: {
        backgroundColor: colors.white
    }
})
