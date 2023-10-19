import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";

export default function Login({ navigation }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorLogin, setErrorLogin] = useState(false);

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                let user = userCredential.user;
                console.log("Successfully signed in!");
                setErrorLogin(false);
            })
            .catch((error) => {
                let errorCode = error.code;
                let errorMessage = error.message;
                console.error("Error signing in: ", error);
                setErrorLogin(true);
            });
    }

    return (
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.container}>
            <Text style={styles.title}>Task</Text>
            <TextInput style={styles.input} placeholder="enter your email" type="text" onChangeText={(text) => setEmail(text)} value={email} />
            <TextInput style={styles.input} secureTextEntry={true} placeholder="enter a password" type="text" onChangeText={(text) => setPassword(text)} value={password} />
            {errorLogin ? (
                <View style={styles.ContentAlert}>
                    <MaterialCommunityIcons name="alert-circle" size={24} color="#bdbdbd" />
                    <Text style={styles.warningAlert}>invalid e-mail or password</Text>
                </View>
            ) : (
                <View />
            )}
            {email === "" || password === "" ?
                <TouchableOpacity disabled={true} style={styles.buttonLogin}>
                    <Text style={styles.textButtonLogin}>Login</Text>
                </TouchableOpacity>
                :
                <TouchableOpacity style={styles.buttonLogin} onPress={handleLogin} >
                    <Text style={styles.textButtonLogin}>Login</Text>
                </TouchableOpacity>
            }

            <Text style={styles.registration}>don't have a registration? <Text style={styles.linkSubscribe} onPress={() => navigation.navigate("Cadastro")}> Subscribe now...</Text> </Text>

            <View style={{ height: 100 }} />
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: Platform.OS === "ios" ? 0 : 50,
    },
    title: {
        fontSize: 22,
        color: "#F92E6A",
        marginBottom: 10,
        fontWeight: "bold",
    },
    input: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 10,
        padding: 10,
        width: "90%",
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: "#F92E6A",
    },
    buttonLogin: {
        width: 200,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F92E6A",
        borderRadius: 50,
        marginTop: 30,
    },
    textButtonLogin: {
        color: "#fff",
    },
    ContentAlert: {
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    warningAlert: {
        paddingLeft: 10,
        color: "#bdbdbd",
        fontSize: 16,
    },
    registration: {
        marginTop: 20,
        color: "#4d5156",
    },
    linkSubscribe: {
        color: "#1877f2",
        fontSize: 16,

    },
})