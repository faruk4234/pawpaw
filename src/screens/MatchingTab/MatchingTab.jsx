import React, { useState } from 'react'

import { useNavigation } from '@react-navigation/native'
import {
    FlatList,
    Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View
} from 'react-native'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'

import slideDatas from '../../../assets/slideDatas'
import AnimalCard from '../../components/AnimalCard/AnimalCard'
import AnimalCard2 from '../../components/AnimelCard2/AnimalCard2'
import Button from '../../components/Button/Button'
import IconTextButton from '../../components/IconTextButton/IconTextButton'
import PageHoc from '../../components/PageHoc/PageHoc'
import PickingAnimalCategory from '../../components/PickingAnimalCategory/PickingAnimalCategory'
import routes from '../../constants/routes'
import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

const MatchingTab = () => {
    const navigation = useNavigation()
    const [ selected, setSelected ] = useState()

    return (
        <View style={styles.page}>
            <View
                style={styles.header}>
                <TouchableOpacity style={{ alignSelf: 'stretch' }} onPress={() => navigation.goBack()}>
                    <Image source={require('../../../assets/back-icon.png')} />
                </TouchableOpacity>
                <View style={styles.headerBar}>
                    <View style={styles.textBar}>
                        <Text style={styles.headerTitle}>Adopt a</Text>
                        <Text style={styles.firendTitle}>Friend</Text>
                    </View>
                    <Image source={require('../../../assets/matching.png')} style={styles.matchImage} />
                </View>
                <View style={styles.inputBar}>
                    <Image source={require('../../../assets/search-icon.png')} style={styles.searchIcon} />
                    <TextInput placeholder='Search your favourite pet' style={styles.input} />
                    <TouchableOpacity onPress={() => navigation.navigate(routes.PetFilter)}>
                        <Image source={require('../../../assets/filter-icon.png')} />
                    </TouchableOpacity>
                </View>
            </View>

            <ScrollView style={styles.contentContainer}>
                <View>
                    <FlatList
                        contentContainerStyle={styles.categoryPet}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={slideDatas}
                        renderItem={({ item }) => (
                            <PickingAnimalCategory
                                text={item.text}
                                icon={item.image}
                                selected={selected}
                                setSelected={setSelected} />
                        )} />

                    <Text style={{
                        marginTop: 35, fontWeight: '700', fontSize: 20, fontFamily: fonts.ceraProBold, color: colors.black
                    }}>
                        Waiting for you
                    </Text>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <View>
                            <AnimalCard
                                name='Hobs'
                                image={require('../../../assets/dogCard.png')}
                                isMale
                                kind='Boston Terrier'
                                isfavorite
                                time='3 years'
                                onPress={() => navigation.navigate(routes.PetDetails)} />
                            <AnimalCard
                                name='Hobs'
                                image={require('../../../assets/dogCard.png')}
                                isMale
                                kind='Boston Terrier'
                                time='3 years'
                                onPress={() => navigation.navigate(routes.PetDetails)} />
                        </View>

                        <View style={{ marginTop: 20 }}>
                            <AnimalCard2
                                name='Hobs'
                                image={require('../../../assets/dogcard2.png')}
                                isMale
                                isfavorite
                                kind='Boston Terrier'
                                time='3 years'
                                onPress={() => navigation.navigate(routes.PetDetails)} />
                            <AnimalCard2
                                name='Hobs'
                                image={require('../../../assets/dogcard2.png')}
                                isMale
                                kind='Boston Terrier'
                                time='3 years'
                                onPress={() => navigation.navigate(routes.PetDetails)} />
                        </View>

                    </View>
                </View>
            </ScrollView>

        </View>
    )
}

export default PageHoc(MatchingTab, {
    scroll: false
})

const styles = StyleSheet.create({
    page: {
        height: heightPercentageToDP(100),
        alignSelf: 'stretch',
        backgroundColor: colors.primary
    },
    header: {
        alignItems: 'center',

        paddingLeft: 32,
        paddingRight: 21,
        height: 280,
        transform: [{
            translateY: 18
        }]
    },
    backİcon: { width: 14, height: 14, marginRight: 11 },
    image: {
        height: 80,
        width: 80,
        borderRadius: 15,
        backgroundColor: colors.white,
        padding: 10,
        borderWidth: 2,
        borderColor: colors.white
    },
    buttonStyle: { marginBottom: 70 },
    contentContainer: {
        backgroundColor: colors.white,
        height: heightPercentageToDP(100) - 270,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingBottom: 30,
        paddingTop: 38,
        paddingHorizontal: 20,
        zIndex: -1
    },
    changeProfileText: {
        fontSize: 18,
        color: colors.primary,
        fontFamily: fonts.ceraProBold,
        fontWeight: '500',
        marginBottom: 0
    },
    userContainer: {
        justifyContent: 'center', alignItems: 'center', flex: 1, marginBottom: 50
    },
    changeButton: {
        borderRadius: 11,
        backgroundColor: colors.white,
        marginTop: 12,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    headerTitle: {
        color: colors.white,
        fontWeight: '700',
        fontSize: 28,
        marginTop: 20,
        fontFamily: fonts.ceraProBold
    },
    headerBar: {
        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', alignSelf: 'stretch'
    },
    textBar: { },
    firendTitle: {
        fontWeight: '300',
        fontSize: 28,
        color: colors.white,
        fontFamily: fonts.ceraProBold,
        marginTop: 6
    },
    matchImage: { height: 160, width: 190 },
    inputBar: {
        marginTop: 20,
        flexDirection: 'row',
        paddingHorizontal: 20,
        backgroundColor: colors.white,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 14
    },
    searchIcon: { tintColor: colors.gray2, height: 14, width: 14 },
    input: { flex: 1, marginHorizontal: 20 },
    categoryPet: { height: 100 }

})
