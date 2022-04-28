import React from 'react'
import { Container,  Icon, Name } from './styles'

interface Props {
  name: string
  icon: string
  onPress: () => void
  isActive: boolean
}

export function CategoryCard({ name, icon, onPress, isActive }: Props) {
  return (
    <Container onPress={onPress} isActive={isActive}>
      <Icon name={icon} />
      <Name>{name}</Name>
    </Container>
  )
}
