import { ScreenHeader } from "@/components";
import { AppBox, AppButton, AppScreen, AppText } from "@/shared";



export default function Onboarding() {

  return (
    <AppScreen>
      <ScreenHeader title="Create Virtual Card"
        description="Fresh virtual credit card are on your way!"
      />
      <AppBox>
        <AppButton buttonText="Create Card" />
      </AppBox>
    </AppScreen >
  );
}
