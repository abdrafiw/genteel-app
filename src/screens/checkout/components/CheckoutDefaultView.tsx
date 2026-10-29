import { router } from "expo-router";
import { ChevronDown, ChevronRight, Plus } from "lucide-react-native";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

import { FontFamily } from "@/src/constants/Typography";
import { useCheckout } from "@/src/contexts/CheckoutContext";

type Props = {
  payTotal: number;
  onPay: () => void;
};

export default function CheckoutDefaultView({ payTotal, onPay }: Props) {
  const { hasAddress } = useCheckout();

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
        <View className="gap-[30px]">
          {/* shipping method */}
          <View className="gap-[10px]">
            <Text
              style={{ fontFamily: FontFamily.loraRegular }}
              className="text-[#898C8C] text-[14px]"
            >
              Shipping Method
            </Text>

            <View className="flex-row items-center justify-between bg-[#C4C4C4]/10 rounded-lg px-4 py-4">
              <Text
                style={{ fontFamily: FontFamily.nunitoRegular }}
                className="text-base text-[#343737]"
              >
                Shipping method
              </Text>

              <View className="flex-row items-center gap-2">
                <Text
                  style={{ fontFamily: FontFamily.nunitoMedium }}
                  className="text-base text-[#090A0A]"
                >
                  FREE
                </Text>
                <ChevronDown size={20} color="#626565" />
              </View>
            </View>
          </View>

          {/* shipping address */}
          <View className="gap-[10px]">
            <Text
              style={{ fontFamily: FontFamily.nunitoMedium }}
              className="text-[#898C8C] text-[14px]"
            >
              Shipping Address
            </Text>

            <TouchableOpacity
              onPress={() => router.push("/shipping-address")}
              className="flex-row items-center justify-between bg-[#C4C4C4]/10 rounded-lg px-4 py-4"
            >
              <Text
                style={{ fontFamily: FontFamily.nunitoRegular }}
                className="text-base text-[#343737]"
              >
                {hasAddress ? "Address added" : "Add shipping address"}
              </Text>
              {hasAddress ? (
                <ChevronRight size={20} color="#090A0A" />
              ) : (
                <Plus size={20} color="#090A0A" />
              )}
            </TouchableOpacity>
          </View>

          {/* payment method */}
          <View className="gap-[10px]">
            <Text
              style={{ fontFamily: FontFamily.nunitoMedium }}
              className="text-[#898C8C] text-[14px]"
            >
              Payment Method
            </Text>

            <TouchableOpacity
              onPress={() => router.push("/payment-method")}
              className="flex-row items-center justify-between bg-[#C4C4C4]/10 rounded-lg px-4 py-4"
            >
              <Text
                style={{ fontFamily: FontFamily.nunitoRegular }}
                className="text-base text-[#343737]"
              >
                Select payment method
              </Text>
              <ChevronRight size={20} color="#090A0A" />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <TouchableOpacity
        onPress={onPay}
        className="bg-primary h-[50px] rounded-lg items-center justify-center"
      >
        <Text
          style={{ fontFamily: FontFamily.nunitoSemiBold }}
          className="text-lg text-[#090A0A]"
        >
          Pay - ${payTotal}
        </Text>
      </TouchableOpacity>
    </>
  );
}
