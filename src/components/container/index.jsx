import { useState } from "react";
import * as Style from "./style";

export default ({children}) => {
    return (
        <Style.Container>
            {children}
        </Style.Container>
    );
}