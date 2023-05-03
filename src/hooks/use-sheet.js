import React from 'react'

import { useAtom } from 'jotai'

import { sheetAtom } from '../utils/atoms'

export const sheetRef = React.createRef()

const useSheet = () => {
    const [ sheet, setSheet ] = useAtom(sheetAtom)

    return {
        showSheet: ({ buttons }) => {
            setSheet({
                visible: true,
                buttons
            })
            sheetRef.current.expand()
        },
        closeSheet: () => {
            sheetRef.current.close()
            setSheet({
                visible: false,
                buttons: []
            })
        },
        sheet
    }
}

export default useSheet
