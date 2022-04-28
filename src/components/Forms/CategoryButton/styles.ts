import styled from 'styled-components/native'

import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'

export const Container = styled.TouchableOpacity.attrs({
    activeOpacity: 0.7
})`
  width: 100%;
  background-color: ${(props) => props.theme.colors.shape};
  border-radius: 5px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 18px 16px;
  margin-top: 8px;
`
export const Category = styled.Text`
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${(props) => props.theme.colors.text};
`
export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  color: ${(props) => props.theme.colors.text};
`
