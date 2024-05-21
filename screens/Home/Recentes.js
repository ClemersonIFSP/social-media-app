import { View, Text, StyleSheet, Pressable } from "react-native";
import Post from "../../components/Post";
import { useNavigation } from "@react-navigation/native";
const data = {
    perfil_image: "https://cdn-icons-png.flaticon.com/512/147/147142.png",
    name: "Clemerson",
    body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    like: 0,
};
const Recentes = () => {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1 }}>
            <Post post={data} />
            <Pressable style={styles.newPost} onPress={() => navigation.navigate("NewPost")}>
                <Text style={{ color: "white", textAlign: "center" }}>Novo Post</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    newPost: {
        position: "absolute",
        backgroundColor: "blue",
        borderRadius: 100,
        whidth: 50,
        height: 50,
        end: 20,
        bottom: 20,
    }
});
export default Recentes;