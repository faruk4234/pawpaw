import React from 'react'

import { useNavigation } from '@react-navigation/native'
import {
    Image, KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View
} from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view'

import Button from '../../components/Button/Button'
import IconTextButton from '../../components/IconTextButton/IconTextButton'
import PageHoc from '../../components/PageHoc/PageHoc'
import PetsBar from '../../components/PetsBar/PetsBar'
import ProfileImageAndName from '../../components/ProfileImageAndName/ProfileImageAndName'
import TextAndLine from '../../components/TextandLine/TextAndLine'
import UserProfileImageButton from '../../components/UserProfileImageButton/UserProfileImageButton'
import routes from '../../constants/routes'
import colors from '../../styles/colors'
import fonts from '../../styles/fonts'
import Comments from './Comments/Comments'
import Photos from './Photos/Photos'

const renderScene = SceneMap({
    Comments,
    Photos
})

const renderTabBar = (props) => (
    <TabBar
        {...props}
        getLabelText={({ route }) => route.title}
        tabStyle={{ }}
        renderLabel={({ route }) => (
            <Image source={route.icon} style={{ height: 20, width: 20 }} />
        )}
        indicatorContainerStyle={{
            backgroundColor: colors.white, borderTopEndRadius: 47, borderTopStartRadius: 47
        }}
        inactiveColor={colors.white}
        activeColor={colors.white}
        indicatorStyle={{
            height: 3, backgroundColor: colors.lightGray
        }}
        style={{ backgroundColor: colors.primary }} />
)

const UserProfile = () => {
    const navigation = useNavigation()

    const [ index, setIndex ] = React.useState(0)
    const [ routes ] = React.useState([
        { key: 'Photos', icon: require('../../../assets/icon/alert-circle-icon.png') },
        { key: 'Comments', icon: require('../../../assets/icon/icon/Vector.png') }

    ])

    return (
        <KeyboardAvoidingView style={styles.page}>
            <View
                style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Image source={require('../../../assets/back-icon.png')} style={styles.backIcon} />
                </TouchableOpacity>
                <View style={{ flex: 1, marginRight: 25 }}>
                    <ProfileImageAndName name='Ryder Pump' location='Los Angels' image={require('../../../assets/profileAvatar.jpeg')} />
                </View>
            </View>
            <View style={styles.contentContainer}>
                <TabView
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    keyboardDismissMode
                    renderTabBar={renderTabBar}
                    onIndexChange={setIndex}
                    initialLayout={{ }} />
            </View>
        </KeyboardAvoidingView>
    )
}

export default PageHoc(UserProfile, {
    scroll: false,
    style: {
        backgroundColor: colors.primary
    }
})

const styles = StyleSheet.create({
    page: {
        height: heightPercentageToDP(100),
        alignSelf: 'stretch',
        backgroundColor: colors.primary
    },
    header: {
        flexDirection: 'row',
        paddingLeft: 32,
        paddingRight: 21,
        height: heightPercentageToDP(25),
        transform: [{
            translateY: 18
        }]
    },
    backIcon: {
        width: 18, height: 18, right: 11, marginTop: 10
    },
    button: { marginTop: 90, marginBottom: 50 },
    contentContainer: {
        backgroundColor: colors.white,
        height: heightPercentageToDP(75),
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        zIndex: -1
    }
})
