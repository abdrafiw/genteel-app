import { Feather, Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

import { FontFamily } from "@/src/constants/Typography";

function CatalogHeader() {
  return (
    <View className="flex-row items-center justify-between mt-5">
      <Text style={{ fontFamily: FontFamily.loraMedium }} className="text-2xl">
        CATALOG
      </Text>

      <View className="flex-row gap-5">
        <Feather name="heart" size={24} color="black" />

        <View className="relative">
          <View className="w-[6px] h-[6px] bg-[#00C883] rounded-full absolute right-1 top-1 z-50"></View>
          <Ionicons name="notifications-outline" size={24} color="black" />
        </View>
      </View>
    </View>
  );
}

export default CatalogHeader;
