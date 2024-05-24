import { useState, useEffect } from "react";
import { Text, StyleSheet, FlatList, ScrollView, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import Post from "../../components/Post";

const Recentes = () => {
  const navigation = useNavigation();
  const [posts, setPosts] = useState([]);
  const loadPosts = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/post/listOrderByDate"
      );
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
    <View style={{ flex: 1 }}>
      <ScrollView>
        <FlatList
          data={posts}
          renderItem={({ item }) => <Post post={item} />}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
      <AntDesign
        style={styles.newPost}
        name="pluscircle"
        size={50}
        color="#117afb"
        onPress={() => navigation.navigate("NewPost")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  newPost: {
    position: "absolute",
    end: 20,
    bottom: 20,
  },
});
export default Recentes;
