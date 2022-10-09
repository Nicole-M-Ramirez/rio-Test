import { StyleSheet, View, ImageBackground, Pressable } from 'react-native';

function Calendario ({navigation}) {

  return(
    <View style={styles.container}>
        <ImageBackground source={require('../../assets/images/calendario.jpg')} resizeMode="cover" style={styles.backgroundImage}>
        </ImageBackground>
    </View>
);
}

export default Calendario;

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