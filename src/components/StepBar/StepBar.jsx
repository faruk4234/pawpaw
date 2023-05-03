import React from 'react'

import { View, StyleSheet, Text } from 'react-native'

import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

const StepBar = ({ step, whichStep, text }) => (
    <View>
        <View style={styles.container}>

            {
                Array.from({ length: step }).map((_, index) => (<View style={whichStep <= index ? styles.grayContainer : styles.greenContainer} />))
            }
        </View>
        <Text style={styles.text}>
            {text}
        </Text>
    </View>
)

export default StepBar

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 20
    },
    greenContainer: {
        marginHorizontal: 3,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        height: 3,
        backgroundColor: colors.primary
    },
    grayContainer: {
        marginHorizontal: 3,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        height: 3,
        backgroundColor: colors.gray205
    },
    text: {
        fontFamily: fonts.ceraProBold,
        fontWeight: '500',
        marginTop: 20,
        fontSize: 20,
        color: colors.black
    }
})
