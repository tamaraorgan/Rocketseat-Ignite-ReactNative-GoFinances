import styled, { css } from 'styled-components/native'

import { Feather } from '@expo/vector-icons'
import { RectButton } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize'

interface TransactionProps {
  type: 'up' | 'down'
  isActive: boolean
  children: any
}

export const Container = styled(RectButton)<TransactionProps>`
  width: 48%;

  background-color: ${props => props.theme.colors.backButton};
  border-radius: 5px;

  flex-direction: row;
  justify-content: center;
  align-items: center;

  color: ${(props) => props.theme.colors.title};
  font-size: ${RFValue(14)}px;
  font-family: ${(props) => props.theme.fonts.regular};

  padding: 16px 0;

  ${({ isActive, type }) =>
    isActive &&
    type === 'up' &&
    css`
      background-color: ${({ theme }) => theme.colors.success_light};
    `}

  ${({ isActive, type }) =>
    isActive &&
    type === 'down' &&
    css`
      background-color: ${({ theme }) => theme.colors.attention_light};
    `}
`

export const Icon = styled(Feather)<TransactionProps>`
  color: ${({ theme, type }) =>
    type === 'up' ? theme.colors.success : theme.colors.attention};
  font-size: ${RFValue(20)}px;
  margin-right: 14px;
`

export const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.title};
`
