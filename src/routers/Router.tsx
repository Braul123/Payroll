import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
  } from 'react-native/Libraries/NewAppScreen';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 

// Componentes
import Login from '../components/login/Login';
const Nav = createNativeStackNavigator();

export default function Router() {

    
    return (
        <NavigationContainer>
            <Nav.Navigator initialRouteName='Login'>
                <Nav.Screen
                options={{
                    headerShown: false
                }}
                name="Login"
                component={Login}/>
            </Nav.Navigator>
        </NavigationContainer>
    )
}