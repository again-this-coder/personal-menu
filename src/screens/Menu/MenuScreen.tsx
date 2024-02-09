import { View, Text, Button, Keyboard } from "react-native";
import React, { FC, useEffect, useState } from "react";
import { styles } from "./styles";
import { useNavigation, useRoute } from "@react-navigation/native";
import { db } from "FirebaseConfig";
import { TextInput } from "react-native-gesture-handler";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  setDoc,
  updateDoc,
  getDocFromServer,
} from "firebase/firestore";

const MenuScreen: FC = () => {
  const { goBack } = useNavigation();
  const [username, setUsername] = useState("");
  const [email, setUserEmail] = useState("");
  const [userData, setUserData] = useState(null);
  const docRef = doc(db, "users", "u1aLv4SslQg1QoYvKiCn");

  // const submitData = () => {
  //   updateDoc(doc(db, "users", "LA"), {
  //     username: username,
  //     email: email,
  //   })
  //     .then(() => {
  //       console.log("data submitted");
  //     })
  //     .catch((e) => console.log(e));
  // };

  const deleteData = () => {
    deleteDoc(doc(db, "users", "LA"));
  };

  useEffect(() => {
    const getData = async () => {
      const response = await getDocFromServer(docRef);
      if (response.exists()) {
        console.log("Document data:", response.data());
        setUserData(response.data());
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    };
    getData();
  }, []);

  return (
    <View style={styles.container}>
      <Text>{userData?.username}</Text>
      <TextInput
        style={styles.input}
        placeholder="usernmae"
        onChangeText={(text) => setUsername(text)}
        value={username}
        multiline
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="email"
        onChangeText={(text) => setUserEmail(text)}
        value={email}
        multiline
        autoCapitalize="none"
      />
      <Button title="submitData" onPress={deleteData} />
    </View>
  );
};

export default MenuScreen;
