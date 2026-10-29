import { StatusBar } from "expo-status-bar";
import { Pressable,Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { FontFamily } from "@/src/constants/Typography";

import { PersonalizationData } from ".";

type Props = {
  onContinue: () => void;
  toggleSelection: (category: keyof PersonalizationData, value: string) => void;
  personalization: PersonalizationData;
};

function ExcitementReasons({
  onContinue,
  toggleSelection,
  personalization,
}: Props) {
  const excitementReasons = [
    "Browse a curated shop",
    "Get seasonal looks",
    "A fun surprise",
    "Having an AI help me shop",
    "Inspiration",
    "Unique pieces",
    "Hopeful",
    "Transform my style",
    "Do my shopping for me",
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
                First, what are the reasons you&apos;re excited to try Genteel.
              </Text>
            </View>

            {/* options list */}
            <View className="flex-row gap-5 flex-wrap justify-center">
              {excitementReasons.map((reason) => (
                <TouchableOpacity
                  key={reason}
                  onPress={() => toggleSelection("excitementReasons", reason)}
                  style={{
                    backgroundColor: personalization.excitementReasons.includes(
                      reason
                    )
                      ? "#00C883"
                      : "#FFFFFF",
                  }}
                  className={`rounded-full px-4 py-2 border ${
                    personalization.excitementReasons.includes(reason)
                      ? "border-transparent"
                      : "border-[#626565]"
                  }`}
                >
                  <Text
                    key={reason}
                    style={{
                      fontFamily: FontFamily.nunitoBold,
                      color: personalization.excitementReasons.includes(reason)
                        ? "#FFF"
                        : "#3343737",
                    }}
                    className="text-sm"
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

export default ExcitementReasons;
