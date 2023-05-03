import { useState, useEffect } from 'react'

import { AppState } from 'react-native'

const useAppState = ({ onForeground, onBackground }) => {
    const [ appState, setAppState ] = useState(AppState.currentState)

    useEffect(() => {
        function handleAppStateChange(nextAppState) {
            if (nextAppState === 'active' && appState !== 'active') {
                onForeground?.()
            } else if (appState === 'active' && nextAppState.match(/inactive|background/)) {
                onBackground?.()
            }

            setAppState(nextAppState)
        }

        const listener = AppState.addEventListener('change', handleAppStateChange)

        return listener.remove
    }, [ onForeground, onBackground, appState ])

    return { appState }
}

export default useAppState
