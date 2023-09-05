import { View, Text, TouchableWithoutFeedback, Image } from 'react-native'
import React from 'react'
import tw from "twrnc"
import * as Icon from "react-native-feather"
import {themeColors} from "../theme"
import { useNavigation } from '@react-navigation/native'


export default function RestaurantCard({item}) {

  const navigation = useNavigation()

  return (
    <TouchableWithoutFeedback
     onPress={()=> navigation.navigate("Restaurant", {...item})}
    >
      <View 
      style={[{shadowColor: themeColors.bgColor(0.2), shadowRadius: 7}, tw`mr-6 bg-white rounded-3xl shadow-lg mb-3`, ]}>
        <Image style={tw`h-36 w-64 rounded-t-3xl`} source={item.image} />
        <View style={tw`px-3 pb-4 gap-y-2`}>
            <Text style={tw`text-lg font-bold pt-2`}>{item.name}</Text>
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
      </View>
    </TouchableWithoutFeedback>
  )
}