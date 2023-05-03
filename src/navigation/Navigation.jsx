/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react'

import analytics from '@react-native-firebase/analytics'
import messaging from '@react-native-firebase/messaging'
import { useDrawerProgress } from '@react-navigation/drawer'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useMutation } from '@tanstack/react-query'
import { useAtom } from 'jotai'
import { useUpdateAtom } from 'jotai/utils'
import { StyleSheet, Dimensions } from 'react-native'
import Config from 'react-native-config'
import Animated, { Extrapolate } from 'react-native-reanimated'
import socketIo from 'socket.io-client'

import CustomDrawer from '../components/CustomDrawer/CustomDrawer'
import SpecialSheet from '../components/SpecialSheet/SpecialSheet'
import routes from '../constants/routes'
import AddPetAge from '../screens/AddPetAge/AddPetAge'
import AddPetFavoriteGame from '../screens/AddPetFavoriteGame/AddPetFavoriteGame'
import AddPetGender from '../screens/AddPetGender/AddPetGender'
import AddPetKind from '../screens/AddPetKind/AddPetKind'
import AddPetName from '../screens/AddPetName/AddPetName'
import AddPetPhoto from '../screens/AddPetPhoto/AddPetPhoto'
import AddPetSelect from '../screens/AddPetSelect/AddPetSelect'
import AddPetSterilization from '../screens/AddPetSterilization/AddPetSterilization'
import AddPetSucces from '../screens/AddPetSucces/AddPetSucces'
import Ads from '../screens/Ads/Ads'
import ChangeProfile from '../screens/ChangeProfile/ChangeProfile'
import CommentsPage from '../screens/CommentsPage/CommentsPage'
import EditProfile from '../screens/EditProfile/EditProfile'
import HotelRegister from '../screens/HotelRegister/HotelRegister'
import Hotels from '../screens/Hotels/Hotels'
import ImageCarousel from '../screens/ImageCarousel/ImageCarousel'
import LiveChat from '../screens/LiveChat/LiveChat'
import Login from '../screens/Login/Login'
import MatchingTab from '../screens/MatchingTab/MatchingTab'
import MyPets from '../screens/MyPets/MyPets'
import Onboarding from '../screens/Onboarding/Onboarding'
import OtelsList from '../screens/OtelsList/Otels'
import PetDetails from '../screens/PetDetails/PetDetails'
import PetFilter from '../screens/PetFilter/PetFilter'
import Premium from '../screens/Premium/Premium'
import Settings from '../screens/Settings/Settings'
import SignUp1 from '../screens/SıgnUp1/SıgnUp1'
import UserProfile from '../screens/UserProfile/UserProfile'
import UserRegister from '../screens/UserRegister/UserRegister'
import VeterinaryRegister from '../screens/VeterinaryRegister/VeterinaryRegister'
import Vets from '../screens/Vets/Vets'
import Welcome from '../screens/Welcome/Welcome'
import colors from '../styles/colors'
import {
    activeRouteAtom,
    socketAtom,
    userAtom
} from '../utils/atoms'
import * as Queries from '../utils/queries'
import Storage from '../utils/storage'
import BottomTab from './BottomTab'

export const Stack = createNativeStackNavigator()

export const navigationRef = React.createRef()

const Navigation = () => {
    const routeNameRef = React.useRef()
    const setActiveRoute = useUpdateAtom(activeRouteAtom)

    const onReady = () => (routeNameRef.current = navigationRef.current?.getCurrentRoute().name) // eslint-disable-line no-return-assign

    const onStateChange = async () => {
        // const previousRouteName = routeNameRef.current
        const currentRouteName = navigationRef.current?.getCurrentRoute()?.name

        setActiveRoute(currentRouteName)

        /*
        if (previousRouteName !== currentRouteName) {
            await analytics().logScreenView({
                screen_name: currentRouteName,
                screen_class: currentRouteName
            })
        }
        routeNameRef.current = currentRouteName */
    }

    return (
        <NavigationContainer ref={navigationRef} onStateChange={onStateChange}>
            <RootNavigatorWithDrawer />
            <SpecialSheet />
        </NavigationContainer>
    )
}

