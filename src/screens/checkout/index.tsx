import { router } from "expo-router";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { useCheckout } from "@/src/contexts/CheckoutContext";

import CheckoutDefaultView from "./components/CheckoutDefaultView";
import CheckoutHeader from "./components/CheckoutHeader";
import CheckoutReadyView from "./components/CheckoutReadyView";

export default function CheckoutScreen() {
  const { hasAddress, hasPaymentMethod } = useCheckout();
  const payTotal = 359;

  const handlePay = () => {
    if (hasAddress) {
      router.push("/payment-method");
    } else {
      router.push("/shipping-address");
    }
  };

  const handlePayNow = () => {
    router.push("/payment-success");
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 gap-6 mt-8 px-5 pb-4">
        <CheckoutHeader />

        {hasPaymentMethod ? (
          <CheckoutReadyView onPayNow={handlePayNow} />
        ) : (
          <CheckoutDefaultView payTotal={payTotal} onPay={handlePay} />
        )}
      </View>
    </SafeAreaView>
  );
}
