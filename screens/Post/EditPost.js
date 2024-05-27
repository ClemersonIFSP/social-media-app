import { useState } from "react";
import { View, Button, StyleSheet, Image, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

import useUserLoggedStore from "../../stores/useUserLogged";
import SafeArea from "../../components/SafeArea";

const EditPost = ({ route }) => {
    const user = useUserLoggedStore();
    const navigation = useNavigation();
    const post = route.params;
    const [postBody, setPostBody] = useState(post.body);

    const put = async () => {
        try {
            const response = await fetch(`http://localhost:3000/post/${post.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    body: postBody,
                    author: user.id,
                }),
            });
            const data = await response.json();
            if (data?.success) {
                navigation.goBack();
            } else {
                console.log(data?.error);
            }
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <SafeArea>
            <View>
                <View style={styles.header}>
                    <AntDesign
                        style={styles.voltar}
                        name="leftsquare"
                        size={35}
                        color="#117afb"
                        onPress={() => navigation.goBack()}
                    />
                    <Button title="Editar" onPress={() => put()} />
                </View>
                <View style={styles.post}>
                    <Image
                        source={{ uri: user.perfil_image }}
                        style={styles.perfilImage}
                    />
                    <TextInput
                        placeholder="O que você está pensando?"
                        onChangeText={setPostBody}
                        value={postBody}
                        style={styles.input}
                        multiline={true}
                    />
                </View>
            </View>
        </SafeArea>
    );
};
const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
    },
    post: {
        flexDirection: "row",
        height: "80%",
        padding: 10,
    },
    perfilImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    input: {
        flex: 1,
        marginStart: 10,
        borderWidth: 1,
        borderBlockColor: "black",
    },
});
export default EditPost;
