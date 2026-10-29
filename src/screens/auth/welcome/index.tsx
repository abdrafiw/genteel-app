import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import { Dimensions, Image, Pressable,Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { FontFamily } from "@/src/constants/Typography";

const { width: screenWidth, height: screenHeight } = Dimensions.get("screen");

function WelcomeScreen() {
  const router = useRouter();

  return (
    <View className="flex-1 relative">
      {/* screen bg image  */}
      <Image
        source={require("@/assets/images/auth/welcome-bg.jpg")}
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
          <View className="flex-col gap-[30px] w-full pt-48 text-center">
            <View className="flex-col gap-2.5">
              <Text
                style={{ fontFamily: FontFamily.loraMedium }}
                className="text-white text-[32px] font-medium text-center"
              >
                Welcome To Genteel
              </Text>
              <Text
                style={{ fontFamily: FontFamily.nunitoMedium }}
                className="text-[#EFEFF0] text-[16px] font-medium text-center"
              >
                We&apos;re glad you chose us to shop today
              </Text>
            </View>

            {/* sign in with social options */}
            <View className="w-full flex-col gap-[16px]">
              {/* apple sign in */}
              <Pressable
                onPress={() => {}}
                className="w-full h-[50px] flex-row rounded-md px-5 gap-16 bg-white items-center"
              >
                <View className="">
                  <Ionicons name="logo-apple" size={24} color="#090A0A" />
                </View>
                <Text className="flex-1 text-[#090A0A] text-lg font-medium">
                  Continue with Apple
                </Text>
              </Pressable>

              {/* google sign in */}
              <Pressable
                onPress={() => {}}
                className="w-full h-[50px] flex-row rounded-md px-5 gap-16 bg-white items-center"
              >
                <View className="">
                  <Ionicons name="logo-google" size={24} color="#4285F4" />
                </View>
                <Text className="text-[#090A0A] text-lg font-medium">
                  Continue with Google
                </Text>
              </Pressable>

              {/* facebook sign in */}
              <Pressable
                onPress={() => {}}
                className="w-full h-[50px] flex-row rounded-md px-5 gap-16 bg-white items-center"
              >
                <View className="">
                  <Ionicons name="logo-facebook" size={24} color="#1877F2" />
                </View>
                <Text className="text-[#090A0A] text-lg font-medium">
                  Continue with Facebook
                </Text>
              </Pressable>
            </View>

            {/* or divider */}
            <View className="flex-row items-center justify-center gap-2">
              <View className="flex-1 h-[1px] bg-[#E1E1D9]" />
              <Text className="text-white text-[13px] font-medium">OR</Text>
              <View className="flex-1 h-[1px] bg-[#E1E1D9]" />
            </View>

            {/* continue with email */}
            <Pressable
              onPress={() => {
                router.push("/auth/signup");
              }}
              className="w-full h-[50px] flex-row rounded-md px-5 gap-16 bg-white items-center"
            >
              <View className="">
                <FontAwesome name="envelope" size={24} color="#090A0A" />
              </View>
              <Text className="text-[#090A0A] text-lg font-medium">
                Continue with Email
              </Text>
            </Pressable>
          </View>

          <Text className="text-white text-base">
            Already have an account?{" "}
            <Link href="/auth/signin">
              <Text className="text-primary text-base font-medium">
                Sign in
              </Text>
            </Link>
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
}

export default WelcomeScreen;
