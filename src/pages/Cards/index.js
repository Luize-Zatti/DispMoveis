import React from 'react'; 
import { SafeAreaView, View, ScrollView, StyleSheet } from 'react-native'; 
import { Text, Card, Button, Icon } from 'react-native-elements';

const Cards = () => { 
  return ( 
    <SafeAreaView style={styles.container}> 
      <ScrollView> 
        <View style={styles.container}> 
          <Card> 
            <Card.Title>DESTINO PORTUGAL</Card.Title> 
            <Card.Divider /> 
            <Card.Image 
              style={{ padding: 0 }} 
              source={require('../../../assets/Portugal.jpg')} 
            /> 
            <Text style={{ marginBottom: 10 }}> 
              Um dos destinos mais procurados onde boa parte da arquitetura do país data dos séculos XVI a XIX. 
            </Text> 
            <Button 
              icon={ 
                <Icon 
                  name="airplane-outline" 
                  type="ionicon" 
                  color="#ffffff" 
                  iconStyle={{ marginRight: 10 }} 
                /> 
              } 
              title="RESERVE AGORA" 
              onPress={() => {alert('Reservado!')}} 
            /> 
          </Card> 
          <Card> 
            <Card.Title>DESTINO ESPANHA</Card.Title> 
            <Card.Divider /> 
            <Card.Image 
              style={{ padding: 0 }} 
              source={require('../../../assets/Espanha.jpg')} 
            /> 
            <Text style={{ marginBottom: 10 }}> 
              A Espanha é um país em movimento, com mais de vinte séculos de história. 
            </Text> 
            <Button 
              icon={ 
                <Icon 
                  name="airplane-outline" 
                  type="ionicon" 
                  color="#ffffff" 
                  iconStyle={{ marginRight: 10 }} 
                /> 
              } 
              title="RESERVE AGORA" 
              onPress={() => {alert('Reservado!')}} 
            /> 
          </Card> 
        </View> 
      </ScrollView> 
    </SafeAreaView> 
  ); 
};

const styles = StyleSheet.create({ 
  container: { 
    flex: 1, 
    paddingTop: 10, 
    backgroundColor: '#ecf0f1', 
  }, 
});

export default Cards;