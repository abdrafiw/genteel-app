import { ChevronDown, Search,SlidersHorizontal } from "lucide-react-native";
import React, { useState } from "react";
import { Modal,Text, TouchableOpacity, View } from "react-native";

import { FontFamily } from "@/src/constants/Typography";

const ProductsFilterBar = ({ productCount = 1500, category = "Blazers" }) => {
  const [sortOption, setSortOption] = useState("New");
  const [showSortMenu, setShowSortMenu] = useState(false);

  const sortOptions = [
    "New",
    "Price: Low to High",
    "Price: High to Low",
    "Popular",
  ];

  return (
    <View className="flex-row items-center justify-between py-2">
      {/* product count */}
      <Text
        className="text-base text-[#090A0A]"
        style={{ fontFamily: FontFamily.loraRegular }}
      >
        {productCount} {category}
      </Text>

      {/* filter controls */}
      <View className="flex-row items-center gap-4">
        {/* sort dropdown */}
        <TouchableOpacity
          className="flex-row items-center gap-1"
          onPress={() => setShowSortMenu(true)}
        >
          <Text className="text-sm text-gray-700">{sortOption}</Text>
          <ChevronDown size={16} color="#374151" />
        </TouchableOpacity>

        {/* filter icon */}
        <TouchableOpacity className="p-1">
          <SlidersHorizontal size={20} color="#374151" />
        </TouchableOpacity>

        {/* search icon */}
        <TouchableOpacity className="p-1">
          <Search size={20} color="#374151" />
        </TouchableOpacity>
      </View>

      {/* sort modal */}
      <Modal
        visible={showSortMenu}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowSortMenu(false)}
      >
        <TouchableOpacity
          className="flex-1 bg-black/50 justify-center items-center"
          activeOpacity={1}
          onPress={() => setShowSortMenu(false)}
        >
          <View className="bg-white rounded-lg w-48 shadow-lg">
            {sortOptions.map((option, index) => (
              <TouchableOpacity
                key={option}
                className={`py-3 px-4 ${index < sortOptions.length - 1 ? "border-b border-gray-100" : ""}`}
                onPress={() => {
                  setSortOption(option);
                  setShowSortMenu(false);
                }}
              >
                <Text className="text-sm text-gray-700">{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default ProductsFilterBar;
