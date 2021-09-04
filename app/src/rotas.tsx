import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Inicio from './pages/Inicio';


const { Navigator, Screen } = createBottomTabNavigator();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Inicio" component={Inicio} /> 
        <Screen name="Ingressos" component={View} />
        <Screen name="Eventos" component={View} />
        <Screen name="Cadastro" component={View} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;