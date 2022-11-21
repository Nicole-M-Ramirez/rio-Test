import { StyleSheet, View, ImageBackground, Pressable } from 'react-native';
import SquareButton from '../../components/Square-Button';

function MetasPorActividad ({navigation}) {

  return(
    <View style={styles.container}>
        <ImageBackground source={require('../../assets/updateImages/metasporactividad.jpg')} resizeMode="cover" style={styles.backgroundImage}>
          <SquareButton mtop='180%' mleft='7%' h='4%' w='25%' pressed={() => {navigation.navigate('Perfil')}}/>
          <SquareButton mtop='-12%' mleft='56%' h='8%' w='40%' pressed={() => {navigation.navigate('MetaNueva')}}/>
          <SquareButton mtop='-133%' mleft='51%' h='5%' w='41%' pressed={() => {navigation.navigate('MetasPorTiempo')}}/>
        </ImageBackground>
    </View>
);
}

export default MetasPorActividad;

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
})