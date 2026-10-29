import { Ionicons } from "@expo/vector-icons";
import {
  Image,
  ImageSourcePropType,
  Pressable,
  Text,
  View,
} from "react-native";

import { FontFamily } from "@/src/constants/Typography";

interface RecommendedItemProps {
  item: {
    id: number;
    name: string;
    imgUrl: ImageSourcePropType;
    description: string;
    price: number;
  };
}

function RecommendedItem({ item }: RecommendedItemProps) {
  const { name, imgUrl, price } = item;

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
          <Ionicons name="heart-outline" size={20} color="#FF4B9E" />
        </Pressable>
      </View>

      <Text
        className="text-base text-text-primary"
        style={{ fontFamily: FontFamily.loraMedium }}
      >
        {name}
      </Text>

      <Text
        className="text-[14px] text-secondary"
        style={{ fontFamily: FontFamily.nunitoLight }}
      >
        ${price}
      </Text>
    </View>
  );
}

export default RecommendedItem;
