import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';

import colors from './styles/colors';

import Inicio from './pages/Inicio';
import Ingressos from './pages/Ingressos';
import Eventos from './pages/Eventos';
import Cadastro from './pages/Cadastro';
import Buscar from './pages/Buscar';
import Preload from './pages/Preload';

import UserContextProvider from './contexts/UserContext';


const { Navigator, Screen } = createBottomTabNavigator();

const Stack = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <UserContextProvider>   
    <NavigationContainer>
       <Navigator
       initialRouteName="Preload"
       screenOptions={{
         headerShown: false
       }}
       >

        <Stack.Screen 
        name= "Preload" 
        component={Preload}
        />

        <Screen 
        name="Início" 
        component={Inicio} 
        options={{
          tabBarIcon: ({size,focused}) => {
            return(
              <MaterialCommunityIcons
                name= "home"
                size={size}
                color={focused ? colors.red : colors.black}
              /> 
                  );
                                           },
              }}
        />

        <Screen 
        name="Buscar" 
        component={Buscar} 
        options={{
          tabBarIcon: ({size,focused}) => {
            return(
              <Ionicons
                name="search" 
                size={size}
                color={focused ? colors.red : colors.black}
              /> 
                  );
                                           },
              }}
        />

        <Screen 
        name="Ingressos" 
        component={Ingressos} 
        options={{
          tabBarIcon: ({size,focused}) => {
            return(
              <MaterialCommunityIcons
                name= "ticket"
                size={size}
                color={focused ? colors.red : colors.black}
              /> 
                  );
                                           },
              }}
        />

        <Screen 
        name="Eventos" 
        component={Eventos} 
        options={{
          tabBarIcon: ({size,focused}) => {
            return(
              <MaterialCommunityIcons
                name= "location-enter"
                size={size}
                color={focused ? colors.red : colors.black}
              /> 
                  );
                                           },
              }}
        />

        <Screen 
        name="Cadastro" 
        component={Cadastro}
        options={{
          tabBarIcon: ({size,focused}) => {
            return(
              <Ionicons
                name= "person"
                size={size}
                color={focused ? colors.red : colors.black}
              /> 
                  );
                                           },
              }}
        />
         
      </Navigator> 
    </NavigationContainer>
    </UserContextProvider>
  );
};

export default Routes;

//colocar Stack.navigator em vez de navigator