import React from 'react'

import { useNavigation } from '@react-navigation/native'
import {
    View, Text, Image, StyleSheet
} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { widthPercentageToDP } from 'react-native-responsive-screen'

import Button from '../../components/Button/Button'
import PageHoc from '../../components/PageHoc/PageHoc'
import routes from '../../constants/routes'
import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

const AddPetSucces = () => {
    const navigation = useNavigation()

    return (
        <View>
            <View style={styles.iconAndTextContainer}>
                <Image source={require('../../../assets/succes-icon.png')} style={styles.image} />
                <Text style={styles.succesText}>Success</Text>
                <Text style={styles.addedText}>You have added a pet</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    text='Explore Breeds'
                    style={styles.exploreButton} />
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate(routes.Home)}>
                    <Text style={styles.backText}>
                        Back to Home
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

export default PageHoc(AddPetSucces, {
    scroll: false,
    style: {
        backgroundColor: colors.white,
        paddingHorizontal: 22
    }
})

const styles = StyleSheet.create({
    iconAndTextContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    image: { marginRight: 20 },
    succesText: {
        fontWeight: '700',
        fontSize: 28,
        fontFamily: fonts.ceraProMedium,
        color: colors.black86,
        marginTop: 60
    },
    addedText: {
        fontWeight: '700',
        fontSize: 16,
        fontFamily: fonts.ceraProMedium,
        color: colors.black5,
        marginTop: 60
    },
    buttonContainer: {
        alignSelf: 'stretch',
        width: widthPercentageToDP(90)
    },
    exploreButton: {
        height: 67,
        alignSelf: 'stretch',
        borderRadius: 19,
        backgroundColor: colors.lightGreen
    },
    backButton: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 24,
        marginBottom: 62
    },
    backText: {
        fontFamily: fonts.ceraProBold,
        fontSize: 18,
        color: colors.black,
        fontWeight: '700'
    }
})
