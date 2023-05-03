import React, { useState } from 'react'

import {
    View, Text, Image, StyleSheet, TouchableOpacity
} from 'react-native'

import fonts from '../../styles/fonts'

export default () => {
    const [ click, setClick ] = useState(false)

    return (
        <View>
            <View style={styles.userContainer}>
                <Image source={require('../../../assets/profileAvatar.jpeg')} style={styles.userImage} />
                <Text style={styles.userName}>
                    Muhammet
                    {' '}
                </Text>
                <Text style={styles.likeCount}>
                    15
                    {' '}
                    <TouchableOpacity onPress={()=>setClick(!click)}>
                        <Image source={click ? require('../../../assets/hearth-filled.png') : require('../../../assets/icon/icon/icon/Vector.png')} style={styles.likeButton} />
                    </TouchableOpacity>
                </Text>

            </View>
            <Text style={styles.comments}>
                Harika bi otel dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500'lerden
            </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    userContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 22
    },
    userName: {
        fontSize: 16,
        fontWeight: '400',
        fontFamily: fonts.ceraProBold,
        flex: 1,
        marginLeft: 18
    },
    userImage: {
        height: 30,
        width: 30,
        borderRadius: 42
    },
    likeCount: {
        fontSize: 16,
        fontWeight: '300',
        fontFamily: fonts.ceraProBold
    },
    comments: {
        marginLeft: 50,
        marginRight: 20,
        fontSize: 16,
        fontFamily: fonts.ceraProBold,
        fontWeight: '300',
        lineHeight: 24
    },
    likeButton: {
        height: 15,
        width: 17
    }
})
