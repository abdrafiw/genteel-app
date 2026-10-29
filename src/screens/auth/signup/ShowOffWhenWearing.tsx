import { StatusBar } from "expo-status-bar";
import { Pressable, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { FontFamily } from "@/src/constants/Typography";

import { PersonalizationData } from ".";

type Props = {
  toggleSelection: (category: keyof PersonalizationData, value: string) => void;
  personalization: PersonalizationData;
  onContinue: () => void;
};
function ShowOffWhenWearing({
  toggleSelection,
  personalization,
  onContinue,
}: Props) {
  const showOffOptions = [
    "Cleavage",
    "Arms",
    "Back",
    "Legs",
    "Midsection",
    "Rear",
    "Shoulders",
  ];

  return (
    <>
      <StatusBar style="dark" />

      <SafeAreaView className="flex-1 bg-white">
        <View className="flex-1 items-center justify-between px-5 bg-white">
          <View className="flex-col gap-[34px] w-full pt-20 text-center">
            {/* page header */}
            <View className="flex-col gap-2.5">
              <Text
                style={{ fontFamily: FontFamily.loraMedium }}
                className="text-[#090A0A] text-[24px] font-medium text-center"
              >
                What do you show off when wearing clothes.
              </Text>
            </View>

            <View className="flex-row gap-5 flex-wrap justify-center">
              {showOffOptions.map((reason) => (
                <TouchableOpacity
                  key={reason}
                  onPress={() => toggleSelection("showOffWhenWearing", reason)}
                  style={{
                    backgroundColor:
                      personalization.showOffWhenWearing.includes(reason)
                        ? "#00C883"
                        : "#FFFFFF",
                  }}
                  className={`rounded-full px-4 py-2 border ${
                    personalization.showOffWhenWearing.includes(reason)
                      ? "border-transparent"
                      : "border-[#626565]"
                  }`}
                >
                  <Text
                    key={reason}
                    style={{
                      fontFamily: FontFamily.nunitoBold,
                      color: personalization.showOffWhenWearing.includes(reason)
                        ? "#FFF"
                        : "#3343737",
                    }}
                    className="text-[#343737] text-sm"
                  >
                    {reason}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          <Pressable
            onPress={onContinue}
            className="h-[50px] rounded-md bg-primary items-center mb-10 justify-center w-full"
          >
            <Text className="text-text-primary text-lg font-semibold">
              Continue
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </>
  );
}

export default ShowOffWhenWearing;
