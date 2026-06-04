import { Platform, StyleSheet, View, ViewProps } from 'react-native'


interface AppBoxProps extends ViewProps {
    withShadow?: boolean;
}

const AppBox = ({ children, withShadow = false, style, ...props }: AppBoxProps) => {
    const mallam =  
    StyleSheet.create({

        android: {...Platform.select({
                        ios: {
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 4 },
                            shadowOpacity: 0.3,
                            shadowRadius: 6,
                        },
                        android: {
                            background: 'red',
                            elevation: 10, // Higher value for a more pronounced shadow
                        },
                    })}
    })

    return (
        <View style={mallam.android}
         {...props}>
            {children}
        </View>
    )
}

export default AppBox