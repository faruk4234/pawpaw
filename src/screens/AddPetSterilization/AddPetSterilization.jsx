import React, {
    useState
} from 'react'

import { useNavigation } from '@react-navigation/native'
import { View, Text, TouchableOpacity } from 'react-native'

import AddPageStep from '../../components/AddPageStep/AddPageStep'
import PageHoc from '../../components/PageHoc/PageHoc'
import routes from '../../constants/routes'
import useSheet from '../../hooks/use-sheet'
import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

const AddPetSterilization = () => {
    const [ value, setValue ] = useState()
    const navigation = useNavigation()
    const { showSheet } = useSheet()

    return (
        <AddPageStep
            text='Petiniz Kısırlaştırma Geçirdi mi ?'
            value={value}
            step={8}
            whichStep={7}
            setValue={setValue}
            image={require('../../../assets/addpetcat6.png')}
            openSheet={() => {
                showSheet({
                    buttons: [
                        {
                            onPress: () => setValue('Evet'),
                            label: 'Evet'
                        }, {
                            onPress: () => setValue('Hayır'),
                            label: 'Hayır'
                        }
                    ]
                })
            }}
            onPress={() => navigation.navigate(routes.AddPetPhoto)}
            isInput={false} />
    )
}

export default PageHoc(AddPetSterilization, {
    scroll: false,
    style: {
        alignItems: null,
        justifyContent: null,
        backgroundColor: colors.white,
        paddingHorizontal: 22
    }
})
