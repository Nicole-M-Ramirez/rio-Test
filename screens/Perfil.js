import { StyleSheet, View, ImageBackground } from 'react-native';
import SquareButton from '../components/Square-Button';

function Perfil () {
  return(
    <View style={styles.container}>
        <ImageBackground source={require('../assets/images/miespacio.jpg')} resizeMode="cover" style={styles.backgroundImage}>
          <SquareButton mtop='44%' mleft='7%' h='19%' w='42%' pressed={() => {navigation.navigate('Actividades')}}/>
          <SquareButton mtop='-41%' mleft='51%' h='19%' w='42%' pressed={() => {navigation.navigate('Actividades')}}/>
          <SquareButton mtop='2%' mleft='7%' h='19%' w='42%' pressed={() => {navigation.navigate('PerfilPass')}}/>
          <SquareButton mtop='-41%' mleft='51%' h='19%' w='42%' pressed={() => {navigation.navigate('Comunidad')}}/>
          <SquareButton mtop='2%' mleft='7%' h='19%' w='42%' pressed={() => {navigation.navigate('Informacion')}}/>
          <SquareButton mtop='-40%' mleft='51%' h='19%' w='42%' pressed={() => {navigation.navigate('Configuracion')}}/>
        </ImageBackground>
    </View>
);
}

export default Perfil;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
},
  backgroundImage: {
    flex: 1,
    //justifyContent: "center"
  },
})