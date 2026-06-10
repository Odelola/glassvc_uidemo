import { APP_FONTS_NAME } from '@/constants';
import { Text, TextProps } from 'react-native'
import { PixelRatio } from 'react-native';


interface AppTextProps extends TextProps {
    size?: number;
    variant?: 'r' | 'sb' | 'b';
}

const AppText = ({ size, variant, className, children, style, ...props }: AppTextProps) => {
    const _getScaledFontSize = (size: number) => {
        return PixelRatio.getFontScale() * size;
    }

    const _getVariant = (variant: string | undefined) => {
        switch (variant) {
            case 'b':
                return { fontFamily: APP_FONTS_NAME.K2DBOLD, className: "text-heading", size: _getScaledFontSize(size ?? 27) }
            case 'sb':
                return { fontFamily: APP_FONTS_NAME.K2DSEMIBOLD, className: "text-heading", size: _getScaledFontSize(size ?? 22) }
            default:
                return { fontFamily: APP_FONTS_NAME.K2DREGULAR, className: "text-grey", size: _getScaledFontSize(size ?? 18) }
        }
    }

    const variantStyle = _getVariant(variant);

    return (
        <Text
            style={[{
                fontSize: variantStyle.size,
                fontFamily: variantStyle.fontFamily,
            }, style]}
            className={`${variantStyle.className} ${className}`}
            {...props}
            >{children}</Text>
    )
}

export default AppText