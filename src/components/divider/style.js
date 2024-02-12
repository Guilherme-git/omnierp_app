import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.COLORS.COR1};
  font-family: ${({theme}) => theme.FONT_FAMILY.BOLD_ITALIC};
  font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
`;

export const Divider = styled.Text`
    height: 1px;
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.COR1};
`;