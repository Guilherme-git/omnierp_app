import React, { useEffect, useState } from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

import {
  Container,
  Footer,
  ImageUser,
  ContainerInfoUser,
  NomeUser,
  ContainerList,
  BtnSair,
  TextBtnSair,
  TextVersao,
} from "./style";

export default (props) => {
  const navigation = useNavigation();

  return (
    <Container
      colors={["#eb5e28", "#B6491F", "#9C3E1A"]}
      start={{ x: 0, y: 0 }}
    >
      <DrawerContentScrollView {...props}>
        <ContainerInfoUser>
          <ImageUser
            resizeMode="contain"
            source={{
              uri: `https://thumbs.dreamstime.com/b/google-icon-logo-simple-vector-filled-flat-google-icon-logo-solid-pictogram-isolated-white-background-159029191.jpg`,
            }}
          />
          <NomeUser>Guilherme Ataides</NomeUser>
        </ContainerInfoUser>

        <ContainerList>
          <DrawerItemList {...props} />
        </ContainerList>
      </DrawerContentScrollView>

      <Footer>
        <BtnSair>
          <AntDesign name="logout" size={18} color="#F2F2F2" />
          <TextBtnSair>Sair</TextBtnSair>
        </BtnSair>

        <TextVersao>1.0</TextVersao>
      </Footer>
    </Container>
  );
};
