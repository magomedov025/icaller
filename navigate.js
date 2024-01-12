import React from "react";
import HomeScreen from "./screen/HomeScreen";
import Contact from "./screen/Contact";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function Navigate(){
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen 
                name="HomeScreen"
                component={HomeScreen}
                options={{title: 'Главная'}}
            />
            <Stack.Screen 
                name="Contact"
                component={Contact}
                options={{title: 'Контакты'}}
            />
        </Stack.Navigator>
    </NavigationContainer>;
}