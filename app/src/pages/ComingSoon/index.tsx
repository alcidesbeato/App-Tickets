import { ReactNode } from 'react';

import { Text } from 'react-native';

import { Wrapper, Heading } from './styles';

interface ComingSoonProps {
  children: ReactNode;
}

function ComingSoon({ children }: ComingSoonProps) {
  return (
    <Wrapper>

      <Text> Coming soon </Text>

      {children}
    </Wrapper>
  );
};

export default ComingSoon;
