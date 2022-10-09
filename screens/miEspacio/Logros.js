import { StyleSheet, View, ImageBackground, Pressable } from 'react-native';
import SquareButton from '../../components/Square-Button';

function Logros ({navigation}) {

  return(
    <View style={styles.container}>
        <ImageBackground source={require('../../assets/images/logros.jpg')} resizeMode="cover" style={styles.backgroundImage}>
            <SquareButton mtop='180%' mleft='7%' h='4%' w='25%' pressed={() => {navigation.navigate('Perfil')}}/>
        </ImageBackground>
    </View>
);
}

export default Logros;

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