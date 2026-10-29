import { Minus, Plus } from "lucide-react-native";
import { Text, TouchableOpacity, View } from "react-native";

import { FontFamily } from "@/src/constants/Typography";

type CountControlProps = {
    quantity: number;
    onDecrease: () => void;
    onIncrease: () => void;
};

function CountControl({ quantity, onDecrease, onIncrease }: CountControlProps) {
    return (
        <View className="flex-row items-center gap-6 border border-[#E0E4E4] py-2 px-[13px] rounded-[4px]">
            <TouchableOpacity onPress={onDecrease} className="text-[#B8BFBF]">
                <Minus size={18} color="#B8BFBF" />
            </TouchableOpacity>

            <Text
                style={{ fontFamily: FontFamily.nunitoMedium }}
                className="text-base text-[#111827] w-6 text-center"
            >
                {quantity}
            </Text>

            <TouchableOpacity onPress={onIncrease} className="text-[#090A0A]">
                <Plus size={18} color="#090A0A" />
            </TouchableOpacity>
        </View>
    );
}

export default CountControl;