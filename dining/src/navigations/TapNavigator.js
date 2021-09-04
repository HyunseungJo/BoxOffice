import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import First from '../screens/First';
import Second from '../screens/Second';
import Third from '../screens/Third';

const Tab = createMaterialTopTabNavigator();

function Tabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="First" component={First} />
            <Tab.Screen name="Second" component={Second} />
            <Tab.Screen name="Third" component={Third} />
        </Tab.Navigator>
    );
}

export default function () {
    return (
        <NavigationContainer>
            <Tabs />
        </NavigationContainer>
    );
}