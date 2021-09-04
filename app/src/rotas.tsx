import React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Inicio from './pages/Inicio';
import Eventos from './pages/Eventos';
import Ingressos from './pages/Ingressos';
import Cadastro from './pages/Cadastro';


const { Navigator, Screen } = createBottomTabNavigator();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Incio" component={Inicio} /> 
        <Screen name="Ingressos" component={Ingressos} />
        <Screen name="Eventos" component={Eventos} />
        <Screen name="Cadastro" component={Cadastro} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;