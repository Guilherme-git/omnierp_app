import { useState } from "react";
import * as Style from "./style";
import { ScrollView } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import { useNavigation } from "@react-navigation/native";
import Button from "../../components/button"

export default function Login() {
  const navigation = useNavigation();
  const [showPassword, setShowPassword] = useState(false);

  const login = () => {
    navigation.navigate("drawer")
  }

  return (
    <Style.Container>
      <Style.Header
        colors={["#eb5e28", "#B6491F", "#9C3E1A"]}
        start={{ x: 0, y: 0 }}
      >
        <Style.Logo source={require("../../assets/logo/logo-500.png")} />
        <Style.TextLogin>Acessar</Style.TextLogin>
      </Style.Header>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Style.ContainerForm>
          <Style.ContainerInput>
            <FontAwesome5
              name="user-alt"
              size={20}
              color="#9A9A9A"
              style={{ alignSelf: "center" }}
            />
            <Style.Input placeholder="Informe seu usuário" />
          </Style.ContainerInput>

          <Style.ContainerInput>
            <FontAwesome5
              name="key"
              size={20}
              color="#9A9A9A"
              style={{ alignSelf: "center" }}
            />
            <Style.Input
              secureTextEntry={true}
              placeholder="Informe sua senha"
            />
          </Style.ContainerInput>

          <Style.ContainerShowPassword>
            <Checkbox
              style={{ borderRadius: 5, borderColor: '#eb5e28' }}
              value={showPassword}
              onValueChange={setShowPassword}
              color={showPassword ? "#eb5e28" : undefined}
            />
            <Style.ShowPassword>Mostrar senha</Style.ShowPassword>
          </Style.ContainerShowPassword>

          <Button
            style={{ marginTop: 40, alignSelf: 'center' }}
            title={"Entrar"}
            onPress={login}
          />

        </Style.ContainerForm>
      </ScrollView>
    </Style.Container>
  );
}
