import { StyleSheet, View, ImageBackground, Pressable } from 'react-native';
import SquareButton from '../../components/Square-Button';

function EmocionesExpandidas ({navigation}) {

  return(
    <View style={styles.container}>
        <ImageBackground source={require('../../assets/updateImages/emocionesespandidas.jpg')} resizeMode="cover" style={styles.backgroundImage}>
          <SquareButton mtop='40%' mleft='5%' h='5%' w='45%' pressed={() => {navigation.navigate('ProvocacionAns')}}/>
          <SquareButton mtop='0%' mleft='5%' h='5%' w='45%' pressed={() => {navigation.navigate('ProvocacionAns')}}/>
          <SquareButton mtop='0%' mleft='5%' h='5%' w='45%' pressed={() => {navigation.navigate('ProvocacionAns')}}/>
          <SquareButton mtop='0%' mleft='5%' h='5%' w='45%' pressed={() => {navigation.navigate('ProvocacionAns')}}/>
          <SquareButton mtop='0%' mleft='5%' h='5%' w='45%' pressed={() => {navigation.navigate('ProvocacionAns')}}/>
          <SquareButton mtop='5%' mleft='5%' h='5%' w='45%' pressed={() => {navigation.navigate('ProvocacionMol')}}/>
          <SquareButton mtop='0%' mleft='5%' h='5%' w='45%' pressed={() => {navigation.navigate('ProvocacionMol')}}/>
          <SquareButton mtop='0%' mleft='5%' h='5%' w='45%' pressed={() => {navigation.navigate('ProvocacionMol')}}/>
          <SquareButton mtop='0%' mleft='5%' h='5%' w='45%' pressed={() => {navigation.navigate('ProvocacionMol')}}/>
          <SquareButton mtop='5%' mleft='5%' h='5%' w='45%' pressed={() => {navigation.navigate('ProvocacionTris')}}/>
          <SquareButton mtop='0%' mleft='5%' h='5%' w='45%' pressed={() => {navigation.navigate('ProvocacionTris')}}/>
          <SquareButton mtop='4%' mleft='5%' h='5%' w='45%' pressed={() => {navigation.navigate('Actividades')}}/>
        </ImageBackground>
    </View>
);
}

export default EmocionesExpandidas;

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