import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import TelaSplash from "../pages/splash/splash"; 
import Login from "../pages/login/login"; 

import { RootStackParamList } from "../@types/types"; 

const Stack = createNativeStackNavigator<RootStackParamList>(); 

export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Splash" component={TelaSplash} />
                <Stack.Screen name="Login" component={Login} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}