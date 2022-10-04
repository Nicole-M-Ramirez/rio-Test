import { StyleSheet, View, Text, Pressable, ImageBackground } from 'react-native';

function Politica ({navigation}) {
    function noAcepto() {
        navigation.navigate('Idioma')
    }

    function acepto() {
        navigation.navigate('Teoria')
    }
  return(
    <View style={styles.container}>
        <ImageBackground source={require('../assets/images/politicaScreen.jpg')} resizeMode="cover" style={styles.backgroundImage}>
            <Pressable style={styles.button} onPress={noAcepto}>
            </Pressable>
            <Pressable style={styles.button} onPress={acepto}>
            </Pressable>
        </ImageBackground>
    </View>
);
}

export default Politica;

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
  button: {
    marginTop: 740,
    //borderRadius: 8,
    //padding: 6,
    height: 50,
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    margin: 60
  }
})