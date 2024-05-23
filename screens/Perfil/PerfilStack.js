import { createStackNavigator } from "@react-navigation/stack";
import Perfil from "./Perfil";
import PerfilEdit from "./PerfilEdit";
const Stack = createStackNavigator();
const PerfilStack = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen
          name="Perfil"
          component={Perfil}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="EditPerfil" component={PerfilEdit} options={{ title: "Editar Perfil"}}/>
      </Stack.Navigator>
  );

};

export default PerfilStack;
