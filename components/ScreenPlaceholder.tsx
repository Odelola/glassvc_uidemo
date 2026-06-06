import { AppBox, AppScreen, AppText } from "@/shared";
import { Dimensions } from "react-native";

export default function ScreenPlaceholder({ screenName }: { screenName: string; }) {

    const { width } = Dimensions.get("window");
    return (
        <AppScreen className="justify-center items-center bg-primary">
            <AppText className="text-brand -tracking-wide uppercase -rotate-90" style={{ fontSize: width / 8 }}>{screenName}</AppText>
        </AppScreen>
    )
}