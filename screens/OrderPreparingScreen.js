import { View, Text, Image } from 'react-native'
import React, { useEffect } from 'react'
import tw from "twrnc"
import { useNavigation } from '@react-navigation/native';

export default function OrderPreparingScreen() {

    const navigation = useNavigation();

    useEffect(()=> {
        setTimeout(()=> {
            navigation.navigate("Delivery")
        }, 3000)
    },[])

  return (
    <View style={tw`flex-1 bg-white justify-center items-center`}>
      <Image source={require("../assets/images/delivery.gif")} style={tw`h-80 w-80`} />
    </View>
  )
}