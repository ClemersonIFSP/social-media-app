import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import useUserLoggedStore from "../../stores/useUserLogged";
import AsyncStorage from "@react-native-async-storage/async-storage";

const PerfilEdit = () => {
  const user = useUserLoggedStore();
  const navigation = useNavigation();
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [perfilImage, setPerfilImage] = useState(user.perfil_image);
  const [bannerImage, setBannerImage] = useState(user.banner_image);

  const save = async () => {
    try {
      const response = await fetch(`http://localhost:3000/user/${user.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          perfil_image: perfilImage,
          banner_image: bannerImage,
        }),
      });
      const data = await response.json();
      AsyncStorage.setItem("userLogged", JSON.stringify(data.user));
      user.update(data.user);
      if (data?.success) {
        alert("Perfil atualizado com sucesso");
        navigation.goBack();
      } else {
        alert(data?.error);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text>Nome:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu Nome"
          onChangeText={setName}
          value={name}
        />
      </View>
      <View style={styles.form}>
        <Text>E-mail:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu E-mail"
          onChangeText={setEmail}
          value={email}
        />
      </View>
      <View style={styles.form}>
        <Text>Imagem do Perfil:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite a URL da imagem do perfil"
          onChangeText={setPerfilImage}
          value={perfilImage}
        />
      </View>
      <View style={styles.form}>
        <Text>Imagem do Banner:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite a URL da imagem do banner"
          onChangeText={setBannerImage}
          value={bannerImage}
        />
      </View>
      <Button title="Salvar" onPress={() => save()}/>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
  form: {
    marginBottom: 10,
  },
  input: {
    borderBottomWidth: 1,
    backgroundColor: "white",
    borderRadius: 5,
    marginBottom: 10,
    padding: 5,
  },
});
export default PerfilEdit;
