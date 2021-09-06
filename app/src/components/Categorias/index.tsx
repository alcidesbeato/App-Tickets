import React from 'react';
import { Alert } from 'react-native';
import {
  List,
  CategoryContainer,
  CategoryImage,
  CategoryName,
  CategoryStatus,
  Circle,
  Info,
} from './styles';

import data from './data';

interface ItemProps {
  item: typeof data[0];
}

const Categorias: React.FC = () => {
  const CategoryItem: React.FC<ItemProps> = ({ item }) => (
    <CategoryContainer onPress={() => Alert.alert('Categoria sendo carregadas...')} >
      <CategoryImage source={item.source} />
      <CategoryName numberOfLines={1}>{item.name}</CategoryName>
      <CategoryStatus>
        <Circle />
        <Info>06/09 as 16h</Info>
      </CategoryStatus>
    </CategoryContainer>
  );

  return (
    <List>
      {data.map((item) => (
        <CategoryItem key={item.name} item={item} />
      ))} 
    </List>
  );
};

export default Categorias;