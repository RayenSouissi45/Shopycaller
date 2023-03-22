import React from 'react';

import { View } from '@/ui/core';

import ProductCard from '../product-cards';

const ProductCardsContainer = ({ items }: any) => {
  return (
    <View>
      {items.map((product: any, index: number) => (
        <ProductCard key={index} product={product} />
      ))}
    </View>
  );
};

export default ProductCardsContainer;
