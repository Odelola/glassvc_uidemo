import { View, ViewProps } from 'react-native'


interface AppBoxProps extends ViewProps {
}

const AppBox = ({ children, ...props }: AppBoxProps) => {
    return (
        <View {...props}>
            {children}
        </View>
    )
}

export default AppBox