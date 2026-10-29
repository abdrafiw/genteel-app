import { router } from "expo-router";
import { ChevronLeft, Settings } from "lucide-react-native";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { FontFamily } from "@/src/constants/Typography";

import NotificationCard from "./components/NotificationCard";

function NotificationsScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top", "left", "right"]}>
      <View className="flex-1 gap-6">
        {/* header */}
        <View className="flex-row items-center justify-between px-5 mt-8 mb-6">
          <TouchableOpacity onPress={() => router.back()}>
            <ChevronLeft size={24} color="#111827" />
          </TouchableOpacity>

          <Text
            style={{ fontFamily: FontFamily.loraMedium }}
            className="text-2xl"
          >
            Notifications
          </Text>

          <TouchableOpacity className="bg-[#C4C4C4]/20 size-9 rounded-full flex items-center justify-center">
            <Settings size={16} color="#111827" />
          </TouchableOpacity>
        </View>

        {/* notifications list */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          className="flex-1 px-5"
          contentContainerStyle={{ paddingBottom: 20 }}
        >
          <View className="gap-4">
            <NotificationCard
              id={1}
              type="DISCOUNT"
              timestamp="YESTERDAY"
              message="This Gucci perfume you viewed yesterday went on sale at 20% off"
              imageUrl={require("@/assets/images/home/featured-img01.png")}
              originalPrice={350}
              discountedPrice={330}
              onVisit={() => {
                // Handle visit action
                console.log("Visit product");
              }}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export default NotificationsScreen;
