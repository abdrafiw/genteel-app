/* eslint-disable @typescript-eslint/no-unused-vars */

import "react-native-reanimated";
import "../../global.css";

import {
  Lora_400Regular,
  Lora_500Medium,
  Lora_600SemiBold,
  Lora_700Bold,
} from "@expo-google-fonts/lora";
import {
  Nunito_300Light,
  Nunito_400Regular,
  Nunito_500Medium,
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_800ExtraBold,
} from "@expo-google-fonts/nunito";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Platform, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { CheckoutProvider } from "../contexts/CheckoutContext";
import { useAuthStore } from "../utils/authStore";

const isWeb = Platform.OS === "web";

if (!isWeb) SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { hasCompletedOnboarding, isloggedin, _hasHydrated } = useAuthStore();
  const [_isReady, setIsReady] = useState(false);

  const [fontsLoaded] = useFonts({
    "Lora-Regular": Lora_400Regular,
    "Lora-Medium": Lora_500Medium,
    "Lora-SemiBold": Lora_600SemiBold,
    "Lora-Bold": Lora_700Bold,

    "Nunito-Light": Nunito_300Light,
    "Nunito-Regular": Nunito_400Regular,
    "Nunito-Medium": Nunito_500Medium,
    "Nunito-SemiBold": Nunito_600SemiBold,
    "Nunito-Bold": Nunito_700Bold,
    "Nunito-ExtraBold": Nunito_800ExtraBold,
  });

  // hide the splash screen after the store has been hydrated and fonts are loaded
  useEffect(() => {
    if (_hasHydrated && fontsLoaded) {
      SplashScreen.hideAsync();

      setTimeout(() => {
        setIsReady(true);
      }, 100);
    }
  }, [_hasHydrated, fontsLoaded]);

  if ((!_hasHydrated || !fontsLoaded) && !isWeb) return null;

  return (
    <SafeAreaProvider>
      <CheckoutProvider>
        <View className="flex-1">
          <StatusBar style="auto" />

          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Protected guard={isloggedin}>
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            </Stack.Protected>

            <Stack.Protected guard={!isloggedin && !hasCompletedOnboarding}>
              <Stack.Screen
                name="onboarding"
                options={{ headerShown: false }}
              />
            </Stack.Protected>

            <Stack.Protected guard={!isloggedin && hasCompletedOnboarding}>
              <Stack.Screen name="auth" options={{ headerShown: false }} />
            </Stack.Protected>
          </Stack>
        </View>
      </CheckoutProvider>
    </SafeAreaProvider>
  );
}
