import { useState } from "react";
import * as Style from "./style";

export default function Title({title}) {
  return (
    <Style.Container> {title} </Style.Container>
  );
}
