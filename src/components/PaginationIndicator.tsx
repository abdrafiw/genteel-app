import { Animated, View } from "react-native";

import { TSlide } from "@/src/utils/slides";

type TProps = {
  data: TSlide[];
  scrollX: Animated.Value;
  currentIndex: number;
};

function PaginationinIndicator({ data, scrollX, currentIndex }: TProps) {
  return (
    <View className="flex-row items-center justify-center">
      {data.map((_, i) => {
        return (
          <View
            key={i}
            className={`h-[10px] w-[10px] rounded-full t mx-2 border ${
              currentIndex === i
                ? "bg-primary border-primary"
                : "bg-transparent border-white"
            }`}
          />
        );
      })}
    </View>
  );
}

export default PaginationinIndicator;
