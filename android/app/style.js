import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND1};
    
`;

export const Content = styled.View`
    flex: 1;
    border-top-right-radius: ${RFValue(50)}px;
    border-top-left-radius: ${RFValue(50)}px;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND};
    padding: ${RFValue(20)}px;
    margin-left: 10px;
    margin-right: 10px;
`;