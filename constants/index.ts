interface APP_COLORS_TYPE {
    [key: string]: string
}

export const APP_COLORS_NAME: APP_COLORS_TYPE = {
    BRAND200: "brand-200",
    DEFAULTHEADING: "defaultHeading",
    GREY: "grey",
    GREY200: "grey-200",
    GREY300: "grey-300",
    WHITE: "white",
    WHITE100: "white-100"
}
export const APP_COLORS: APP_COLORS_TYPE = {
    [APP_COLORS_NAME.BRAND200]: "#794EF1",
    [APP_COLORS_NAME.DEFAULTHEADING]: "#453F56",
    [APP_COLORS_NAME.GREY]: "#8A898E",
    [APP_COLORS_NAME.GREY200]: "#444053",
    [APP_COLORS_NAME.GREY300]: "#A6A5A6",
    [APP_COLORS_NAME.WHITE]: "#FFFFFF",
    [APP_COLORS_NAME.WHITE100]: "#DFD4FE"
};


export const APP_FONTS_NAME: APP_COLORS_TYPE = {
    K2DREGULAR: "K2DRegular",
    K2DSEMIBOLD: "K2DSemiBold",
    K2DBOLD: "K2DBold"
}