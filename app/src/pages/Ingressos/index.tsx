import React from 'react';
import { View, FlatList } from 'react-native';

import Topo from '../../components/Topo';
import Cabeçalho from '../../components/Cabeçalho';
import Titulo from '../../components/Titulo';
import MeusIngressos from '../../components/MeusIngressos';

import { Wrapper, Container, Main } from './styles';

interface Item {
  key: string;
  render: () => JSX.Element;
  isTitle?: boolean;
}

const Ingressos: React.FC = () => {
  const { data, indices } = React.useMemo(() => {
    const items: Item[] = [
      {
        key: 'Cabeçalho',
        render: () => <Cabeçalho>Ingressos</Cabeçalho>,
      },

      {
        key: 'Ingressos',
        render: () => <Titulo>Meus Ingressos</Titulo>,
        isTitle: true,
      },
      { key: 'C4', render: () => <MeusIngressos /> },

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
        <Topo />

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

export default Ingressos;