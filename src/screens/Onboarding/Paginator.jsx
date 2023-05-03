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
        height: 64,
        flex: 0.25
    },
    selectedDot: {
        height: 5,
        borderRadius: 20,
        backgroundColor: colors.yelllow,
        marginHorizontal: 7,
        width: 24
    },
    dot: {
        height: 9,
        borderRadius: 20,
        backgroundColor: colors.lightBlack,
        marginHorizontal: 8,
        width: 9
    }
})

export default Paginator
