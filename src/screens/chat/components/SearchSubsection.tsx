import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import {
  Image,
  ImageSourcePropType,
  Pressable,
  Text,
  View,
} from "react-native";

import { FontFamily } from "@/src/constants/Typography";

const COLS = 4;
const GAP = 7;

export type SubsectionItem = {
  id: string;
  imgUrl: ImageSourcePropType;
  label?: string;
};

type Props = {
  title: string;
  onViewAll?: () => void;
  items: SubsectionItem[];
  onItemPress?: (item: SubsectionItem) => void;
  showLabel?: boolean;
  imageResizeMode?: "cover" | "contain";
};

function SearchSubsection({
  title,
  onViewAll,
  items,
  onItemPress,
  showLabel = false,
  imageResizeMode = "cover",
}: Props) {
  const [containerWidth, setContainerWidth] = useState(0);

  const itemSize =
    containerWidth > 0 ? (containerWidth - GAP * (COLS - 1)) / COLS : 0;

  return (
    <View className="gap-2.5">
      <Text
        style={{ fontFamily: FontFamily.loraMedium }}
        className="text-base text-[#343737]"
      >
        {title}
      </Text>

      <View
        className="flex-row flex-wrap"
        style={{ gap: GAP }}
        onLayout={(e) => setContainerWidth(e.nativeEvent.layout.width)}
      >
        {items.map((item) => (
          <View key={item.id} style={{ width: itemSize }} className="gap-1">
            <View
              className="bg-[#F7F7F7] overflow-hidden"
              style={{ width: itemSize, height: itemSize }}
            >
              <Image
                source={item.imgUrl}
                className="w-full h-full"
                resizeMode={imageResizeMode}
              />
            </View>

            {showLabel && item.label ? (
              <Text
                style={{ fontFamily: FontFamily.nunitoRegular, fontSize: 13 }}
                className="text-[#090A0A]"
              >
                {item.label}
              </Text>
            ) : null}
          </View>
        ))}
      </View>

      <Pressable onPress={onViewAll} className="flex-row items-center gap-1">
        <Text
          style={{ fontFamily: FontFamily.loraMedium, fontSize: 14 }}
          className="text-[#343737]"
        >
          View All
        </Text>
        <Feather name="chevron-right" size={16} color="#343737" />
      </Pressable>
    </View>
  );
}

export default SearchSubsection;
