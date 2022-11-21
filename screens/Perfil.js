import { StyleSheet, View, ImageBackground } from 'react-native';
import SquareButton from '../components/Square-Button';

function Perfil ({navigation}) {
  return(
    <View style={styles.container}>
        <ImageBackground source={require('../assets/updateImages/menuPerfil.jpg')} resizeMode="cover" style={styles.backgroundImage}>
          <SquareButton mtop='44%' mleft='7%' h='19%' w='42%' pressed={() => {navigation.navigate('Calendario')}}/>
          <SquareButton mtop='-41%' mleft='51%' h='19%' w='42%' pressed={() => {navigation.navigate('Diario')}}/>
          <SquareButton mtop='2%' mleft='7%' h='19%' w='42%' pressed={() => {navigation.navigate('Logros')}}/>
          <SquareButton mtop='-41%' mleft='51%' h='19%' w='42%' pressed={() => {navigation.navigate('MetasPorActividad')}}/>
          <SquareButton mtop='2%' mleft='7%' h='19%' w='42%' pressed={() => {navigation.navigate('Graficas')}}/>
          <SquareButton mtop='-40%' mleft='51%' h='19%' w='42%' pressed={() => {navigation.navigate('Exportar')}}/>
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