import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

import { RectButton } from 'react-native-gesture-handler'

export const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.medium};
  font-size: ${RFValue(14)}px;
  color: ${(props) => props.theme.colors.shape};
`
export const Container = styled(RectButton)`
  width: 100%;
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  padding: 18px;
`
