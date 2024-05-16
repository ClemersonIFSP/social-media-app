import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ImageBackground,
} from "react-native";

import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export const Register = () => {
  const navigation = useNavigation();

  const [txtName, setTxtName] = useState("");
  const [txtEmail, setTxtEmail] = useState("");
  const [txtPassword, setTxtPassword] = useState("");

  const postUser = async () => {
    try {
      const response = await fetch("http://localhost:3000/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: txtName,
          email: txtEmail,
          password: txtPassword,
        }),
      });
      const data = await response.json();
      if (data?.success) {
        navigation.goBack();
      } else {
        alert(data?.error);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={styles.container}
    >
      <View style={styles.formContainer}>
        <Text style={styles.h1}>REGISTRAR</Text>
        <View style={styles.form}>
          <Text style={styles.text}>Nome:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu Nome"
            onChangeText={setTxtName}
            value={txtName}
          ></TextInput>
        </View>
        <View style={styles.form}>
          <Text style={styles.text}>E-mail:</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu E-mail"
            onChangeText={setTxtEmail}
            value={txtEmail}
          ></TextInput>
        </View>
        <View style={styles.form}>
          <Text style={styles.text}>Senha:</Text>
          <TextInput
            style={styles.input}
            secureTextEntry={true}
            placeholder="Digite sua Senha"
            onChangeText={setTxtPassword}
            value={txtPassword}
          ></TextInput>
        </View>
        <View style={styles.btnGroup}>
          <Button title="Voltar" onPress={() => navigation.goBack()} />
          <Button title="Registrar-se" onPress={postUser} />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  formContainer: {
    alignItems: "center",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    margin: 20,
  },
  text: {},
  h1: {
    fontSize: 25,
    fontWeight: "700",
  },
  form: {
    width: "100%",
  },
  input: {
    borderBottomWidth: 1,
    backgroundColor: "#f9f9f9",
    borderRadius: 5,
    marginBottom: 10,
    padding: 5,
  },
  btnGroup: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    marginTop: 10,
  },
});
