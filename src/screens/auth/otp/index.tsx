import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Alert,
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { OtpInput } from "react-native-otp-entry";
import { SafeAreaView } from "react-native-safe-area-context";

import { FontFamily } from "@/src/constants/Typography";

const { width: screenWidth, height: screenHeight } = Dimensions.get("screen");

function OTPVerificationScreen() {
  const [otp, setOtp] = useState("");
  const router = useRouter();

  const handleVerifyOTP = () => {
    if (otp.length !== 4) {
      Alert.alert("Please enter a valid OTP");
      return;
    }

    router.push("/auth/new-password");
  };

  return (
    <View className="flex-1 relative">
      {/* screen bg image  */}
      <Image
        source={require("@/assets/images/auth/otp-verification-bg.jpg")}
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
          {/* heading */}
          <View className="flex-col gap-2.5">
            <Text
              style={{ fontFamily: FontFamily.loraMedium }}
              className="text-white text-[32px] font-medium text-center"
            >
              Verification Code
            </Text>

            <Text
              style={{ fontFamily: FontFamily.nunitoMedium }}
              className="text-[#EFEFF0] text-[16px] font-medium text-center"
            >
              Please enter the verification code sent to your email
            </Text>
          </View>

          {/* input field */}
          <View className="w-full flex-col gap-[20px]">
            <OtpInput
              numberOfDigits={4}
              autoFocus={true}
              type="numeric"
              onFilled={(text) => setOtp(text)}
              onTextChange={(text) => {}}
              textInputProps={{
                accessibilityLabel: "One-Time Password",
              }}
              textProps={{
                accessibilityRole: "text",
                accessibilityLabel: "OTP digit",
                allowFontScaling: false,
              }}
              theme={{
                containerStyle: styles.container,
                pinCodeContainerStyle: styles.pinCodeContainer,
                pinCodeTextStyle: styles.pinCodeText,
                focusStickStyle: styles.focusStick,
                focusedPinCodeContainerStyle: styles.activePinCodeContainer,
                placeholderTextStyle: styles.placeholderText,
                filledPinCodeContainerStyle: styles.filledPinCodeContainer,
                disabledPinCodeContainerStyle: styles.disabledPinCodeContainer,
              }}
            />

            <Pressable
              onPress={handleVerifyOTP}
              disabled={otp.length !== 4}
              className="w-full h-[50px] rounded-md bg-primary items-center justify-center mt-2"
            >
              <Text className="text-text-primary text-lg font-semibold">
                Verify
              </Text>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

export default OTPVerificationScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },

  pinCodeContainer: {
    width: 60,
    height: 60,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#A4A8A8",
  },

  pinCodeText: {
    fontSize: 20,
    fontFamily: FontFamily.nunitoMedium,
    color: "#fff",
  },

  focusStick: {
    backgroundColor: "#fff",
  },

  activePinCodeContainer: {
    borderColor: "#fff",
  },

  placeholderText: {
    fontSize: 20,
    fontFamily: FontFamily.nunitoMedium,
    color: "#fff",
  },

  filledPinCodeContainer: {
    borderColor: "#fff",
  },

  disabledPinCodeContainer: {
    borderColor: "#A4A8A8",
  },
});
