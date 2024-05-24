import { View, Text, Image, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import useUserLoggedStore from "../stores/useUserLogged";

const Post = ({ post }) => {
  const user = useUserLoggedStore();
  const date = new Date(post.date);
  const formattedDate = new Date(date).toLocaleString("pt-BR", {
    timeZone: "America/Sao_Paulo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.perfil}>
          <Image
            style={styles.perfil_image}
            source={{ uri: `${post.user.perfil_image}` }}
          />
          <View style={{ marginStart: 10 }}>
            <Text>{post.user.name}</Text>
            <Text>{formattedDate}</Text>
          </View>
        </View>
        <View>
          {user.id == post.author && (
            <Feather name="trash-2" size={20} color="black" />
          )}
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
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
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
    borderRadius: 50,
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
});
export default Post;
