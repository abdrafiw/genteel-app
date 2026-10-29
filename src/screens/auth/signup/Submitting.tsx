import { useCallback, useEffect } from "react";
import { ActivityIndicator,Dimensions, Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { FontFamily } from "@/src/constants/Typography";
import { useAuthStore } from "@/src/utils/authStore";

const { width: screenWidth, height: screenHeight } = Dimensions.get("screen");

function Submitting() {
  const { logIn } = useAuthStore();

  const handleCompleteOnboarding = useCallback(async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        logIn();
        resolve(true);
      }, 2000);
    });
  }, [logIn]);

  useEffect(() => {
    handleCompleteOnboarding();
  }, [handleCompleteOnboarding]);

  return (
    <View className="flex-1 relative">
      {/* screen bg image  */}
      <Image
        source={require("@/assets/images/auth/submitting-bg.jpg")}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: screenWidth,
          height: screenHeight,
        }}
        resizeMode="cover"
      />

      {/* dark overlay */}
      <View
        className="absolute inset-0 bg-black/80"
        style={{
          width: screenWidth,
          height: screenHeight,
        }}
      />

      <SafeAreaView className="flex-1">
        <View className="flex-1 items-center justify-center">
          <View className="flex-col items-center gap-[1.875rem]">
            <ActivityIndicator size="large" color="#78F208" />
            <Text
              style={{ fontFamily: FontFamily.loraMedium }}
              className="text-white text-[20px] font-medium text-center"
            >
              Great, we&apos;re picking your style.
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

export default Submitting;
