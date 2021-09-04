import React from 'react';
import { View, FlatList } from 'react-native';

import CabeçalhoP from '../../components/Header';
import CabeçalhoS from '../../components/Heading';
import Titulo from '../../components/Title';
import PrincipaisCategorias from '../../components/CategoryList';
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
        key: 'TITULO',
        render: () => <CabeçalhoS> Eventos </CabeçalhoS>,
      },

      {
        key: 'PRINCIPAIS_CATEGORIES',
        render: () => <Titulo>Principais categorias</Titulo>,
        isTitle: true,
      },
      { key: 'C1', render: () => <PrincipaisCategorias /> },

      {
        key: 'EVENTOS_HOJE',
        render: () => <Titulo> eventos hoje</Titulo>,
        isTitle: true,
      },
      { key: 'C2', render: () => <StreamList /> },


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
        <CabeçalhoP />

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