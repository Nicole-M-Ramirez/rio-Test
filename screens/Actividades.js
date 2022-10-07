// import { StyleSheet, View} from 'react-native';
// import SquareButton from '../components/Square-Button';

// function Actividades () {
//     function pressHandler() {
//       console.log('pressed');
//     }

//     return (
//       <View style={styles.root}>
//       <View style={styles.buttonDirection}>
//           <SquareButton title='felicidad' pressed={pressHandler} color="#52ebde"/>
//           <SquareButton title='Indiferencia' pressed={pressHandler} color="#2ca3de"/>
//           <SquareButton title='Coraje' pressed={pressHandler} color="#2a5dd4"/>
//           <SquareButton title='Tristesa' pressed={pressHandler} color="#7c63ad"/>
//           <SquareButton title='Miedo' pressed={pressHandler} color="#e394df"/>
//           <SquareButton title='Ansiedad' pressed={pressHandler} color="#d60d46"/>
//       </View>
//   </View>
//       )
// }

// export default Actividades;

// const styles = StyleSheet.create({
//   root: {
//       backgroundColor: '#06314a',
//       flex: 1,
//       justifyContent: "center",
//       alignItems: "center",
//       flexDirection: 'row',
//     },
//   buttonDirection: {
//       flex: 1,
//       justifyContent: "center",
//       alignItems: "center",
//       flexDirection: 'row',
//       flexWrap: 'wrap'
//   },
// })

import { StyleSheet, View, ImageBackground, Pressable } from 'react-native';
import SquareButton from '../components/Square-Button';

function Actividades ({navigation}) {
  let page = ''
  function pressHandlerF(){
    navigation.navigate('Feliz')
  }

  function pressHandlerAn(){
    navigation.navigate('Ansioso')
  }

  function pressHandlerC(){
    navigation.navigate('Confundido')
  }

  function pressHandlerT(){
    navigation.navigate('Triste')
  }

  function pressHandlerM(){
    navigation.navigate('Molesto')
  }

  function pressHandlerAs(){
    navigation.navigate('Asustado')
  }

  return(
    <View style={styles.container}>
        <ImageBackground source={require('../assets/images/emociones.jpg')} resizeMode="cover" style={styles.backgroundImage}>
          <SquareButton mtop='45%' mleft='7%' h='19%' w='42%' pressed={pressHandlerF}/>
          <SquareButton mtop='-41%' mleft='51%' h='19%' w='42%' pressed={pressHandlerAn}/>
          <SquareButton mtop='2%' mleft='7%' h='19%' w='42%' pressed={pressHandlerC}/>
          <SquareButton mtop='-41%' mleft='51%' h='19%' w='42%' pressed={pressHandlerT}/>
          <SquareButton mtop='2%' mleft='7%' h='19%' w='42%' pressed={pressHandlerM}/>
          <SquareButton mtop='-41%' mleft='51%' h='19%' w='42%' pressed={pressHandlerAs}/>
        </ImageBackground>
    </View>
);
}

export default Actividades;

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
  // button: {
  //   marginTop: "95%",
  //   //borderRadius: 8,
  //   //padding: 6,
  //   height: 89,
  //   width: '42%',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   elevation: 5,
  //   backgroundColor: 'pink', 
  //   margin: 5
  // },
})