import React, { useState } from 'react'

import {
    View, Image, TextInput, KeyboardAvoidingView, ScrollView, StyleSheet
} from 'react-native'

import CommentItem from '../../../components/CommentsItem/CommentItem'
import colors from '../../../styles/colors'

const Comments = () => {
    const [ value, setValue ] = useState()

    return (
        <View style={styles.container}>
            <ScrollView style={{ flex: 1, marginHorizontal: 22 }}>
                <CommentItem />
                <CommentItem />
                <CommentItem />
            </ScrollView>
            <KeyboardAvoidingView style={styles.inputContainer}>
                <View
                    style={styles.imageAndInputContainer}>
                    <Image source={require('../../../../assets/profileAvatar.jpeg')} style={styles.image} />

                    <TextInput
                        value={value}
                        onChangeValue={setValue}
                        placeholder='Yorum ekle...'
                        style={styles.input} />

                </View>
            </KeyboardAvoidingView>

        </View>
    )
}

export default Comments

const styles = StyleSheet.create({
    container: {
        flex: 1, alignSelf: 'stretch', justifyContent: 'space-between', backgroundColor: colors.white
    },
    inputContainer: {
        borderTopWidth: 0.2,
        borderColor: colors.halfGray6,
        marginBottom: 63
    },
    imageAndInputContainer: {
        flexDirection: 'row',
        alignSelf: 'stretch',
        marginTop: 20,
        marginHorizontal: 22
    },
    image: { height: 40, width: 40, borderRadius: 50 },
    input: {
        alignSelf: 'stretch', flex: 1, borderRadius: 40, marginLeft: 10, paddingLeft: 17, borderWidth: 0.2
    }
})
