import { useState } from 'react';
import { View, Button, StyleSheet, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import useUserLoggedStore from "../../stores/useUserLogged";
import SafeArea from '../../components/SafeArea';



const NewPost = () => {
    const user = useUserLoggedStore();
    const navigation = useNavigation();

    const [postBody, setPostBody] = useState("");

    const post = async () => {
        try {
            const response = await fetch("http://localhost:3000/post", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    body: postBody, author: user.id
                }),
            })
            const data = await response.json();
            if (data?.success) {
                navigation.goBack();
            } else {
                console.log(data?.error);
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <SafeArea>
            <View>
                <View style={styles.header}>
                    <Button title="V" onPress={() => navigation.goBack()} />
                    <Button title="Publicar" onPress={() => post()} />
                </View>
                <View style={styles.post}>
                    <Image source={{ uri: user.perfil_image }} style={styles.perfilImage} />
                    <TextInput
                        placeholder="O que você está pensando?"
                        onChangeText={setPostBody}
                        value={postBody}
                        style={styles.input}
                        multiline={true} />
                </View>
            </View>
        </SafeArea>
    );
}
const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    post: {
        flexDirection: 'row',
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
        textAlignVertical: 'top',
        marginStart: 10,
        borderWidth: 1,
        borderBlockColor: 'black',
    },
})
export default NewPost;