import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import tw from "twrnc"
import { themeColors } from '../theme'
import RestaurantCard from './RestaurantCard'

export default function FeaturedRow({title, description, restaurant}) {
  return (
    <View>
      <View style={tw`flex-row justify-between items-center px-4`}>
        <View>
            <Text style={tw`font-bold text-lg`}>{title}</Text>
            <Text style={tw`text-gray-500 text-xs`}>{description}</Text>
        </View>
        <TouchableOpacity>
            <Text style={[tw`font-semibold`, {color: themeColors.text}]}>See All</Text>
        </TouchableOpacity>
      </View>
       
      <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingHorizontal: 15}}
      style={tw`overflow-visible py-5`}
      >
        {
            restaurant.map((restaurant, index)=> {
                return (
                    <RestaurantCard key={index} item={restaurant} />
                )
            })
        }
      </ScrollView>
    </View>
  )
}