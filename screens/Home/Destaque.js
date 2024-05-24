import { useState, useEffect } from "react";
import { Text, StyleSheet, FlatList, ScrollView, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import Post from "../../components/Post";

const Destaque = () => {
  const navigation = useNavigation();
  const [posts, setPosts] = useState([]);
  const loadPosts = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/post/listOrderByLike"
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
      <ScrollView style={{ flex: 1 }}>
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
      <Text style={{ color: "white", textAlign: "center" }}>Novo Post</Text>
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

export default Destaque;
