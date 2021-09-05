import React from 'react';
import { Alert } from 'react-native';
import streamThumbnail from '../../images/stream_thumbnail.jpg';

import {
  List,
  StreamContainer,
  StreamRow,
  StreamThumbnail,
  StreamColumn,
  StreamHeader,
  StreamAvatar,
  StreamUsername,
  StreamDescription,
  StreamCategory,
  TagRow,
  TagView,
  TagText,
} from './styles';

const AcontecendoHoje: React.FC = () => {
  const Item = () => (
    <StreamContainer onPress={() => Alert.alert('Evento sendo carregado...')}>
      <StreamThumbnail source={streamThumbnail} />

      <StreamRow>
        <StreamColumn>
          <StreamHeader>
            <StreamAvatar />
            <StreamUsername numberOfLines={1}>Live Mb Labs</StreamUsername>
          </StreamHeader>

          <StreamDescription numberOfLines={1}>
            Desenvolver App frontend
          </StreamDescription>

          <StreamCategory numberOfLines={1}>
            Tecnologia
          </StreamCategory>
        </StreamColumn>

        <TagRow>
          <TagView>
            <TagText>Portugues</TagText>
          </TagView>
          <TagView>
            <TagText>Desenvolvimento Mobile</TagText>
          </TagView>
        </TagRow>
      </StreamRow>
    </StreamContainer>
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