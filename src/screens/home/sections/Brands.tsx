import { Image,Text, View } from "react-native";

import { FontFamily } from "@/src/constants/Typography";

const DIVIDER = require("@/assets/images/home/brands/Devider.png");

function Brands() {
  const BRANDS = [
    { id: 1, url: require("@/assets/images/home/brands/Prada.png") },
    { id: 2, url: require("@/assets/images/home/brands/Burberry.png") },
    { id: 3, url: require("@/assets/images/home/brands/Boss.png") },
    { id: 4, url: require("@/assets/images/home/brands/Catier.png") },
    { id: 5, url: require("@/assets/images/home/brands/Gucci.png") },
    { id: 6, url: require("@/assets/images/home/brands/Tiffany & Co.png") },
  ];

  return (
    <View className="gap-4 px-5">
      <Text
        style={{ fontFamily: FontFamily.loraMedium }}
        className="uppercase text-xl"
      >
        Brands
      </Text>

      <Image
        source={DIVIDER}
        resizeMode="contain"
        className="w-[192.96px] mx-auto"
      />

      <View className="flex-row flex-wrap">
        {BRANDS.map((item) => (
          <View key={item.id} className="w-1/3 p-2 items-center justify-center">
            <View className="h-16 w-full items-center justify-center">
              <Image
                source={item.url}
                resizeMode="contain"
                className="h-[2rem] w-full"
              />
            </View>
          </View>
        ))}
      </View>

      <Image
        source={DIVIDER}
        resizeMode="contain"
        className="w-[192.96px] mx-auto"
      />
    </View>
  );
}

export default Brands;
