import React from "react";
import { View, TouchableOpacity, Text } from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";


const BUTTON_SIZE = 100;
const BUTTON_RADIUS = 10;


export default function Principal() {


  const navigation = useNavigation();


  const buttons = [
    { icon: 'camera', text: 'Camera' },
    { icon: 'calculator', text: 'Calculator' },
    { icon: 'format-list-checkbox', text: 'Tarefas' },
    { icon: 'file-text', text: 'Formulário' },
    { icon: 'map', text: 'Mapa' },
    { icon: 'domino-mask', text: 'Mascara' }, // Adicionando o ícone "domino-mask" no sexto botão
    { icon: 'image', text: 'Imagem' }, // Adicionando o ícone "image" no sétimo botão
    { icon: 'smartphone', text: 'AppS' },
    { icon: 'user-plus', text: 'Cadastro' },
    { icon: 'log-in', text: 'Login' },
    { icon: 'cards', text: 'Cards' },
  ];


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#ccc' }}>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
        {buttons.map((button) => (
          <TouchableOpacity key={button.icon} style={{
            width: BUTTON_SIZE,
            height: BUTTON_SIZE,
            borderRadius: BUTTON_RADIUS,
            backgroundColor: '#fff',
            margin: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}
            onPress={() => {
              if (button.icon === 'calculator') {
                navigation.navigate('Calculadora');
              } else if (button.icon === 'camera') {
                navigation.navigate('Camera');
              } else if (button.icon === 'format-list-checkbox') {
                navigation.navigate('Tarefas');
              } else if (button.icon === 'file-text') {
                navigation.navigate('Formulario');
              } else if (button.icon === 'map') {
                navigation.navigate('Mapa');
              }  else if (button.icon === 'domino-mask') {
                navigation.navigate('Mascara');
              }  else if (button.icon === 'image') {
                navigation.navigate('Imagens');
              }  else if (button.icon === 'smartphone') {
                navigation.navigate('AppS');
              } else if (button.icon === 'user-plus') { 
                navigation.navigate('Cadastro');
              } else if (button.icon === 'log-in') { 
                navigation.navigate('Login');
              }
              else {
                navigation.navigate('Cards');
              }
            }}>
            {button.icon === 'calculator' ? (
              <MaterialCommunityIcons name="calculator" size={30} color="#000" />
            ) : button.icon === 'format-list-checkbox' ? (
              <MaterialCommunityIcons name="format-list-checkbox" size={30} color="#000" />
            ) : button.icon === 'file-text' ? (
              <Feather name={button.icon} size={30} color="#000" />
            ) : button.icon === 'map' ? (
              <MaterialCommunityIcons name="google-maps" size={30} color="#000" />
            ) : button.icon === 'domino-mask' ? ( // Alterando o ícone do sexto botão
            <MaterialCommunityIcons name="domino-mask" size={30} color="#000" />
            ) : button.icon === 'cards' ? (
              <MaterialCommunityIcons name="cards" size={30} color="#000" />
            ) : (
              <Feather name={button.icon} size={30} color="#000" />
            )}
            <Text style={{ marginTop: 5 }}>{button.text}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

