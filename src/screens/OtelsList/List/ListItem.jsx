import React, { useState } from 'react'

import { useNavigation } from '@react-navigation/native'
import {
    Text, TouchableOpacity, View, Image, StyleSheet
} from 'react-native'

import routes from '../../../constants/routes'
import colors from '../../../styles/colors'
import fonts from '../../../styles/fonts'
import { shadow } from '../../../styles/theme'

const ListItem = ({
    name, range, image, selected, setSelected, id
}) => {
    const navigation = useNavigation()

    return (
        <TouchableOpacity style={styles.cardContainer} onPress={() => setSelected(id)}>
            <View style={styles.container}>
                <Image source={image} style={styles.image} />

                <View style={styles.textContainer}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.range}>{range}</Text>
                </View>

                <TouchableOpacity onPress={() => navigation.navigate(routes.Hotels)}>
                    <Image source={require('../../../../assets/chevron-forward.png')} style={{ tintColor: colors.primary, height: 18, width: 18 }} />
                </TouchableOpacity>
            </View>
            {selected === id
                ? (
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
                ) : null}
        </TouchableOpacity>
    )
}
export default ListItem

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: colors.white,
        borderRadius: 11,
        padding: 20,
        marginTop: 12,
        ...shadow.sm

    },
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch'
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
        marginHorizontal: 26,
        marginTop: 10
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
