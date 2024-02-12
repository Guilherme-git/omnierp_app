import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

import Home from "../home"

export default () => {
    return(
        <Drawer.Navigator
            initialRouteName="home"
            screenOptions={{
                headerShown: false
            }}>
            <Drawer.Screen name="home" component={Home} />
        </Drawer.Navigator>
    );
}