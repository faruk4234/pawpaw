import React, { useState } from 'react'

import {
    View, TouchableOpacity, Image, Text, StyleSheet
} from 'react-native'
import { widthPercentageToDP } from 'react-native-responsive-screen'

import colors from '../../styles/colors'
import fonts from '../../styles/fonts'
import { shadow } from '../../styles/theme'

export default ({
    name, time, image, isMale, isfavorite, kind, onPress
}) => {
    const [ isFavori, setIsFavori ] = useState(isfavorite)

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.presableCard} onPress={() => onPress()}>
                <Image style={styles.image} source={image} />
                <View style={styles.nameContainer}>
                    <Text style={styles.name}>{name}</Text>
                    <Image source={isMale ? require('../../../assets/male.png') : require('../../../assets/female-icon.png')} style={styles.genderIcon} />
                </View>
                <View>
                    <View style={styles.textContainer}>
                        <View style={styles.childTextContainer}>
                            <Text style={styles.kind}>
                                {kind}
                            </Text>
                            <Text style={styles.kind}>
                                {time}
                            </Text>
                        </View>
                        <TouchableOpacity style={styles.rightIcon} onPress={() => setIsFavori(!isFavori)}>
                            <Image source={isFavori ? require('../../../assets/hearth-filled.png') : require('../../../assets/icon/icon/icon/Vector.png')} style={styles.favoritesIcon} />
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginTop: 30,
        ...shadow.sm
    },
    presableCard: {
        backgroundColor: colors.white,
        alignSelf: 'stretch',
        borderRadius: 28,
        padding: 5
    },
    image: { width: widthPercentageToDP(41), height: 160, borderRadius: 28 },
    nameContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 11,
        marginTop: 6
    },
    name: {
        fontWeight: '700',
        fontSize: 14,
        fontFamily: fonts.ceraProBold
    },
    genderIcon: { marginRight: 4 },
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 11,
        marginTop: 6
    },
    kind: {
        fontSize: 12,
        fontWeight: '500',
        fontFamily: fonts.ceraProBold,
        color: colors.halfGray,
        marginTop: 4
    },
    childTextContainer: { justifyContent: 'space-between' },
    rightIcon: { marginTop: 10 },
    favoritesIcon: { height: 16, width: 18 }
})
