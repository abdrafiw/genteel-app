import { useEffect } from "react";
import { ActivityIndicator,Dimensions, Image, View } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

const { width: screenWidth, height: screenHeight } = Dimensions.get("screen");

type Props = {
  backgroundImage?: any; // Image source
  loadingIconColor?: string;
};

function CustomSplashScreen({
  backgroundImage,
  loadingIconColor = "#78F208",
}: Props) {
  const scale = useSharedValue(1);

  useEffect(() => {
    scale.value = withRepeat(
      withTiming(1.2, {
        duration: 1000,
        easing: Easing.inOut(Easing.ease),
      }),
      -1,
      true
    );
  }, [scale]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  return (
    <View
      style={{
        width: screenWidth,
        height: screenHeight,
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 9999,
      }}
      className="items-center justify-center"
    >
      {/* background Image */}
      {backgroundImage && (
        <Image
          source={backgroundImage}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: screenWidth,
            height: screenHeight,
          }}
          resizeMode="cover"
        />
      )}

      {/* loading icon with animation */}
      <Animated.View style={animatedStyle}>
        <ActivityIndicator size="large" color={loadingIconColor} />
      </Animated.View>
    </View>
  );
}

export default CustomSplashScreen;
