import { ReactNode } from 'react';

import { Text } from 'react-native';

import { Container } from './styles';

interface FollowingProps {
  children: ReactNode;
}

function Following({ children }: FollowingProps) {
  return (
    <Container>
      <Text>Following</Text>
      {children}
    </Container>
  );
};

export default Following;
