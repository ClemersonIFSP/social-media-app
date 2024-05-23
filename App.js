import "react-native-gesture-handler";
import { View, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useUserLoggedStore from "./stores/useUserLogged.js";

import Home from "./screens/Home/Home";
import Login from "./screens/Login";
import Register from "./screens/Register";
import PerfilStack from "./screens/Perfil/PerfilStack";
import NewPost from "./screens/Home/NewPost";
import Splash from "./screens/Splash";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function CustomDrawerContent(props) {
  const logout = useUserLoggedStore((state) => state.logout);
  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem("userLogged");
      logout();
      navigation.navigate("Login");
    } catch (error) {
      console.log(error);
      alert("Erro ao fazer logout!");
    }
  };
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <View>
        <DrawerItem
          label="Logout"
          onPress={async () => {
            await handleLogout();
          }}
        />
      </View>
    </DrawerContentScrollView>
  );
}
const MyDrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Inicio"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Inicio" component={Home} />
      <Drawer.Screen
        name="Perfil"
        component={PerfilStack}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Splash"
            component={Splash}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={MyDrawer}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="NewPost"
            component={NewPost}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  customDrawerItem: {
    position: "absolute",
    bottom: 1,
    width: "100%",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    backgroundColor: "white",
  },
});
