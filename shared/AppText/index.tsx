import { APP_COLORS, APP_COLORS_NAME, APP_FONTS_NAME } from '@/constants';
import { Text, TextProps } from 'react-native'


interface AppTextProps extends TextProps {
    colorScheme?: keyof typeof APP_COLORS_NAME;
    size?: number;
    fontFamily?: string;
}

const AppText = ({ colorScheme, size = 18, fontFamily, children, style }: AppTextProps) => {
    return (
        <Text style={[{
            color: colorScheme ? APP_COLORS[colorScheme] : APP_COLORS[APP_COLORS_NAME.GREY],
            fontSize: size,
            fontFamily: fontFamily ? fontFamily : APP_FONTS_NAME.K2DREGULAR,
        }, style]}>{children}</Text>
    )
}

export default AppText