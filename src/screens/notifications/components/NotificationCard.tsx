import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { FontFamily } from "@/src/constants/Typography";

interface NotificationCardProps {
  id: number;
  type: string;
  timestamp: string;
  message: string;
  imageUrl: ImageSourcePropType;
  originalPrice: number;
  discountedPrice: number;
  onVisit?: () => void;
}

function NotificationCard({
  type,
  timestamp,
  message,
  imageUrl,
  originalPrice,
  discountedPrice,
  onVisit,
}: NotificationCardProps) {
  return (
    <View className="bg-white rounded-lg px-[14px] py-[11px] flex-row gap-4 shadow-stone-200">
      {/* product image */}
      <Image
        source={imageUrl}
        className="w-[95px] h-[85px] rounded-sm"
        resizeMode="cover"
      />

      {/* content */}
      <View className="flex-1 gap-2">
        {/* header with type and timestamp */}
        <View className="flex-row justify-between items-center">
          <Text
            style={{ fontFamily: FontFamily.nunitoSemiBold }}
            className="text-xs text-[#00C883] uppercase tracking-wide"
          >
            {type}
          </Text>

          <Text
            style={{ fontFamily: FontFamily.nunitoSemiBold }}
            className="text-xs text-[#626565]"
          >
            {timestamp}
          </Text>
        </View>

        {/* message */}
        <Text
          style={{ fontFamily: FontFamily.nunitoRegular }}
          className="text-xs text-[#343737]"
        >
          {message}
        </Text>

        {/* price and visit button */}
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center gap-2">
            <Text
              style={{ fontFamily: FontFamily.loraRegular }}
              className="text-base text-[#979C9E] line-through"
            >
              ${originalPrice}
            </Text>

            <Text
              style={{ fontFamily: FontFamily.loraMedium }}
              className="text-base text-[#FF4B9E]"
            >
              ${discountedPrice}
            </Text>
          </View>

          <TouchableOpacity
            onPress={onVisit}
            className="bg-primary px-4 py-2 rounded-lg w-[60px]"
          >
            <Text
              style={{ fontFamily: FontFamily.nunitoSemiBold }}
              className="text-sm text-[#090A0A] text-center"
            >
              Visit
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default NotificationCard;
