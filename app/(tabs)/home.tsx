import { BrandCardImage } from "@/assets/icons";
import { TransactionCard } from "@/components";
import { APP_COLORS, APP_COLORS_NAME } from "@/constants";
import { AppBox, AppScreen, AppText } from "@/shared";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";

import { LinearGradient } from 'expo-linear-gradient';
import { FlatList, ScrollView } from "react-native";

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
export default function Onboarding() {

  const bottomHeight = useBottomTabBarHeight();
  return (
    <AppScreen>
      <AppBox className="mb-12">
        <AppText variant="b">Hi, Jeremy!</AppText>
        <AppText>Let’s make your banking needs easy!</AppText>
      </AppBox>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: bottomHeight / 2 }}
      >
        <LinearGradient
          colors={['#9877FD', '#7747FD']}
          style={{ borderRadius: 36 }}
          // locations={[-.3, -.6]}
          start={{ x: -.12, y: .55 }}
        >
          <AppBox className="rounded-[36px] p-6">
            <AppBox className="flex-row justify-between mb-8">
              <BrandCardImage />
              <AppBox className="bg-brand-100 rounded-xl py-2 px-5 self-start">
                <AppText size={14} style={{ color: APP_COLORS[APP_COLORS_NAME.WHITE] }}>10/25</AppText>
              </AppBox>
            </AppBox>
            <AppBox>
              <AppText variant="b" style={{ color: APP_COLORS[APP_COLORS_NAME.WHITE] }}>7381 2929 2811 7739</AppText>
            </AppBox>
            <AppBox>
              <AppText size={20} style={{ color: APP_COLORS[APP_COLORS_NAME.WHITE100] }}>Jeremy Palpale</AppText>
            </AppBox>
          </AppBox>

        </LinearGradient>
        <AppBox className="flex-row justify-between mt-8">
          {quickInfoCards.map(({ cardName, amount }, index) => (
            <AppBox withShadow={true} key={index} className="p-4 rounded-xl w-[45%]" >
              <AppText>{cardName}</AppText>
              <AppBox className="flex-row">
                <AppText size={22}>$</AppText>
                <AppText size={22} style={{ color: APP_COLORS[APP_COLORS_NAME.GREY200] }}>{amount.toLocaleString('en-US', {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2
                })}</AppText>
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
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
            scrollEnabled={false}
          />
        </AppBox>
      </ScrollView>
    </AppScreen>
  );
}
