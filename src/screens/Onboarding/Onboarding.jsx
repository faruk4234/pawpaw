import React, { useRef, useState } from 'react'

import { useNavigation } from '@react-navigation/native'
import {
    View, Text, StyleSheet, FlatList, useWindowDimensions, Image, TouchableOpacity, Animated
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import Routes from '../../constants/routes'
import colors from '../../styles/colors'
import fonts from '../../styles/fonts'
import OnboardingItem from './OnboardingItem'
import Paginator from './Paginator'
import slides from './slides'

const Onboarding = () => {
    const [ pageNum, setPageNum ] = useState(0)
    const onScrollEnd = (e) => {
        const { contentOffset } = e.nativeEvent
        const viewSize = e.nativeEvent.layoutMeasurement
        setPageNum(Math.floor(contentOffset.x / viewSize.width))
    }

    const navigation = useNavigation()

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={slides}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onMomentumScrollEnd={onScrollEnd}
                renderItem={({ item }) => <OnboardingItem item={item} />} />

            <TouchableOpacity
                onPress={() => navigation.navigate(Routes.Welcome)}
                style={styles.button}>

                <Text style={styles.buttonText}>Get Started</Text>
            </TouchableOpacity>

            <Paginator data={slides} pageNum={pageNum} />

        </SafeAreaView>
    )
}

export default Onboarding

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary
    },
    buttonText: {
        color: colors.secondary,
        fontSize: 24,
        fontWeight: '500',
        fontFamily: fonts.ceraProBold
    },
    button: {
        backgroundColor: colors.yelllow,
        height: 66,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 50,
        position: 'absolute',
        right: 0,
        bottom: 0
    }
})
