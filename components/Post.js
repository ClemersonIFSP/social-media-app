import { View, Text } from "react-native";
const Post = ({ post }) => {
  return (
    <View>
      <Text>{post.title}</Text>
      <Text>{post.body}</Text>
    </View>
  );
};
export default Post;
