import { ReactNode } from 'react';

import { Text } from 'react-native';

import { Container } from './styles';

interface IngressosProps {
  children: ReactNode;
}

function Ingressos({ children }: IngressosProps) {
  return (
    <Container>
      <Text>Ingressos</Text>
      {children}
    </Container>
  );
};

export default Ingressos;
