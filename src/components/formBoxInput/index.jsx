import { useState } from "react";
import * as Style from "./style";

export default ({title, placeholder}) => {
    return (
        <Style.BoxInput>
            <Style.TitleInput>{title}</Style.TitleInput>
            <Style.Input placeholder={placeholder} />
        </Style.BoxInput>
    );
}