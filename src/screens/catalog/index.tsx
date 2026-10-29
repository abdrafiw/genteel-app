import { Feather, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Image, Pressable, ScrollView, Text, TouchableOpacity,View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { FontFamily } from "@/src/constants/Typography";
import { CATALOG } from "@/src/data/catalog";

function CatalogScreen() {
  const handlePress = (id: string) => {
    router.push(`/(tabs)/(catalog)/${id}`);
  };

  // Mock notification count - replace with actual data source
  const notificationCount = 3;

  return (
    <SafeAreaView className="flex-1 bg-white gap-6 px-5">
      {/* header */}
      <View className="flex-row items-center justify-between mt-5">
        <Text
          style={{ fontFamily: FontFamily.loraMedium }}
          className="text-2xl"
        >
          CATALOG
        </Text>

        <View className="flex-row gap-5">
          <TouchableOpacity onPress={() => router.push("/(tabs)/favorites")}>
            <Feather name="heart" size={24} color="black" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.push("/(tabs)/notifications")}
            className="relative"
          >
            <Ionicons name="notifications-outline" size={24} color="black" />
            {notificationCount > 0 && (
              <View className="absolute -top-1 -right-1 bg-[#00C883] rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-1">
                <Text
                  style={{ fontFamily: FontFamily.nunitoSemiBold }}
                  className="text-[10px] text-white"
                >
                  {notificationCount > 99 ? '99+' : notificationCount}
                </Text>
              </View>
            )}
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="flex-row flex-wrap justify-between gap-y-5">
          {CATALOG.map((item) => (
            <Pressable
              key={item.id}
              onPress={() => handlePress(item.id)}
              className="w-[48%] items-center justify-center gap-[10px]"
            >
              <View className="w-full items-center justify-center h-[200px]">
                <Image
                  source={item.imgUrl}
                  resizeMode="cover"
                  className="w-full h-full rounded-sm"
                />
              </View>

              <Text
                style={{ fontFamily: FontFamily.loraMedium }}
                className="text-base"
              >
                {item.name}
              </Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default CatalogScreen;
