import React, { Component, useState } from 'react'

import {
    Text, TouchableOpacity, View, Image, FlatList
} from 'react-native'

import PageHoc from '../../../components/PageHoc/PageHoc'
import colors from '../../../styles/colors'
import fonts from '../../../styles/fonts'
import ListItem from './ListItem'

const List = () => {
    const [ selected, setSelected ] = useState(0)
    const datas = [
        {
            id: 1,
            image: require('../../../../assets/profileAvatar.jpeg'),
            name: 'Cansu Çetin',
            range: '5.5km~'
        },
        {
            id: 2,
            image: require('../../../../assets/profileAvatar.jpeg'),
            name: 'Cansu Çetin',
            range: '5.5km~'
        },
        {
            id: 3,
            image: require('../../../../assets/profileAvatar.jpeg'),
            name: 'Cansu Çetin',
            range: '5.5km~'
        },
        {
            id: 4,
            image: require('../../../../assets/profileAvatar.jpeg'),
            name: 'Cansu Çetin',
            range: '5.5km~'
        }
    ]

    return (
        <View style={{ flex: 1, backgroundColor: colors.white, padding: 20 }}>
            <FlatList
                data={datas}
                renderItem={({ item }) => <ListItem id={item.id} name={item.name} range={item.range} image={item.image} selected={selected} setSelected={setSelected} />} />

        </View>
    )
}
export default List
