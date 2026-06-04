import { APP_COLORS, APP_COLORS_NAME, APP_FONTS_NAME } from '@/constants';
import { Text, TextProps } from 'react-native'
import { PixelRatio } from 'react-native';


interface AppTextProps extends TextProps {
    colorScheme?: keyof typeof APP_COLORS_NAME;
    size?: number;
    variant?: 'r' | 'sb' | 'b';
}

const AppText = ({ colorScheme, size, variant, children, className, style, ...props}: AppTextProps) => {
    const _getScaledFontSize = (size: number) => {
        return PixelRatio.getFontScale() * size;
    }

    const _getVariant = (variant: string | undefined) => {
        switch (variant) {
            case 'b':
                return { fontFamily: APP_FONTS_NAME.K2DBOLD, color: APP_COLORS[APP_COLORS_NAME.DEFAULTHEADING], size: _getScaledFontSize(size ?? 27) }
            case 'sb':
                return { fontFamily: APP_FONTS_NAME.K2DSEMIBOLD, color: APP_COLORS[APP_COLORS_NAME.DEFAULTHEADING], size: _getScaledFontSize(size ?? 22) }
            default:
                return { fontFamily: APP_FONTS_NAME.K2DREGULAR, color: APP_COLORS[APP_COLORS_NAME.GREY], size: _getScaledFontSize(size ?? 18) }
        }
    }



    const variantStyle = _getVariant(variant);
    
    return (
        <Text 
        className={className}
        style={[{
            color: colorScheme ? APP_COLORS[colorScheme] : variantStyle.color,
            fontSize: variantStyle.size,
            fontFamily: variantStyle.fontFamily,
        }, style]} {...props}>{children}</Text>
    )
}

export default AppText