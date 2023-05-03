import React, { Component } from 'react'

import {
    Image, StyleSheet, Text, View
} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import Button from '../../components/Button/Button'
import PageHoc from '../../components/PageHoc/PageHoc'
import colors from '../../styles/colors'
import fonts from '../../styles/fonts'
import Paginator from './Paginator'
import PriceCards from './PriceCards'

const Premium = () => (
    <View style={styles.container}>
        <Text style={styles.header}>BUY VET PACKAGE TO CONTINUE</Text>
        <Image source={require('../../../assets/premium-icon.png')} style={styles.image} />
        <Text style={styles.text1}>Eşleşmeden önce mesaj gönder</Text>
        <Text style={styles.text2}>Gönderdiğin her Super Like’a ücretsiz bir mesaj ekle</Text>

        <View style={styles.childContainer}>
            <Paginator data={[ '', '', '' ]} pageNum={1} />
            <View style={styles.priceCardContainer}>
                <PriceCards header='En popüler' mountCount={6} text1='ay' text2='₺66,77/ay' text3='%51 İNDİRİM' text4='₺399,99' />
                <PriceCards header='En popüler' mountCount={6} text1='ay' text2='₺66,77/ay' text3='%51 İNDİRİM' text4='₺399,99' />
                <PriceCards header='En popüler' mountCount={6} text1='ay' text2='₺66,77/ay' text3='%51 İNDİRİM' text4='₺399,99' />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.goButton}>
                    <Text style={styles.goButtonText}>Devam</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.noThanx}>Hayır Teşekkürler</Text>
                </TouchableOpacity>
            </View>

        </View>

    </View>
)

export default PageHoc(Premium, {
    scroll: false,
    style: {
        backgroundColor: colors.white
    }
})

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        backgroundColor: colors.black,
        marginHorizontal: 35,
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'center'
    },
    goButton: {
        marginBottom: 15, marginHorizontal: 30, borderRadius: 27, backgroundColor: colors.white, height: 37, justifyContent: 'center', alignItems: 'center'
    },
    header: {
        color: colors.white,
        marginHorizontal: 55,
        textAlign: 'center',
        marginTop: 20,
        fontSize: 15,
        fontWeight: '500',
        fontFamily: fonts.ceraProBold
    },
    image: { height: 55, width: 55, marginTop: 26 },
    text1: {
        color: colors.white,
        marginTop: 31,
        fontSize: 15,
        fontWeight: '500',
        fontFamily: fonts.ceraProBold
    },
    text2: {
        fontSize: 13,
        fontFamily: fonts.ceraProBold,
        color: colors.lightGray,
        fontWeight: '300',
        marginHorizontal: 34,
        textAlign: 'center',
        marginTop: 14
    },
    childContainer: {
        marginTop: 14,
        alignItems: 'center',
        alignSelf: 'stretch'
    },
    priceCardContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'stretch',
        marginHorizontal: 31,
        marginTop: 41
    },
    buttonContainer: { alignSelf: 'stretch', marginTop: 30 },
    goButtonText: { fontSize: 15, fontWeight: '600' },
    noThanx: {
        color: colors.gray205,
        textAlign: 'center',
        marginBottom: 27,
        fontWeight: '600',
        fontFamily: fonts.ceraProBold
    }
})
