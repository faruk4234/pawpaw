import React, {
    useCallback
} from 'react'

import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet'
import {
    Text, TouchableOpacity, ScrollView, StyleSheet
} from 'react-native'

import useSheet, { sheetRef } from '../../hooks/use-sheet'
import fonts from '../../styles/fonts'

const SpecialSheet = () => {
    const { closeSheet, sheet } = useSheet()

    const snapPoints = [ '30%' ]

    const renderBackdrop = useCallback(
        (props) => (
            <BottomSheetBackdrop
                {...props}
                disappearsOnIndex={-1}
                appearsOnIndex={0} />
        ),
        []
    )

    const renderButton = ({ onPress, label }) => (
        <TouchableOpacity
            style={styles.button}
            onPress={() => {
                onPress()
                closeSheet()
            }}>
            <Text
                style={styles.buttonLabel}>
                {label}
            </Text>
        </TouchableOpacity>
    )

    return (
        <BottomSheet
            snapPoints={snapPoints}
            index={-1}
            ref={sheetRef}
            backdropComponent={renderBackdrop}>
            <ScrollView style={styles.container}>
                {
                    sheet.buttons.map(renderButton)
                }
            </ScrollView>
        </BottomSheet>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 25
    },
    button: { marginVertical: 13 },
    buttonLabel: { fontWeight: '400', fontSize: 20, fontFamily: fonts.ceraProBold }
})

export default SpecialSheet
