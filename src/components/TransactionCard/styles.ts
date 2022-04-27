import styled, { css } from 'styled-components/native'

import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'

interface TransactionProps {
  type: 'positive' | 'negative'
}

export const Container = styled.View`
  background-color: ${(props) => props.theme.colors.shape};
  border-radius: 5px;
  padding: 17px 24px;
  margin-bottom: 16px;
`
export const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${(props) => props.theme.colors.title};
  margin-top: 2px;
`
export const Amount = styled.Text<TransactionProps>`
  font-size: ${RFValue(20)}px;
  font-family: ${(props) => props.theme.fonts.medium};

  ${({ theme, type }) =>
    type === 'positive' &&
    css`
      color: ${theme.colors.success};
    `}
  ${({ theme, type }) =>
    type === 'negative' &&
    css`
      color: ${theme.colors.attention};
    `}
`

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
`
export const Category = styled.View`
  flex-direction: row;
  align-items: center;
`
export const Icon = styled(Feather)`
  color: ${(props) => props.theme.colors.text};
  font-size: ${RFValue(20)}px;
  margin-right: ${RFValue(17)}px;
`
export const CategoryName = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${RFValue(14)}px;
`

export const Date = styled.Text`
  color: ${(props) => props.theme.colors.text};
  font-size: ${RFValue(14)}px;
`
