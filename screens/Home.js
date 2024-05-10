import { Text, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

const Tab = createMaterialTopTabNavigator();

const Destaque = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Destaques!</Text>
    </View>
  );
};

const Recentes = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Recentes!</Text>
    </View>
  );
};

export const Home = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Destaque" component={Destaque} />
      <Tab.Screen name="Recentes" component={Recentes} />
    </Tab.Navigator>
  );
};
