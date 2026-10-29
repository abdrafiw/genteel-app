import { StatusBar } from "expo-status-bar";
import { useCallback, useRef, useState } from "react";
import { Animated, Dimensions, FlatList, View, ViewToken } from "react-native";

import NextButton from "@/src/components/NextButton";
import OnboardingSlide from "@/src/components/OnboardingSlide";
import PaginationinIndicator from "@/src/components/PaginationIndicator";
import { ONBOARDING_SLIDES, TSlide } from "@/src/utils/slides";

const { width: screenWidth, height: screenHeight } = Dimensions.get("screen");
const VIEWABILITY_CONFIG = { viewAreaCoveragePercentThreshold: 50 };

function OnboardingScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const [scrollX] = useState(() => new Animated.Value(0));
  const slideRef = useRef<FlatList<TSlide>>(null);

  const scrollTo = async () => {
    if (currentIndex < ONBOARDING_SLIDES.length - 1) {
      slideRef?.current?.scrollToIndex({ index: currentIndex + 1 });
    } else {
      console.log("last screen");
    }
  };

  const viewableItemsChanged = useCallback(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (viewableItems.length > 0) {
        setCurrentIndex(viewableItems[0].index ?? 0);
      }
    },
    [],
  );

  return (
    <View className="relative" style={{ height: screenHeight }}>
      <StatusBar style="light" />

      <FlatList
        ref={slideRef}
        keyExtractor={(item) => item.id.toString()}
        data={ONBOARDING_SLIDES}
        renderItem={({ item }) => <OnboardingSlide item={item} />}
        horizontal
        bounces={false}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={32}
        getItemLayout={(data, index) => ({
          length: screenWidth,
          offset: screenWidth * index,
          index,
        })}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          {
            useNativeDriver: false,
          },
        )}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={VIEWABILITY_CONFIG}
      />

      <View className="absolute bottom-20 right-0 left-0 w-full flex-col gap-10 px-4 z-20">
        <PaginationinIndicator
          data={ONBOARDING_SLIDES}
          scrollX={scrollX}
          currentIndex={currentIndex}
        />

        <NextButton
          scrollTo={scrollTo}
          isLastScreen={currentIndex === ONBOARDING_SLIDES.length - 1}
        />
      </View>
    </View>
  );
}

export default OnboardingScreen;
