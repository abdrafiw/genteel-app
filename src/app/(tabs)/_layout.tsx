import { CartIconWithBadge } from "@/src/components/CartIconWithBadge";
import { HapticTab } from "@/src/components/haptic-tab";
import { Catalog, Chat, HomeIcon } from "@/src/components/Icons";
import { Tabs } from "expo-router";
import React from "react";
import { ColorValue, Image } from "react-native";

const asIconColor = (color: ColorValue) => color;

export default function TabLayout() {
  const userImageUrl = "https://i.pravatar.cc/150?img=47";

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#090A0A",
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopWidth: 1,
          borderTopColor: "#E5E5E5",
          elevation: 0,
          paddingTop: 10,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => <HomeIcon color={asIconColor(color)} />,
        }}
      />

      <Tabs.Screen
        name="(catalog)"
        options={{
          href: "/(tabs)/(catalog)",
          tabBarIcon: ({ color }) => <Catalog color={asIconColor(color)} />,
        }}
      />

      <Tabs.Screen
        name="ai-search"
        options={{
          tabBarIcon: ({ color }) => <Chat color={asIconColor(color)} />,
        }}
      />

      <Tabs.Screen
        name="cart"
        options={{
          tabBarIcon: ({ color }) => <CartIconWithBadge color={asIconColor(color)} />,
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={{ uri: userImageUrl }}
              className="w-7 h-7 rounded-full"
            />
          ),
        }}
      />

      <Tabs.Screen
        name="notifications"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="favorites"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}
