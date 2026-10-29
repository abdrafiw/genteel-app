import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

import { FontFamily } from "@/src/constants/Typography";

const settingsOptions = [
  {
    icon: "person-outline",
    title: "Personal information",
  },
  {
    icon: "bag-outline",
    title: "Orders",
  },
  {
    icon: "shield-checkmark-outline",
    title: "Privacy Policy",
  },
  {
    icon: "globe-outline",
    title: "Location & Language",
  },
];

export default function SettingsTab() {
  return (
    <View className="gap-8">
      {/* settings options */}
      <View className="gap-8">
        {settingsOptions.map((option) => (
          <Pressable
            key={option.title}
            className="flex-row items-center justify-between py-4 px-2 border-b border-gray-200"
          >
            <View className="flex-row items-center gap-4">
              <Ionicons name={option.icon as any} size={24} color="#090A0A" />
              <Text
                style={{ fontFamily: FontFamily.nunitoRegular }}
                className="text-text-primary text-[17px] font-medium"
              >
                {option.title}
              </Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color="#626565" />
          </Pressable>
        ))}
      </View>

      {/* logout button */}
      <Pressable className="py-4 px-2 border border-secondary mt-6">
        <Text
          className="text-secondary text-center"
          style={{ fontFamily: FontFamily.nunitoSemiBold }}
        >
          Log out
        </Text>
      </Pressable>
    </View>
  );
}
