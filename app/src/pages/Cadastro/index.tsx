import { ReactNode } from 'react';

import { Text } from 'react-native';

import { Container } from './styles';

interface CadastroProps {
  children: ReactNode;
}

function Cadastro({ children }: CadastroProps) {
  return (
    <Container>
      <Text>Cadastro</Text>
      {children}
    </Container>
  );
};

export default Cadastro;
