import { Link } from "expo-router";
import {
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

function SigninScreen() {
  return (
    <View className="flex-1 relative">
      {/* screen bg image  */}
      <Image
        source={require("@/assets/images/auth/signin-bg.jpg")}
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
        <View className="items-center justify-between px-5 flex-1 pb-10">
          <View className="flex-col gap-[50px] w-full pt-48 text-center">
            {/* introduction */}
            <View className="flex-col gap-2.5">
              <Text
                style={{ fontFamily: FontFamily.loraMedium }}
                className="text-white text-[32px] font-medium text-center"
              >
                Welcome back Daph
              </Text>

              <Text
                style={{ fontFamily: FontFamily.nunitoMedium }}
                className="text-[#EFEFF0] text-[16px] font-medium text-center"
              >
                Please log in to continue shopping
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
                style={{
                  color: "#fff",
                  fontSize: 16,
                  borderBottomWidth: 0.5,
                  borderBottomColor: "#A4A8A8",
                  fontFamily: FontFamily.nunitoMedium,
                }}
              />

              <TextInput
                placeholder="Enter Your Password"
                placeholderTextColor="#B8BFBF"
                secureTextEntry
                autoCapitalize="none"
                className="w-full text-white h-[60px]"
                style={{
                  color: "#fff",
                  fontSize: 16,
                  borderBottomWidth: 1,
                  borderBottomColor: "#A4A8A8",
                  fontFamily: FontFamily.nunitoMedium,
                }}
              />

              <Link href="/auth/forgot-password">
                <Text
                  className="text-base text-right text-primary"
                  style={{ fontFamily: FontFamily.nunitoRegular }}
                >
                  Forgot Password?
                </Text>
              </Link>

              <Pressable
                onPress={() => {}}
                className="w-full h-[50px] rounded-md bg-primary items-center justify-center mt-2"
              >
                <Text className="text-text-primary text-lg font-semibold">
                  Sign in
                </Text>
              </Pressable>
            </View>
          </View>

          <Text className="text-white text-base">
            Don&apos;t have an account?{" "}
            <Link href="/auth/signup">
              <Text className="text-primary text-base font-medium">
                Sign up
              </Text>
            </Link>
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
}

export default SigninScreen;
