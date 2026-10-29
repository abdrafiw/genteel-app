import { Ionicons } from "@expo/vector-icons";
import { Pressable, TextInput, View } from "react-native";

import { FontFamily } from "@/src/constants/Typography";

type Props = {
  value?: string;
  onChangeText?: (text: string) => void;
  onCameraPress?: () => void;
  onMicPress?: () => void;
};

function AISearchBar({
  value,
  onChangeText,
  onCameraPress,
  onMicPress,
}: Props) {
  return (
    <View className="flex-row items-center bg-[#F7F7F7] h-[52px] px-3 rounded-lg gap-2">
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder="Ask me anything..."
        placeholderTextColor="#626565"
        style={{
          flex: 1,
          fontFamily: FontFamily.nunitoRegular,
          fontSize: 16,
        }}
      />
      <Pressable onPress={onCameraPress} className="p-1.5">
        <Ionicons name="camera-outline" size={22} color="#343737" />
      </Pressable>
      <Pressable onPress={onMicPress} className="p-1.5">
        <Ionicons name="mic-outline" size={22} color="#343737" />
      </Pressable>
    </View>
  );
}

export default AISearchBar;
