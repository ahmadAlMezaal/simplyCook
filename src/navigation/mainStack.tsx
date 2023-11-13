import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeStack } from './homeStack';

const Stack = createStackNavigator();

export const MainStack = () => {
    return <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}  >
            <Stack.Screen name="HomeStack" component={HomeStack} />
        </Stack.Navigator>
    </NavigationContainer>;
};
