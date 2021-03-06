import React from 'react'

import { HighlightCard } from '../../components/HighlightCard'
import {
  TransactionCard,
  TransactionCardProps
} from '../../components/TransactionCard'

import {
  Container,
  Header,
  UserWrapper,
  UserProfile,
  UserPhoto,
  UserInfo,
  UserGretting,
  UserName,
  LogoutButton,
  Icon,
  HighlightCards,
  Transaction,
  Title,
  TransactionList,
  
} from './styles'

export interface DataListProps extends TransactionCardProps {
  id: string
}

export function Dashboard() {
  const data: DataListProps[] = [
    {
      id: '1',
      type: 'positive',
      title: 'Desenvolvimento de site',
      amount: 'R$ 12.000,00',
      category: { name: 'Vendas', icon: 'dollar-sign' },
      date: '13/04/2020'
    },
    {
      id: '2',
      type: 'negative',
      title: 'Hamburgueria Pizzy',
      amount: 'R$ 59,00',
      category: { name: 'Alimentação', icon: 'coffee' },
      date: '10/04/2020'
    },
    {
      id: '3',
      type: 'negative',
      title: 'Aluguel Apartamento',
      amount: 'R$ 2.100,00',
      category: { name: 'Casa', icon: 'shopping-bag' },
      date: '05/04/2020'
    }
  ]

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserProfile>
            <UserPhoto
              source={{
                uri: 'https://avatars.githubusercontent.com/u/68870322?v=4'
              }}
            />
            <UserInfo>
              <UserGretting>Olá, </UserGretting>
              <UserName>Tamara</UserName>
            </UserInfo>
          </UserProfile>
          <LogoutButton onPress= {() => {}}>
            <Icon name="power" />
          </LogoutButton>
        </UserWrapper>
      </Header>
      <HighlightCards>
        <HighlightCard
          type="up"
          title="Entradas"
          amount="R$ 17.400,00"
          amountInfo="Última entrada dia 13 de abril"
        />
        <HighlightCard
          type="down"
          title="Saídas"
          amount="R$ 1.259,00"
          amountInfo="Última saída dia 03 de abril"
        />
        <HighlightCard
          type="total"
          title="Total"
          amount="R$ 16.141,00"
          amountInfo="01 à 16 de abril"
        />
      </HighlightCards>

      <Transaction>
        <Title>Listagem</Title>
        <TransactionList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Transaction>
    </Container>
  )
}
