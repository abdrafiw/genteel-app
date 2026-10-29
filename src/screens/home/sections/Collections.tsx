import { Image,Text, View } from "react-native";

import { FontFamily } from "@/src/constants/Typography";
import { PRODUCTS } from "@/src/data/products";

function Collections() {
  return (
    <View className="gap-4">
      <Text
        style={{ fontFamily: FontFamily.loraMedium }}
        className="uppercase text-xl px-5"
      >
        collections
      </Text>

      <View className="">
        {PRODUCTS.collections.map((item) => {
          return (
            <Image
              key={item.id}
              source={item.imgUrl}
              resizeMode="cover"
              className="w-full h-[240px] bg-red-500"
            />
          );
        })}
      </View>
    </View>
  );
}

export default Collections;
