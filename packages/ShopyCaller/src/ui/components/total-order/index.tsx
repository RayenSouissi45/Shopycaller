import React from 'react';

import { Button } from '@/ui';
import { Text, View } from '@/ui/core';

const TotalOrder = () => {
  return (
    <View className="h-20 bg-green-10 rounded-t-[20] items-center justify-between px-4 flex-row w-full">
      <View>
        <Text className="text-white">Total de la commande</Text>
        <Text className="text-white font-extrabold">210.100 TND</Text>
      </View>
      <Button variant="primary" label="Valider" className="rounded-lg" />
    </View>
  );
};

export default TotalOrder;
