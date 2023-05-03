import React, { useState } from 'react'

import { useNavigation } from '@react-navigation/native'
import { RangeSlider } from '@sharcoux/slider'
import { useUpdateAtom } from 'jotai/utils'
import {
    FlatList,
    Image, StyleSheet, Text, TouchableOpacity, View
} from 'react-native'
import { FloatingLabelInput } from 'react-native-floating-label-input'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'

import slideDatas from '../../../assets/slideDatas'
import Button from '../../components/Button/Button'
import IconTextButton from '../../components/IconTextButton/IconTextButton'
import PageHoc from '../../components/PageHoc/PageHoc'
import PetsBar from '../../components/PetsBar/PetsBar'
import PickingAnimalCategory from '../../components/PickingAnimalCategory/PickingAnimalCategory'
import UserProfileImageButton from '../../components/UserProfileImageButton/UserProfileImageButton'
import routes from '../../constants/routes'
import colors from '../../styles/colors'
import fonts from '../../styles/fonts'

const PetFilter = () => {
    const navigation = useNavigation()
    const [ selected, setSelected ] = useState()

    const customLabelStyle = {
        fontSizeFocused: 16,
        fontSizeBlurred: 16,
        topFocused: -30,
        colorFocused: colors.primary,
        colorBlurred: 'rgba(0, 0, 0, 0.38)'
    }

    return (
        <View style={styles.page}>
            <View
                style={styles.header}>
                <View style={styles.iconBar}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Image source={require('../../../assets/back-icon.png')} style={styles.menuİcon} />
                    </TouchableOpacity>

                    <UserProfileImageButton />

                </View>
                <Text style={styles.headerTitle}>Filter</Text>
            </View>
            <View style={styles.contentContainer}>
                <View style={{ marginTop: 48 }}>
                    <Text style={styles.category}>Category</Text>
                    <FlatList
                        contentContainerStyle={styles.categoryList}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={slideDatas}
                        renderItem={({ item }) => (
                            <PickingAnimalCategory
                                text={item.text}
                                icon={item.image}
                                selected={selected}
                                setSelected={setSelected} />
                        )} />
                    <View>
                        <FloatingLabelInput
                            label='Animal Bread'
                            labelStyles={styles.labelStyleInput}
                            animationDuration={100}
                            customLabelStyles={customLabelStyle}
                            containerStyles={styles.inputContainerStyle} />
                        <FloatingLabelInput
                            label='Age'
                            labelStyles={styles.labelStyleInput}
                            animationDuration={100}
                            customLabelStyles={customLabelStyle}
                            containerStyles={styles.inputContainerStyle} />
                    </View>

                    <View style={styles.locationRangeBar}>
                        <Text style={styles.text3}>
                            Location Range
                        </Text>
                        <Text style={styles.text3}>7 - 73 km</Text>
                    </View>

                    <RangeSlider
                        range={[ 2, 50 ]} // set the current slider's value
                        minimumValue={0} // Minimum value
                        maximumValue={80} // Maximum value
                        step={0} // The step for the slider (0 means that the slider will handle any decimal value within the range [min, max])
                        minimumRange={0} // Minimum range between the two thumbs
                        crossingAllowed={false} // If true, the user can make one thumb cross over the second thumb
                        outboundColor='grey' // The track color outside the current range value
                        inboundColor='grey' // The track color inside the current range value
                        thumbTintColor='darkcyan' // The color of the slider's thumb
                        thumbStyle={{ backgroundColor: colors.primary }} // Override the thumb's style
                        trackStyle={{ height: 1 }} // Override the tracks' style
                        minTrackStyle={undefined} // Override the tracks' style for the minimum range
                        midTrackStyle={undefined} // Override the tracks' style for the middle range
                        maxTrackStyle={undefined} // Override the tracks' style for the maximum range
                        vertical={false} // If true, the slider will be drawn vertically
                        inverted={false} // If true, min value will be on the right, and max on the left
                        enabled // If false, the slider won't respond to touches anymore
                        trackHeight={4} // The track's height in pixel
                        thumbSize={15} // The thumb's size in pixel
                        thumbImage={undefined} // An image that would represent the thumb
                        slideOnTap // If true, touching the slider will update it's value. No need to slide the thumb.
                        onValueChange={undefined} // Called each time the value changed. The type is (range: [number, number]) => void
                        onSlidingStart={undefined} // Called when the slider is pressed. The type is (range: [number, number]) => void
                        onSlidingComplete={undefined} />

                    <Text style={styles.genderText}>
                        Gender
                    </Text>

                    <View style={styles.genderBar}>
                        <TouchableOpacity style={styles.maleGender}>
                            <Image source={require('../../../assets/male3x-icon.png')} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.femaleGender}>
                            <Image source={require('../../../assets/female3x-icon.png')} />
                        </TouchableOpacity>
                    </View>

                </View>
                <Button showShadow text='Done' style={styles.button} />
            </View>
        </View>
    )
}

export default PageHoc(PetFilter, {
    scroll: false
})

const styles = StyleSheet.create({
    page: {
        alignSelf: 'stretch',
        backgroundColor: colors.primary
    },
    header: {
        paddingLeft: 32,
        paddingRight: 21,
        height: 90,
        transform: [{
            translateY: 10
        }]
    },
    iconBar: {
        alignSelf: 'stretch',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    headerTitle: {
        fontWeight: '500',
        fontSize: 24,
        color: colors.white,
        opacity: 0.87,
        fontFamily: fonts.ceraProBold
    },
    button: { marginBottom: 70 },
    image: {
        height: 80,
        width: 80,
        borderRadius: 15,
        backgroundColor: colors.white,
        padding: 10,
        borderWidth: 2,
        borderColor: colors.white
    },
    contentContainer: {
        justifyContent: 'space-between',
        backgroundColor: colors.lightGray,
        height: heightPercentageToDP(95) - 70,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingHorizontal: 23,
        zIndex: -1
    },
    userContainer: {
        justifyContent: 'center', alignItems: 'center', flex: 1, marginBottom: 50
    },
    labelStyleInput: {
        paddingHorizontal: 0,
        fontSize: 16,
        color: colors.black,
        fontFamily: fonts.ceraProMedium
    },
    inputContainerStyle: {
        marginTop: 35,
        height: 50,
        borderBottomWidth: 1,
        borderColor: colors.blackGray
    },
    category: {
        fontSize: 16,
        color: colors.blackGray,
        fontFamily: fonts.ceraProBold
    },
    genderText: {
        fontSize: 16,
        color: colors.blackGray,
        fontFamily: fonts.ceraProBold,
        marginTop: 20
    },
    genderBar: { flexDirection: 'row', marginTop: 16 },
    maleGender: {
        width: 70,
        height: 60,
        borderRadius: 22,
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center'
    },
    femaleGender: {
        marginLeft: 25,
        width: 70,
        height: 60,
        borderRadius: 22,
        backgroundColor: colors.white,
        justifyContent: 'center',
        alignItems: 'center'
    },
    categoryList: { marginTop: 15, right: 15 },
    text3: {
        fontSize: 16,
        fontWeight: '300',
        fontFamily: fonts.ceraProBold,
        color: colors.blackGray
    },
    locationRangeBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40,
        marginBottom: 20
    }
})
