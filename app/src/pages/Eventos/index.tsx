import { ReactNode } from 'react';

import { Text } from 'react-native';

import { Container } from './styles';

interface EventosProps {
  children: ReactNode;
}

function Eventos({ children }: EventosProps) {
  return (
    <Container>
      <Text>Eventos</Text>
      {children}
    </Container>
  );
};

export default Eventos;
