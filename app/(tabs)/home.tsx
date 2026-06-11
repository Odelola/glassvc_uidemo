import { BrandCardImage } from "@/assets/icons";
import { ScreenHeader, TransactionCard } from "@/components";
import { AppBox, AppScreen, AppText } from "@/shared";
import { formatCurrency } from "@/utils";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

import { FlatList, ScrollView, StyleSheet } from "react-native";
import Svg, { Defs, RadialGradient, Rect, Stop } from "react-native-svg";

const quickInfoCards = [
  {
    "cardName": "Credit Limits",
    "amount": 5000
  },
  {
    "cardName": "Monthly Spend",
    "amount": 2325.50
  }
];

const transactionHistory: TRANSACTION_HISTORY[] = [
  {
    "title": "Netflix",
    "time": "Yesterday",
    "amount": 120.00
  },
  {
    "title": "Disney+",
    "time": "Yesterday",
    "amount": 120.00
  },
];

export interface TRANSACTION_HISTORY {
  title: string;
  time: string;
  amount: number;
}

function RadialBackground() {
  return (
    <AppBox style={StyleSheet.absoluteFillObject}>
      <Svg height="100%" width="100%">
        <Defs>
          {/* Production-stable mapping of your CSS coordinates */}
          <RadialGradient
            id="purpleGlow"
            cx="18.6%"
            cy="74.7%"
            rx="31.4%"
            ry="71.5%"
            fx="18.6%"
            fy="74.7%"
            gradientUnits="userSpaceOnUse"
          >
            <Stop offset="0%" stopColor="#9877FD" stopOpacity="1" />
            <Stop offset="100%" stopColor="#7747FD" stopOpacity="1" />
          </RadialGradient>
        </Defs>
        <Rect x="0" y="0" width="100%" height="100%" fill="url(#purpleGlow)" />
      </Svg>
    </AppBox>
  )
}


export default function Home() {
  const bottomHeight = useBottomTabBarHeight();
  return (
    <AppScreen>
      <ScreenHeader title="Hi, Jeremy!"
        description="Let’s make your banking needs easy!"
        withNavigator={false}
      />
      <ScrollView
        className="mt-8"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: bottomHeight * 1.75 }}
      >
        <AppBox className="p-6 " style={{ borderRadius: 36, overflow: "hidden" }}>
          <RadialBackground />
          <AppBox className="flex-row justify-between mb-8">
            <BrandCardImage />
            <AppBox className="bg-brand-100 rounded-2xl py-2 px-5 self-start">
              <AppText size={14} className="text-white">10/25</AppText>
            </AppBox>
          </AppBox>
          <AppBox>
            <AppText variant="b" className="text-white">7381 2929 2811 7739</AppText>
          </AppBox>
          <AppBox>
            <AppText size={20} className="text-white-100">Jeremy Palpale</AppText>
          </AppBox>
        </AppBox>

        <AppBox className="flex-row justify-between mt-8">
          {quickInfoCards.map(({ cardName, amount }, index) => (
            <AppBox withShadow={true} key={index} className="p-4 rounded-xl w-[45%]" >
              <AppText>{cardName}</AppText>
              <AppBox className="flex-row items-center">
                <AppText size={22}>$</AppText>
                <AppText variant="sb" size={22} className="text-grey-200">{formatCurrency(amount)}</AppText>
              </AppBox>
            </AppBox>
          ))}
        </AppBox>
        <AppBox className="mt-12">
          <AppText variant="b">History</AppText>
          <FlatList
            data={transactionHistory}
            ItemSeparatorComponent={() => <AppBox className="mb-6"></AppBox>}
            renderItem={({ item }) => (<TransactionCard historyItem={item} />)}
            keyExtractor={(_, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
            scrollEnabled={false}
          />
        </AppBox>
      </ScrollView>
    </AppScreen>
  );
}
