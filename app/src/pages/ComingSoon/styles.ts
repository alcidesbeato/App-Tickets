import styled from 'styled-components';
import Constants from 'expo-constants';
import { Platform } from 'react-native';


export const Wrapper = styled(SafeAreaView)`
  background: blue;
  flex: 1;
  padding-top: ${statusBarHeight + 'px'};
  justify-content: center;
  align-items: center;
`;

export const Heading = styled(Text)`
  color: blue;
  font-family: roboto_500;
  font-size: 30px;
`;