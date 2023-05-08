import React, {useState} from 'react';
import{View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';


export default function CalculadoraIMC(){
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');


  function handleSubmit(){
    const alt = altura / 100;
    const imc = peso / (alt * alt);


    if (imc < 18.6){
      alert("Você está magro, precisa ganhar peso " + imc.toFixed(2));
    } else if(imc >=18.6 && imc <24.9){
      alert("Peso ideal " + imc.toFixed(2));
    } else if(imc >= 24.9 && imc < 34.9){
      alert("Acima do Peso " + imc.toFixed(2));
    }
  }


  return(
    <View style={styles.container}>
      <Text style={styles.titulo}>Calcule seu IMC</Text>
      <TextInput
        style={styles.input}
        value={peso}
        onChangeText={ (peso) => setPeso(peso)}
        placeholder = 'Peso (kg)'
        keyboardType= 'numeric'
      />
      <TextInput
        style={styles.input}
        value={altura}
        onChangeText={ (altura) => setAltura(altura)}
        placeholder = 'Altura cm'
        keyboardType = 'numeric'
      />
      <TouchableOpacity
        style={styles.button}
        onPress={ handleSubmit }
      >
      <Text style={styles.buttonText}> Calcular </Text>
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC'
  },
  titulo:{
    textAlign: 'center',
    marginTop: 25,
    fontSize: 30,
    color: 'black'
  },
  button:{
    justifyContent:'center',
    alignItems:'center',
    margin:15,
    backgroundColor:'#DCDCDC',
    padding: 10,
  },
  input:{
    width: 200,
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 15,
    padding: 10,
    color: '#000',
    fontSize: 23
  }
})
