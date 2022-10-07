// import React from 'react';
// import { Text, View, StyleSheet } from 'react-native';

// function BaseTeorica() {
//   return (
//     <View style={styles.container}>
//       <Text>Feliz</Text>
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

import { StyleSheet, View, ImageBackground, Pressable } from 'react-native';

function Feliz ({navigation}) {

  return(
    <View style={styles.container}>
        <ImageBackground source={require('../../assets/images/feliz.jpg')} resizeMode="cover" style={styles.backgroundImage}>
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