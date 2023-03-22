import React from 'react';
import { useState } from 'react';
import { TouchableWithoutFeedback } from 'react-native';

import { ScrollView, Text, View } from '@/ui';
import FootIcon from '@/ui/components/icons/foot-icon';
import ParChequeIcon from '@/ui/components/icons/par-cheque-icon';
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
  const [isPressedParCheque, setIsPressed] = useState(false);
  const handelPressParCheque = () => {
    setIsPressed(!isPressedParCheque);
  };
  const [isPressedEnEspece, setIsPressedEnEspece] = useState(false);
  const handelPressedEnEspece = () => {
    setIsPressedEnEspece(!isPressedEnEspece);
  };

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
          <View className="border-y border-white mt-5">
            <View className=" py-5 mt-3 ml-5">
              <Text className="text-white text-lg">Produits </Text>
              <ProductCardsContainer items={products} />
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
          <View className="flex-row justify-center mt-3 ">
            <TouchableWithoutFeedback
              onPressIn={handelPressedEnEspece}
              onPressOut={handelPressedEnEspece}
            >
              <View
                className={`h-[119] w-[89]  mx-2 rounded-xl items-center bg-white ${
                  isPressedEnEspece
                    ? 'border-2 border-green-10 bg-espece-50'
                    : ''
                }`}
              >
                <View
                  className={`h-[40] w-[40] bg-neutral-50 mt-5 items-center justify-center rounded-lg mb-[14] ${
                    isPressedEnEspece ? 'bg-white' : ''
                  }`}
                >
                  <FootIcon />
                </View>
                <Text
                  className={`text-black ${
                    isPressedEnEspece ? 'text-white' : ''
                  }`}
                >
                  En espéce
                </Text>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPressIn={handelPressParCheque}
              onPressOut={handelPressParCheque}
            >
              <View
                className={`h-[119] w-[89] mx-2 items-center bg-white rounded-xl ${
                  isPressedParCheque
                    ? 'bg-espece-50 border-2 border-green-10'
                    : ''
                }`}
              >
                <View
                  className={`h-[40] w-[40] bg-neutral-50 mt-5 items-center justify-center rounded-lg mb-[14]  ${
                    isPressedParCheque ? 'bg-white' : ''
                  }`}
                >
                  <ParChequeIcon />
                </View>
                <Text
                  className={`text-black ${
                    isPressedParCheque ? 'text-white' : ''
                  }`}
                >
                  Par chéque
                </Text>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </View>
      </ScrollView>
      <View className="absolute inset-x-0 bottom-0">
        <TotalOrder />
      </View>
    </View>
  );
};

export default Cart;
