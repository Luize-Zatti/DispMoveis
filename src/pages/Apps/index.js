import React from "react";
import { View, TouchableOpacity, Text } from 'react-native';
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";


const BUTTON_SIZE = 100;
const BUTTON_RADIUS = 10;


export default function AppS({ navigation }) {

  const buttons = [
    { icon: 'truck', text: 'Guincho' },
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
              if (button.icon === 'truck') {
                navigation.navigate('Guincho');
              }
              else {
                // ação padrão para outros botões
              }
            }}>

            {button.icon === 'truck' ? (
              <MaterialCommunityIcons name="truck" size={30} color="#000" />
            ) : (
              <Feather name={button.icon} size={30} color="#000" />
            )}
            <Text style={{ marginTop: 5 }}>{button.text}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}
