import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import CHAT_ICON from "@/assets/icons/chat.png";
import IMAGE_ICON from "@/assets/icons/image.png";
import VIDEO_ICON from "@/assets/icons/video.png";

import AISearchBar from "./components/AISearchBar";
import ChatHeader from "./components/ChatHeader";
import ModeTabs, { type TabConfig } from "./components/ModeTabs";
import RecentSearches from "./components/RecentSearches";
import type { SubsectionItem } from "./components/SearchSubsection";

const TAB_CONFIG: TabConfig[] = [
  { key: "chat", icon: CHAT_ICON, label: "Chat" },
  { key: "image", icon: IMAGE_ICON, label: "Image" },
  { key: "video", icon: VIDEO_ICON, label: "Video" },
];

const NEARBY_FASHION_STORES: SubsectionItem[] = [
  { id: "1", imgUrl: require("@/assets/images/home/collections-img01.png") },
  { id: "2", imgUrl: require("@/assets/images/catalog/blazers.png") },
  { id: "3", imgUrl: require("@/assets/images/catalog/dresses.png") },
  { id: "4", imgUrl: require("@/assets/images/catalog/bags.png") },
];

const LATEST_SHOES: SubsectionItem[] = [
  { id: "1", imgUrl: require("@/assets/images/catalog/shoes.png") },
  { id: "2", imgUrl: require("@/assets/images/home/stock-img01.png") },
  { id: "3", imgUrl: require("@/assets/images/home/stock-img02.png") },
  { id: "4", imgUrl: require("@/assets/images/home/featured-img01.png") },
];

const POPULAR_BRANDS: SubsectionItem[] = [
  {
    id: "1",
    imgUrl: require("@/assets/images/ai-search/prada.png"),
    label: "Prada",
  },
  {
    id: "2",
    imgUrl: require("@/assets/images/ai-search/gucci.png"),
    label: "Gucci",
  },
  {
    id: "3",
    imgUrl: require("@/assets/images/ai-search/fendi.png"),
    label: "Fendi",
  },
  {
    id: "4",
    imgUrl: require("@/assets/images/ai-search/zara.png"),
    label: "Zara",
  },
];

function ChatScreen() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SafeAreaView className="flex-1 bg-white gap-[30px] px-5 mt-5">
      <StatusBar style="dark" />

      <ChatHeader />

      <View className="flex-1 gap-6">
        <AISearchBar value={searchQuery} onChangeText={setSearchQuery} />
        <ModeTabs
          mode="chat"
          tabs={TAB_CONFIG}
          onModeChange={(mode) => router.push(`/ai-search?mode=${mode}`)}
        />
        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          <RecentSearches
            nearbyStores={NEARBY_FASHION_STORES}
            latestShoes={LATEST_SHOES}
            popularBrands={POPULAR_BRANDS}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export default ChatScreen;
