import { ArrowLeftNavigatorIcon } from "@/assets/icons";
import { AppBox, AppScreen, AppText } from "@/shared";
import { Dimensions, Pressable } from "react-native";
import { router } from 'expo-router';

export default function AppNavigator() {

    const { width } = Dimensions.get("window");
    return (
        <AppBox>
            <Pressable onPress={() => router.back()}>
                {/* <ArrowLeftNavigatorIcon /> */}
            </Pressable>
        </AppBox>
    )
}