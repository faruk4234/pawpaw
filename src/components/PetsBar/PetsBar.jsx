import React, { useState } from 'react'

import { useNavigation } from '@react-navigation/native'
import {
    View, Text, TouchableOpacity, Image, StyleSheet
} from 'react-native'

import routes from '../../constants/routes'
import colors from '../../styles/colors'
import fonts from '../../styles/fonts'
import { shadow } from '../../styles/theme'

export default ({
    namePet, KindPat, SubKind, time, imagePat, isFavori
}) => {
    const [ islike, setIslike ] = useState(isFavori)
    const navigaton = useNavigation()

    return (
        <TouchableOpacity style={styles.container} onPress={() => navigaton.navigate(routes.PetDetails)}>
            <Image style={styles.image} source={require('../../../assets/dog.png')} />
            <View style={styles.textConteiner}>
                <Text style={styles.petName}>Daisy</Text>

                <View style={styles.texts}>
                    <Text style={styles.text1}>Cavalier King</Text>
                    <Text style={styles.text2}>Charles Spaniel</Text>
                </View>
                <Text style={styles.text2}>2 years</Text>

            </View>

            <View style={styles.imageContainer}>
                <Image source={require('../../../assets/female-icon.png')} style={styles.image1} />

                <TouchableOpacity onPress={() => setIslike(!islike)}>
                    <Image source={islike ? require('../../../assets/hearth-filled.png') : require('../../../assets/icon/icon/icon/Vector.png')} style={styles.image2} />
                </TouchableOpacity>
            </View>

            <View />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
        borderRadius: 17,
        alignSelf: 'stretch',
        height: 96,
        marginTop: 35,
        backgroundColor: colors.white,
        alignItems: 'center',
        flexDirection: 'row',
        ...shadow.sm
    },
    image: { height: 90, width: 90 },
    textConteiner: { flex: 1, marginLeft: 17 },
    petName: { fontWeight: '700', fontSize: 16, fontFamily: fonts.ceraProBold },
    text1: {
        fontWeight: '500',
        fontSize: 12,
        fontFamily: fonts.ceraProBold,
        color: colors.black5,
        marginBottom: 3
    },
    text2: {
        fontWeight: '500',
        fontSize: 12,
        fontFamily: fonts.ceraProBold,
        color: colors.black5
    },
    imageContainer: {
        marginRight: 23,
        justifyContent: 'space-between',
        alignSelf: 'stretch',
        marginVertical: 13
    },
    image1: { height: 14, width: 13.5 },
    image2: { height: 14, width: 16 },
    texts: { paddingVertical: 4 }

})
