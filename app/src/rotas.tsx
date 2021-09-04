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
        name="Inicio" 
        component={Inicio} 
        options={{
          tabBarIcon: ({size,focused}) => {
            return(
              <Ionicons
                name="md-heart"
                size={size}
                color={focused ? colors.purple : colors.black}
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
                name="compass-outline"
                size={size}
                color={focused ? colors.purple : colors.black}
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
              <Ionicons
                name="md-browsers"
                size={size}
                color={focused ? colors.purple : colors.black}
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
              <MaterialCommunityIcons
                name="trophy-outline"
                size={size}
                color={focused ? colors.purple : colors.black}
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