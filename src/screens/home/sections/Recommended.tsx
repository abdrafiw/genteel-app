import { Text,View } from "react-native";

import ProductWithPrice from "@/src/components/ProductWithPrice";
import { FontFamily } from "@/src/constants/Typography";
import { PRODUCTS } from "@/src/data/products";

function Recommended() {
  return (
    <View className="gap-4 px-5">
      <Text
        style={{ fontFamily: FontFamily.loraMedium }}
        className="uppercase text-xl"
      >
        recommended
      </Text>

      <Text className="">
        Get 10% off on purchase in{" "}
        <Text className="text-secondary">11:59:59hrs</Text>
      </Text>

      <View className="flex-row gap-4">
        {PRODUCTS.recommended.map((item) => (
          <ProductWithPrice key={item.id} item={item} />
        ))}
      </View>
    </View>
  );
}

export default Recommended;
