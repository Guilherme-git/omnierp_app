import { useState } from "react";
import * as Style from "./style";

export default ({title, ...props}) => {
    return (
        <Style.Container {...props}>
            <Style.Divider >a</Style.Divider>
            <Style.Title>{title}</Style.Title>
            <Style.Divider >a</Style.Divider>
        </Style.Container>
    );
}