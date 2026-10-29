import { router } from "expo-router";
import { ChevronLeft } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";

import { FontFamily } from "@/src/constants/Typography";

export default function ShippingAddressHeader() {
  return (
    <View className="flex-row items-center justify-between h-9">
      <TouchableOpacity onPress={() => router.back()} hitSlop={12}>
        <ChevronLeft size={24} color="#111827" />
      </TouchableOpacity>

      <View
        className="flex-1 items-center justify-center absolute left-0 right-0"
        pointerEvents="none"
      >
        <Text
          style={{ fontFamily: FontFamily.loraMedium }}
          className="text-2xl text-[#090A0A]"
        >
          Shipping Address
        </Text>
      </View>

      <View className="w-6" />
    </View>
  );
}
