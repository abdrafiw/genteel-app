import { Feather } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import { type ImageSourcePropType, Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import CHAT_ICON from "@/assets/icons/chat.png";
import IMAGE_ICON from "@/assets/icons/image.png";
import VIDEO_ICON from "@/assets/icons/video.png";
import { FontFamily } from "@/src/constants/Typography";
import ChatContent from "@/src/screens/ai-search/chat";
import AISearchHeader from "@/src/screens/ai-search/components/AISearchHeader";
import ImageContent from "@/src/screens/ai-search/image";
import VideoContent from "@/src/screens/ai-search/video";
import type { ChatMode } from "@/src/screens/chat/components/ModeTabs";

const TABS: { key: ChatMode; label: string; icon: ImageSourcePropType }[] = [
  { key: "chat", label: "Chat", icon: CHAT_ICON },
  { key: "image", label: "Image", icon: IMAGE_ICON },
  { key: "video", label: "Video", icon: VIDEO_ICON },
];

function AISearchScreen() {
  const { mode: paramMode } = useLocalSearchParams<{ mode?: string }>();
  const initialMode: ChatMode =
    paramMode === "image" || paramMode === "video" ? paramMode : "chat";
  const [mode, setMode] = useState<ChatMode>(initialMode);

  const renderContent = () => {
    switch (mode) {
      case "chat":
        return <ChatContent />;
      case "image":
        return <ImageContent />;
      case "video":
        return <VideoContent />;
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white mt-5 gap-6">
      <View className="gap-2">
        <AISearchHeader />

        <View className="flex-row items-center gap-2.5 px-5 py-3 justify-between">
          <View className="flex-row gap-3">
            {TABS.map(({ key, label, icon }) => (
              <Pressable
                key={key}
                onPress={() => setMode(key)}
                className={`flex-row items-center justify-center px-3 h-[44px] gap-2 rounded-full ${
                  mode === key && "bg-[#00C883]"
                }`}
              >
                <Text
                  style={{
                    fontFamily: FontFamily.nunitoSemiBold,
                    fontSize: 16,
                  }}
                  className={mode === key ? "text-white" : "text-[#898C8C]"}
                >
                  {label}
                </Text>
              </Pressable>
            ))}
          </View>

          <Pressable className="p-2" hitSlop={8}>
            <Feather name="search" size={22} color="#090A0A" />
          </Pressable>
        </View>
      </View>

      <View className="flex-1">{renderContent()}</View>
    </SafeAreaView>
  );
}

export default AISearchScreen;
