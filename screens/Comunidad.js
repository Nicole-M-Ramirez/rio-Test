import { StyleSheet, View, ImageBackground, Pressable } from 'react-native';

function Feliz ({navigation}) {

  return(
    <View style={styles.container}>
        <ImageBackground source={require('../assets/updateImages/comunidad.jpg')} resizeMode="cover" style={styles.backgroundImage}>
        </ImageBackground>
    </View>
);
}

export default Feliz;

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