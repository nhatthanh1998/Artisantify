import React from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import {useSocket} from '../hooks/socket.hook'
import { HomePage } from "../pages/HomePage"
import { EffectPage } from "../pages/EffectPage"
import { CameraPage } from '../pages/CameraPage'

const App = () => {
    const Stack = createStackNavigator()
    useSocket()
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="HomePage" component={HomePage}
                    options={{
                        headerShown: false
                    }}
                />

                <Stack.Screen name="CameraPage" component={CameraPage}
                    options={{
                        title: "CAMERA"
                    }}
                />


                <Stack.Screen name="EffectPage" component={EffectPage}
                    options={{
                        title: 'EFFECTS'
                    }}
                />

            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;