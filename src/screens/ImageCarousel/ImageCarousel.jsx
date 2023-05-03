import React, { useState } from 'react'

import { useNavigation } from '@react-navigation/native'
import {
    View, Text, FlatList, Image, TouchableOpacity, StyleSheet
} from 'react-native'
import { widthPercentageToDP } from 'react-native-responsive-screen'

import PageHoc from '../../components/PageHoc/PageHoc'
import colors from '../../styles/colors'
import Peginator from './Peginator'

const ImageCarousel = ({ route }) => {
    const { goBack } = useNavigation()
    const [ page, setPageNum ] = useState(route.params.index)

    const onScrollEnd = (e) => {
        const { contentOffset } = e.nativeEvent
        const viewSize = e.nativeEvent.layoutMeasurement
        setPageNum(Math.floor(contentOffset.x / viewSize.width))
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={goBack}>
                <Image source={require('../../../assets/back-icon.png')} style={styles.backIcon} />
            </TouchableOpacity>
            <FlatList
                data={route.params.datas}
                contentContainerStyle={styles.slider}
                horizontal
                pagingEnabled
                onMomentumScrollEnd={onScrollEnd}
                onScrollToIndexFailed={() => { }}
                initialScrollIndex={route.params.index}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <Image
                        source={item.image}
                        style={styles.image} />
                )} />
            <View style={styles.peginator}>
                <Peginator data={route.params.datas} pageNum={page} />
            </View>

        </View>
    )
}
export default PageHoc(ImageCarousel, {
    scroll: false,
    style: {
        backgroundColor: colors.black
    }
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
        justifyContent: 'center'
    },
    backIcon: { tintColor: colors.white, marginLeft: 20 },
    slider: { justifyContent: 'center', alignItems: 'center' },
    image: {
        height: widthPercentageToDP(100),
        width: widthPercentageToDP(100),
        borderRadius: 8
    },
    peginator: { alignItems: 'center' }
})
