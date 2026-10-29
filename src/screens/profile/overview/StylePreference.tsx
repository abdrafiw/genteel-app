import { Ionicons } from "@expo/vector-icons";
import { Image, Pressable,Text, View } from "react-native";

import { FontFamily } from "@/src/constants/Typography";

function StylePreference() {
  const styleOptions = [
    {
      name: "Casual Chic",
      imgUrl: require("@/assets/images/profile/overview/img01.png"),
    },
    {
      name: "Classic",
      imgUrl: require("@/assets/images/profile/overview/img02.png"),
    },
    {
      name: "Preppy Look",
      imgUrl: require("@/assets/images/profile/overview/img03.png"),
    },
    {
      name: "Minimalist",
      imgUrl: require("@/assets/images/profile/overview/img04.png"),
    },
  ];

  const style = {
    fontFamily: FontFamily.loraMedium,
  };

  return (
    <View className="gap-[10px]">
      <Text style={style} className="text-text-primary text-base">
        Style Preference
      </Text>

      {/* <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          justifyContent: "space-between",
          flexGrow: 1,
        }}
      > */}
      <View className="flex-row justify-between flex-1">
        {styleOptions.map((style, index) => (
          <View key={index} className="gap-1">
            <Image
              source={style.imgUrl}
              className="w-[79.52px] h-[77.83px]"
              resizeMode="cover"
            />
            <Text
              className="text-[13px] text-text-primary"
              style={{ fontFamily: FontFamily.nunitoRegular }}
            >
              {style.name}
            </Text>
          </View>
        ))}
      </View>
      {/* </ScrollView> */}

      <Pressable className="flex-row gap-1 items-center mt-4 w-max">
        <Text style={{ fontFamily: FontFamily.loraMedium }}>View All</Text>
        <Ionicons
          name="chevron-forward"
          size={14}
          color="#090A0A"
          className="flex items-center justify-center"
        />
      </Pressable>
    </View>
  );
}

export default StylePreference;
