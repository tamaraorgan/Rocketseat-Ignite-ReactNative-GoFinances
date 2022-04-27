import React from 'react'
import { HighlightCard } from '../../components/HighlightCard'

import {
  Container,
  Header,
  UserWrapper,
  UserProfile,
  UserPhoto,
  UserInfo,
  UserGretting,
  UserName,
  Icon,
  HighlightCards
} from './styles'

export function Dashboard() {
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
          <Icon name="power" />
        </UserWrapper>
      </Header>
      <HighlightCards>
        <HighlightCard type='up' title='Entradas' amount='R$ 17.400,00' amountInfo='Última entrada dia 13 de abril'/>
        <HighlightCard type='down' title='Saídas' amount='R$ 1.259,00' amountInfo='Última saída dia 03 de abril'/>
        <HighlightCard type='total' title='Total' amount='R$ 16.141,00' amountInfo='01 à 16 de abril'/>
      </HighlightCards>
    </Container>
  )
}
