import { Ionicons } from "@expo/vector-icons";
import { Image, ImageSourcePropType, Pressable, Text, View } from "react-native";

import { FontFamily } from "@/src/constants/Typography";

interface FavoriteProductCardProps {
  item: {
    id: number;
    name: string;
    imgUrl: ImageSourcePropType;
    description: string;
    price: number;
  };
}

function FavoriteProductCard({ item }: FavoriteProductCardProps) {
  const { name, imgUrl, description, price } = item;

  const handleHeartPress = () => {
    // Handle unfavorite action
    console.log("Unfavorite:", name);
  };

  return (
    <View className="w-[48%] gap-2">
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
        className="text-[18px] text-[#111827]"
        style={{ fontFamily: FontFamily.loraMedium }}
      >
        {name}
      </Text>

      <Text
        className="text-[12px] text-[#626565]"
        style={{ fontFamily: FontFamily.loraRegular }}
      >
        {description}
      </Text>

      <Text
        className="text-[18px] text-[#FF4B9E]"
        style={{ fontFamily: FontFamily.loraMedium }}
      >
        ${price}
      </Text>
    </View>
  );
}

export default FavoriteProductCard;
