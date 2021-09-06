import React from 'react';
import { Alert } from 'react-native';

import {
  List,
  CategoriaContainer,
  LeftSide,
  Avatar,
  Column,
  Username,
  Info,
  RightSide,
  WhiteCircle,
} from './styles';

const MeusIngressos: React.FC = () => {
  const Ingresso = () => (
    <CategoriaContainer onPress={() => Alert.alert('Ingresso sendo carregado...')}>
      <LeftSide>
        <Avatar />
        <Column>
          <Username>Palestra Mb Labs</Username>
          <Info>07/09/21 as 16h</Info>
        </Column>
      </LeftSide>

      <RightSide>
        <WhiteCircle />
      </RightSide>
    </CategoriaContainer>
  );

  return (
    <List>
      <Ingresso />
      <Ingresso />
      <Ingresso />
      <Ingresso />
      <Ingresso />
      <Ingresso />
      <Ingresso />
      <Ingresso />
      <Ingresso />
      <Ingresso />
      <Ingresso />
      <Ingresso />
      <Ingresso />
      <Ingresso />
      <Ingresso />
      <Ingresso />
      <Ingresso />
      <Ingresso />
      <Ingresso />
      <Ingresso />
      <Ingresso />
      <Ingresso />
    </List>
  );
};

export default MeusIngressos;