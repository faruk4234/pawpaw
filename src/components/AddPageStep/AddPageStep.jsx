import React from 'react'

import {
    View, StyleSheet, Image, TouchableOpacity, Text
} from 'react-native'
import { FloatingLabelInput } from 'react-native-floating-label-input'
import { heightPercentageToDP } from 'react-native-responsive-screen'

import colors from '../../styles/colors'
import fonts from '../../styles/fonts'
import Button from '../Button/Button'
import StepBar from '../StepBar/StepBar'

const customLabelStyle = {
    fontSizeFocused: 16,
    fontSizeBlurred: 16,
    topFocused: -30,
    colorFocused: colors.primary,
    colorBlurred: 'rgba(0, 0, 0, 0.38)'
}

const AddPageStep = ({
    value, setValue, isInput, pickerData, image, onPress, text, step, whichStep, openSheet
}) => (
    <View>
        <View style={{ height: heightPercentageToDP(82) }}>
            <StepBar step={step} whichStep={whichStep} text={text} />
            { isInput
                ? (
                    <FloatingLabelInput
                        animationDuration={100}
                        inputStyles={styles.inputStyle}
                        customLabelStyles={customLabelStyle}
                        containerStyles={[ styles.containerStyle ]}
                        value={value}
                        onChangeText={setValue} />
                ) : (
                    <TouchableOpacity style={styles.pickerBar} onPress={() => openSheet()}>
                        <Text style={styles.inputStyle}>{value}</Text>

                        <Image
                            source={require('../../../assets/Down-arrow-icon.png')}
                            style={styles.downArowIcon} />
                    </TouchableOpacity>
                )}

            <Image source={image} style={styles.image} />
        </View>
        <Button onPress={() => onPress()} text='Devam Et' style={styles.button} />

    </View>
)

export default AddPageStep

const styles = StyleSheet.create({
    inputStyle: {
        paddingHorizontal: 0,
        fontSize: 16,
        color: colors.black,
        fontFamily: fonts.ceraProMedium,
        marginLeft: 5
    },
    containerStyle: {
        marginTop: 36,
        height: 50,
        borderBottomWidth: 1
    },
    image: {
        marginBottom: 120, width: 300, height: 300, marginLeft: 30
    },
    pickerBar: {
        marginTop: 55,
        marginBottom: 55,
        borderBottomWidth: 2,
        borderColor: colors.gray2,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    downArowIcon: {
        width: 15,
        height: 10,
        marginBottom: 15,
        marginRight: 5
    }
})
