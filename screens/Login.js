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

const Login = () => {
  const navigation = useNavigation();
  const [txtEmail, setTxtEmail] = useState("");
  const [txtPassword, setTxtPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: txtEmail,
          password: txtPassword,
        }),
      });
      const data = await response.json();
      if (data?.message) {
        navigation.navigate("Home");
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
        <Text style={styles.h1}>LOGIN</Text>
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
          <Button
            title="Registrar"
            onPress={() => navigation.navigate("Register")}
          />
          <Button title="Logar" onPress={handleLogin} />
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

export default Login;
