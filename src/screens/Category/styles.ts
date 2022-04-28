import styled from 'styled-components/native'

import { RFValue } from 'react-native-responsive-fontsize'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export const Container = styled(GestureHandlerRootView)`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
`
export const Header = styled.View`
  width: 100%;
  height: ${RFValue(113)}px;
  background-color: ${(props) => props.theme.colors.primary};
  align-items: center;
  justify-content: center;
  padding-bottom: 19px;
`
export const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: ${RFValue(18)}px;
  color: ${(props) => props.theme.colors.shape};
`
export const Separator = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${(props) => props.theme.colors.text};
`
export const Footer = styled.View`
  width: 100%;
  padding: 24px;
`
