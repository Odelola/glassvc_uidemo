import { Platform, StyleSheet, View, ViewProps } from 'react-native'


interface AppBoxProps extends ViewProps {
    withShadow?: boolean;
}

const AppBox = ({ children, withShadow = false, style, ...props }: AppBoxProps) => {

    return (
        <View style={[withShadow && shadowStyles.boxShadow, style]} {...props}>
            {children}
        </View>
    )
}

const shadowStyles =
    StyleSheet.create({
        boxShadow: {
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)'
        }
    })

export default AppBox