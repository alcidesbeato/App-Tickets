import styled from 'styled-components';
import Constants from 'expo-constants';
import { Platform } from 'react-native';


const statusBarHeight =
  Platform.OS === 'android' ? Constants.statusBarHeight : 0;

export const Container = styled.view`
  background: blue;
  flex: 1;
  padding-top: ${statusBarHeight + 'px'};
  justify-content: center;
  align-items: center;
`;

export const Heading = styled.text`

  color: blue;
  font-family: roboto_500;
  font-size: 30px;
`;