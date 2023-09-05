import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import tw from "twrnc"
import * as Icon from "react-native-feather"
import { themeColors } from '../theme'
import DishRow from '../components/DishRow'
import CartIcon from '../components/CartIcon'
import { StatusBar } from 'expo-status-bar'


export default function ResturantScreen() {

  const navigation = useNavigation()

  const { params } = useRoute();
  let item = params
  // console.log("resu", item)

  return (
    <View>
      <CartIcon />
      <StatusBar style='light' />
      <ScrollView>
        <View style={tw`relative`}>
          <Image style={tw`w-full h-72`} source={item.image} />
          <TouchableOpacity onPress={()=>navigation.goBack()} style={tw`absolute top-14 left-4 bg-gray-50 p-2 rounded-full shadow`}>
            <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)} />
          </TouchableOpacity>
        </View>

        <View style={[tw`bg-white   -mt-12 pt-5`, { borderTopLeftRadius: 40, borderTopRightRadius: 40}]}>
          <View style={tw`px-5`}>
            <Text style={tw`text-3xl font-bold`}>{item.name}</Text>
            <View style={tw`flex-row gap-x-2 my-1`}>
              <View style={tw`flex-row items-center gap-x-1`}>
                  <Image source={require("../assets/images/fullStar.png")} style={tw`h-4 w-4`} />
                  <Text style={tw`text-xs`}>
                      <Text style={tw`text-green-700`}>{item.stars}</Text>
                      <Text style={tw`text-gray-700`}>
                          ({item.reviews} review) · <Text style={tw`font-semibold`}>{item.category}</Text>
                      </Text>
                  </Text>
              </View>

              <View style={tw`flex-row items-center gap-x-1`}>
                  <Icon.MapPin height="25" width="15" stroke="gray" />
                  <Text style={tw`text-gray-700 text-xs`}>Nearby · {item.address} </Text>
              </View>
            </View>
            <Text style={tw`text-gray-500 mt-2`}>{item.description}</Text>
          </View>
        </View>
        <View style={tw`pb-36 bg-white`}>
          <Text style={tw`px-4 py-4 text-2xl font-bold`}>Menu</Text>
          {
            item.dishes.map((dish, index)=> <DishRow key={index} item={{...dish}} />)
            // item.dishes.map((dish, index)=> <DishRow key={index} item={dish.name} cat={dish.description} goat={dish.price} rat={dish.image} />)
          }
        </View>
      </ScrollView>
    </View>
  )
}