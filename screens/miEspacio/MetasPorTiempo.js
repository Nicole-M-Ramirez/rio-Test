import { StyleSheet, View, ImageBackground, Pressable } from 'react-native';
import SquareButton from '../../components/Square-Button';

function MetasPorTiempo ({navigation}) {

  return(
    <View style={styles.container}>
        <ImageBackground source={require('../../assets/updateImages/metasportiempo.jpg')} resizeMode="cover" style={styles.backgroundImage}>
          <SquareButton mtop='177%' mleft='7%' h='4%' w='25%' pressed={() => {navigation.navigate('Perfil')}}/>
          <SquareButton mtop='-12%' mleft='56%' h='8%' w='40%' pressed={() => {navigation.navigate('MetaNueva')}}/>
          <SquareButton mtop='-130%' mleft='9%' h='5%' w='41%' pressed={() => {navigation.navigate('MetasPorActividad')}}/>
        </ImageBackground>
    </View>
);
}

export default MetasPorTiempo;

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