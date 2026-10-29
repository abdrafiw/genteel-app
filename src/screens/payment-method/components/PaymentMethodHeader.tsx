import { router } from "expo-router";
import { ChevronLeft } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";

import { FontFamily } from "@/src/constants/Typography";

export default function PaymentMethodHeader() {
  return (
    <View className="flex-row items-center justify-between h-9 relative">
      <TouchableOpacity onPress={() => router.back()} className="">
        <ChevronLeft size={24} color="#111827" />
      </TouchableOpacity>

      <Text
        style={{ fontFamily: FontFamily.loraMedium }}
        className="text-2xl text-[#090A0A]"
      >
        Payment Method
      </Text>

      <View className="w-6" />
    </View>
  );
}