const RootNavigator = () => {
    const [ user, setUser ] = useAtom(userAtom)
    const [ socket, setSocket ] = useAtom(socketAtom)
    const progress = useDrawerProgress()

    const scale = Animated.interpolateNode(progress, {
        inputRange: [ 0, 1 ],
        outputRange: [ 1, 0.7 ],
        extrapolate: Extrapolate.CLAMP
    })

    const borderRadius = Animated.interpolateNode(progress, {
        inputRange: [ 0, 1 ],
        outputRange: [ 0, 15 ],
        extrapolate: Extrapolate.CLAMP
    })

    const animatedStyle = {
        borderRadius,
        transform: [{ scale }]
    }

    React.useEffect(() => {
        if (user) {
            Storage.getItem('accessToken').then((accessToken) => {
                const s = socketIo(Config.API, {
                    extraHeaders: {
                        authorization: accessToken
                    },
                    transports: [ 'websocket' ]
                })

                setSocket(s)
            })
        }
    }, [ user ])

    const setNotificationTokenMutation = useMutation(Queries.setNotificationToken, {
        onSuccess: setUser
    })

    /*
    React.useEffect(() => {
        if (user) {
            messaging().onNotificationOpenedApp((remoteMessage) => {
                navigation.navigate(remoteMessage.data.type)
            })

            messaging()
                .getInitialNotification()
                .then((remoteMessage) => {
                    if (remoteMessage) {
                        navigation.navigate(remoteMessage.data.type)
                    }
                })

            if (Platform.OS === 'ios') {
                messaging().requestPermission().then(() => {
                    messaging().getToken().then(setNotificationTokenMutation.mutate)
                })
            } else {
                messaging().getToken().then(setNotificationTokenMutation.mutate)
            }
        }
    }, [user?._id]) */

    if (!socket && user) {
        return null
    }

    return (
        <Animated.View
            style={[ styles.navigationContainer, animatedStyle ]}>
            <Stack.Navigator
                screenOptions={{
                    headerShadowVisible: false,
                    title: null,
                    headerShown: false
                }}
                initialRouteName={user ? routes.BottomTab : routes.Onboarding}>
                {
                    user ? (
                        <Stack.Screen
                            name={routes.BottomTab}
                            component={BottomTab} />
                    ) : (
                        <>
                            <Stack.Screen
                                name={routes.Onboarding}
                                options={{ headerShown: false }}
                                component={Onboarding} />

                            <Stack.Screen
                                name={routes.Login}
                                options={{ headerShown: false }}
                                component={Login} />

                            <Stack.Screen
                                name={routes.UserRegister}
                                options={{ headerShown: false }}
                                component={UserRegister} />

                            <Stack.Screen
                                name={routes.Welcome}
                                options={{ headerShown: false }}
                                component={Welcome} />

                            <Stack.Screen
                                name={routes.VeterinaryRegister}
                                options={{ headerShown: false }}
                                component={VeterinaryRegister} />

                            <Stack.Screen
                                name={routes.HotelRegister}
                                options={{ headerShown: false }}
                                component={HotelRegister} />

                            <Stack.Screen
                                name={routes.SignUp1}
                                options={{ headerShown: false }}
                                component={SignUp1} />
                        </>
                    )

                }
                <Stack.Screen
                    name={routes.EditProfile}
                    options={{ headerShown: false }}
                    component={EditProfile} />

                <Stack.Screen
                    name={routes.UserProfile}
                    options={{ headerShown: false }}
                    component={UserProfile} />

                <Stack.Screen
                    name={routes.MyPets}
                    options={{ headerShown: false }}
                    component={MyPets} />

                <Stack.Screen
                    name={routes.Settings}
                    options={{ headerShown: false }}
                    component={Settings} />

                <Stack.Screen
                    name={routes.ChangeProfile}
                    options={{ headerShown: false }}
                    component={ChangeProfile} />

                <Stack.Screen
                    name={routes.LiveChat}
                    options={{ headerShown: false }}
                    component={LiveChat} />

                <Stack.Screen
                    name={routes.AddPetSelect}
                    options={{ headerShown: false }}
                    component={AddPetSelect} />

                <Stack.Screen
                    name={routes.AddPetName}
                    options={{ headerShown: false }}
                    component={AddPetName} />

                <Stack.Screen
                    options={{ headerShown: false }}
                    component={AddPetKind}
                    name={routes.AddPetKind} />

                <Stack.Screen
                    options={{ headerShown: false }}
                    component={AddPetGender}
                    name={routes.AddPetGender} />

                <Stack.Screen
                    options={{ headerShown: false }}
                    component={AddPetAge}
                    name={routes.AddPetAge} />

                <Stack.Screen
                    options={{ headerShown: false }}
                    component={AddPetFavoriteGame}
                    name={routes.AddPetFavoriteGame} />

                <Stack.Screen
                    options={{ headerShown: false }}
                    component={AddPetSterilization}
                    name={routes.AddPetStarilization} />

                <Stack.Screen
                    options={{ headerShown: false }}
                    component={AddPetPhoto}
                    name={routes.AddPetPhoto} />

                <Stack.Screen
                    options={{ headerShown: false }}
                    component={AddPetSucces}
                    name={routes.AddPetSucces} />

                <Stack.Screen
                    options={{ headerShown: false }}
                    component={MatchingTab}
                    name={routes.MatchingTab} />

                <Stack.Screen
                    options={{ headerShown: false }}
                    component={PetDetails}
                    name={routes.PetDetails} />

                <Stack.Screen
                    options={{ headerShown: false }}
                    component={PetFilter}
                    name={routes.PetFilter} />

                <Stack.Screen
                    options={{ headerShown: false }}
                    component={Vets}
                    name={routes.Vets} />

                <Stack.Screen
                    options={{ headerShown: false }}
                    component={Hotels}
                    name={routes.Hotels} />

                <Stack.Screen
                    options={{ headerShown: false }}
                    component={Ads}
                    name={routes.Ads} />

                <Stack.Screen
                    options={{ headerShown: false }}
                    component={Premium}
                    name={routes.Premium} />

                <Stack.Screen
                    options={{ headerShown: false }}
                    component={CommentsPage}
                    name={routes.Comments} />

                <Stack.Screen
                    options={{ headerShown: false }}
                    component={OtelsList}
                    name={routes.OtelsList} />

                <Stack.Screen
                    options={{ headerShown: false }}
                    component={ImageCarousel}
                    name={routes.ImageCarousel} />

            </Stack.Navigator>
        </Animated.View>
    )
}

const RootNavigatorWithDrawer = () => CustomDrawer(RootNavigator)

export default Navigation

const styles = StyleSheet.create({
    navigationContainer: {
        flex: 1,
        width: Dimensions.get('window').width,
        backgroundColor: colors.white,
        overflow: 'hidden'
    }
})
