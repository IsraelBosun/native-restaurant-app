import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { featured } from '../constants'
import tw from "twrnc";
import * as Icon from "react-native-feather"
import { themeColors } from '../theme';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { selectRestaurant } from '../slices/RestaurantSlice';
import { removeFromCart, selectCartItems, selectCartTotal } from '../slices/CartSlice';


export default function CartScreen() {

  const navigation = useNavigation();
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);
  const [groupedItems, setGroupedItems] = useState({})
  // const restaurant = featured.restaurants[0];

  const deliveryFee = 2;

  useEffect(()=> {
    const items = cartItems.reduce((group, item)=> {
      if (group[item.id]) {
        group[item.id].push(item)
      } else {
        group[item.id] = [item]
      }
      return group;
    }, {})
      setGroupedItems(items)
  }, [cartItems])

  // const restaurant = useSelector(state=> state.resturant.resturant)
  const restaurant = useSelector(selectRestaurant);
  // console.log(restaurant)


  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      
      <View style={tw`relative  py-4 shadow-sm`}>
        <TouchableOpacity onPress={()=>navigation.goBack()} style={[tw`absolute z-10 rounded-full p-1 shadow top-5 left-2`, { backgroundColor: themeColors.bgColor(1)}]}>
          <Icon.ArrowLeft strokeWidth={1} stroke="white" />
        </TouchableOpacity>
        <View>
          <Text style={tw`text-center font-bold text-xl`}>Your Cart</Text>
          <Text style={tw`text-center text-gray-500`}>{restaurant.name}t</Text>
        </View>
      </View>

      <View style={[tw`flex-row  px-4 items-center`, {backgroundColor: themeColors.bgColor(0.2)}]}>
        <Image source={require("../assets/images/bikeGuy.jpg")} style={tw`w-20 h-20 rounded-full`} />
        <Text style={tw`flex-1 pl-4`}>Delivery In 20-30 minutes</Text>
        <TouchableOpacity>
          <Text style={[tw`font-bold`, {color: themeColors.text}]}>Change</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: 50}}
      style={tw`bg-white pt-5`}
      >
        {
          Object.entries(groupedItems).map(([key, items])=> {
            let dish = items[0]
            return (
              <View key={key} style={tw`flex-row items-center gap-x-3 py-2 px-4 bg-white rounded-3xl mx-2 mb-3 shadow-md`}>
                <Text style={[tw`font-bold`, {color: themeColors.text}]}>
                  {items.length} x
                </Text>
                <Image style={tw`h-14 w-14 rounded-full`} source={dish.image} />
                <Text style={tw`flex-1 font-bold text-gray-700`}>{dish.name}</Text>
                <Text style={tw`font-semibold text-base`}>${dish.price}</Text>
                <TouchableOpacity onPress={()=> dispatch(removeFromCart({id: dish.id}))} style={[tw`p-1 rounded-full`, {backgroundColor: themeColors.bgColor(1)}]}>
                  <Icon.Minus strokeWidth={2} height={20} width={20} stroke={"white"} />
                </TouchableOpacity>
              </View>
            )
          })
        }
      </ScrollView>

      <View style={[tw`p-6 px-8 rounded-t-3xl gap-y-4`, {backgroundColor: themeColors.bgColor(0.2)}]}>
        <View style={tw`flex-row justify-between `}>
          <Text style={tw`text-gray-700`}>Subtotal</Text>
          <Text style={tw`text-gray-700`}>${cartTotal}</Text>
        </View>
        <View style={tw`flex-row justify-between `}>
          <Text style={tw`text-gray-700`}>Delivery fee</Text>
          <Text style={tw`text-gray-700`}>${deliveryFee}</Text>
        </View>
        <View style={tw`flex-row justify-between `}>
          <Text style={tw`text-gray-700 font-extrabold`}>Order total</Text>
          <Text style={tw`text-gray-700 font-extrabold`}>${cartTotal + deliveryFee}</Text>
        </View>
        <View>
          <TouchableOpacity onPress={()=> navigation.navigate("Order")} style={[tw`p-3 rounded-full`, {backgroundColor: themeColors.bgColor(1)}]}>
            <Text style={tw`text-white text-center font-bold text-lg`}>Place order</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}
