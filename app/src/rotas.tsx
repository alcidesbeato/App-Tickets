import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

import colors from './styles/colors';

import Inicio from './pages/Inicio';
import Ingressos from './pages/Ingressos';
import Eventos from './pages/Eventos';
import Cadastro from './pages/Cadastro';

const { Navigator, Screen } = createBottomTabNavigator();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator>

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
  );
};

export default Routes;