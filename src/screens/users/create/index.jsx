import { useState } from "react";
import { ScrollView, View } from "react-native";
import * as Style from "./style";

import Header from "../../../components/header";
import Title from "../../../components/title";
import Container from "../../../components/container";
import Content from "../../../components/content";
import BoxInput from '../../../components/formBoxInput'
import Divider from "../../../components/divider";
import Button from "../../../components/button"

export default function Home() {
  return (
    <>
      <Header type={"drawer"} />
      <Container>
        <ScrollView>
          <Content>
            <Title title={"Cadastro de pessoas"} />

            <BoxInput
              title={"Nome*"}
              placeholder={"Digite o nome"}
            />

            <BoxInput
              title={"Sobrenome*"}
              placeholder={"Digite o sobrenome"}
            />

            <BoxInput
              title={"CPF/CNPJ*"}
              placeholder={"Digite o CPF"}
            />

            <Divider
              style={{ marginTop: 20 }}
              title={"Contato"}
            />

            <BoxInput
              title={"Telefone"}
              placeholder={"Digite o telefone"}
            />

            <BoxInput
              title={"Celular*"}
              placeholder={"Digite o celular"}
            />

            <Divider
              style={{ marginTop: 20 }}
              title={"Endereço"}
            />

            <BoxInput
              title={"CEP"}
              placeholder={"Digite o CEP"}
            />

            <BoxInput
              title={"Estado"}
              placeholder={"Digite o estado"}
            />

            <BoxInput
              title={"Cidade"}
              placeholder={"Digite a cidade"}
            />

            <BoxInput
              title={"Bairro"}
              placeholder={"Digite a cidade"}
            />

            <BoxInput
              title={"Logradouro"}
              placeholder={"Digite o logradouro"}
            />

            <Button
              style={{ marginTop: 20, alignSelf: 'flex-end' }}
              title={"Cadastrar"}
            />

          </Content>
        </ScrollView>


      </Container>
    </>
  );
}
