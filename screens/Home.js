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
    perfil_image: "https://cdn-icons-png.flaticon.com/512/147/147142.png",
    name: "Clemerson",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    like: 0,
  };
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Post post={data} />
    </View>
  );
};

const Home = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Destaque" component={Destaque} />
      <Tab.Screen name="Recentes" component={Recentes} />
    </Tab.Navigator>
  );
};

export default Home;
