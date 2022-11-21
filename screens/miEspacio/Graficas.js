import { StyleSheet, View, ImageBackground, Pressable } from 'react-native';
import SquareButton from '../../components/Square-Button';

function Graficas ({navigation}) {

  return(
    <View style={styles.container}>
        <ImageBackground source={require('../../assets/updateImages/graficas.jpg')} resizeMode="cover" style={styles.backgroundImage}>
            <SquareButton mtop='177%' mleft='65%' h='6%' w='29%' pressed={() => {navigation.navigate('GraficaDeBarras')}}/>
        </ImageBackground>
    </View>
);
}

export default Graficas;

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