import { ReactNode } from 'react';

import { Text } from 'react-native';

import { Container } from './styles';

interface InicioProps {
  children: ReactNode;
}

function Inicio({ children }: InicioProps) {
  return (
    <Container>
      <Text> Inicio </Text>
      {children}
    </Container>
  );
};

export default Inicio;
