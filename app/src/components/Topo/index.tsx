import React from 'react';
import { Alert } from 'react-native';
import {
  MaterialIcons,
  MaterialCommunityIcons,
  Feather,
} from '@expo/vector-icons';

import colors from '../../styles/colors';

import { Container, Avatar, OnlineStatus, RightSide, Button } from './styles';
import { useNavigation } from '@react-navigation/native';

const Topo: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <Avatar onPress={() => navigation.navigate('Cadastro') } >
         <OnlineStatus /> 
      </Avatar>

      <RightSide>

        <Button>
          <MaterialCommunityIcons
            name= "home"
            size={26}
            color={colors.black}
            onPress={() => navigation.navigate('Inicio')}
          />
        </Button>

        <Button>
          <MaterialCommunityIcons
            name= "ticket"
            size={26}
            color={colors.black}
            onPress={() => navigation.navigate('Ingressos')}
          />
        </Button>

        <Button>
          <MaterialCommunityIcons 
          name= "calendar-plus"
          size={26} 
          color={colors.black} 
          onPress={() => navigation.navigate('Eventos') }
        />
        </Button>

        <Button>
          <Feather 
          name="search" 
          size={26} 
          color={colors.black} 
          onPress={() => navigation.navigate('Buscar') }
        />
        </Button>
        
      </RightSide>
    </Container>
  );
};

export default Topo;