import { ArrowLeftNavigatorIcon } from "@/assets/icons";
import { AppBox, AppScreen, AppText } from "@/shared";
import { Dimensions, Pressable } from "react-native";
import { router } from 'expo-router';


interface ScreenHeaderProps {
    title: string;
    description: string;
    withNavigator?: boolean;
}
export default function ScreenHeader({ description, title, withNavigator = true }: ScreenHeaderProps) {

    return (
        <AppBox>
            {withNavigator && (<Pressable onPress={() => router.back()} className="mb-8">
                <ArrowLeftNavigatorIcon />
            </Pressable>)}
            <AppText variant="b">{title}</AppText>
            <AppText>{description}</AppText>
        </AppBox>
    )
}