import React from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Tela2() {
  const navigation = useNavigation();

  const handlePular = () => {
    // Ação a ser executada ao pressionar o botão "PULAR"
  };

  const handleProximo = () => {
    navigation.navigate('Tela2'); // Navegar para a "Tela2"
  };

  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Image
          source={require('../../../../../../assets/Relogio.jpg')}
          style={styles.clockImage}
        />
        <Text style={styles.texto}>RÁPIDO</Text>
        <Text style={styles.dashedLine}></Text>
        <Text style={styles.subTexts}>Encontramos o profissional mais </Text>
        <Text style={styles.subTexts}>próximo de você!</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={handlePular} >
          <Text style={styles.buttonText}>PULAR</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleProximo}>
          <Text style={styles.buttonText}>PRÓXIMO</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#191970",
  },
  slide: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
  iconContainer: {
    flex: 1,
    alignItems: "center",
    marginTop: 130,
  },
  clockImage: {
    width: 200,
    height: 250,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  button: {
    backgroundColor: "#DDDDDD",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    paddingBottom: 15,
    paddingHorizontal: 35,
    color: "#fff"
  },
  dashedLine: {
    borderBottomWidth: 3,
    borderBottomColor: "#fff",
    width: 130, // Defina o tamanho desejado para o traço
    marginBottom:20,
  },
  texto:{
    color: "#fff",
    fontWeight:"bold",
    fontSize: 30,
  },
  subTexts:{
    color: "#fff",
    marginBottom:3,
    fontSize:23,
  }
});