import {
  Image,
  ImageSourcePropType,
  Pressable,
  Text,
  View,
} from "react-native";

import { FontFamily } from "@/src/constants/Typography";

export type RecentSearchItemModel = {
  id: string;
  label: string;
  imgUrl: ImageSourcePropType;
};

type Props = {
  item: RecentSearchItemModel;
  onPress: () => void;
};

function RecentSearchItem({ item, onPress }: Props) {
  return (
    <Pressable className="items-center w-[72px] mr-3" onPress={onPress}>
      <View className="w-14 h-14 rounded-xl bg-[#F7F7F7] overflow-hidden">
        <Image
          source={item.imgUrl}
          className="w-full h-full"
          resizeMode="cover"
        />
      </View>
      <Text
        style={{ fontFamily: FontFamily.nunitoRegular }}
        className="text-xs text-[#343737] mt-1.5 text-center"
        numberOfLines={2}
      >
        {item.label}
      </Text>
    </Pressable>
  );
}

export default RecentSearchItem;
