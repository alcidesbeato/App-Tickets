import React from 'react';
import { View, FlatList } from 'react-native';

import Header from '../../components/Header';
import Heading from '../../components/Heading';
import Title from '../../components/Title';
import CategoryList from '../../components/CategoryList';
import StreamList from '../../components/StreamList';
import ChannelList from '../../components/ChannelList';

import { Wrapper, Container, Main } from './styles';

interface Item {
  key: string;
  render: () => JSX.Element;
  isTitle?: boolean;
}

const Inicio: React.FC = () => {
  const { data, indices } = React.useMemo(() => {
    const items: Item[] = [
      {
        key: 'PAGE_HEADING',
        render: () => <Heading>INGRESSOS</Heading>,
      },

      {
        key: 'OFFLINE_CHANNELS',
        render: () => <Title>Meus ingressos</Title>,
        isTitle: true,
      },
      { key: 'C4', render: () => <ChannelList /> },
    ];

    const indices: number[] = [];

    items.forEach((item, index) => item.isTitle && indices.push(index));

    return {
      data: items,
      indices,
    };
  }, []);

  return (
    <Wrapper>
      <Container>
        <Header />

        <Main>
          <FlatList<Item>
            data={data}
            renderItem={({ item }) => item.render()}
            keyExtractor={(item) => item.key}
            stickyHeaderIndices={indices}
            // Refresh Effect
            onRefresh={() => {}}
            refreshing={false}
          />
        </Main>
      </Container>
    </Wrapper>
  );
};

export default Inicio;