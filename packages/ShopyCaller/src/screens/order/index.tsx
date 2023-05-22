import { TouchableOpacity } from 'react-native';

import { ScrollView, Text, View } from '@/ui';
import CategoryProductsContainer from '@/ui/components/category-product-container';
import FootIcon from '@/ui/components/icons/foot-icon';
import OrderSearchIcon from '@/ui/components/icons/order-search-icon';
import ParChequeIcon from '@/ui/components/icons/par-cheque-icon';
import ProductCardsContainer from '@/ui/components/product-cards-container';
import TotalOrder from '@/ui/components/total-order';
import SearchInput from '@/ui/core/input/search-input';
import RepairIcon from '@/ui/icons/repair-icon';

const Order = () => {
  const products = [
    {
      id: 1,
      name: 'SVR masque product 1',
      price: 10.99,
      description: 'this is the description for product 1',
      image: require('../../../assets/product1.png'),
    },
    {
      id: 2,
      name: 'Product 2',
      price: 19.99,
      description: 'this is the description for product 1',
      image: require('../../../assets/product2.png'),
    },
    {
      id: 3,
      name: 'Product 3',
      price: 7.99,
      description: 'this is the description for product 1',
      image: require('../../../assets/product3.png'),
    },
  ];
  const CategoryProductList = [
    {
      name: 'Visage',
      icon: <FootIcon />,
    },
    {
      name: 'Peau',
      icon: <ParChequeIcon />,
    },
    {
      name: 'Massage',
      icon: <RepairIcon />,
    },
    {
      name: 'Repair',
      icon: <FootIcon />,
    },
    {
      name: 'Name product 5',
      icon: <FootIcon />,
    },
  ];

  // const [searchText, setSearchText] = useState('');

  // const handleSearch = (text: string) => {
  //   setSearchText(text);
  //   // perform search with updated text
  // };

  return (
    <View className="flex-1 bg-neutral-200">
      <ScrollView className="bg-neutral-200 flex-1">
        <View className="mt-[90]  ">
          <Text className="text-white text-xl pl-8">
            La cliente Zeineb Ben Ammar
          </Text>
          <Text className="text-white opacity-50 text-left text-sm pt-2  pl-8 ">
            Choisissez soigneusement ses produits
          </Text>
          <View className="ml-6 pb-[30]">
            <SearchInput>
              <OrderSearchIcon />
            </SearchInput>
          </View>
        </View>
        <View className="h-[207] border-y border-grey-10 ">
          <View className=" flex-row justify-between mt-3">
            <Text className="text-white pl-5 font-semibold	text-base	">
              Catégorie
            </Text>
            <TouchableOpacity>
              <Text className="text-grey-10 pr-5 font-medium	text-xs pt-1">
                Voir tout &gt;
              </Text>
            </TouchableOpacity>
          </View>
          {/* <ScrollView horizontal className="flex-row mt-4">
            <CategoryProduct />
            <CategoryProduct />
            <CategoryProduct />
            <CategoryProduct />
            <CategoryProduct />
            <CategoryProduct />
          </ScrollView> */}
          <View className="mt-[15]">
            <CategoryProductsContainer items={CategoryProductList} />
          </View>
        </View>
        <View className="ml-3">
          <Text className="text-white text-lg font-medium	p-4">Produits</Text>
          <ProductCardsContainer items={products} deleteOption={false} />
        </View>
      </ScrollView>
      <TotalOrder buttonText="Confirmer" />
    </View>
  );
};

export default Order;
