import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput, Button } from "react-native";

const Login = ({
  navigation
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Here you can integrate the functionality to handle login
    // If login is successful, navigate to the Categories screen
    navigation.navigate("Categories");
  };

  return <SafeAreaView style={styles.container}>
      <TextInput style={styles.input} onChangeText={setEmail} value={email} placeholder="Enter Email" keyboardType="email-address" />
      <TextInput style={styles.input} onChangeText={setPassword} value={password} placeholder="Enter Password" secureTextEntry />
      <Button title="Login" onPress={handleLogin} style={styles.wqhlSUGz} />
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8
  },
  wqhlSUGz: {
    position: "relative"
  }
});
export default Login;