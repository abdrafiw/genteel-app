import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";

import { FontFamily } from "@/src/constants/Typography";

const AI_AVATAR = require("@/assets/images/ai-search/ai-img.png");

function AISearchHeader() {
  const router = useRouter();

  return (
    <View className="px-5 gap-2.5">
      <View className="flex-row items-center justify-between">
        <View className="flex-row gap-4 items-center">
          <Pressable
            onPress={() => router.back()}
            className="flex-row items-center -ml-2.5"
          >
            <Feather name="chevron-left" size={24} color="#090A0A" />
          </Pressable>

          <Text
            style={{ fontFamily: FontFamily.loraBold }}
            className="text-xl text-[#343737]"
          >
            Genteel AI
          </Text>
        </View>

        <Image source={AI_AVATAR} className="w-10 h-10 rounded-full" />
      </View>

      <Text
        className="text-sm text-[#323232]"
        style={{ fontFamily: FontFamily.nunitoMedium }}
      >
        Chat and <Text className="text-[#FF4B9E]">personalize your feed!</Text>
      </Text>
    </View>
  );
}

export default AISearchHeader;
