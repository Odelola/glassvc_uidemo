import { BrandCardImage } from "@/assets/icons";
import { APP_COLORS, APP_COLORS_NAME } from "@/constants";
import { AppBox, AppScreen, AppText } from "@/shared";


export default function Onboarding() {

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

  return (
    <AppScreen>
      <AppBox className="mb-12">
        <AppText variant="b">Hi, Jeremy!</AppText>
        <AppText>Let’s make your banking needs easy!</AppText>
      </AppBox>
      <AppBox className="bg-brand rounded-[36px] p-6">
        <AppBox className="flex-row justify-between mb-8">
          <BrandCardImage />
          <AppBox className="bg-brand-100 rounded-xl py-2 px-5 self-start">
            <AppText size={14} className="text-red-500" style={{ color: APP_COLORS[APP_COLORS_NAME.WHITE] }}>10/25</AppText>
          </AppBox>
        </AppBox>
        <AppBox>
          <AppText variant="b" style={{ color: APP_COLORS[APP_COLORS_NAME.WHITE] }}>7381 2929 2811 7739</AppText>
        </AppBox>
        <AppBox>
          <AppText size={20} style={{ color: APP_COLORS[APP_COLORS_NAME.WHITE100] }}>Jeremy Palpale</AppText>
        </AppBox>
      </AppBox>
      <AppBox className="flex-row justify-between mt-8">
        {quickInfoCards.map(({cardName, amount}, index) => (
          <AppBox withShadow={true} key={index}>
            <AppText>{cardName}</AppText>
            <AppText>
              <AppText>$</AppText>
              <AppText>{amount}</AppText>
            </AppText>
          </AppBox>
        ))}
      </AppBox>
    </AppScreen>
  );
}
