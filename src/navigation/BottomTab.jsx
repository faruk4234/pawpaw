/* eslint-disable react/no-unstable-nested-components */
import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
    Image, ImageBackground, View, TouchableOpacity, StyleSheet, Dimensions
} from 'react-native'

import routes from '../constants/routes'
import Chats from '../screens/Chats/Chats'
import Home from '../screens/Home/Home'
import Profile from '../screens/Profile/Profile'
import colors from '../styles/colors'

import BottomBackground from '../../assets/Rectangle.png'

const Tab = createBottomTabNavigator()

const CustomTabBar = ({ state, navigation }) => (
    <ImageBackground
        source={BottomBackground}
        style={styles.customTabBarContainer}>

        <View style={styles.iconContainer}>

            <TouchableOpacity
                onPress={() => navigation.navigate(routes.Home)}
                style={state.index === 0 ? styles.onFocusIcon : styles.notFocusContainer}>
                <Image source={require('../../assets/home-icon.png')} style={styles.iconSize} />
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate(routes.Chats)}
                style={state.index === 1 ? styles.onFocusIcon : styles.notFocusContainer}>

                <Image source={require('../../assets/message-icon.png')} style={styles.iconSize} />
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate(routes.Profile)}
                style={state.index === 2 ? styles.onFocusIcon : styles.notFocusContainer}>

                <Image source={require('../../assets/user-icon.png')} style={styles.iconSize} />
            </TouchableOpacity>

        </View>
    </ImageBackground>
)

const BottomTab = () => {
    return (
        <Tab.Navigator
            tabBar={(props) => <CustomTabBar {...props} />}
            screenOptions={{
                tabBarActiveTintColor: colors.jetBlack,
                tabBarInactiveTintColor: colors.jetBlack,
                headerShown: false
            }}>

            <Tab.Screen
                name={routes.Home}
                component={Home} />
            <Tab.Screen
                name={routes.Chats}
                component={Chats} />

            <Tab.Screen
                name={routes.Profile}
                component={Profile} />
        </Tab.Navigator>
    )
}

export default BottomTab

const styles = StyleSheet.create({
    navigationContainer: {
        flex: 1,
        width: Dimensions.get('window').width,
        backgroundColor: 'white',

        overflow: 'hidden'
    },
    customTabBarContainer: {
        //  position: 'absolute',
        //  left: 0,
        //  right: 0,
        tintColor: colors.primary,
        color: colors.primary,
        bottom: 0,
        height: 102,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: Dimensions.get('window').width
    },
    iconContainer: {
        flexDirection: 'row',
        marginTop: 15,
        alignSelf: 'stretch',
        justifyContent: 'space-between',
        marginHorizontal: 42
    },
    onFocusIcon: {
        backgroundColor: colors.whiteGreen,
        height: 36,
        width: 36,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 11
    },
    notFocusContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 36,
        width: 36
    },
    iconSize: { height: 18, width: 18 }
})
