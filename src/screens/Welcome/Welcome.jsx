import React from 'react'

import { useNavigation } from '@react-navigation/native'

import RenderItem from '../../components/ImageButton/ImageButton'
import PageHoc from '../../components/PageHoc/PageHoc'
import routes from '../../constants/routes'
import colors from '../../styles/colors'

const Welcome = () => {
    const navigation = useNavigation()

    return (
        <>
            <RenderItem
                image={require('../../../assets/doctor.png')}
                name='Veteriner Girişi'
                onPress={() => {
                    navigation.navigate(routes.VeterinaryRegister)
                }} />
            <RenderItem
                image={require('../../../assets/loginPhotos/otelPhotos.jpeg')}
                name='Otel Girişi'
                onPress={() => {
                    navigation.navigate(routes.HotelRegister)
                }} />
            <RenderItem
                image={require('../../../assets/loginPhotos/ads.webp')}
                name='Sahiplendirme / Kayıt İlan'
                onPress={() => {
                    navigation.navigate(routes.UserRegister)
                }} />

            <RenderItem
                image={require('../../../assets/loginPhotos/match.webp')}
                name='Eşleşme'
                onPress={() => {
                    navigation.navigate(routes.Login)
                }} />
        </>
    )
}

export default PageHoc(Welcome, {
    style: {
        backgroundColor: colors.white,
        justifyContent: 'flex-start'
    },
    scroll: true
})
