import { Text, View } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Post from "../components/Post";
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
  const data = {
    title: "Post Recente",
    body: "Corpo do post",
  };
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Post post={data} />
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
