import React, { useState } from 'react'

import { useNavigation } from '@react-navigation/native'

import AddPageStep from '../../components/AddPageStep/AddPageStep'
import PageHoc from '../../components/PageHoc/PageHoc'
import routes from '../../constants/routes'
import colors from '../../styles/colors'

const AddPetKind = () => {
    const [ value, setValue ] = useState()
    const navigation = useNavigation()

    return (
        <AddPageStep
            text='Petinizin Cinsi'
            value={value}
            step={8}
            whichStep={3}
            setValue={setValue}
            onPress={() => navigation.navigate(routes.AddPetGender)}
            image={require('../../../assets/addpetcat2.png')}
            isInput />
    )
}

export default PageHoc(AddPetKind, {
    scroll: false,
    style: {
        alignItems: null,
        justifyContent: null,
        backgroundColor: colors.white,
        paddingHorizontal: 22
    }
})
