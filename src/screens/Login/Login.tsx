import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  ActivityIndicator,
  Button,
  KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "@firebase/auth";
import { auth } from "FirebaseConfig";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const singIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
    } catch (e) {
      console.log(e);
      alert("Sign in failed: " + e);
    } finally {
      setLoading(false);
    }
  };

  const singUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
    } catch (e) {
      console.log(e);
      alert("Sign up failed: " + e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="padding">
        <TextInput
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder="email"
          style={styles.input}
          autoCapitalize="none"
        />
        <TextInput
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholder="password"
          secureTextEntry
          style={styles.input}
          autoCapitalize="none"
        />
        {loading ? (
          <ActivityIndicator size="large" color={"#0000ff"} />
        ) : (
          <>
            <Button title="Login" onPress={singIn} />
            <Button title="Create an Account" onPress={singUp} />
          </>
        )}
      </KeyboardAvoidingView>
    </View>
  );
};

export default Login;
