import React from 'react';
import { Alert } from 'react-native';
import {
  MaterialIcons,
  MaterialCommunityIcons,
  Feather,
} from '@expo/vector-icons';

import colors from '../../styles/colors';

import { Container, Avatar, OnlineStatus, RightSide, Button } from './styles';

const Topo: React.FC = () => {
  return (
    <Container>
      <Avatar onPress={() => Alert.alert('Perfil sendo carregado...')} >
         <OnlineStatus /> 
      </Avatar>

      <RightSide>
        <Button>
          <MaterialIcons
            name="notifications-none"
            size={26}
            color={colors.black}
            onPress={() => Alert.alert('Notificações sendo carregadas...')}
          />
        </Button>

        <Button>
          <MaterialCommunityIcons
            name="message-outline"
            size={26}
            color={colors.black}
            onPress={() => Alert.alert('Mensagens sendo carregadas...')}
          />
        </Button>

        <Button>
          <Feather 
          name="search" 
          size={26} 
          color={colors.black} 
          onPress={() => Alert.alert('Busca sendo carregada...')}
        />
          
        </Button>
        
      </RightSide>
    </Container>
  );
};

export default Topo;