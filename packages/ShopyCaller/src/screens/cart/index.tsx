import React from 'react';

import { ScrollView, Text, View } from '@/ui';
import CategoryProductsContainer from '@/ui/components/category-product-container';
import ProductCardsContainer from '@/ui/components/product-cards-container';
import TotalOrder from '@/ui/components/total-order';

//import Product from './product';
const Cart = () => {
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
  const methodofpayment = [
    {
      name: 'En Espèce',
    },
    {
      name: 'Par chèque',
    },
  ];

  return (
    <View className="bg-neutral-200 relative flex">
      <ScrollView className=" flex">
        <View className="pt-20  ">
          <Text className="text-white text-left text-xl  pl-8 ">
            Récapitulatif de la commande
          </Text>
          <Text className="text-white opacity-50 text-left text-sm pt-2  pl-8 ">
            Validation de panier
          </Text>
          <View className="border-y border-grey-10 mt-5">
            <View className=" py-5 mt-3 ml-5">
              <Text className="text-white text-lg">Produits </Text>
              <ProductCardsContainer items={products} deleteOption={true} />
            </View>
          </View>
        </View>
        <View className="h-[308] bg-black">
          <View>
            <Text className="text-white text-lg m-5">Adresse</Text>
          </View>
          {/*   <MapView
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        /> */}
        </View>
        <View className="h-[308] ">
          <View>
            <Text className="text-white font-medium m-5">
              Méthode de paiement
            </Text>
          </View>
          <View className="flex-row justify-center mt-3 ml-[88] ">
            {/* <CategoryProduct titleText="En espéce" testx="hello" />
            <CategoryProduct titleText="Par chèque" testx="dagla" /> */}
            <CategoryProductsContainer items={methodofpayment} />
          </View>
        </View>
      </ScrollView>
      <View className="absolute inset-x-0 bottom-0">
        <TotalOrder buttonText="Valider" />
      </View>
    </View>
  );
};

export default Cart;
