import { X } from "lucide-react-native";
import { Image, ImageSourcePropType, Text, TouchableOpacity, View } from "react-native";

import { FontFamily } from "@/src/constants/Typography";

import CountControl from "./CountControl";

export type CartItemModel = {
    id: number;
    name: string;
    imgUrl: ImageSourcePropType;
    price: number;
    originalPrice?: number;
    color: string;
    size: string;
    quantity: number;
};

type Props = {
    item: CartItemModel;
    onRemove: (id: number) => void;
    onDecrease: (id: number) => void;
    onIncrease: (id: number) => void;
};

function CartItem({ item, onRemove, onDecrease, onIncrease }: Props) {
    return (
        <View className="flex-row gap-5 border-b pb-5 border-[#E5E5E5] px-5">
            <Image
                source={item.imgUrl}
                className="w-[102px] h-[132px] rounded-sm"
                resizeMode="cover"
            />

            <View className="flex-1 gap-3">
                <Text
                    style={{ fontFamily: FontFamily.loraMedium }}
                    className="text-[14.3px] text-[#343737] max-w-[150px] leading-6"
                >
                    {item.name}
                </Text>

                <View className="flex-row items-center gap-[30px]">
                    {/* color */}
                    <View className="flex-row items-center gap-[10px]">
                        <Text
                            style={{ fontFamily: FontFamily.nunitoRegular }}
                            className="text-[14px] text-[#090A0A]"
                        >
                            Color:
                        </Text>

                        <View
                            className="w-4 h-4 rounded-full"
                            style={{ backgroundColor: item.color }}
                        />
                    </View>

                    {/* size */}
                    <View className="flex-row items-center gap-[10px]">
                        <Text
                            style={{ fontFamily: FontFamily.nunitoRegular }}
                            className="text-[14px] text-[#090A0A]"
                        >
                            Size:
                        </Text>
                        <Text
                            style={{ fontFamily: FontFamily.nunitoRegular }}
                            className="text-[14px] text-[#090A0A]"
                        >
                            {item.size}
                        </Text>
                    </View>
                </View>

                <View className="flex-row items-center justify-between">
                    <View className="flex-row items-center gap-2">
                        {item.originalPrice && (
                            <Text
                                style={{ fontFamily: FontFamily.loraRegular }}
                                className="text-base text-[#626565] line-through"
                            >
                                ${item.originalPrice}
                            </Text>
                        )}

                        <Text
                            style={{ fontFamily: FontFamily.loraMedium }}
                            className="text-base text-secondary"
                        >
                            ${item.price}
                        </Text>
                    </View>

                    <CountControl
                        quantity={item.quantity}
                        onDecrease={() => onDecrease(item.id)}
                        onIncrease={() => onIncrease(item.id)}
                    />
                </View>
            </View>

            <TouchableOpacity onPress={() => onRemove(item.id)} className="self-start">
                <X size={24} color="#090A0A" />
            </TouchableOpacity>
        </View>
    );
}

export default CartItem;

