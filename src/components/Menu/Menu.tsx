import { Text } from '../Text';

import { FlatList } from 'react-native';

import * as S from './styles';
import { useState } from 'react';
import { products } from '../../mocks/products';

export function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('');

  function handleCategoryPress(id: string) {
    const category = selectedCategory === id ? '' : id;

    setSelectedCategory(category);
  }

  return (
    <FlatList
      data={products}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 24 }}
      keyExtractor={(item) => item._id}
      renderItem={({ item }) => {
        return <></>;
      }}
    />
  );
}
