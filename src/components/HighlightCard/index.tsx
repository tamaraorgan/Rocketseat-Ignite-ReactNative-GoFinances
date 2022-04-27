import React from 'react'
import {
  Amount,
  AmountInfo,
  Container,
  Footer,
  Header,
  Icon,
  Title
} from './styles'

interface Props {
  title: string
  amount: string
  amountInfo: string
  type: 'up' | 'down' | 'total'
}

const icon = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
  total: 'dollar-sign'
}

export function HighlightCard({ title, amount, amountInfo, type }: Props) {
  return (
    <Container type={type}>
      <Header>
        <Title type={type}>{title}</Title>
        <Icon name={icon[type]} type={type} />
      </Header>
      <Footer>
        <Amount type={type}>{amount}</Amount>
        <AmountInfo type={type}>{amountInfo}</AmountInfo>
      </Footer>
    </Container>
  )
}
