import { StyleSheet, View, ImageBackground, Pressable } from 'react-native';
import SquareButton from '../../components/Square-Button';

function ExpoExito ({navigation}) {

  return(
    <View style={styles.container}>
        <ImageBackground source={require('../../assets/updateImages/exportexito.jpg')} resizeMode="cover" style={styles.backgroundImage}>
            <SquareButton mtop='180%' mleft='-27%' h='4%' w='60%' pressed={() => {navigation.navigate('Perfil')}}/>
        </ImageBackground>
    </View>
);
}

export default ExpoExito;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
},
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
    flexDirection: 'row',
  },
})