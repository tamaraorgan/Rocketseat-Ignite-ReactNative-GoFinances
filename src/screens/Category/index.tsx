import React from 'react'
import { FlatList } from 'react-native'

import { CategoryCard } from '../../components/CategoryCard'
import { Button } from '../../components/Forms/Button'
import { categories } from '../../utils/categories'

import { Container, Header, Title, Separator, Footer } from './styles'

interface CategoryProps {
  key: string
  name: string
}

interface Props {
  category: string
  setCategory: (category: CategoryProps) => void
  closeSelectCategory: () => void
}

export function Category({
  category,
  setCategory,
  closeSelectCategory
}: Props) {
  function handleCategorySelect(category: CategoryProps) {
    setCategory(category)
  }
  return (
    <Container>
      <Header>
        <Title>Category</Title>
      </Header>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <CategoryCard
            name={item.name}
            icon={item.icon}
            isActive={category === item.key}
            onPress={() => handleCategorySelect(item)}
          />
        )}
        style={{ flex: 1, width: '100%' }}
        ItemSeparatorComponent={() => <Separator />}
      />
      <Footer>
        <Button title="Selecinar" onPress={closeSelectCategory} />
      </Footer>
    </Container>
  )
}
