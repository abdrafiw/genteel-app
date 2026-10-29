import { Ionicons } from "@expo/vector-icons";
import { Pressable,TextInput, View } from "react-native";

import { FontFamily } from "@/src/constants/Typography";

type SearchBarProps = {
  value?: string;
  onChangeText?: (text: string) => void;
  onSearchPress?: () => void;
  onCameraPress?: () => void;
  onMicPress?: () => void;
};

export default function SearchBar({
  value,
  onChangeText,
  onSearchPress,
  onCameraPress,
  onMicPress,
}: SearchBarProps) {
  return (
    <View className="flex-row items-center bg-[#F7F7F7] h-[48px] px-3 rounded-lg gap-[10px]">
      <Pressable onPress={onSearchPress}>
        <Ionicons
          name="search-outline"
          size={20}
          color="#343737"
          className=""
        />
      </Pressable>

      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder="Let's shop for anything.."
        placeholderTextColor="#626565"
        placeholderClassName="text-red-500"
        className="flex-1 mx-3 text-base text-black"
        style={{
          backgroundColor: "transparent",
          fontFamily: FontFamily.nunitoRegular,
        }}
      />

      <View className="flex-row items-center gap-4">
        <Pressable onPress={onCameraPress}>
          <Ionicons name="camera-outline" size={24} color="#343737" />
        </Pressable>

        <Pressable onPress={onMicPress}>
          <Ionicons name="mic-outline" size={24} color="#343737" />
        </Pressable>
      </View>
    </View>
  );
}
