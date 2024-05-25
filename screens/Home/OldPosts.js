import { useState, useEffect } from "react";
import { FlatList, ScrollView, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Post from "../../components/Post";

const OldPosts = () => {
  const navigation = useNavigation();
  const [posts, setPosts] = useState([]);
  const loadPosts = async () => {
    try {
      const response = await fetch(
        "http://localhost:3000/post/listOldPosts"
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
    </View>
  );
};

export default OldPosts;
