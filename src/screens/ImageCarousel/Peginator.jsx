import React from 'react'

import { StyleSheet, View } from 'react-native'

import colors from '../../styles/colors'

const Paginator = ({ data, pageNum }) => (
    <View style={styles.container}>
        {data.map((_, i) => (
            <View
                style={pageNum === i ? styles.selectedDot : styles.dot}
                // eslint-disable-next-line react/no-array-index-key
                key={i.toString()} />
        ))}
    </View>
)

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 4,
        flex: 0.25
    },
    selectedDot: {
        height: 6,
        borderRadius: 20,
        backgroundColor: colors.primary,
        marginHorizontal: 2,
        width: 6
    },
    dot: {
        height: 4,
        marginTop: 1,
        borderRadius: 20,
        backgroundColor: colors.lightGray,
        marginHorizontal: 2,
        width: 4
    }
})

export default Paginator
