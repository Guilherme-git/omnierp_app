import { useState } from "react";
import * as Style from "./style";

export default ({title, ...props}) => {
    return (
        <Style.ContainerButton {...props}>
            <Style.ContainerButtonText>{title}</Style.ContainerButtonText>
        </Style.ContainerButton>
    );
}