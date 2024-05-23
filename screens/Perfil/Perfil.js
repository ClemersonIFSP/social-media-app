import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  Button,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Post from "../../components/Post";
import SafeArea from "../../components/SafeArea";
import useUserLoggedStore from "../../stores/useUserLogged";



const Perfil = () => {
  const user = useUserLoggedStore()
  const navigation = useNavigation();
  return (
    <SafeArea>
      <ScrollView style={styles.container}>
        <ImageBackground
          source={{
            uri: user.banner_image,
          }}
          style={{ height: 150 }}
          resizeMode="conver"
        >
          <View style={styles.voltar}>
            <Button title="V" onPress={() => navigation.goBack()} />
          </View>
        </ImageBackground>
        <Image
          source={{
            uri: user.perfil_image,
          }}
          style={styles.perfilImage}
        />
        <View style={styles.perfilBtn}>
          <Button
            title="Editar Perfil"
            onPress={() => navigation.navigate("EditPerfil")}
          />
        </View>
        <Text style={styles.perfilName}>{user.name}</Text>
        <Text style={styles.title}>Meus Posts</Text>
      </ScrollView>
    </SafeArea>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  voltar: {
    margin: 10,
    width: 32,
  },
  perfilImage: {
    marginStart: 10,
    position: "absolute",
    top: 110,
    width: 75,
    height: 75,
    borderWidth: 3,
    borderRadius: 40,
    borderColor: "white",
  },
  perfilBtn: {
    position: "absolute",
    end: 10,
    top: 160,
  },
  perfilName: {
    marginTop: 40,
    marginStart: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  title: {
    marginTop: 20,
    marginStart: 10,
    fontSize: 15,
    fontWeight: "bold",
  },
});
export default Perfil;
