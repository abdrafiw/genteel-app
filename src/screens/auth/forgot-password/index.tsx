import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Dimensions,
  Image,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { FontFamily } from "@/src/constants/Typography";

const { width: screenWidth, height: screenHeight } = Dimensions.get("screen");

function ForgotPasswordScreen() {
  const [email, setEmail] = useState("");

  const router = useRouter();

  const handleSendVerificationCode = () => {
    if (!email || email === "") {
      Alert.alert("Please enter your email");
      return;
    }

    router.push("/auth/otp-verification");
  };

  return (
    <View className="flex-1 relative">
      {/* screen bg image  */}
      <Image
        source={require("@/assets/images/auth/forgot-password-bg.jpg")}
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
        className="absolute inset-0 bg-black/70"
        style={{
          width: screenWidth,
          height: screenHeight,
        }}
      />

      <SafeAreaView className="flex-1">
        <View className="flex-col gap-[50px] w-full pt-48 text-center px-5">
          {/* introduction */}
          <View className="flex-col gap-2.5">
            <Text
              style={{ fontFamily: FontFamily.loraMedium }}
              className="text-white text-[32px] font-medium text-center"
            >
              Forgot password?
            </Text>

            <Text
              style={{ fontFamily: FontFamily.nunitoMedium }}
              className="text-[#EFEFF0] text-[16px] font-medium text-center"
            >
              We will send a verification code to you
            </Text>
          </View>

          {/* input fields */}
          <View className="w-full flex-col gap-[20px]">
            <TextInput
              placeholder="Enter Your Email"
              placeholderTextColor="#B8BFBF"
              keyboardType="email-address"
              autoCapitalize="none"
              className="w-full text-white h-[60px]"
              onChangeText={setEmail}
              value={email}
              style={{
                color: "#fff",
                fontSize: 16,
                borderBottomWidth: 0.5,
                borderBottomColor: "#A4A8A8",
                fontFamily: FontFamily.nunitoMedium,
              }}
            />

            <Pressable
              onPress={handleSendVerificationCode}
              className="w-full h-[50px] rounded-md bg-primary items-center justify-center mt-2"
            >
              <Text className="text-text-primary text-lg font-semibold">
                Send
              </Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

export default ForgotPasswordScreen;
