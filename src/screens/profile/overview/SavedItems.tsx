import { Ionicons } from "@expo/vector-icons";
import { Pressable,Text, View } from "react-native";

import { FontFamily } from "@/src/constants/Typography";

import SavedItem from "../components/SavedItem";

function SavedItems() {
  const savedItems = [
    {
      id: 1,
      name: "Prada",
      imgUrl: require("@/assets/images/profile/overview/saved-item01.jpg"),
      desc: "PradaElegance Mini handbag",
      price: 240,
    },

    {
      id: 2,
      name: "Lamerei",
      desc: "Reversible Angora Sweater",
      imgUrl: require("@/assets/images/profile/overview/saved-item02.jpg"),
      price: 60,
    },
  ];

  const style = { fontFamily: FontFamily.loraMedium };

  return (
    <View className="gap-[10px]">
      <Text style={style} className="text-text-primary text-base">
        Saved Items
      </Text>

      <View className="flex-row gap-4">
        {savedItems.map((item) => (
          <SavedItem key={item.id} item={item} />
        ))}
      </View>

      <Pressable className="flex-row gap-1 items-center mt-4">
        <Text style={{ fontFamily: FontFamily.loraMedium }}>View All</Text>
        <Ionicons name="chevron-forward" size={14} color="#090A0A" />
      </Pressable>
    </View>
  );
}

export default SavedItems;
