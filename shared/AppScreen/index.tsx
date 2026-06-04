import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, SafeAreaViewProps } from 'react-native-safe-area-context';

function AppScreen({ flex = true, children, className, ...props }: { flex?: boolean } & SafeAreaViewProps) {
    return (
            <SafeAreaView className={`px-6 ${flex ? "bg-white flex-1 " : ""}` + className}  {...props}>
                {flex && (<StatusBar style='dark' />)}
                {children}
            </SafeAreaView>
    )
}

export default AppScreen;