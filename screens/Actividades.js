import { StyleSheet, View, ImageBackground, Pressable } from 'react-native';
import SquareButton from '../components/Square-Button';

function Actividades ({navigation}) {
  let page = ''
  function pressHandlerF(){
    navigation.navigate('Feliz')
  }

  function pressHandlerAn(){
    navigation.navigate('EmocionesExpandidas')
  }

  function pressHandlerC(){
    navigation.navigate('Confundido')
  }

  function pressHandlerT(){
    navigation.navigate('EmocionesExpandidas')
  }

  function pressHandlerM(){
    navigation.navigate('EmocionesExpandidas')
  }

  function pressHandlerAs(){
    navigation.navigate('Asustado')
  }

  return(
    <View style={styles.container}>
        <ImageBackground source={require('../assets/updateImages/emociones.jpg')} resizeMode="cover" style={styles.backgroundImage}>
          <SquareButton mtop='45%' mleft='7%' h='19%' w='42%' pressed={pressHandlerF}/>
          <SquareButton mtop='-41%' mleft='51%' h='19%' w='42%' pressed={pressHandlerAn}/>
          <SquareButton mtop='2%' mleft='7%' h='19%' w='42%' pressed={pressHandlerC}/>
          <SquareButton mtop='-41%' mleft='51%' h='19%' w='42%' pressed={pressHandlerT}/>
          <SquareButton mtop='2%' mleft='7%' h='19%' w='42%' pressed={pressHandlerM}/>
          <SquareButton mtop='-41%' mleft='51%' h='19%' w='42%' pressed={pressHandlerAs}/>
        </ImageBackground>
    </View>
);
}

export default Actividades;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
},
  backgroundImage: {
    flex: 1,
    //justifyContent: "center",
    //flexDirection: 'row',
  },
  // button: {
  //   marginTop: "95%",
  //   //borderRadius: 8,
  //   //padding: 6,
  //   height: 89,
  //   width: '42%',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   elevation: 5,
  //   backgroundColor: 'pink', 
  //   margin: 5
  // },
})