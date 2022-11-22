import { StyleSheet, View, ImageBackground, Pressable } from 'react-native';
import SquareButton from '../../components/Square-Button';

function Feliz ({navigation}) {

  return(
    <View style={styles.container}>
        <ImageBackground source={require('../../assets/updateImages/felicidad.jpg')} resizeMode="cover" style={styles.backgroundImage}>
          <SquareButton mtop='180%' mleft='7%' h='4%' w='25%' pressed={() => {navigation.navigate('Actividades')}}/>
        </ImageBackground>
    </View>
);
}

export default Feliz;

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