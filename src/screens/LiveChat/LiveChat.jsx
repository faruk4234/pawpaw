import React, { useState } from 'react'

import { useNavigation } from '@react-navigation/native'
import { useUpdateAtom } from 'jotai/utils'
import {
    FlatList,
    Image, StyleSheet, Text, TouchableOpacity, View, ScrollView, KeyboardAvoidingView, Platform
} from 'react-native'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'

import Button from '../../components/Button/Button'
import IconTextButton from '../../components/IconTextButton/IconTextButton'
import PageHoc from '../../components/PageHoc/PageHoc'
import PetsBar from '../../components/PetsBar/PetsBar'
import UserProfileImageButton from '../../components/UserProfileImageButton/UserProfileImageButton'
import routes from '../../constants/routes'
import colors from '../../styles/colors'
import fonts from '../../styles/fonts'
import { userAtom } from '../../utils/atoms'
import Header from './Header'
import MessageInput from './MessageInput'
import MessageItem from './MessageItem'
import UserStatusHeader from './UserStatusHeader'

const LiveChat = () => {
    const navigation = useNavigation()
    const setUser = useUpdateAtom(userAtom)
    const [ text, setText ] = useState()

    const messages = [{
        message: 'Hi, I want to adopt Daisy',
        id: 0
    }, {
        message: 'Hi, Where do you stay?',
        id: 1
    }, {
        message: 'Hi, I want to adopt Daisy',
        id: 0
    }, {
        message: 'Hi, Where do you stay?',
        id: 1
    }, {
        message: 'Hi, I want to adopt Daisy',
        id: 0
    }, {
        message: 'Hi, Where do you stay?',
        id: 1
    }, {
        message: 'Hi, I want to adopt Daisy',
        id: 0
    }, {
        message: 'Hi, Where do you stay?',
        id: 1
    }, {
        message: 'Hi, I want to adopt Dadsadaisy',
        id: 0
    }, {
        message: 'Hi, Where do you stay?',
        id: 1
    }]

    return (
        <View style={styles.page}>
            <Header name='Ryder Pump' status='Online' image={require('../../../assets/profileAvatar.jpeg')} />

            <View
                style={styles.contentContainer}
                contentContainerStyle={{ flex: 1 }}>
                <FlatList
                    data={messages}
                    showsVerticalScrollIndicator={false}
                    renderItem={(item) => <MessageItem item={item} />} />
                <KeyboardAvoidingView behavior='padding' style={{ marginBottom: 50 }}>
                    <MessageInput text={text} setText={setText} leftIcon={require('../../../assets/attach-icon.png')} />
                </KeyboardAvoidingView>
            </View>
        </View>
    )
}

export default PageHoc(LiveChat, {
    scroll: false
})

const styles = StyleSheet.create({
    page: {
        alignSelf: 'stretch',
        backgroundColor: colors.primary
    },
    contentContainer: {
        backgroundColor: colors.white,
        height: heightPercentageToDP(95) - 50,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingTop: 35,
        paddingHorizontal: 23,
        zIndex: -1
    }
})
