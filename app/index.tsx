import { PurpleAndFrostCards } from "@assets/images";
import { AppBox, AppScreen, AppText } from "@/shared";
import { Image, Pressable, useWindowDimensions } from "react-native";
import { APP_COLORS_NAME, APP_FONTS_NAME } from "@/constants";
import { ArrowRight } from "@/assets/icons";
import { useRouter } from 'expo-router';



export default function Onboarding() {
  const { height } = useWindowDimensions();
    const router = useRouter();

  return (
    <AppScreen>
      <Image style={{ height: height * .6 }} source={PurpleAndFrostCards} alt="Onboarding Image" className="w-full object-cover" />
      <AppBox style={{ height: height * .4, paddingBottom: height* .1 }} className="items-center justify-between">
        <AppBox className="items-center">
          <AppText colorScheme={APP_COLORS_NAME.DEFAULTHEADING} size={24} fontFamily={APP_FONTS_NAME.K2DBOLD}>Safe Payment, Happy You!</AppText>
          <AppBox className="items-center">
            <AppText >Create a fresh virtual credit card for all your  </AppText>
            <AppText>shopping's and banking cards </AppText>
          </AppBox>
        </AppBox>

        <AppBox className="justify-self-end">
          <Pressable className="bg-brand size-20 justify-center items-center rounded-3xl" onPress={() => router.navigate('/(tabs)')}>
            <ArrowRight />
          </Pressable>
        </AppBox>
      </AppBox>
    </AppScreen>
  );
}
