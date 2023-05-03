/* eslint-disable react-native/no-color-literals */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react'

import {
    createDrawerNavigator,
    DrawerContentScrollView
} from '@react-navigation/drawer'
import { useUpdateAtom } from 'jotai/utils.js'
import {
    StyleSheet, Text, View, Image
} from 'react-native'

import routes from '../../constants/routes.js'
import { navigationRef } from '../../navigation/Navigation.jsx'
import colors from '../../styles/colors'
import fonts from '../../styles/fonts'
import { userAtom } from '../../utils/atoms.js'
import UserProfileImageButton from '../UserProfileImageButton/UserProfileImageButton'
import DrawerItems from './DrawerItems/DrawerItems'

const Drawer = createDrawerNavigator()

const CustomDrawerContent = ({ navigation }) => {
    const setUser = useUpdateAtom(userAtom)

    return (
        <DrawerContentScrollView
            scrollEnabled
            contentContainerStyle={{ flex: 1, backgroundColor: colors.whiteGreen }}>
            <View
                style={{
                    flex: 1,
                    paddingHorizontal: 15
                }}>
                {/* Close */}
                <View
                    style={{
                        alignItems: 'flex-start',
                        justifyContent: 'center'
                    }}>
                    <View style={{
                        flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: 0
                    }}>
                        <UserProfileImageButton />
                        <Text style={{
                            marginLeft: 20, fontFamily: fonts.ceraProBold, color: colors.white, fontSize: 16
                        }}>
                            Mathew Perry
                        </Text>
                    </View>

                    <View style={{ marginTop: 56 }}>
                        <DrawerItems
                            text='Adaptation'
                            icon={require('../../../assets/drawerıcons/paw.png')}
                            routeName={routes.MatchingTab}
                            onPress={() => navigationRef.current.navigate(routes.MatchingTab)} />

                        <DrawerItems
                            text='Add Pet'
                            icon={require('../../../assets/drawerıcons/Add.png')}
                            routeName={routes.AddPetSelect}
                            onPress={() => navigationRef.current.navigate(routes.AddPetSelect)} />
                        <DrawerItems
                            text='Favorites'
                            icon={require('../../../assets/drawerıcons/Favourite.png')}
                            onPress={() => alert('henüz eklenmedi')} />
                        <DrawerItems
                            text='Messages'
                            icon={require('../../../assets/drawerıcons/multimedia1.png')}
                            routeName={routes.Chats}
                            onPress={() => navigationRef.current.navigate(routes.Chats)} />
                        <DrawerItems
                            text='Profile'
                            icon={require('../../../assets/drawerıcons/social1.png')}
                            routeName={routes.Profile}
                            onPress={() => navigationRef.current.navigate(routes.Profile)} />
                        <DrawerItems
                            text='Settings'
                            icon={require('../../../assets/drawerıcons/Settings.png')}
                            routeName={routes.Settings}
                            onPress={() => navigationRef.current.navigate(routes.Settings)} />
                        <DrawerItems
                            text='Log out'
                            icon={require('../../../assets/drawerıcons/log-out.png')}
                            routeName={routes.Premium}
                            onPress={() => setUser(null)} />

                    </View>
                </View>
            </View>
        </DrawerContentScrollView>
    )
}
/* <DrawerItems
                            text='Donation'
                            icon={require('../../../assets/drawerıcons/Donation.png')}
                            routeName={routes.Premium}
                            onPress={() => navigationRef.current.navigate(routes.Premium)} /> */
const CustomDrawer = (Page) => (
    <View style={{ flex: 1, backgroundColor: colors.whiteGreen }}>
        <Drawer.Navigator
            useLegacyImplementation
            screenOptions={{
                drawerType: 'slide',
                overlayColor: 'transparent',
                swipeEnabled: false,
                headerShown: false,
                drawerStyle: {
                    flex: 1,
                    width: '50%',
                    paddingRight: 10,
                    backgroundColor: 'transparent'
                },
                sceneContainerStyle: {
                    backgroundColor: 'transparent'
                }
            }}
            drawerContent={() => <CustomDrawerContent />}>
            <Drawer.Screen name='Drawer'>
                {() => <Page />}
            </Drawer.Screen>
        </Drawer.Navigator>
    </View>
)

export default CustomDrawer

const styles = StyleSheet.create({})
