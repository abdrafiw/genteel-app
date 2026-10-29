import { useRouter } from "expo-router";
import { Pressable, Text } from "react-native";

import { useAuthStore } from "@/src/utils/authStore";

type Props = {
  scrollTo: () => void;
  isLastScreen: boolean;
};

function NextButton({ scrollTo, isLastScreen }: Props) {
  const router = useRouter();
  const { completeOnboarding } = useAuthStore();

  const handlePress = () => {
    if (isLastScreen) {
      completeOnboarding();
      router.replace("/auth");
    } else {
      scrollTo();
    }
  };

  return (
    <Pressable
      // onPress={handlePress}
      onPress={handlePress}
      className="w-full h-[50px] rounded-md bg-primary items-center justify-center"
    >
      <Text className="text-text-primary text-lg font-semibold">
        {isLastScreen ? "Get Started" : "Next"}
      </Text>
    </Pressable>
  );
}

export default NextButton;
