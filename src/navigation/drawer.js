import { createDrawerNavigator } from "@react-navigation/drawer";
import CustomDrawer from "../components/customDrawer";
import {
  Ionicons,
  Entypo,
  FontAwesome,
  FontAwesome5,
  MaterialIcons,
} from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

import Home from "../screens/home";
import Users from "../screens/users";
import UsersCreate from "../screens/users/create";
import Product from "../screens/product";
import Category from "../screens/category";
import Stock from "../screens/stock";
import Report from "../screens/report";
import Settings from "../screens/settings";
import BuySell from "../screens/buy_sell";
import Synchronize from "../screens/synchronize";
import PayReceive from "../screens/pay_receive";

export default () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      initialRouteName="users-create"
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: "transparent",
        drawerActiveTintColor: "#F2F2F2",
        drawerInactiveBackgroundColor: "transparent",
        drawerInactiveTintColor: "#A2A2A2",
      }}
    >
      <Drawer.Screen
        options={{
          title: "Painel",
          drawerIcon: ({ color }) => (
            <Ionicons name="home-sharp" size={24} color={color} />
          ),
        }}
        name="home"
        component={Home}
      />
      <Drawer.Screen
        options={{
          title: "Pessoas",
          drawerIcon: ({ color }) => (
            <FontAwesome  name="users" size={24} color={color} />
          ),
        }}
        name="users"
        component={Users}
      />
      <Drawer.Screen
        options={{
          title: "Pessoas cadastro",
          drawerItemStyle: { display: 'none' }
        }}
        name="users-create"
        component={UsersCreate}
      />
      <Drawer.Screen
        options={{
          title: "Produtos",
          drawerIcon: ({ color }) => (
            <Entypo name="box" size={24} color={color} />
          ),
        }}
        name="product"
        component={Product}
      />
      <Drawer.Screen
        options={{
          title: "Categorias",
          drawerIcon: ({ color }) => (
            <MaterialIcons name="category" size={24} color={color} />
          ),
        }}
        name="category"
        component={Category}
      />
      <Drawer.Screen
        options={{
          title: "Gerenciar estoque",
          drawerIcon: ({ color }) => (
            <Entypo name="database" size={24} color={color} />
          ),
        }}
        name="stock"
        component={Stock}
      />
      <Drawer.Screen
        options={{
          title: "Compra e venda",
          drawerLabelStyle:{
           marginLeft: -7
          },
          drawerIcon: ({ color }) => (
            <FontAwesome5 name="money-bill" size={24} color={color} />
          ),
        }}
        name="buy_sell"
        component={BuySell}
      />
      <Drawer.Screen
        options={{
          title: "Pagar e receber",
          drawerIcon: ({ color }) => (
            <MaterialIcons name="attach-money" size={24} color={color} />
          ),
        }}
        name="pay_receive"
        component={PayReceive}
      />
      <Drawer.Screen
        options={{
          title: "Relatórios",
          drawerLabelStyle:{
            marginLeft: -7
           },
          drawerIcon: ({ color }) => (
            <FontAwesome5 name="project-diagram" size={24} color={color} />
          ),
        }}
        name="report"
        component={Report}
      />
      <Drawer.Screen
        options={{
          title: "Configurações",
          drawerIcon: ({ color }) => (
            <Ionicons name="settings" size={24} color={color} />
          ),
        }}
        name="settings"
        component={Settings}
      />
      <Drawer.Screen
        options={{
          title: "Sincronizar",
          drawerIcon: ({ color }) => (
            <FontAwesome5 name="sync-alt" size={24} color={color} />
          ),
        }}
        name="synchronize"
        component={Synchronize}
      />
    </Drawer.Navigator>
  );
};
