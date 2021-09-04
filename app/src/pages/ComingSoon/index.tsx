import { ReactNode } from 'react';

import { Text } from 'react-native';

import { Container } from './styles';

interface ComingSoonProps {
  children: ReactNode;
}

function ComingSoon({ children }: ComingSoonProps) {
  return (
    <Container>

      <Text> Coming soon </Text>

      {children}
    </Container>
  );
};

export default ComingSoon;
