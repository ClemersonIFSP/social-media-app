import { useState } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import ConfirmationModal from "./ConfirmationModal.js";
import useUserLoggedStore from "../stores/useUserLogged";

const Post = ({ post }) => {
  const user = useUserLoggedStore();
  const navigation = useNavigation();
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

  const remove = async () => {
    try {
      const response = await fetch(`http://localhost:3000/post/${post.id}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.log(error);
    }
  }
  const [modalVisible, setModalVisible] = useState(false);
  const handleConfirm = (id) => {
    remove(id)
    setModalVisible(false);
  };

  const handleCancel = () => {
    setModalVisible(false);
  };
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
        {user.id == post.author && (
          <View style={{ flexDirection: "column" }}>
            <Feather name="edit" size={20} color="black" onPress={() => navigation.navigate('EditPost', { id: post.id, body: post.body })} />
            <Feather name="trash-2" size={20} color="black" onPress={() => setModalVisible(true)} />
          </View>
        )}
      </View>
      <Text>{post.body}</Text>
      <ConfirmationModal
        visible={modalVisible}
        message="Voce realmene deseja deletar o post?"
        onConfirm={() => handleConfirm(post.id)}
        onCancel={() => handleCancel()}
      />
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
