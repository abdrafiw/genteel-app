import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

import { FontFamily } from "@/src/constants/Typography";

type Props = {
  total: number;
  discount: number;
  deliveryFeesText?: string;
  checkoutTotal: number;
  onCheckout?: () => void;
};

function CartSummary({
  total,
  discount,
  deliveryFeesText = "Free",
  checkoutTotal,
}: Props) {
  return (
    <View className="bg-[#C4C4C4]/10 px-[23px] py-[17.5px] gap-5">
      <View className="gap-[7px]">
        <View className="flex-row justify-between">
          <Text
            style={{ fontFamily: FontFamily.loraMedium }}
            className="text-xl text-[#090A0A]"
          >
            Total:
          </Text>

          <Text
            style={{ fontFamily: FontFamily.loraMedium }}
            className="text-xl text-[#090A0A]"
          >
            ${total}
          </Text>
        </View>

        <View className="flex-row justify-between">
          <Text
            style={{ fontFamily: FontFamily.loraMedium }}
            className="text-sm text-[#979C9E]"
          >
            Discount
          </Text>
          <Text
            style={{ fontFamily: FontFamily.loraMedium }}
            className="text-sm text-[#979C9E]"
          >
            {discount.toFixed(2)}$
          </Text>
        </View>

        <View className="flex-row justify-between">
          <Text
            style={{ fontFamily: FontFamily.loraMedium }}
            className="text-sm text-[#979C9E]"
          >
            Delivery Fees
          </Text>

          <Text
            style={{ fontFamily: FontFamily.loraMedium }}
            className="text-sm text-[#979C9E]"
          >
            {deliveryFeesText}
          </Text>
        </View>
      </View>

      <TouchableOpacity
        onPress={() => router.push("/checkout")}
        className="bg-primary py-4 rounded-lg items-center"
      >
        <Text
          style={{ fontFamily: FontFamily.nunitoSemiBold }}
          className="text-lg text-[#090A0A]"
        >
          Checkout - ${checkoutTotal.toFixed(0)}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default CartSummary;
