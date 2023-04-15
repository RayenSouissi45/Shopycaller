import { ScrollView, Text, View } from '@/ui';
import CategoryProductsContainer from '@/ui/components/category-product-container';
// import BottomMenu from '@/navigation/bottom-menu';
import CategorySearchIcon from '@/ui/components/icons/category-search-icon';
import ProductCardsContainer from '@/ui/components/product-cards-container';
import SubCategory from '@/ui/components/sub-category';
import SearchInput from '@/ui/core/input/search-input';
import colors from '@/ui/theme/colors';

const Category = () => {
  const products = [
    {
      id: 1,
      name: 'SVR masque product 1',
      price: 10.99,
      description: 'this is the description for product 1',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 19.99,
      description: 'this is the description for product 1',
    },
    {
      id: 3,
      name: 'Product 3',
      price: 7.99,
      description: 'this is the description for product 1',
    },
  ];
  const CategoryProductList = [
    {
      name: 'Visage',
    },
    {
      name: 'Peau',
    },
    {
      name: 'Massage',
    },
    {
      name: 'Repair',
    },
    {
      name: 'Name product 5',
    },
  ];
  return (
    <>
      <View className="flex-1 bg-neutral-200">
        <ScrollView>
          <View className="h-[274] bg-neutral-50 rounded-bl-[50] relative">
            <View className="mt-[50] ml-[26]">
              <Text className="text-neutral-750 font-bold text-2xl">
                Catégories
              </Text>
              <Text className="text-neutral-100 font-light text-sm">
                Recherche par catégorie?
              </Text>
            </View>
            <View className="ml-[28]">
              <SearchInput
                rounded="rounded-2xl"
                bg="bg-white"
                placeholder="Search"
                isVisible={false}
                placeholderTextColor={colors.neutral[60]}
                // 'border-white/[.4]'
              >
                <CategorySearchIcon />
              </SearchInput>
            </View>
          </View>
          <View className="absolute left-[15] top-[210] z-20">
            <CategoryProductsContainer items={CategoryProductList} />
            {/* <SubCategory /> */}
          </View>
          <View className="mt-[100]">
            <View className="mb-7 flex-row pl-7 space-x-7">
              <View>
                <SubCategory />
              </View>
              <View>
                <SubCategory />
              </View>
            </View>
            <View>
              <ProductCardsContainer items={products} deleteOption={false} />
            </View>
          </View>
        </ScrollView>
      </View>
      {/* <BottomMenu /> */}
    </>
  );
};
export default Category;
