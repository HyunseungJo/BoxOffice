import React from "react"
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();

export default function DefaultStackNavigator() {
    return (
        <>
            <Stack.Navigator screenOptions={{
                headerShown: true
            }}>
                <Stack.Screen name={"Home"} component={Home} />
            </Stack.Navigator>
        </>
    )
}