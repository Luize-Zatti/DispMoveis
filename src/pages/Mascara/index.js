import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { TextInputMask } from 'react-native-masked-text'




export default function Mascara() {
  const [cell, setCell] = useState('');
  const [cpf, setCpf] = useState('');
  const cpfRef = useRef(null);




  function showCPF(){
    const cpfIsValid = cpfRef?.current.isValid();
    alert(cpfIsValid);
  }




  return (


   
    <View style={styles.container}>


<Text style={{fontSize: 25, marginTop: 30}}>Telefone</Text>
    <TextInputMask
      style={styles.input}
      type={'cel-phone'}
      options={{
        maskType:'BRL',
        withDDD: true,
        dddMask: ' (99) ' //deixar espaço pra não ficar grudado o número
      }}
      value={cell}
      onChangeText={text => setCell(text)} //aqui vai o texto q o usuário digitou
      placeholder=' Insira seu telefone'
      placeholderTextColor='white'
      color='white'
    />


    <TextInputMask
      Style={styles.input}
      type={'cel-phone'}
     
      options={{
        maskType: 'BRL',
        withDDD: true,
        dddMask: ' (99) ' //deixa espaço
      }}




      value={cell}
      onChangeText={text => setCell(text)} //aqui vai o texto q o usuario digito
    />




    <Text style={{fontSize: 25, marginTop: 30}}>CPF</Text>
    <TextInputMask
      style={styles.input}
      type={'cpf'}
      value={cpf}
      onChangeText={text => setCpf(text)}
      ref={cpfRef}
      placeholder=' Insira seu CPF'
      placeholderTextColor='white'
    />




    <Button
      title='Mostrar CPF'
      onPress={showCPF} //chamar funcao
    />




    </View>
   
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    width: '90%',
    height: 40,
    backgroundColor: '#DDD',
    borderRadius: 5,
    fontSize: 20,
    padding: 5,
    marginBottom: 10,
  }
});
