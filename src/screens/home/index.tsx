import { Feather, Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { SafeAreaView } from "react-native-safe-area-context";

import { FontFamily } from "@/src/constants/Typography";

import SearchBar from "./components/SearchBar";
import Brands from "./sections/Brands";
import Collections from "./sections/Collections";
import Featured from "./sections/Featured";
import NewInStock from "./sections/NewInStock";
import Recommended from "./sections/Recommended";
import Trending from "./sections/Trending";

function HomeScreen() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Men", value: "Men" },
    { label: "Women", value: "Women" },
    { label: "Kids", value: "Kids" },
  ]);

  // Mock notification count - replace with actual data source
  const notificationCount = 3;

  return (
    <SafeAreaView className="bg-white flex-1">
      <StatusBar style="dark" />

      <View className="gap-10">
        <View className="gap-[23px] px-5 mt-8">
          <View className="flex-row items-center justify-between">
            <DropDownPicker
              open={open}
              value={value}
              items={items}
              setOpen={setOpen}
              setValue={setValue}
              setItems={setItems}
              placeholder="Category"
              listMode="SCROLLVIEW"
              style={{ borderWidth: 0 }}
              containerStyle={{ width: 155 }}
              dropDownContainerStyle={{
                width: 200,
                borderColor: "#F7F7F7",
                borderRadius: "200px",
              }}
              textStyle={{
                fontSize: 24,
                fontFamily: FontFamily.loraMedium,
              }}
            />

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

          <SearchBar />
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="gap-6 mb-56">
            <Trending />
            <Recommended />
            <NewInStock />
            <Brands />
            <Collections />
            <Featured />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
