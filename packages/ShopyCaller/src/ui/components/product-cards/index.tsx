import { FontAwesome5 } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Alert, Animated, PanResponder } from 'react-native';

import { Text, TouchableOpacity, View } from '@/ui/core';

const ProductCard = ({ product }: any) => {
  const position = React.useRef(new Animated.Value(0)).current;
  const [productNumber, setProductNumber] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const opacity = React.useRef(new Animated.Value(1)).current;

  const moreProduct = () => {
    setProductNumber(productNumber + 1);
  };

  const lessProduct = () => {
    if (productNumber > 0) {
      setProductNumber(productNumber - 1);
    }
  };
  const disappear = () => {
    Alert.alert('Confirmation', 'Are you sure you want to delete?', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          Animated.timing(position, {
            toValue: -100,
            duration: 300,
            useNativeDriver: false,
          }).start(() => {
            // Hide the animated view
            Animated.timing(opacity, {
              toValue: 0,
              duration: 500,
              useNativeDriver: false,
            }).start(() => setIsVisible(false));
          });
        },
      },
    ]);
  };

  const slideToLeft = () => {
    Animated.timing(position, {
      toValue: -100,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };
  const slideToRight = () => {
    Animated.timing(position, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const panResponder = React.useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gesture) => {
        // Animated.event([null, { dx: position }])(gesture);
        console.log(gesture.dx);
        if (gesture.dx < -0) {
          slideToLeft();
        } else if (gesture.dx > 0) {
          slideToRight();
        }
      },
      onPanResponderRelease: (_) => {},
    })
  ).current;

  const animatedStyle = {
    transform: [{ translateX: position }],
    opacity: opacity,
  };

  return (
    <>
      {isVisible && (
        <View className="relative h-28 my-2 justify-center">
          <TouchableOpacity
            className="w-12 h-24 bg-danger-100 justify-center items-center top-0 absolute rounded-2xl m-3 right-5"
            onPress={disappear}
          >
            <FontAwesome5 name="trash-alt" size={24} color="#FF4848" />
          </TouchableOpacity>
          <Animated.View
            className="w-80 h-28  flex-row "
            style={[animatedStyle]}
            {...panResponder.panHandlers}
          >
            <View className="w-80 h-28 flex-row mr-7">
              <View className="w-28 bg-neutral-50 rounded-l-xl" />
              <View className="bg-white rounded-r-xl">
                <View>
                  <Text className="text-neutral-100 font-medium">
                    {product.name}
                  </Text>
                  <Text className="opacity-50">{product.description}</Text>
                </View>
                <View className="flex-row pt-5 justify-between px-5">
                  <Text>{product.price} TND</Text>
                  <View className="h-8 w-20 bg-neutral-50 flex-row">
                    <TouchableOpacity
                      className="w-6 bg-neutral-50 justify-center items-center "
                      onPress={lessProduct}
                    >
                      <Text className="text-neutral-70">-</Text>
                    </TouchableOpacity>
                    <View className="w-8  rounded-lg  bg-white justify-center items-center">
                      <Text>{productNumber}</Text>
                    </View>
                    <TouchableOpacity
                      className=" w-6 justify-center items-center"
                      onPress={moreProduct}
                    >
                      <Text className="text-neutral-70">+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </Animated.View>
        </View>
      )}
    </>
  );
};

export default ProductCard;
