import { useState } from "react";
import * as Style from "./style";
import ButtonDrawer from "../buttonDrawer";
import ButtonBack from "../buttonBack";
import { useNavigation, DrawerActions } from "@react-navigation/native";

export default function Home({ type }) {
  const navigation = useNavigation();

  return (
    <Style.Container
      colors={["#eb5e28", "#eb5e28", "#eb5e28"]}
      start={{ x: 0, y: 0 }}
    >
      {type == "drawer" ? (
        <Style.ContainerIcon
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
        >
          <ButtonDrawer />
        </Style.ContainerIcon>
      ) : (
        <Style.ContainerIcon
          onPress={() => navigation.goBack()}
        >
          <ButtonBack />
        </Style.ContainerIcon>
      )}
    </Style.Container>
  );
}
