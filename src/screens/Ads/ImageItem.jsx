import React from 'react'

import { FlatList, Image } from 'react-native'
import { widthPercentageToDP } from 'react-native-responsive-screen'

export default ({ item, onScrollEnd }) => (
    <FlatList
        data={item}
        horizontal
        pagingEnabled
        onMomentumScrollEnd={onScrollEnd}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
            <Image
                source={item}
                style={{
                    height: widthPercentageToDP(100), width: widthPercentageToDP(100) - 22, marginTop: 8, borderRadius: 8
                }} />
        )} />
)
