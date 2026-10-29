import { View } from "react-native";

import SavedItems from "./SavedItems";
import StylePreference from "./StylePreference";

function Overview() {
  return (
    <View className="gap-10">
      <StylePreference />
      <SavedItems />
    </View>
  );
}

export default Overview;
