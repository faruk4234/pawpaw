import { atom } from 'jotai'
import { atomWithStorage, createJSONStorage, selectAtom } from 'jotai/utils'
import { Appearance } from 'react-native'

import Storage from './storage'

export const userAtom = atomWithStorage('user', null, createJSONStorage(() => Storage))

export const thumbnailAtom = selectAtom(userAtom, (user) => user.thumbnail)

export const socketAtom = atom()

export const activeRouteAtom = atom()

export const sheetAtom = atom({
    visible: false,
    buttons: []
})

export const darkModeAtom = atomWithStorage(
    'darkMode',
    Appearance.getColorScheme() === 'dark',
    { ...createJSONStorage(() => Storage), delayInit: true }
)
