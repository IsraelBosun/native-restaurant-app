import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import ResturantScreen from './screens/ResturantScreen';

const Stack = createNativeStackNavigator();
export default function Navigation() {


  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Resturant" component={ResturantScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}