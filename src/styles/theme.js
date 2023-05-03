import { Dimensions } from 'react-native'

const dimensions = Dimensions.get('window')

export const height = {
    input: 50,
    button: 40
}

export const radius = {
    s: 5,
    m: 10,
    l: 18,
    xl: 30
}

export const spacing = {
    xxs: 3,
    xs: 5,
    s: 10,
    m: 15,
    l: 20,
    xl: 24,
    xxl: 30
}

export const fontSize = {
    h1: 56,
    h2: 40,
    h3: 30,
    h4: 20,
    title: 22,
    medium: 20,
    normal: 16,
    small: 13,
    xs: 11
}

export const sizes = {
    // app dimensions
    ...dimensions
}

export const shadow = {
    sm: {
        shadowColor: 'gray',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3
    },
    md: {
        shadowColor: '#dcd3d6',
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10
    }
}
