import { StyleSheet, View, ImageBackground, Pressable, Text } from 'react-native';
import SquareButton from '../../components/Square-Button';

function GraficaCircular ({navigation}) {

    function siguiente() {
        navigation.navigate('GraficaDeBarras')
    }

  return(
    <View style={styles.container}>
        <ImageBackground source={require('../../assets/updateImages/graficacircular.jpg')} resizeMode="cover" style={styles.backgroundImage}>
            <Pressable style={styles.button} onPress={siguiente}>
                <Text>barras</Text>
            </Pressable>
        </ImageBackground>
    </View>
);
}

export default GraficaCircular;

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
  button: {
    marginLeft: '62%',
    marginTop: '45%',
    //borderRadius: 8,
    //padding: 6,
    height: 35,
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    margin: 60,
    backgroundColor: '#5fe8ca',
    borderRadius: 2.5
  }
})