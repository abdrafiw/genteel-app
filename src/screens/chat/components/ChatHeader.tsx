import { Image, Text, View } from "react-native";

import { FontFamily } from "@/src/constants/Typography";

const AI_AVATAR = require("@/assets/images/ai-search/ai-img.png");

function ChatHeader() {
  return (
    <View className="items-center gap-4">
      <Image source={AI_AVATAR} className="w-[68px] h-[68px] rounded-full" />

      <Text
        style={{ fontFamily: FontFamily.loraBold }}
        className="text-2xl text-[#090A0A] text-center"
      >
        Welcome to{"\n"}AI Search
      </Text>
    </View>
  );
}

export default ChatHeader;
