import { Text, View } from "react-native";

import { FontFamily } from "@/src/constants/Typography";

function ImageContent() {
  return (
    <View className="flex-1 bg-white px-5 py-8">
      <Text
        style={{ fontFamily: FontFamily.nunitoRegular, fontSize: 16 }}
        className="text-[#626565]"
      >
        Image search — coming soon.
      </Text>
    </View>
  );
}

export default ImageContent;
