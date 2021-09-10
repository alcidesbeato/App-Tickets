import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';


import Inicio from './pages/Inicio';
import Ingressos from './pages/Ingressos';
import Eventos from './pages/Eventos';
import Cadastro from './pages/Cadastro';
import Buscar from './pages/Buscar';
import Preload from './pages/Preload';


const { Navigator, Screen } = createBottomTabNavigator();

const Stack = createStackNavigator();

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
       <Stack.Navigator
       initialRouteName="Preload"
       screenOptions={{
         headerShown: false
       }}
       >

      <Stack.Screen 
        name= "Preload" 
        component={Preload}
        />

        <Stack.Screen 
        name= "Inicio" 
        component={Inicio}
        />
        
        <Stack.Screen 
        name= "Buscar" 
        component={Buscar}
        />

          <Stack.Screen 
        name= "Ingressos" 
        component={Ingressos}
        />

        <Stack.Screen 
        name= "Eventos" 
        component={Eventos}
        />

        <Stack.Screen 
        name= "Cadastro" 
        component={Cadastro}
        />
         
      </Stack.Navigator> 
    </NavigationContainer>
  );
};

export default Routes;

//colocar Stack.navigator em vez de navigator