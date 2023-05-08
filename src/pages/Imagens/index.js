import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
/*inserir imagens no app de duas formas
1ª armazenada no proprio projeto
2ª imagens da internet(link)
*/




export default function Imagens() {
  return (


   
    <View style={styles.container}>
   
      <Image
        source={require('../../../assets/Meg.jpg')}
        style={[styles.image, {marginTop:5}]}
      />




      <Image
        source={{uri: 'https://media1.giphy.com/media/EPPkEcNbKVWBvtJnpf/giphy.gif'}}
        style={styles.image}
      />
     
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    flex: 1,
    width: '90%',
    resizeMode: 'cover',
    marginBottom:10,
  }
});
