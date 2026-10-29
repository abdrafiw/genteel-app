import { Pressable, Text, TextInput, View } from "react-native";

import { FontFamily } from "@/src/constants/Typography";

type Props = {
  value: string;
  onChangeText: (text: string) => void;
  onSend?: () => void;
};

function ChatInput({ value, onChangeText, onSend }: Props) {
  return (
    <View className="px-5 py-4 border-t border-[#E5E5E5] bg-white">
      <View className="flex-row items-center bg-[#F7F7F7] rounded-full pl-4 pr-2 py-2 gap-2">
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder="Type a message..."
          placeholderTextColor="#626565"
          style={{
            flex: 1,
            fontFamily: FontFamily.nunitoRegular,
            fontSize: 16,
            paddingVertical: 8,
          }}
        />
        <Pressable
          className="bg-[#090A0A] rounded-full w-10 h-10 items-center justify-center"
          onPress={onSend}
        >
          <Text
            style={{ fontFamily: FontFamily.nunitoSemiBold }}
            className="text-white text-base"
          >
            →
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

export default ChatInput;
