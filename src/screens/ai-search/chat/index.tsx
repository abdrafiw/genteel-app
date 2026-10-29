import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { Image, Pressable, ScrollView, Text, View } from "react-native";

import { FontFamily } from "@/src/constants/Typography";
import ChatInput from "@/src/screens/chat/components/ChatInput";

const AI_AVATAR = require("@/assets/images/ai-search/ai-img.png");
const USER_AVATAR = "https://i.pravatar.cc/150?img=47";

type Message = {
  id: string;
  role: "user" | "ai";
  text: string;
  images?: { uri: string }[];
};

const MOCK_MESSAGES: Message[] = [
  {
    id: "1",
    role: "user",
    text: "Hello AI, can you give me 2 ways to style a grey pants and white top?",
  },
  {
    id: "2",
    role: "ai",
    text: "Certainly! Here are quick style tips for grey pants and a white top:\n\n1. **Casual Chic:** Add bold accessories and sneakers\n\n2. **Monochromatic Glam:** Use silver accents, opt for heels.",
  },
  {
    id: "3",
    role: "user",
    text: "Can you provide images of the style you described above?",
  },
  {
    id: "4",
    role: "ai",
    text: "Sure Here are two images for ways to style a grey pants and a white top:",
    images: [
      {
        uri: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=200",
      },
      {
        uri: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=200",
      },
    ],
  },
];

function ChatContent() {
  const [messages, setMessages] = useState<Message[]>(MOCK_MESSAGES);
  const [inputValue, setInputValue] = useState("");

  const handleSend = () => {
    if (!inputValue.trim()) return;
    setMessages((prev) => [
      ...prev,
      { id: String(prev.length + 1), role: "user", text: inputValue.trim() },
    ]);
    setInputValue("");
  };

  return (
    <View className="flex-1 bg-white px-5">
      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="gap-5">
          {messages.map((msg) => (
            <View key={msg.id} className="flex-row justify-between gap-2.5">
              <Image
                source={msg.role === "ai" ? AI_AVATAR : { uri: USER_AVATAR }}
                className="w-[31px] h-[31px] rounded-full"
              />

              <View
                className={`rounded-[4px] px-4 py-3 flex-1 ${
                  msg.role === "user" ? "bg-[#E4F7D2]" : "bg-[#F7F7F7]"
                }`}
              >
                <Text
                  style={{
                    fontFamily: FontFamily.nunitoRegular,
                  }}
                  className="text-[#090A0A] text-[15px]"
                >
                  {msg.text}
                </Text>

                {msg.images && msg.images.length > 0 && (
                  <View className="flex-row flex-wrap gap-2">
                    {msg.images.map((img, i) => (
                      <Image
                        key={i}
                        source={{ uri: img.uri }}
                        className="w-24 h-24 rounded-lg bg-[#E5E5E5]"
                        resizeMode="cover"
                      />
                    ))}
                  </View>
                )}
              </View>

              {msg.role === "ai" && (
                <View className="gap-2">
                  <Pressable>
                    <Feather name="copy" size={18} color="#898C8C" />
                  </Pressable>

                  <Pressable>
                    <Feather name="share-2" size={18} color="#898C8C" />
                  </Pressable>
                </View>
              )}
            </View>
          ))}
        </View>
      </ScrollView>

      <ChatInput
        value={inputValue}
        onChangeText={setInputValue}
        onSend={handleSend}
      />
    </View>
  );
}

export default ChatContent;
