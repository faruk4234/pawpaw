import React from 'react'

import { TouchableOpacity, Image, Text } from 'react-native'

import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

const CategoryItem = ({ image, text }) => (
    <TouchableOpacity style={{ borderRadius: 8, marginVertical: 10, marginHorizontal: 4 }}>
        <Image source={image} />
        <Text style={{
            position: 'absolute', bottom: 33, left: '25%', fontWeight: '700', fontSize: 16, color: colors.white, fontFamily: fonts.ceraProBold
        }}>
            {text}
        </Text>
    </TouchableOpacity>
)

export default CategoryItem
