import { View, Text, StyleSheet, TextInput, Button } from "react-native";
export const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Text style={{ marginBottom: 10 }}>Login</Text>
        <View>
          <Text>E-mail</Text>
          <TextInput style={styles.input}></TextInput>
        </View>
        <View>
          <Text>Senha</Text>
          <TextInput style={styles.input}></TextInput>
        </View>
        <View style={styles.btnGroup}>
          <Button title="Register" />
          <Button title="Logar" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  loginContainer: {
    width: 400,
    height: 400,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    
  },
  input: {
    borderWidth: 1,
  },
  btnGroup: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    marginTop: 10
  }
});
