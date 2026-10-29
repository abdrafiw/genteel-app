import { Link, router, useLocalSearchParams } from "expo-router";
import {
  ChevronDown,
  ChevronLeft,
  ChevronUp,
  Heart,
  Minus,
  Plus,
  Share2,
} from "lucide-react-native";
import { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { FontFamily } from "@/src/constants/Typography";
import { CATALOG } from "@/src/data/catalog";

function ProductDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedSize, setSelectedSize] = useState("M");
  const [showDescription, setShowDescription] = useState(true);
  const [showReviews, setShowReviews] = useState(false);

  const product = CATALOG.flatMap((cat) => cat.products).find(
    (p) => p.id === id
  );

  if (!product) {
    return (
      <SafeAreaView className="bg-white flex-1">
        <View className="px-5 py-4">
          <TouchableOpacity onPress={() => router.back()}>
            <ChevronLeft size={24} color="#111827" />
          </TouchableOpacity>
          <Text className="mt-8 text-xl">Product not found</Text>
        </View>
      </SafeAreaView>
    );
  }

  const colors = ["#E5E7EB", "#1F2937", "#059669"];
  const sizes = ["S", "M", "L", "XL"];

  // Mock related products
  const relatedProducts = [
    {
      id: "gem-glow",
      name: "Gem Glow",
      description: "Long Classical Blazer",
      price: 100,
      imgUrl: require("@/assets/images/catalog/products/gem-glow.png"),
    },
    {
      id: "single-breasted",
      name: "Single-Breasted",
      description: "Clean Cut Blazer",
      price: 120,
      imgUrl: require("@/assets/images/catalog/products/single-breasted.png"),
    },
    {
      id: "shawl-collar",
      name: "Shawl Collar",
      description: "Long Clean Cut Blazer",
      price: 140,
      imgUrl: require("@/assets/images/catalog/products/shawl-collar.png"),
    },
    {
      id: "zara",
      name: "Zara",
      description: "Long Classical Blazer",
      price: 130,
      imgUrl: require("@/assets/images/catalog/products/zara.png"),
    },
  ];

  return (
    <SafeAreaView className="bg-white flex-1">
      <ScrollView showsVerticalScrollIndicator={false} className="mt-10">
        <View className="gap-[23px]">
          {/* header with Back and favorite */}
          <View className="relative gap-4">
            <Image
              source={product.imgUrl}
              className="w-full h-[420px]"
              resizeMode="cover"
            />

            <TouchableOpacity
              onPress={() => router.back()}
              className="absolute top-4 left-5 bg-white/80 rounded-full p-2"
            >
              <ChevronLeft size={24} color="#111827" />
            </TouchableOpacity>

            <TouchableOpacity className="absolute top-4 right-5">
              <Heart size={24} color="#EC4899" />
            </TouchableOpacity>

            {/* image pagination dots */}
            <View className="flex-row justify-center gap-2">
              <View className="w-2 h-2 rounded-full bg-green-500" />
              <View className="w-2 h-2 rounded-full bg-gray-300" />
              <View className="w-2 h-2 rounded-full bg-gray-300" />
              <View className="w-2 h-2 rounded-full bg-gray-300" />
            </View>
          </View>

          <View className="px-5 gap-[30px]">
            {/* product title and share */}
            <View className="flex-row justify-between items-start">
              <View className="flex-1 gap-2">
                <Text
                  style={{ fontFamily: FontFamily.loraMedium }}
                  className="text-2xl font-semibold text-[#090A0A]"
                >
                  {product.name}
                </Text>

                <Text
                  style={{ fontFamily: FontFamily.loraRegular }}
                  className="text-base text-[#343737]"
                >
                  {product.description}
                </Text>

                {/* price */}
                <Text
                  style={{ fontFamily: FontFamily.loraMedium }}
                  className="text-2xl font-semibold text-secondary"
                >
                  ${product.price}
                </Text>
              </View>

              <TouchableOpacity>
                <Share2 size={24} color="#111827" />
              </TouchableOpacity>
            </View>

            {/* color and size */}
            <View className="flex-row justify-between">
              {/* color selection */}
              <View className="gap-[10px]">
                <Text
                  style={{ fontFamily: FontFamily.loraMedium }}
                  className="text-base font-medium text-[#090A0A]"
                >
                  Color
                </Text>

                <View className="flex-row gap-3">
                  {colors.map((color, index) => (
                    <TouchableOpacity
                      key={index}
                      onPress={() => setSelectedColor(index)}
                      className={`w-6 h-6 rounded-full ${selectedColor === index ? "border-2 border-gray-900" : "border border-gray-300"}`}
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </View>
              </View>

              {/* size selection */}
              <View className="gap-[10px]">
                <Text
                  style={{ fontFamily: FontFamily.loraMedium }}
                  className="text-base font-medium text-[#090A0A]"
                >
                  Size Guide
                </Text>

                <View className="flex-row gap-2 items-center">
                  {sizes.map((size) => (
                    <TouchableOpacity
                      key={size}
                      onPress={() => setSelectedSize(size)}
                      className={`size-[24px] rounded-full flex items-center justify-center ${selectedSize === size ? "bg-gray-900" : "bg-white border border-gray-300"}`}
                    >
                      <Text
                        className={`text-sm ${selectedSize === size ? "text-white" : "text-gray-700"}`}
                      >
                        {size}
                      </Text>
                    </TouchableOpacity>
                  ))}

                  <TouchableOpacity className="px-3 py-2">
                    <Text className="text-sm text-gray-600">More...</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            {/* quantity and add to bag */}
            <View className="flex-row gap-5">
              <View className="flex-row items-center border border-[#E0E4E4] rounded-lg px-4 h-[48px] gap-[19px]">
                <TouchableOpacity
                  onPress={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus color={"#B8BFBF"} />
                </TouchableOpacity>

                <Text className="text-base text-[#090A0A]">{quantity}</Text>

                <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
                  <Plus color={"#090A0A"} />
                </TouchableOpacity>
              </View>

              <TouchableOpacity className="flex-1 bg-[#78F208] rounded-lg py-3 items-center">
                <Text
                  style={{ fontFamily: FontFamily.nunitoSemiBold }}
                  className="text-lg font-semibold text-[#090A0A]"
                >
                  Add to bag
                </Text>
              </TouchableOpacity>
            </View>

            {/* care section */}
            <View className="gap-2">
              <Text
                style={{ fontFamily: FontFamily.loraMedium }}
                className="text-xl font-semibold text-[#090A0A]"
              >
                Care
              </Text>

              <Text
                style={{ fontFamily: FontFamily.nunitoLight }}
                className="text-base text-[#343737]"
              >
                To keep your blazers clean, avoid over-washing, air out after
                washing, brush gently to remove dust and lint, store away from
                direct sunlight. Use padded hangers to maintain shape. Read care
                labels for specific instructions.
              </Text>
            </View>

            {/* description section */}
            <View className="gap-2">
              <TouchableOpacity
                onPress={() => setShowDescription(!showDescription)}
                className="flex-row justify-between items-center"
              >
                <Text
                  style={{ fontFamily: FontFamily.loraMedium }}
                  className="text-xl font-semibold text-[#090A0A]"
                >
                  Description
                </Text>

                {showDescription ? (
                  <ChevronUp size={20} color="#111827" />
                ) : (
                  <ChevronDown size={20} color="#111827" />
                )}
              </TouchableOpacity>

              {showDescription && (
                <View className="">
                  <Text
                    style={{ fontFamily: FontFamily.nunitoLight }}
                    className="text-base text-[##090A0A] leading-7"
                  >
                    A blazer effortlessly blend style and versatility. Whether
                    paired with jeans or worn over a dress skirt. A blazer can:
                  </Text>

                  <Text
                    style={{ fontFamily: FontFamily.nunitoLight }}
                    className="text-base text-[#090A0A] leading-7"
                  >
                    - Enhance physique and exudes confidence.
                  </Text>

                  <Text
                    style={{ fontFamily: FontFamily.nunitoLight }}
                    className="text-base text-[#090A0A] leading-7"
                  >
                    - Complements various outfits, from jeans to dress skirts.
                  </Text>
                </View>
              )}
            </View>

            {/* customer reviews section */}
            <View className="">
              <TouchableOpacity
                onPress={() => setShowReviews(!showReviews)}
                className="flex-row justify-between items-center"
              >
                <Text className="text-lg font-semibold text-gray-900">
                  Customer reviews
                </Text>
                {showReviews ? (
                  <ChevronUp size={20} color="#111827" />
                ) : (
                  <ChevronDown size={20} color="#111827" />
                )}
              </TouchableOpacity>
            </View>

            {/* you may also like */}
            <View className="">
              <Text className="text-lg font-semibold text-gray-900 mb-4">
                You may also like
              </Text>
              <View className="flex-row flex-wrap justify-between gap-y-4">
                {relatedProducts.map((item) => (
                  <Link
                    key={item.id}
                    href={{
                      pathname: "/product-details",
                      params: { id: item.id },
                    }}
                    asChild
                  >
                    <TouchableOpacity className="w-[48%]">
                      <View className="relative">
                        <Image
                          source={item.imgUrl}
                          className="w-full h-64 rounded-lg"
                          resizeMode="cover"
                        />
                        <TouchableOpacity className="absolute top-2 right-2">
                          <Heart size={20} color="#EC4899" />
                        </TouchableOpacity>
                      </View>
                      <Text className="text-base font-semibold text-gray-900 mt-2">
                        {item.name}
                      </Text>
                      <Text className="text-sm text-gray-600">
                        {item.description}
                      </Text>
                      <Text className="text-base font-semibold text-pink-500 mt-1">
                        ${item.price}
                      </Text>
                    </TouchableOpacity>
                  </Link>
                ))}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default ProductDetailsScreen;
