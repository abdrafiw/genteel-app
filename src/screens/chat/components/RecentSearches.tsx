import { Text, View } from "react-native";

import { FontFamily } from "@/src/constants/Typography";

import type { SubsectionItem } from "./SearchSubsection";
import SearchSubsection from "./SearchSubsection";

type Props = {
  nearbyStores: SubsectionItem[];
  latestShoes: SubsectionItem[];
  popularBrands: SubsectionItem[];
  onItemPress?: (item: SubsectionItem) => void;
};

function RecentSearches({
  nearbyStores,
  latestShoes,
  popularBrands,
  onItemPress,
}: Props) {
  return (
    <View className="gap-5">
      <Text
        style={{ fontFamily: FontFamily.nunitoRegular, fontSize: 12 }}
        className="uppercase text-[#626565] tracking-wide"
      >
        Recent searches
      </Text>

      <SearchSubsection
        title="Nearby Fashion Stores"
        items={nearbyStores}
        onItemPress={onItemPress}
        showLabel={false}
      />

      <SearchSubsection
        title="Latest Shoes"
        items={latestShoes}
        onItemPress={onItemPress}
        showLabel={false}
      />

      <SearchSubsection
        title="Popular Brands"
        items={popularBrands}
        onItemPress={onItemPress}
        showLabel={true}
        imageResizeMode="contain"
      />
    </View>
  );
}

export default RecentSearches;
