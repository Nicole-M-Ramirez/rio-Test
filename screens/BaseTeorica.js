// import React from 'react';
// import { Text, View, StyleSheet } from 'react-native';

// function BaseTeorica() {
//   return (
//     <View style={styles.container}>
//       <Text>Hello, world!</Text>
//     </View>
//   )
// }
// export default BaseTeorica;

// const styles = StyleSheet.create({
//     container:{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center"
//     }
// })

import { StyleSheet, View, Text, Pressable, ImageBackground } from 'react-native';

function BaseTeorica ({navigation}) {

    function siguiente() {
        navigation.navigate('Menu')
    }
  return(
    <View style={styles.container}>
        <ImageBackground source={require('../assets/images/baseteoricaScreen.jpg')} resizeMode="cover" style={styles.backgroundImage}>
            <Pressable style={styles.button} onPress={siguiente}>
            </Pressable>
        </ImageBackground>
    </View>
);
}

export default BaseTeorica;

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
    marginLeft: 300,
    marginTop: 665,
    //borderRadius: 8,
    //padding: 6,
    height: 30,
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    margin: 60,
    //backgroundColor: 'pink'
  }
})