import React, { Component, useState } from 'react'

import { useNavigation } from '@react-navigation/native'
import {
    Text, View, Image, TextInput, KeyboardAvoidingView, ScrollView, TouchableOpacity, StyleSheet
} from 'react-native'

import CommentItem from '../../components/CommentsItem/CommentItem'
import PageHoc from '../../components/PageHoc/PageHoc'
import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

const Comments = () => {
    const [ value, setValue ] = useState()
    const navigation = useNavigation()

    return (
        <View style={styles.container}>

            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={require('../../../assets/back-icon.png')} style={{ tintColor: colors.black, margin: 20 }} />
            </TouchableOpacity>
            <ScrollView style={{ flex: 1, marginHorizontal: 22 }} showsVerticalScrollIndicator={false}>
                <CommentItem />
                <CommentItem />
                <CommentItem />
            </ScrollView>
            <KeyboardAvoidingView style={styles.inputContainer}>
                <View
                    style={styles.iconBar}>
                    <Image source={require('../../../assets/profileAvatar.jpeg')} style={{ height: 40, width: 40, borderRadius: 50 }} />
                    <View style={styles.input}>
                        <TextInput
                            value={value}
                            onChangeValue={setValue}
                            placeholder='Yorum ekle...'
                            style={styles.ınput} />
                    </View>

                </View>
            </KeyboardAvoidingView>

        </View>
    )
}

export default PageHoc(Comments, {
    scroll: false
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: 'stretch',
        justifyContent: 'space-between',
        backgroundColor: colors.white
    },
    inputContainer: {
        borderTopWidth: 0.2,
        borderColor: colors.halfGray6,
        marginBottom: 63
    },
    iconBar: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        marginTop: 20,
        marginHorizontal: 22
    },
    input: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 11,
        borderWidth: 0.2,
        paddingLeft: 15,
        borderRadius: 20

    }
})
