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
const Perfil = () => {
  const data = {
    perfil_image: "https://cdn-icons-png.flaticon.com/512/147/147142.png",
    name: "Clemerson",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    like: 0,
  };
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://png.pngtree.com/png-clipart/20190516/original/pngtree-simple-banner-design-for-commercial-elements-designbannerbannercartoon-design-png-image_4048742.jpg",
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
          uri: "https://cdn-icons-png.flaticon.com/512/147/147142.png",
        }}
        style={styles.perfilImage}
      />
      <View style={styles.perfilBtn}>
        <Button
          title="Editar Perfil"
          onPress={() => navigation.navigate("Editar Perfil")}
        />
      </View>
      <Text style={styles.perfilName}>Clemerson</Text>
      <Text style={styles.title}>Meus Posts</Text>
      <Post post={data} />
      <Post post={data} />
    </ScrollView>
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
