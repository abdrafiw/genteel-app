import {
  Image,
  ImageSourcePropType,
  Pressable,
  Text,
  View,
} from "react-native";

import { FontFamily } from "@/src/constants/Typography";

export type ChatMode = "chat" | "image" | "video";

export type TabConfig = {
  key: ChatMode;
  icon: ImageSourcePropType;
  label: string;
};

type Props = {
  mode: ChatMode;
  tabs: TabConfig[];
  onModeChange: (mode: ChatMode) => void;
};

function ModeTabs({ mode, tabs, onModeChange }: Props) {
  return (
    <View className="flex-row gap-2.5">
      {tabs.map(({ key, icon, label }) => {
        return (
          <Pressable
            key={key}
            onPress={() => onModeChange(key)}
            className={`flex-1 flex-row items-center p-3 gap-2 rounded-full border border-[#fff] bg-[#F9F9F9]`}
          >
            <Image
              source={icon}
              className="w-[34px] h-[34px]"
              resizeMode="contain"
            />
            <Text
              style={{
                fontFamily: FontFamily.nunitoSemiBold,
              }}
              className="text-[#090A0A] text-base"
            >
              {label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

export default ModeTabs;
