import React from 'react';
import { Alert } from 'react-native';

import {
  List,
  ChannelContainer,
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
    <ChannelContainer onPress={() => Alert.alert('Ingresso sendo carregado...')}>
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
    </ChannelContainer>
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