import { View, Button, StyleSheet, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SafeArea from '../../components/SafeArea';
const NewPost = () => {
    const navigation = useNavigation();
    return (
        <SafeArea>
            <View>
                <View style={styles.header}>
                    <Button title="V" onPress={() => navigation.goBack()} />
                    <Button title="Publicar" />
                </View>
                <View style={styles.post}>
                    <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/147/147142.png' }} style={styles.perfilImage} />
                    <TextInput placeholder="O que você está pensando?" style={styles.input} multiline={true} />
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