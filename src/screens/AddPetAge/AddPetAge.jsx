import React, { useState } from 'react'

import { useNavigation } from '@react-navigation/native'

import AddPageStep from '../../components/AddPageStep/AddPageStep'
import PageHoc from '../../components/PageHoc/PageHoc'
import routes from '../../constants/routes'
import useSheet from '../../hooks/use-sheet'
import colors from '../../styles/colors'

const AddPetAge = () => {
    const [ value, setValue ] = useState()
    const navigation = useNavigation()
    const { showSheet } = useSheet()
    const buttons = Array.from({ length: 200 }).map((_, index) => ({
        label: index + 1,
        onPress: () => {
            setValue(index + 1)
        }
    }))

    return (
        <AddPageStep
            text='Petinizin Yaşı'
            value={value}
            step={8}
            whichStep={5}
            setValue={setValue}
            image={require('../../../assets/addpetcat4.png')}
            openSheet={() => showSheet({
                buttons
            })}
            onPress={() => navigation.navigate(routes.AddPetFavoriteGame)} />
    )
}

export default PageHoc(AddPetAge, {
    scroll: false,
    style: {
        alignItems: null,
        justifyContent: null,
        backgroundColor: colors.white,
        paddingHorizontal: 22
    }
})
