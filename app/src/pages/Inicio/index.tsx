import { ReactNode } from 'react';

import { Text } from 'react-native';

import { Container } from './styles';

interface EventosProps {
  children: ReactNode;
}

const Routes: React.FC = ({ children }) => {  
  return (
    <Container>
      <Text>Eventos</Text>
      {children}
    </Container>
  );
};

export default <Inicio></Inicio>;
