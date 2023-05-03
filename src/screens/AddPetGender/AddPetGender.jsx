import React, {
    useState
} from 'react'

import { useNavigation } from '@react-navigation/native'

import AddPageStep from '../../components/AddPageStep/AddPageStep'
import PageHoc from '../../components/PageHoc/PageHoc'
import routes from '../../constants/routes'
import useSheet from '../../hooks/use-sheet'
import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

const AddPetGender = () => {
    const [ value, setValue ] = useState()
    const navigation = useNavigation()
    const { showSheet } = useSheet()

    return (
        <AddPageStep
            text='Petinizin cinsiyeti'
            value={value}
            step={8}
            whichStep={4}
            setValue={setValue}
            openSheet={() => {
                showSheet({
                    buttons: [
                        {
                            onPress: () => setValue('Erkek'),
                            label: 'Erkek'
                        }, {
                            onPress: () => setValue('Dişi'),
                            label: 'Dişi'
                        }
                    ]
                })
            }}
            onPress={() => { navigation.navigate(routes.AddPetAge) }}
            image={require('../../../assets/addpetcat3.png')}
            isInput={false} />
    )
}

export default PageHoc(AddPetGender, {
    scroll: false,
    style: {
        alignItems: null,
        justifyContent: null,
        backgroundColor: colors.white,
        paddingHorizontal: 22
    }
})
