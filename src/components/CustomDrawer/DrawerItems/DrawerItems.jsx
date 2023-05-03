import React from 'react'

import { useAtomValue } from 'jotai'
import {
    TouchableOpacity, Image, Text, StyleSheet
} from 'react-native'

import colors from '../../../styles/colors'
import { activeRouteAtom } from '../../../utils/atoms'

const DrawerItems = ({
    icon, text, routeName, onPress
}) => {
    const activeRoute = useAtomValue(activeRouteAtom)

    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image
                source={icon}
                style={routeName === activeRoute ? styles.activeIcon : styles.deactiveIcon} />
            <Text
                style={routeName === activeRoute ? styles.selectText : styles.notSelectText}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}

export default DrawerItems

const styles = StyleSheet.create({
    container: { flexDirection: 'row', marginVertical: 24 },
    selectText: {
        marginLeft: 25, fontWeight: '500', fontSize: 16, color: colors.white
    },
    notSelectText: {
        fontWeight: '500',
        marginLeft: 25,
        fontSize: 16,
        color: colors.lightGray
    },
    activeIcon: {
        tintColor: colors.white
    },
    deactiveIcon: {
        tintColor: colors.lightGray
    }
})
