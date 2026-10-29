import { Link, useLocalSearchParams } from "expo-router";
import { Pressable,ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import ProductWithPrice from "@/src/components/ProductWithPrice";
import { CATALOG } from "@/src/data/catalog";

import CatalogHeader from "../components/CatalogHeader";
import ProductsFilterBar from "./ProductsFilterBar";

function CatalogDetailsScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();

  const FILTERED_CATALOG = CATALOG?.find((item) => item.id === id);

  return (
    <SafeAreaView className="bg-white flex-1 px-5 gap-6">
      <CatalogHeader />

      <ProductsFilterBar
        category={FILTERED_CATALOG?.name}
        productCount={FILTERED_CATALOG?.products.length}
      />

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="flex-row flex-wrap justify-between gap-y-5">
          {FILTERED_CATALOG?.products?.map((item) => (
            <Link
              href={{
                pathname: "/product-details",
                params: { id: item.id },
              }}
              asChild
              key={item.id}
            >
              <Pressable className="w-[48%] gap-[10px]">
                <ProductWithPrice item={item} />
              </Pressable>
            </Link>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default CatalogDetailsScreen;
