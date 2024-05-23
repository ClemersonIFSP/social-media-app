import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Destaque from "./Destaque";
import Recentes from "./Recentes";
import useUserLoggedStore from "../../stores/useUserLogged";
const Tab = createMaterialTopTabNavigator();

const Home = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Destaque" component={Destaque} />
      <Tab.Screen name="Recentes" component={Recentes} />
    </Tab.Navigator>
  );
};

export default Home;
