import { StyleSheet, View, ImageBackground, Pressable } from 'react-native';

function Idioma ({navigation}) {
  function pressHandler(){
    navigation.navigate('Politica')
  }


  return(
    <View style={styles.container}>
        <ImageBackground source={require('../assets/images/languageScreen.jpg')} resizeMode="cover" style={styles.backgroundImage}>
            <Pressable style={styles.button} onPress={pressHandler}>
            </Pressable>
            <Pressable style={styles.button} onPress={pressHandler}>
            </Pressable>
        </ImageBackground>
    </View>
);
}

export default Idioma;

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
    marginTop: "95%",
    //borderRadius: 8,
    //padding: 6,
    height: 89,
    width: '42%',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    backgroundColor: 'pink', 
    margin: 5
  },
})