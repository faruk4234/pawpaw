import React, { useState } from 'react'

import { useNavigation } from '@react-navigation/native'
import {
    View, Image, TouchableOpacity, StyleSheet
} from 'react-native'
import { heightPercentageToDP } from 'react-native-responsive-screen'

import AddPageStep from '../../components/AddPageStep/AddPageStep'
import Button from '../../components/Button/Button'
import PageHoc from '../../components/PageHoc/PageHoc'
import StepBar from '../../components/StepBar/StepBar'
import routes from '../../constants/routes'
import colors from '../../styles/colors'
import { pickPhoto } from '../../utils/pick-photo'

const AddPetPhoto = () => {
    const [ value, setValue ] = useState()
    const navigation = useNavigation()

    return (
        <View>
            <StepBar text='Petinizin fotoğrafı' step={8} whichStep={8} />

            <View style={styles.photoContainer}>
                <TouchableOpacity style={styles.photoButton} onPress={() => pickPhoto()}>
                    <Image source={require('../../../assets/camera-icon.png')} style={styles.cameraIcon} />
                </TouchableOpacity>
            </View>

            <Button text='Devam Et' onPress={() => navigation.navigate(routes.AddPetSucces)} />
        </View>
    )
}

export default PageHoc(AddPetPhoto, {
    scroll: false,
    style: {
        alignItems: null,
        justifyContent: null,
        backgroundColor: colors.white,
        paddingHorizontal: 22
    }
})

const styles = StyleSheet.create({
    photoContainer: {
        height: heightPercentageToDP(82) - 210,
        alignItems: 'center',
        marginTop: 150
    },
    photoButton: {
        height: 190,
        width: 190,
        backgroundColor: colors.lightGray,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cameraIcon: { height: 63, width: 81 }
})
