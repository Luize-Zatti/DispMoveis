

import { LocationObject, requestForegroundPermissionsAsync, getCurrentPositionAsync, watchPositionAsync, LocationAccuracy} from 'expo-location';
import MapView, { Marker } from 'react-native-maps';
import {useState, useEffect, useRef} from 'react';
import { StyleSheet, View } from 'react-native';




export default function Mapa() {
  //criando estado para pegar a localização
  const[location, setLocation]=useState<LocationObject | null>(null);
  //mapa acompanha a rota. não fica estático
  const mapRef = useRef<MapView>(null);




  //criando funçao assincrona
  async function requestLocationPermissions(){
    const { granted } = await requestForegroundPermissionsAsync();




    if (granted){
      const currentPosition = await getCurrentPositionAsync();
      setLocation(currentPosition);
    }
  }
  {/*no momento em que a interface for renderizada sera chamada pelo metodo e solicite permissão */}
  useEffect(()=>{
    requestLocationPermissions();
  }, []);




  useEffect(()=>{
    watchPositionAsync({
      accuracy:LocationAccuracy.Highest,
      timeInterval:1000,
      distanceInterval:1
    }, (response) => { //consegue obter detalhes da nova posiçao no mapa
      setLocation(response);
      //se for verdadeira
      mapRef.current?.animateCamera({
        pitch:70, //perspectiva do mapa
        center: response.coords // camera fica centralizada no mapa
      })
    });
  }, []);




  return (
    <View style={styles.container}>{
      location &&
      <MapView
       ref={mapRef}
       style={styles.map}
       initialRegion={{
         latitude:location.coords.latitude,
         longitude:location.coords.longitude,
         latitudeDelta: 0.05, //distancia do mapa na tela
         longitudeDelta: 0.05
       }}
      >
        
      <Marker
        coordinate = {{
          //é um objeto
          latitude:location.coords.latitude,
          longitude:location.coords.longitude,
        }}
      />
    </MapView>
}
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
  map:{
    flex:1,
    width: '100%',
  }
});
