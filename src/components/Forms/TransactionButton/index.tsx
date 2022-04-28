import React from 'react'

import { RectButtonProps } from 'react-native-gesture-handler'
import { Container, Icon, Title } from './styles'

interface Props extends RectButtonProps {
  title: string
  type: 'up' | 'down'
  isActive: boolean
}

const icon = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle'
}

export function TransactionButton({ title, type, isActive, ...rest }: Props) {
  return (
    <Container {...rest} isActive={isActive} type={type}>
      <Icon name={icon[type]} type={type} />
      <Title>{title}</Title>
    </Container>
  )
}
