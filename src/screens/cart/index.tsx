import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { ChevronLeft } from "lucide-react-native";
import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { FontFamily } from "@/src/constants/Typography";
import { PRODUCTS } from "@/src/data/products";

import CartItem, { CartItemModel } from "./components/CartItem";
import CartSummary from "./components/CartSummary";

function CartScreen() {
  const [cartItems, setCartItems] = useState<CartItemModel[]>(PRODUCTS.cart);

  const updateQuantity = (id: number, change: number) => {
    setCartItems((items) =>
      items.map((item) => {
        if (item.id === id) {
          const newQuantity = Math.max(1, item.quantity + change);
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const discount = 10.99;
  const finalTotal = total - discount;

  return (
    <SafeAreaView className="flex-1 bg-white" edges={["top", "left", "right"]}>
      <View className="flex-1 gap-6 mt-8">
        <View className="gap-5 px-5">
          <View className="flex-row items-center justify-between">
            <TouchableOpacity onPress={() => router.back()}>
              <ChevronLeft size={24} color="#111827" />
            </TouchableOpacity>

            <Text
              style={{ fontFamily: FontFamily.loraMedium }}
              className="text-2xl"
            >
              My Bag
            </Text>

            <TouchableOpacity className="w-[36px] h-[36px] rounded-full border border-[#C4C4C4] flex items-center justify-center">
              <Ionicons name="search-outline" size={20} color="black" />
            </TouchableOpacity>
          </View>

          <Text
            style={{ fontFamily: FontFamily.nunitoRegular }}
            className="text-base text-[#626565] text-center"
          >
            You have {cartItems.length} items in your Bag
          </Text>
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          className="flex-1"
          contentContainerStyle={{ paddingBottom: 10 }}
        >
          <View className="gap-5">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onRemove={removeItem}
                onDecrease={(id) => updateQuantity(id, -1)}
                onIncrease={(id) => updateQuantity(id, 1)}
              />
            ))}
          </View>
        </ScrollView>

        <CartSummary
          total={total}
          discount={discount}
          deliveryFeesText="Free"
          checkoutTotal={finalTotal}
        />
      </View>
    </SafeAreaView>
  );
}

export default CartScreen;
