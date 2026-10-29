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

type Props = {
  onContinue: () => void;
  onEmailChange: (email: string) => void;
  onPasswordChange: (password: string) => void;
  email: string;
  password: string;
};

function Credentials({
  onContinue,
  onEmailChange,
  onPasswordChange,
  email,
  password,
}: Props) {
  return (
    <View className="flex-1 relative">
      {/* screen bg image  */}
      <Image
        source={require("@/assets/images/auth/signup-bg.jpg")}
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
        <View className="items-center justify-between flex-1 pb-10 px-5">
          <View className="flex-col gap-[50px] w-full pt-48 text-center">
            {/* page header */}
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

            {/* input fields  && continue btn*/}
            <View className="w-full flex-col gap-[20px]">
              <TextInput
                value={email}
                onChangeText={onEmailChange}
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
                value={password}
                onChangeText={onPasswordChange}
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

              <Pressable
                onPress={onContinue}
                className="w-full h-[50px] rounded-md bg-primary items-center justify-center mt-2"
              >
                <Text className="text-text-primary text-lg font-semibold">
                  Continue
                </Text>
              </Pressable>
            </View>
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

export default Credentials;
