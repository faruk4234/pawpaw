import React from 'react'

import 'react-native-gesture-handler'
import * as Sentry from '@sentry/react-native'
import {
    QueryClient, QueryClientProvider
} from '@tanstack/react-query'
import { ErrorBoundary } from 'react-error-boundary'
import {
    View, StyleSheet, Text, StatusBar, TextInput
} from 'react-native'
import RNRestart from 'react-native-restart'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import SplashScreen from 'react-native-splash-screen'

//  import Notification from './components/Notification'
import './lang/lang-setup'
import './utils/wdyr'
import './utils/axios'
import Navigation from './navigation/Navigation'
import Error from './screens/Error/Error'
import colors from './styles/colors'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            suspense: true
        }
    }
})

Text.defaultProps = Text.defaultProps || {}
Text.defaultProps.allowFontScaling = false

TextInput.defaultProps = Text.defaultProps || {}
TextInput.defaultProps.allowFontScaling = false

//  FastImage.defaultProps = FastImage.defaultProps || {}
//  FastImage.defaultProps.source = avatar
/*
Sentry.init({
    dsn: Config.SENTRY_DSN,
    tracesSampleRate: 1.0
}) */

const App = () => {
    React.useEffect(() => {
        SplashScreen.hide()
    }, [])

    const onError = (err) => {
        Sentry.captureException(err)
    }

    const onReset = () => {
        RNRestart.Restart()
    }

    return (
        <QueryClientProvider client={queryClient}>
            <ErrorBoundary
                onReset={onReset}
                onError={onError}
                FallbackComponent={Error}>
                <React.Suspense fallback={<></>}>
                    <View style={styles.root}>
                        <SafeAreaProvider>
                            <StatusBar barStyle={colors.statusBar} backgroundColor={colors.primary} />
                            <Navigation />
                            {
                                //  <Notification />
                            }
                        </SafeAreaProvider>
                    </View>
                </React.Suspense>
            </ErrorBoundary>
        </QueryClientProvider>
    )
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: colors.white
    }
})

export default App //  export default Sentry.wrap(App)
