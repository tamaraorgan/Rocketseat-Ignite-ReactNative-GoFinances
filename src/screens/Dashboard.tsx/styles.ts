import styled from 'styled-components/native'

import { Feather } from '@expo/vector-icons'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.colors.background};
`
export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(42)}px;
  background-color: ${(props) => props.theme.colors.primary};

  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
`
export const UserWrapper = styled.View`
  width: 100%;
  padding: 0 24px;
  margin-top: ${getStatusBarHeight() + RFValue(28)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const UserProfile = styled.View`
  flex-direction: row;
  align-items: center;
`
export const UserPhoto = styled.Image`
  height: ${RFValue(48)}px;
  width: ${RFValue(48)}px;
  border-radius: 10px;
`
export const UserInfo = styled.View`
  margin-left: 17px;
`
export const UserGretting = styled.Text`
  color: ${(props) => props.theme.colors.shape};
  font-size: ${RFValue(18)}px;
  font-family: ${(props) => props.theme.fonts.regular};
`
export const UserName = styled.Text`
  color: ${(props) => props.theme.colors.shape};
  font-size: ${RFValue(18)}px;
  font-family: ${(props) => props.theme.fonts.bold};
`

export const Icon = styled(Feather)`
  color: ${(props) => props.theme.colors.secondary};
  font-size: ${RFValue(24)}px;
`

export const HighlightCards = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingHorizontal: 24 }
})`
  width: 100%;
  position: absolute;
  margin-top: ${RFPercentage(20)}px;
`
