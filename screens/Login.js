import { View, Text, StyleSheet, TextInput, Button, ImageBackground } from "react-native";
const image = {}
export const Login = () => {
  return (
    <ImageBackground source={require("../assets/background.jpg")} style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.h1}>LOGIN</Text>
        <View style={styles.form} >
          <Text style={styles.text}>E-mail:</Text>
          <TextInput style={styles.input}></TextInput>
        </View>
        <View style={styles.form}>
          <Text style={styles.text}>Senha:</Text>
          <TextInput style={styles.input} secureTextEntry={true}></TextInput>
        </View>
        <View style={styles.btnGroup}>
          <Button title="Registrar" />
          <Button title="Logar" />
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
    margin: 20
  },
  text: {
    
  },
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
    marginTop: 10
  }
});
