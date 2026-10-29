import { LinearGradient } from "expo-linear-gradient";
import {
  Dimensions,
  Image,
  ImageSourcePropType,
  Text,
  View,
} from "react-native";

import { TSlide } from "@/src/utils/slides";

const { width: screenWidth, height: screenHeight } = Dimensions.get("screen");

function OnboardingSlide({ item }: { item: TSlide }) {
  const { title, description, image } = item;

  return (
    <View
      style={{
        width: screenWidth,
        height: screenHeight,
      }}
      className="relative"
    >
      <Image
        source={image as ImageSourcePropType}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: screenWidth,
          height: screenHeight,
        }}
        resizeMode="cover"
      />

      <View
        className="absolute flex-col gap-4 py-20 bottom-32 right-0 left-0 w-full z-20"
        style={{ zIndex: 20 }}
      >
        <Text className="text-white text-[32px] font-bold text-center">
          {title}
        </Text>

        <Text className="text-white text-base text-center opacity-90 max-w-sm mx-auto">
          {description}
        </Text>
      </View>

      <LinearGradient
        colors={[
          "transparent",
          "rgba(0, 0, 0, 1)",
          "rgba(0, 0, 0, 1)",
          "rgba(0, 0, 0, 1)",
        ]}
        locations={[0, 0.3, 0.7, 1]}
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          height: 352,
          width: screenWidth,
          zIndex: 1,
        }}
      />
    </View>
  );
}

export default OnboardingSlide;
