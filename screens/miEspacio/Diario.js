import { StyleSheet, View, ImageBackground, Pressable } from 'react-native';
import SquareButton from '../../components/Square-Button';

function Diario ({navigation}) {

  return(
    <View style={styles.container}>
        <ImageBackground source={require('../../assets/updateImages/diario.jpg')} resizeMode="cover" style={styles.backgroundImage}>
            <SquareButton mtop='177%' mleft='7%' h='4%' w='25%' pressed={() => {navigation.navigate('Perfil')}}/>
        </ImageBackground>
    </View>
);
}

export default Diario;

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