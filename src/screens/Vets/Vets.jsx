import * as React from 'react'

import { useNavigation } from '@react-navigation/native'
import {
    View, useWindowDimensions, SafeAreaView, Text, TouchableOpacity, Image
} from 'react-native'
import { TabView, SceneMap, TabBar } from 'react-native-tab-view'

import PageHoc from '../../components/PageHoc/PageHoc'
import colors from '../../styles/colors'
import fonts from '../../styles/fonts'
import List from './List/List'
import Map from './Map/Map'

const renderScene = SceneMap({
    List,
    Map
})

const renderTabBar = (props) => (
    <TabBar
        {...props}
        getLabelText={({ route }) => route.title}
        tabStyle={{ }}
        renderLabel={({ route }) => (
            <Text style={{
                color: colors.white, fontWeight: '400', fontSize: 15, fontFamily: fonts.ceraProBold
            }}>
                {route.title}
            </Text>
        )}
        indicatorContainerStyle={{ borderBottomWidth: 3, borderColor: colors.primary, backgroundColor: colors.primary }}
        inactiveColor={colors.white}
        activeColor={colors.white}
        indicatorStyle={{
            height: 3, backgroundColor: colors.white
        }}
        style={{ }} />
)

function Vets() {
    const [ index, setIndex ] = React.useState(0)
    const [ routes ] = React.useState([
        { key: 'List', title: 'Liste' },
        { key: 'Map', title: 'Harita' }
    ])

    const navigation = useNavigation()

    return (
        <>
            <SafeAreaView style={{ backgroundColor: colors.primary }}>
                <TouchableOpacity style={{ marginLeft: 24 }} onPress={() => navigation.goBack()}>
                    <Image source={require('../../../assets/back-icon.png')} />
                </TouchableOpacity>
            </SafeAreaView>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                renderTabBar={renderTabBar}
                onIndexChange={setIndex}
                initialLayout={{ }} />
        </>
    )
}

export default Vets
