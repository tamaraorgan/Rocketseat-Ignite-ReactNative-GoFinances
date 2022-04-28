import styled from 'styled-components/native'

export const Container = styled.View`
  background-color: ${(props) => props.theme.colors.background};
  flex: 1;
  justify-content: center;
  align-items: center;
`
export const Title = styled.Text`
  font-family: ${(props) => props.theme.fonts.medium};
`
