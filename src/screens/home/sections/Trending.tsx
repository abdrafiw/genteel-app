import { Text,View } from "react-native";

import { FontFamily } from "@/src/constants/Typography";

import TrendingItem from "../components/TrendingItem";

function Trending() {
  const TRENDING_ITEMS = [
    {
      id: 1,
      name: "Crystal Cascade by Joe Waterman",
      imgUrl: require("@/assets/images/profile/overview/saved-item01.jpg"),
      productCount: 20,
    },

    {
      id: 2,
      name: "Style Guide by Juliette Johnson",
      imgUrl: require("@/assets/images/profile/overview/saved-item02.jpg"),
      productCount: 20,
    },
  ];

  return (
    <View className="gap-4 px-5">
      <Text
        style={{ fontFamily: FontFamily.loraMedium }}
        className="uppercase text-xl"
      >
        trending now
      </Text>

      <View className="flex-row gap-4">
        {TRENDING_ITEMS.map((item) => (
          <TrendingItem key={item.id} item={item} />
        ))}
      </View>
    </View>
  );
}

export default Trending;
