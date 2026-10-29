import { Text, View } from "react-native";

import { FontFamily } from "@/src/constants/Typography";

import type { ChatMode } from "./ModeTabs";

const PLACEHOLDER: Record<ChatMode, string> = {
  chat: "Ask me about styling, outfits, or product recommendations.",
  image: "Upload an image to get style suggestions.",
  video: "Share a video for outfit or trend ideas.",
};

type Props = {
  mode: ChatMode;
};

function ChatEmptyState({ mode }: Props) {
  return (
    <View className="flex-1 px-5 mt-8 items-center">
      <Text
        style={{ fontFamily: FontFamily.nunitoRegular }}
        className="text-sm text-[#626565] text-center"
      >
        {PLACEHOLDER[mode]}
      </Text>
    </View>
  );
}

export default ChatEmptyState;
