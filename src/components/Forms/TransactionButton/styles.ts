import styled, { css } from 'styled-components/native'

import { Feather } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

interface TransactionProps {
  type: 'up' | 'down'
  isActive: boolean
}

export const Container = styled(TouchableOpacity)<TransactionProps>`
  width: 48%;

  border: 1.5px solid ${(props) => props.theme.colors.text};
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
      border: none;
    `}

  ${({ isActive, type }) =>
    isActive &&
    type === 'down' &&
    css`
      background-color: ${({ theme }) => theme.colors.attention_light};
      border: none;
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
  color: ${props => props.theme.colors.title};
`
