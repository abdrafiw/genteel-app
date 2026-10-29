import { ColorValue, Text, View } from "react-native";

import { FontFamily } from "@/src/constants/Typography";
import { PRODUCTS } from "@/src/data/products";

import { ShoppingCart } from "./Icons";

type CartIconWithBadgeProps = {
    color?: ColorValue;
    size?: number;
};

export const CartIconWithBadge = ({
    color = "#A4A8A8",
    size = 24,
}: CartIconWithBadgeProps) => {
    const cartItemsCount = PRODUCTS.cart.reduce(
        (total, item) => total + item.quantity,
        0
    );

    return (
        <View className="relative">
            <ShoppingCart color={color} size={size} />
            {cartItemsCount > 0 && (
                <View className="absolute -top-1 -right-[10px] bg-[#090A0A] rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-1">
                    <Text
                        style={{ fontFamily: FontFamily.loraMedium }}
                        className="text-xs text-primary"
                    >
                        {cartItemsCount > 99 ? "99+" : cartItemsCount}
                    </Text>
                </View>
            )}
        </View>
    );
};
