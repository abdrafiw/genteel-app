import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { useState } from "react";
import { Image, Pressable, ScrollView,Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { FontFamily } from "@/src/constants/Typography";

import Overview from "./overview";
import SettingsTab from "./SettingsTab";

function ProfileScreen() {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState(0);

  const userImageUrl = "https://i.pravatar.cc/150?img=47";

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleSearchPress = () => {
    console.log("Search pressed");
  };

  const TABS = ["overview", "settings"];

  return (
    <SafeAreaView className="flex-1 bg-white gap-8 mt-8">
      {/* fixed header section */}
      <View className="gap-6">
        <View className="gap-10">
          {/* header */}
          <View className="flex-row items-center justify-between gap-2 px-5">
            {/* back icon */}
            <Pressable
              onPress={handleBackPress}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              <Ionicons name="chevron-back" size={24} color="#090A0A" />
            </Pressable>

            {/* page title */}
            <Text
              className="text-2xl font-medium capitalize text-[#090A0A]"
              style={{ fontFamily: FontFamily.loraMedium }}
            >
              my account
            </Text>

            {/* search */}
            <Pressable
              style={{ backgroundColor: "hsla(0, 0%, 93%, 1)" }}
              onPress={handleSearchPress}
              className="w-10 h-10 rounded-full items-center justify-center"
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              <Ionicons name="search" size={17} color="#626565" />
            </Pressable>
          </View>

          {/* tabs */}
          <View className="flex-row justify-between">
            {TABS.map((tab, index) => {
              return (
                <Pressable
                  key={tab}
                  onPress={() => setActiveTab(index)}
                  className={`w-[50%] border-b ${activeTab === index ? "border-[#00C883]" : "border-gray-300"}`}
                >
                  <Text
                    className="text-[17px] text-center pb-[15px] capitalize"
                    style={{
                      color: activeTab === index ? "#00C883" : "#000",
                      fontFamily: FontFamily.loraRegular,
                    }}
                  >
                    {tab}
                  </Text>
                </Pressable>
              );
            })}
          </View>
        </View>

        {/* avatar and name */}
        <View className="items-center flex-col justify-center gap-3">
          <Image
            source={{ uri: userImageUrl }}
            className="w-20 h-20 rounded-full"
          />

          <Text
            className="text-[#090A0A] text-lg"
            style={{ fontFamily: FontFamily.loraMedium }}
          >
            Hello, Daph
          </Text>
        </View>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="px-5">
          {activeTab === 0 ? <Overview /> : <SettingsTab />}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default ProfileScreen;
