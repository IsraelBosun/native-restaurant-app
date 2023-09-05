import { View, Text, TextInput, ScrollView } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from "twrnc"
import { StatusBar } from 'expo-status-bar'
import * as Icon from "react-native-feather"
import { themeColors } from '../theme'
import Categories from '../components/Categories'
import { featured } from '../constants'
import FeaturedRow from '../components/FeaturedRow'



export default function HomeScreen() {
  return (
    <SafeAreaView style={tw`bg-white `}>
        <StatusBar style="dark" /> 
      <View style={tw`flex-row items-center gap-x-2 px-4 pb-2`}>
        <View style={tw`flex-row flex-1 items-center p-3 rounded-full border border-gray-300`}>
            <Icon.Search height="25" width="25" stroke="gray" />
            <TextInput placeholder="Resturant" style={tw`ml-2 flex-1`} />
            <View style={tw`flex-row items-center gap-x-1 border-0 border-l-2 border-l-gray-300`}>
            <Icon.MapPin height="25" width="25" stroke="gray" />
            <Text style={tw`text-gray-600`}>New York, NYC</Text>
            </View>
        </View>
        <View style={[tw`p-3 bg-gray-300 rounded-full `, {backgroundColor: themeColors.bgColor(1)}]}>
            <Icon.Sliders height="20" width="20" stroke="white" strokeWidth={2.5} />
        </View>
      </View>

      <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: 20}}

      >
        <Categories />

        <View style={tw`mt-5`}>
          {
            [featured, featured, featured].map((item, index)=> {
              return (
                <FeaturedRow
                key={index}
                title={item.title}
                restaurant={item.restaurants}
                description={item.description}
                />
              )
            })
          }
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}