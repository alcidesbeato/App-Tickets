import React from 'react';
import { Alert } from 'react-native';
import ImagemThumbnail from '../../images/stream_thumbnail.jpg';

import {
  List,
  Container,
  Row,
  Thumbnail,
  Column,
  Header,
  Avatar,
  Username,
  Description,
  Category,
  TagRow,
  TagView,
  TagText,
} from './styles';

const AcontecendoHoje: React.FC = () => {
  const Item = () => (
    <Container onPress={() => Alert.alert('Evento sendo carregado...')}>
      <Thumbnail source={ImagemThumbnail} />

      <Row>
        <Column>
          <Header>
            <Avatar />
            <Username numberOfLines={1}>Live Mb Labs</Username>
          </Header>

          <Description numberOfLines={1}>
            Desenvolver App frontend
          </Description>

          <Category numberOfLines={1}>
            Tecnologia
          </Category>
        </Column>

        <TagRow>
          <TagView>
            <TagText>Portugues</TagText>
          </TagView>
          <TagView>
            <TagText>Desenvolvimento Mobile</TagText>
          </TagView>
        </TagRow>
      </Row>
    </Container>
  );

  return (
    <List>
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />
      <Item />

    </List>
  );
};

export default AcontecendoHoje;