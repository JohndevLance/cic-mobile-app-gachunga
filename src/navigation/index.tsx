import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../pages/Home/Home';
import General from '../pages/General';
import LifePolicyDetails from '../pages/Life';
import AssetPortfolioDetails from '../pages/Asset';
import Login from '../pages/Auth/Login';
import {useUserStore} from '../store/useUserStore';

const Stack = createNativeStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="General" component={General} />
      <Stack.Screen name="Life" component={LifePolicyDetails} />
      <Stack.Screen name="Assets" component={AssetPortfolioDetails} />
    </Stack.Navigator>
  );
}

function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}

export default function Navigation() {
  const user = useUserStore(state => state.user);

  return (
    <NavigationContainer>
      {user ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
