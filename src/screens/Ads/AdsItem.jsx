import React, { useState, useMemo } from 'react'

import { useNavigation } from '@react-navigation/native'
import {
    Image, View, TouchableOpacity, Text, StyleSheet
} from 'react-native'

import Paginator from '../../components/Peginator/Paginator'
import routes from '../../constants/routes'
import useSheet from '../../hooks/use-sheet'
import colors from '../../styles/colors'
import fonts from '../../styles/fonts'
import ImageItem from './ImageItem'

export default ({ datas }) => {
    const { showSheet } = useSheet()
    const [ page, setPageNum ] = useState(0)
    const navigation = useNavigation()
    const onScrollEnd = (e) => {
        const { contentOffset } = e.nativeEvent
        const viewSize = e.nativeEvent.layoutMeasurement
        setPageNum(Math.floor(contentOffset.x / viewSize.width))
    }
    const [ islike, setIslike ] = useState(datas.like)

    return (
        <View>
            <View style={styles.userBar}>
                <Image source={require('../../../assets/profileAvatar.jpeg')} style={styles.image} />
                <Text style={styles.userName}>Pelin</Text>
                <TouchableOpacity onPress={() => {
                    showSheet({
                        buttons: [
                            {
                                label: 'Şikayet Et',
                                onPress: () => {}
                            }, {
                                label: 'Engelle',
                                onPress: () => {}
                            }
                        ]
                    })
                }}>
                    <Image source={require('../../../assets/more-vertical-icon.png')} style={styles.moreIcon} />
                </TouchableOpacity>
            </View>
            <ImageItem item={datas.image} onScrollEnd={onScrollEnd} />

            <View style={styles.downBar}>
                <TouchableOpacity onPress={() => setIslike(!islike)}>
                    <Image source={islike ? require('../../../assets/hearth-filled.png') : require('../../../assets/icon/icon/icon/Vector.png')} style={{ height: 20, width: 23 }} />
                </TouchableOpacity>

                <TouchableOpacity style={{ marginLeft: 20 }} onPress={() => navigation.navigate(routes.Comments)}>
                    <Image source={require('../../../assets/icon/icon/Vector.png')} style={{ height: 20, width: 20, tintColor: colors.black }} />
                </TouchableOpacity>

                <View style={styles.peginator}>
                    <Paginator pageNum={page} data={datas.image} />
                </View>
            </View>
            <Text style={styles.likeCount}>77 likes</Text>
            <Text style={styles.descriptionName}>
                Pelin
                <Text style={styles.description}>
                    {' '}
                    Bu yavruyu sahiplendirmek istiyoruz, lütfen sahiplenmek isteyenler bizimle iletişime geçebilir mi ?
                </Text>
                <Text />
            </Text>

            <Text style={styles.commentsCount}>View all 1,012 comments</Text>
            <Text style={styles.time}>1 day ago</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    userBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 22,
        alignSelf: 'stretch'
    },
    image: {
        height: 28,
        width: 28,
        borderRadius: 40
    },
    userName: {
        fontSize: 14,
        fontWeight: '400',
        fontFamily: fonts.ceraProBold,
        flex: 1,
        marginLeft: 8
    },
    moreIcon: { height: 20, width: 20, tintColor: colors.black },
    downBar: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-between'
    },
    peginator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 50
    },
    likeCount: {
        fontWeight: '600',
        fontSize: 14,
        fontFamily: fonts.ceraProBold,
        marginTop: 13,
        color: colors.black
    },
    descriptionName: {
        fontWeight: '600',
        fontSize: 14,
        fontFamily: fonts.ceraProBold,
        marginTop: 13,
        color: colors.black,
        marginRight: 20
    },
    description: {
        fontWeight: '400',
        fontSize: 14,
        color: colors.black5
    },
    commentsCount: {
        marginTop: 8,
        fontSize: 13,
        fontWeight: '500',
        color: colors.blackGray
    },
    time: {
        marginTop: 12,
        fontSize: 10,
        fontWeight: '400',
        fontFamily: fonts.ceraProBold,
        color: colors.blackGray
    }
})
