import { StyleSheet, View, Text, Pressable, ImageBackground } from 'react-native';

function Explicacion1 ({navigation}) {

    function siguiente() {
        navigation.navigate('Explicacion2')
    }

  return(
    <View style={styles.container}>
        <ImageBackground source={require('../../assets/updateImages/expli1.jpg')} resizeMode="cover" style={styles.backgroundImage}>
            <Pressable style={styles.button} onPress={siguiente}>
                <Text>continue</Text>
            </Pressable>
        </ImageBackground>
    </View>
);
}

export default Explicacion1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
},
  backgroundImage: {
    flex: 1,
    justifyContent: "center",
  },
  button: {
    marginLeft: '8%',
    marginTop: '167%',
    //borderRadius: 8,
    //padding: 6,
    height: 30,
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    margin: 60,
    backgroundColor: '#5fe8ca',
    borderRadius: 2.5
  }
})