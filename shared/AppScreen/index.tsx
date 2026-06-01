import { StatusBar } from 'expo-status-bar';
import {ViewProps } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

function AppScreen({ flex = true, children, ...props }: { flex?: boolean } & ViewProps) {
    return (
            <SafeAreaProvider className={flex ? "bg-white" : "" } {...props}>
                {flex && (<StatusBar style='dark' />)}
                {children}
            </SafeAreaProvider>
    )
}

export default AppScreen;