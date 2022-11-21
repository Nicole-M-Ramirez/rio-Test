import { StyleSheet, View, ImageBackground, Pressable, Text } from 'react-native';
import SquareButton from '../../components/Square-Button';

function GraficaDeBarras ({navigation}) {

    function siguiente() {
        navigation.navigate('GraficaCircular')
    }

  return(
    <View style={styles.container}>
        <ImageBackground source={require('../../assets/updateImages/graficadebarras.jpg')} resizeMode="cover" style={styles.backgroundImage}>
            <Pressable style={styles.button} onPress={siguiente}>
                <Text>circular</Text>
            </Pressable>
        </ImageBackground>
    </View>
);
}

export default GraficaDeBarras;

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