import { TouchableOpacity } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled(TouchableOpacity).attrs({
  activeOpacity: 0.7
})`
  width: 100%;
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  padding: 18px;
`

export const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.medium};
  font-size: ${RFValue(14)}px;
  color: ${(props) => props.theme.colors.shape};

`
