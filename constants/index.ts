interface APP_COLORS_TYPE {
    [key: string]: string
}

export const APP_COLORS_NAME: APP_COLORS_TYPE = {
    DEFAULTHEADING: "defaultHeading",
    GREY: "grey"
}
export const APP_COLORS: APP_COLORS_TYPE = {
    [APP_COLORS_NAME.DEFAULTHEADING]: "#453F56",
    [APP_COLORS_NAME.GREY]: "#8A898E"
};


export const APP_FONTS_NAME: APP_COLORS_TYPE = {
    K2DREGULAR: "K2DRegular",
    K2DSEMIBOLD: "K2DSemiBold",
    K2DBOLD: "K2DBold"
}