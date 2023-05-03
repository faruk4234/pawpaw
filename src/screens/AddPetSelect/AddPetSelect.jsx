import React from 'react'

import { useNavigation } from '@react-navigation/native'
import {
    View, Text, StyleSheet, Image
} from 'react-native'

import Button from '../../components/Button/Button'
import PageHoc from '../../components/PageHoc/PageHoc'
import StepBar from '../../components/StepBar/StepBar'
import routes from '../../constants/routes'
import colors from '../../styles/colors'
import CategoryItem from './CategoryItem'

const AddPetSelect = () => {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <StepBar step={8} whichStep={1} text='Select Your Pet' />
            <View style={styles.categoryContainer}>
                <View style={styles.childCategoryContainer}>
                    <CategoryItem text='Dog' image={require('../../../assets/dogCategory.png')} />
                    <CategoryItem text='Cat' image={require('../../../assets/catCategory.png')} />
                    <CategoryItem text='Hourse' image={require('../../../assets/HourseCategory.png')} />

                </View>
                <View style={styles.childCategoryContainer}>
                    <CategoryItem text='Snake' image={require('../../../assets/Snake.png')} />
                    <CategoryItem text='Fish' image={require('../../../assets/fish.png')} />
                    <CategoryItem text='Guina' image={require('../../../assets/GuinaCategory.png')} />

                </View>
                <View style={styles.childCategoryContainer}>
                    <CategoryItem text='Bird' image={require('../../../assets/BirdCategory.png')} />
                    <CategoryItem text='Farm' image={require('../../../assets/FarmCategory.png')} />
                    <CategoryItem text='Other' image={require('../../../assets/otherCategory.png')} />

                </View>
            </View>
            <Button
                text='Devam Et'
                style={styles.button}
                onPress={() => {
                    navigation.navigate(routes.AddPetName)
                }} />
        </View>
    )
}

export default PageHoc(AddPetSelect, {
    scroll: false,
    style: {
        alignItems: null,
        justifyContent: null,
        backgroundColor: colors.white,
        paddingHorizontal: 22
    }

})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between'
    },
    categoryContainer: {
        flex: 1,
        marginTop: '7%',
        marginBottom: '21%'
    },
    childCategoryContainer: {
        flex: 1,
        flexDirection: 'row'
    },
    button: { marginBottom: 50 }
})
