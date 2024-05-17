import { View, Text, Image, StyleSheet } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
const Post = ({ post }) => {
  return (
    <View style={styles.container}>
      <View style={styles.perfil}>
        <Image
          style={styles.perfil_image}
          source={{ uri: `${post.perfil_image}` }}
        />
        <View style={{ marginStart: 10 }}>
          <Text>{post.name}</Text>
          <Text>24/12/2024 16:45</Text>
        </View>
      </View>
      <Text>{post.body}</Text>
      <View style={styles.footer}>
        <Image
          source={require("../assets/Like.png")}
          style={{ width: 16, height: 16, marginEnd: 5 }}
        />
        <Text>{post.like}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderBottomWidth: 3,
    borderBottomColor: "#f9f9f9",
  },
  perfil: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  perfil_image: {
    width: 50,
    height: 50,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
});
export default Post;
