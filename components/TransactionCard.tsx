import { TRANSACTION_HISTORY } from "@/app/(tabs)/home";
import { SendMoneyOutIcon } from "@/assets/icons";
import { APP_COLORS, APP_COLORS_NAME } from "@/constants";
import { AppBox, AppText } from "@/shared";

export default function TransactionCard({ historyItem }: { historyItem: TRANSACTION_HISTORY }) {

    return (
        <AppBox className="flex-row justify-between items-center">
            <AppBox className="flex-row mr-4">
                <AppBox withShadow={true} className="rounded-3xl items-end">
                    <SendMoneyOutIcon />
                </AppBox>
                <AppBox style={{ marginLeft: 20 }}>
                    <AppText variant="sb">{historyItem.title}</AppText>
                    <AppText >{historyItem.time}</AppText>
                </AppBox>
            </AppBox>
            <AppBox>
                <AppText variant="sb" style={{ color: APP_COLORS[APP_COLORS_NAME.BRAND200] }}>{`$${historyItem.amount}`}</AppText>
            </AppBox>
        </AppBox>
    )
}