import { router } from "expo-router";
import { useState } from "react";
import {
  Image,
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

import PaymentMethodHeader from "./components/PaymentMethodHeader";

type PaymentOption = "credit_card" | "paypal" | "apple_pay";

const INPUT_STYLE = {
  fontSize: 16,
  color: "#090A0A",
  borderBottomWidth: 1,
  borderBottomColor: "#E5E5E5",
  fontFamily: FontFamily.loraRegular,
  paddingBottom: 10,
};
const PLACEHOLDER_COLOR = "#626565";

const PAYMENT_OPTIONS = [
  {
    id: "credit_card",
    name: "Credit card",
    icon: require("@/assets/icons/Mastercard.png"),
  },
  {
    id: "paypal",
    name: "PayPal",
    icon: require("@/assets/icons/PayPal.png"),
  },
  {
    id: "apple_pay",
    name: "Apple Pay",
    icon: require("@/assets/icons/ApplePay.png"),
  },
];

export default function PaymentMethodScreen() {
  const { setHasPaymentMethod } = useCheckout();
  const [selected, setSelected] = useState<PaymentOption>("credit_card");
  const [cardholderName, setCardholderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [date, setDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handleAddCard = () => {
    setHasPaymentMethod(true);
    router.back();
  };

  const radio = (value: PaymentOption) =>
    selected === value ? (
      <View className="w-6 h-6 rounded-full bg-[#00C883] items-center justify-center">
        <View className="w-2 h-2 rounded-full bg-[#fff]" />
      </View>
    ) : (
      <View className="w-6 h-6 rounded-full border border-[#E0E4E4]" />
    );

  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={0}
      >
        <View className="flex-1 mt-8 px-5 pb-4 gap-6">
          <PaymentMethodHeader />

          <ScrollView
            showsVerticalScrollIndicator={false}
            className="flex-1"
            keyboardShouldPersistTaps="handled"
          >
            <View className="gap-6">
              {/* payment options */}
              <View className="gap-5">
                {PAYMENT_OPTIONS.map((option) => (
                  <TouchableOpacity
                    key={option.id}
                    onPress={() => setSelected(option.id as PaymentOption)}
                    className="flex-row items-center gap-4 py-3 justify-between"
                    activeOpacity={0.7}
                  >
                    <View className="flex-row items-center gap-[23px] flex-1">
                      <View className="w-12 h-12 rounded-lg bg-[#F9F9F9] items-center justify-center p-4">
                        <Image
                          source={option.icon}
                          className="w-8 h-8"
                          resizeMode="contain"
                        />
                      </View>

                      <Text
                        style={{ fontFamily: FontFamily.nunitoMedium }}
                        className="text-base text-[#090A0A]"
                      >
                        {option.name}
                      </Text>
                    </View>

                    {radio(option.id as PaymentOption)}
                  </TouchableOpacity>
                ))}
              </View>

              {/* card fields - show when credit card selected */}
              {selected === "credit_card" && (
                <View className="gap-5">
                  <TextInput
                    placeholder="Cardholder name"
                    placeholderTextColor={PLACEHOLDER_COLOR}
                    value={cardholderName}
                    onChangeText={setCardholderName}
                    className="w-full h-[50px]"
                    style={INPUT_STYLE}
                  />

                  <TextInput
                    placeholder="Card number"
                    placeholderTextColor={PLACEHOLDER_COLOR}
                    value={cardNumber}
                    onChangeText={setCardNumber}
                    keyboardType="numeric"
                    className="w-full h-[50px]"
                    style={INPUT_STYLE}
                  />

                  <View className="flex-row gap-4">
                    <TextInput
                      placeholder="Date"
                      placeholderTextColor={PLACEHOLDER_COLOR}
                      value={date}
                      onChangeText={setDate}
                      className="flex-1 h-[50px]"
                      style={INPUT_STYLE}
                    />

                    <TextInput
                      placeholder="CVV"
                      placeholderTextColor={PLACEHOLDER_COLOR}
                      value={cvv}
                      onChangeText={setCvv}
                      keyboardType="numeric"
                      secureTextEntry
                      className="flex-1 h-[50px]"
                      style={INPUT_STYLE}
                    />
                  </View>
                </View>
              )}
            </View>
          </ScrollView>

          <TouchableOpacity
            onPress={handleAddCard}
            className="bg-primary py-4 rounded-lg items-center"
            activeOpacity={0.8}
          >
            <Text
              style={{ fontFamily: FontFamily.nunitoSemiBold }}
              className="text-lg text-[#090A0A]"
            >
              Add card
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
