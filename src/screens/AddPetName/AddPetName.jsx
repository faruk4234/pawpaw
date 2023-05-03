import React, { useState } from 'react'

import { useNavigation } from '@react-navigation/native'

import AddPageStep from '../../components/AddPageStep/AddPageStep'
import PageHoc from '../../components/PageHoc/PageHoc'
import routes from '../../constants/routes'
import colors from '../../styles/colors'

const AddPetName = () => {
    const [ value, setValue ] = useState()
    const navigation = useNavigation()

    return (
        <AddPageStep
            text='Petinizin Adı'
            value={value}
            step={8}
            whichStep={2}
            setValue={setValue}
            onPress={() => navigation.navigate(routes.AddPetKind)}
            image={require('../../../assets/addpetcat1.png')}
            isInput />
    )
}

export default PageHoc(AddPetName, {
    scroll: false,
    style: {
        alignItems: null,
        justifyContent: null,
        backgroundColor: colors.white,
        paddingHorizontal: 22
    }
})
