import { Ionicons } from "@expo/vector-icons";
import {
  Image,
  ImageSourcePropType,
  Pressable,
  Text,
  View,
} from "react-native";

import { FontFamily } from "@/src/constants/Typography";

interface SavedItemProps {
  item: {
    id: number;
    name: string;
    imgUrl: ImageSourcePropType;
    desc: string;
    price: number;
  };
}

function SavedItem({ item }: SavedItemProps) {
  const { name, imgUrl, desc, price } = item;

  const handleHeartPress = () => {
    console.log("Heart pressed for:", name);
  };

  return (
    <View className="gap-2 flex-1">
      <View className="relative">
        <Image
          source={imgUrl}
          className="h-[200px] w-full rounded-sm"
          resizeMode="cover"
        />

        <Pressable
          onPress={handleHeartPress}
          className="absolute top-[12.25px] right-[13.5px]"
        >
          <Ionicons name="heart" size={20} color="#FF4B9E" />
        </Pressable>
      </View>

      <Text
        className="text-[18px] text-text-primary"
        style={{ fontFamily: FontFamily.loraMedium }}
      >
        {name}
      </Text>

      <Text
        className="text-[12px] text-[#626565]"
        style={{ fontFamily: FontFamily.loraRegular }}
      >
        {desc}
      </Text>

      <Text
        className="text-[18px] text-secondary"
        style={{ fontFamily: FontFamily.loraMedium }}
      >
        ${price}
      </Text>
    </View>
  );
}

export default SavedItem;
