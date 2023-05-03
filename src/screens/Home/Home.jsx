import React from 'react'

import { useNavigation } from '@react-navigation/native'
import { StyleSheet, Text, View } from 'react-native'

import ImageButton from '../../components/ImageButton/ImageButton'
import pageHoc from '../../components/PageHoc/PageHoc'
import routes from '../../constants/routes'
import colors from '../../styles/colors'

const Home = () => {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <ImageButton image={require('../../../assets/doctor.png')} name='Veterinerler' onPress={() => navigation.navigate(routes.Vets)} />
            <ImageButton image={require('../../../assets/loginPhotos/ads.webp')} name='İlanlar' onPress={() => navigation.navigate(routes.Ads)} />
            <ImageButton image={require('../../../assets/loginPhotos/ads.webp')} name='Kayıp İlanları' onPress={() => navigation.navigate(routes.Ads)} />
            <ImageButton image={require('../../../assets/loginPhotos/otelPhotos.jpeg')} name='Oteller' onPress={() => navigation.navigate(routes.OtelsList)} />
            <ImageButton image={require('../../../assets/loginPhotos/match.webp')} name='Eşleşme' onPress={() => navigation.navigate(routes.MatchingTab)} />
        </View>
    )
}

export default pageHoc(Home, {
    scroll: true,
    style: {
        backgroundColor: colors.white
    }
})

const styles = StyleSheet.create({
    container: { alignSelf: 'stretch', marginTop: 15, marginBottom: 100 }
})
