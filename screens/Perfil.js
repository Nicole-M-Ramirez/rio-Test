import { StyleSheet, View, Text, Pressable, ImageBackground } from 'react-native';

function Perfil () {
  return(
    <View style={styles.container}>
        <ImageBackground source={require('../assets/images/IMG_1289.jpg')} resizeMode="cover" style={styles.backgroundImage}>
          <Text style={styles.textContainer}>RIO</Text>
        </ImageBackground>
    </View>
);
}

export default Perfil;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
},
textContainer: {
    color: "#afc7cc",
    fontSize: 62,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
},
  backgroundImage: {
    flex: 1,
    justifyContent: "center"
  },
})