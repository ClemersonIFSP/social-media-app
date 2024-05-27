import { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  ScrollView,
  Button,
  StyleSheet,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

import Post from "../../components/Post";
import SafeArea from "../../components/SafeArea";
import useUserLoggedStore from "../../stores/useUserLogged";

const Perfil = () => {
  const user = useUserLoggedStore();
  const navigation = useNavigation();
  const [posts, setPosts] = useState([]);
  const loadPosts = async () => {
    try {
      const response = await fetch(`http://localhost:3000/post/user/${user.id}`);
      const data = await response.json();
      setPosts(data.posts);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      loadPosts();
    });
    return unsubscribe;
  }, [navigation]);

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
          <AntDesign
            style={styles.voltar}
            name="leftsquare"
            size={35}
            color="#117afb"
            onPress={() => navigation.goBack()}
          />
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
            onPress={() => navigation.navigate("PerfilEdit")}
          />
        </View>
        <Text style={styles.perfilName}>{user.name}</Text>
        <Text style={styles.title}>Meus Posts</Text>
        <FlatList
          data={posts}
          renderItem={({ item }) => <Post post={item} />}
          keyExtractor={(item) => item.id}
        />
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
    margin: 5,
    position: "absolute",
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
