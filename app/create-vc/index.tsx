import { ContactIcon } from "@/assets/icons";
import { VirtualCardBlurred } from "@/assets/images";
import { ScreenHeader } from "@/components";
import { AppBox, AppButton, AppScreen, AppText } from "@/shared";
import { formatCurrency } from "@/utils";
import { Image, Pressable, ScrollView, TextInput } from "react-native";
import { useState } from "react";
import { APP_FONTS_NAME } from "@/constants";


const LIMITS = [1000, 5000, 10000, null]

export default function Onboarding() {

  const [cardName, setCardName] = useState("Jeremy Palpale");
  const [selectedLimit, setSelectedLimit] = useState<number | null>(1000);

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      className="bg-white"
    >
      <AppScreen className="pt-4 pb-12">
        <ScreenHeader title="Create Virtual Card"
          description="Fresh virtual credit card are on your way!"
        />

        <AppBox className="relative px-6 py-12 rounded-3xl mt-36" style={{ boxShadow: "0px 4px 100px rgba(0, 0, 0, 0.15)" }}>
          <Image source={VirtualCardBlurred} alt="Virtual Card Blurred Image" className="absolute " style={{ alignSelf: 'center', transform: [{ translateY: -50 }] }} />
          <AppBox className="mt-12">
            <AppText className="text-grey-400">Card Name</AppText>
            <AppBox className="flex-row mt-6 gap-x-4 text-3xl bg-white-200 rounded-3xl py-4 px-6 items-center">
              <ContactIcon />
              <TextInput
                className="flex-1 text-grey-300"
                cursorColor="#5A5663"
                value={cardName}
                onChangeText={setCardName}
                style={{ fontFamily: APP_FONTS_NAME.K2DBOLD }}
              />
            </AppBox>
          </AppBox>
          <AppBox>

            <AppText className="text-grey-400 mt-8">Card Weekly Limits</AppText>
            <AppBox className="flex-row flex-wrap justify-between gap-y-6 mt-8">
              {LIMITS.map((item, index) => {
                const isSelected = selectedLimit === item;
                return (
                  <Pressable
                    className={`w-[45%] rounded-3xl p-6 items-center ${isSelected ? 'bg-brand-800 ' : 'bg-white-300'}`}
                    key={index}
                    onPress={() => setSelectedLimit(item)}
                  >
                    <AppText
                      variant="b"
                      size={18}
                      className={isSelected ? 'text-brand-100' : 'text-heading-100'}
                    >
                      {item ? `$${formatCurrency(item, false)}` : "No Limit"}
                    </AppText>
                  </Pressable>
                );
              })}
            </AppBox>
          </AppBox>


        </AppBox>
        <AppBox className="mt-12">
          <AppButton buttonText="Create Card" />
        </AppBox>
      </AppScreen >
    </ScrollView>
  );
}

