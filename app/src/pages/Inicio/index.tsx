import React from 'react';
import { View, FlatList } from 'react-native';

import Topo from '../../components/Topo';
import Cabeçalho from '../../components/Cabeçalho';
import Titulo from '../../components/Titulo';
import Categorias from '../../components/Categorias';
import AcontecendoHoje from '../../components/AcontecendoHoje';
import MeusIngressos from '../../components/MeusIngressos';

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
        key: 'Cabeçalho',
        render: () => <Cabeçalho>Eventos</Cabeçalho>,
      },

      {
        key: 'Lista Categorias',
        render: () => <Titulo>Categorias</Titulo>,
        isTitle: true,
      },
      { key: 'C1', render: () => <Categorias /> },

      {
        key: 'Eventos Hoje',
        render: () => <Titulo> Eventos hoje </Titulo>,
        isTitle: true,
      },
      { key: 'C2', render: () => <AcontecendoHoje /> },

      {
        key: 'Sla',
        render: () => <View />,
        isTitle: true,
      },
      { key: 'C3', render: () => <View /> },
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

export default Inicio;

