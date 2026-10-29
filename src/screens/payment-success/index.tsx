import { router } from "expo-router";
import { Check } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { FontFamily } from "@/src/constants/Typography";

const ORDER_NUMBER = "123467890246";

export default function PaymentSuccessScreen() {
  const handleBackToHome = () => {
    router.replace("/(tabs)");
  };

  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top", "left", "right"]}>
      <View className="px-8 flex-1 flex-col justify-center">
        <View className="gap-[15px] justify-center items-center">
          {/* success icon */}
          <View className="w-[64px] h-[61px] rounded-full border-4 border-[#00C883] items-center justify-center">
            <Check size={32} color="#00C883" />
          </View>

          {/* heading */}
          <Text
            style={{ fontFamily: FontFamily.loraRegular }}
            className="text-[32px] text-[#090A0A] text-center"
          >
            Payment successful!
          </Text>

          <View className="">
            {/* order number */}
            <Text
              style={{ fontFamily: FontFamily.nunitoRegular }}
              className="text-base text-[#6B7280] text-center mb-2"
            >
              Order number: {ORDER_NUMBER}
            </Text>

            {/* thank you */}
            <Text
              style={{ fontFamily: FontFamily.nunitoRegular }}
              className="text-base text-[#6B7280] text-center mb-10"
            >
              Thank you for shopping!
            </Text>
          </View>
        </View>

        {/* back to home button */}
        <TouchableOpacity
          onPress={handleBackToHome}
          className="bg-primary px-8 rounded-[4px] w-full h-[50px] items-center justify-center"
        >
          <Text
            style={{ fontFamily: FontFamily.nunitoSemiBold }}
            className="text-lg text-[#090A0A]"
          >
            Back to home
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
