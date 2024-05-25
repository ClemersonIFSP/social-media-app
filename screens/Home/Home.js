import { View,StyleSheet } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import NewPosts from "./NewPosts";
import OldPosts from "./OldPosts";

const Tab = createMaterialTopTabNavigator();

const Home = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <Tab.Navigator>
        <Tab.Screen name="Novos" component={NewPosts} />
        <Tab.Screen name="Antigos" component={OldPosts} />
      </Tab.Navigator>
      <AntDesign
        style={styles.newPost}
        name="pluscircle"
        size={50}
        color="#117afb"
        onPress={() => navigation.navigate("CreatePost")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  newPost: {
    position: "absolute",
    end: 20,
    bottom: 20,
  },
});

export default Home;
