import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import ResturantScreen from './screens/ResturantScreen';
import CartScreen from './screens/CartScreen';
import OrderPreparingScreen from './screens/OrderPreparingScreen';
import DeliveryScreen from './screens/DeliveryScreen';


const Stack = createNativeStackNavigator();
export default function Navigation() {


  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Restaurant" component={ResturantScreen} />
            <Stack.Screen name="Cart" screenOptions={{presentation: 'modal'}} component={CartScreen} />
            <Stack.Screen name="Order" screenOptions={{presentation: 'fullScreenModal'}} component={OrderPreparingScreen} />
            <Stack.Screen name="Delivery" screenOptions={{presentation: 'fullScreenModal'}} component={DeliveryScreen} />
        </Stack.Navigator>
    </NavigationContainer>
  )
}