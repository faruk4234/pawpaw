import React, { useState } from 'react'

import { useNavigation } from '@react-navigation/native'

import AddPageStep from '../../components/AddPageStep/AddPageStep'
import PageHoc from '../../components/PageHoc/PageHoc'
import routes from '../../constants/routes'
import colors from '../../styles/colors'

const AddPetFavoriteGame = () => {
    const [ value, setValue ] = useState()
    const navigation = useNavigation()

    return (
        <AddPageStep
            text='Petinizin Favori Oyunu'
            value={value}
            step={8}
            whichStep={6}
            setValue={setValue}
            onPress={() => navigation.navigate(routes.AddPetStarilization)}
            image={require('../../../assets/addpetcat5.png')}
            isInput />
    )
}

export default PageHoc(AddPetFavoriteGame, {
    scroll: false,
    style: {
        alignItems: null,
        justifyContent: null,
        backgroundColor: colors.white,
        paddingHorizontal: 22
    }
})
