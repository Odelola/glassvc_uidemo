import { PurpleAndFrostCards } from "@assets/images";
import { AppBox, AppScreen, AppText } from "@/shared";
import { Image, PixelRatio, Pressable, useWindowDimensions } from "react-native";
import { APP_COLORS_NAME, APP_FONTS_NAME } from "@/constants";
import { ArrowRightIcon } from "@/assets/icons";
import { useRouter } from 'expo-router';



export default function Onboarding() {
  const { width, height } = useWindowDimensions();
  const router = useRouter();

  const isGreaterThanOne = PixelRatio.getFontScale() > 1;

  return (
    <AppScreen>
      <Image style={{ height: isGreaterThanOne ? height * .45 : height * .55 }} source={PurpleAndFrostCards} alt="Onboarding Image" className="w-full object-cover" />
      <AppBox style={{ height: isGreaterThanOne ? height * .45 : height * .45, paddingBottom: height * .15 }} className="items-center justify-between">
        <AppBox className="items-center">
          <AppText colorScheme={APP_COLORS_NAME.DEFAULTHEADING} className="text-center" variant="b">Safe Payment, Happy You!</AppText>
          <AppBox>
            <AppText style={{ textAlign: 'center', lineHeight: 32, width: width * .85 }}>Create a fresh virtual credit card for all your shopping's and banking cards </AppText>
          </AppBox>
        </AppBox>

        <AppBox className="justify-self-end">
          <Pressable className="bg-brand size-20 justify-center items-center rounded-3xl" onPress={() => router.navigate('/(tabs)/home')}>
            <ArrowRightIcon />
          </Pressable>
        </AppBox>
      </AppBox>
    </AppScreen>
  );
}
