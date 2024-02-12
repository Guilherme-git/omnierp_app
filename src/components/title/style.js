import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { LinearGradient } from "expo-linear-gradient";

export const Container = styled.Text`
    color: ${({theme}) => theme.COLORS.COR2};
    font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR_ITALIC};
    font-size: ${({theme}) => theme.FONT_SIZE.LG}px;
`;