import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { ChevronLeft } from "lucide-react-native";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { FontFamily } from "@/src/constants/Typography";
import { PRODUCTS } from "@/src/data/products";

import FavoriteProductCard from "./components/FavoriteProductCard";

function FavoritesScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top", "left", "right"]}>
      <View className="flex-1 gap-6 px-5">
        {/* header */}
        <View className="flex-row items-center justify-between mt-8 h-9">
          <TouchableOpacity onPress={() => router.back()}>
            <ChevronLeft size={24} color="#111827" />
          </TouchableOpacity>

          <Text
            style={{ fontFamily: FontFamily.loraMedium }}
            className="text-2xl"
          >
            Favorites
          </Text>

          <TouchableOpacity>
            <Ionicons name="search-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>

        {/* products grid */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          className="flex-1"
          contentContainerStyle={{ paddingBottom: 20 }}
        >
          <View className="flex-row flex-wrap justify-between gap-y-5">
            {PRODUCTS.favorites.map((item) => (
              <FavoriteProductCard key={item.id} item={item} />
            ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export default FavoritesScreen;
