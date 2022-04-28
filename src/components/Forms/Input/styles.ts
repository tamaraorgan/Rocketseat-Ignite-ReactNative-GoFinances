import { TextInput } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled(TextInput)`
  width: 100%;
  font-size: ${RFValue(14)}px;
  font-family: ${(props) => props.theme.fonts.regular};
  background-color: ${(props) => props.theme.colors.shape};
  color: ${(props) => props.theme.colors.title};
  margin: 8px 0;
  padding: 16px 18px;
  border-radius: 5px;
`
