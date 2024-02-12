import styled from "styled-components/native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { LinearGradient } from "expo-linear-gradient";

export const ContainerButton = styled.TouchableOpacity`
    background-color: ${({theme}) => theme.COLORS.COR2};
    height: ${RFValue(40)}px;
    width: ${RFValue(150)}px;
    justify-content: center;
    align-items: center;
    border-radius: ${RFValue(8)}px;
`;

export const ContainerButtonText = styled.Text`
    color: ${({theme}) => theme.COLORS.COR3};
    font-family: ${({theme}) => theme.FONT_FAMILY.BOLD};
    font-size:  ${({theme}) => theme.FONT_SIZE.MD}px;
`;