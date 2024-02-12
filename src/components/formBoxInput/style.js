import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const BoxInput = styled.View`
    margin-top: ${RFValue(20)}px;
    width: 100%;
`;

export const TitleInput = styled.Text`
    color: ${({theme}) => theme.INPUT.TITLE_INPUT};
    font-family: ${({theme}) => theme.FONT_FAMILY.REGULAR};
    font-size: ${({theme}) => theme.FONT_SIZE.SM}px;
`;

export const Input = styled.TextInput`
    margin-top: ${RFValue(5)}px;
    background-color: ${({theme}) => theme.INPUT.BACKGROUND_INPUT};
    padding-left: ${RFValue(5)}px;
    padding-right: ${RFValue(5)}px;
    color: ${({theme}) => theme.INPUT.COLOR_TEXT_INPUT};
    border-radius: ${RFValue(8)}px;
    width: 100%;
    height: ${RFValue(50)}px;
`;  