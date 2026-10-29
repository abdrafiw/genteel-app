import { router } from "expo-router";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { FontFamily } from "@/src/constants/Typography";
import { useCheckout } from "@/src/contexts/CheckoutContext";

import ShippingAddressHeader from "./components/ShippingAddressHeader";

const INPUT_STYLE = {
  fontSize: 16,
  color: "#090A0A",
  borderBottomWidth: 1,
  borderBottomColor: "#E5E5E5",
  fontFamily: FontFamily.loraRegular,
  paddingBottom: 14,
  height: 50,
};
const PLACEHOLDER_COLOR = "#626565";

export default function ShippingAddressScreen() {
  const { setHasAddress } = useCheckout();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [phone, setPhone] = useState("");

  const handleAddAddress = () => {
    setHasAddress(true);
    router.back();
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={0}
      >
        <View className="flex-1 gap-[23px] mt-8 pb-4 px-5">
          <ShippingAddressHeader />

          <ScrollView
            showsVerticalScrollIndicator={false}
            className="flex-1"
            keyboardShouldPersistTaps="handled"
          >
            <View className="gap-[21px]">
              {/* first name | last name */}
              <View className="flex-row gap-4">
                <TextInput
                  placeholder="First name"
                  placeholderTextColor={PLACEHOLDER_COLOR}
                  value={firstName}
                  onChangeText={setFirstName}
                  className="flex-1"
                  style={INPUT_STYLE}
                />

                <TextInput
                  placeholder="Last name"
                  placeholderTextColor={PLACEHOLDER_COLOR}
                  value={lastName}
                  onChangeText={setLastName}
                  className="flex-1"
                  style={INPUT_STYLE}
                />
              </View>

              <TextInput
                placeholder="Address"
                placeholderTextColor={PLACEHOLDER_COLOR}
                value={address}
                onChangeText={setAddress}
                className="w-full"
                style={INPUT_STYLE}
              />

              <TextInput
                placeholder="City"
                placeholderTextColor={PLACEHOLDER_COLOR}
                value={city}
                onChangeText={setCity}
                className="w-full h-[50px]"
                style={INPUT_STYLE}
              />

              {/* state | zip code */}
              <View className="flex-row gap-4">
                <TextInput
                  placeholder="State"
                  placeholderTextColor={PLACEHOLDER_COLOR}
                  value={state}
                  onChangeText={setState}
                  className="flex-1"
                  style={INPUT_STYLE}
                />
                <TextInput
                  placeholder="Zip code"
                  placeholderTextColor={PLACEHOLDER_COLOR}
                  value={zipCode}
                  onChangeText={setZipCode}
                  keyboardType="numeric"
                  className="flex-1"
                  style={INPUT_STYLE}
                />
              </View>

              <TextInput
                placeholder="Number to call"
                placeholderTextColor={PLACEHOLDER_COLOR}
                value={phone}
                onChangeText={setPhone}
                keyboardType="phone-pad"
                className="w-full"
                style={INPUT_STYLE}
              />
            </View>
          </ScrollView>

          <TouchableOpacity
            onPress={handleAddAddress}
            className="bg-primary py-4 rounded-lg items-center"
          >
            <Text
              style={{ fontFamily: FontFamily.nunitoSemiBold }}
              className="text-lg text-[#090A0A]"
            >
              Add address
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
