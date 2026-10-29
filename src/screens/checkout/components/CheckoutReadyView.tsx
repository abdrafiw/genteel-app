import { router } from "expo-router";
import { ChevronRight } from "lucide-react-native";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

import { FontFamily } from "@/src/constants/Typography";

const PLACEHOLDER_ADDRESS = {
  name: "Daph Edwards",
  line1: "4517 Washington Ave. Manchester",
  line2: "Kentucky 39495",
  phone: "(405) 555-0128",
};
const ORDER_SUBTOTAL = 370;
const DISCOUNT = 10.99;
const DELIVERY_FEES = "Free";
const TOTAL = 359;

type Props = {
  onPayNow: () => void;
};

export default function CheckoutReadyView({ onPayNow }: Props) {
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
        <View className="gap-5">
          {/* shipping address section */}
          <View className="">
            <View className="flex-row items-center justify-between mb-3">
              <Text
                style={{ fontFamily: FontFamily.loraMedium }}
                className="text-lg text-black"
              >
                Shipping address
              </Text>

              <TouchableOpacity
                onPress={() => router.push("/shipping-address")}
              >
                <Text
                  style={{ fontFamily: FontFamily.loraMedium }}
                  className="text-base text-[#898C8C]"
                >
                  Edit
                </Text>
              </TouchableOpacity>
            </View>

            <View className="gap-2">
              <Text
                style={{ fontFamily: FontFamily.nunitoSemiBold }}
                className="text-base text-[#343737]"
              >
                {PLACEHOLDER_ADDRESS.name}
              </Text>

              {/* address lines */}
              <View className="">
                <Text
                  style={{ fontFamily: FontFamily.nunitoRegular }}
                  className="text-sm text-[#626565]"
                >
                  {PLACEHOLDER_ADDRESS.line1},
                </Text>
                <Text
                  style={{ fontFamily: FontFamily.nunitoRegular }}
                  className="text-sm text-[#626565]"
                >
                  {PLACEHOLDER_ADDRESS.line2}
                </Text>
              </View>

              <Text
                style={{ fontFamily: FontFamily.nunitoRegular }}
                className="text-base text-[#626565]"
              >
                {PLACEHOLDER_ADDRESS.phone}
              </Text>
            </View>
          </View>

          {/* payment method section */}
          <TouchableOpacity
            onPress={() => router.push("/payment-method")}
            className="flex-row items-center gap-3 py-5 border-b border-[#E5E5E5] border-t"
          >
            <Image
              source={require("@/assets/icons/Mastercard.png")}
              className="w-10 h-7"
              resizeMode="contain"
            />
            <Text
              style={{ fontFamily: FontFamily.nunitoRegular }}
              className="text-base text-[#343737] flex-1"
            >
              Credit Card ending ••••24
            </Text>
            <ChevronRight size={20} color="#090A0A" />
          </TouchableOpacity>

          {/* order summary */}
          <View className="gap-2">
            <View className="flex-row justify-between">
              <Text
                style={{ fontFamily: FontFamily.loraMedium }}
                className="text-base text-[#090A0A]"
              >
                Order:
              </Text>
              <Text
                style={{ fontFamily: FontFamily.nunitoMedium }}
                className="text-base text-[#090A0A]"
              >
                ${ORDER_SUBTOTAL}
              </Text>
            </View>
            <View className="flex-row justify-between">
              <Text
                style={{ fontFamily: FontFamily.nunitoRegular }}
                className="text-sm text-[#979C9E]"
              >
                Discount
              </Text>
              <Text
                style={{ fontFamily: FontFamily.nunitoRegular }}
                className="text-sm text-[#979C9E]"
              >
                {DISCOUNT.toFixed(2)}$
              </Text>
            </View>
            <View className="flex-row justify-between">
              <Text
                style={{ fontFamily: FontFamily.nunitoRegular }}
                className="text-sm text-[#979C9E]"
              >
                Delivery Fees
              </Text>
              <Text
                style={{ fontFamily: FontFamily.nunitoRegular }}
                className="text-sm text-[#979C9E]"
              >
                {DELIVERY_FEES}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View className="gap-[22px]">
        {/* total */}
        <View className="flex-row justify-between items-center py-4">
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
            ${TOTAL}
          </Text>
        </View>

        <TouchableOpacity
          onPress={onPayNow}
          className="bg-primary h-[50px] rounded-lg items-center justify-center"
        >
          <Text
            style={{ fontFamily: FontFamily.nunitoSemiBold }}
            className="text-lg text-[#090A0A]"
          >
            Pay now
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
