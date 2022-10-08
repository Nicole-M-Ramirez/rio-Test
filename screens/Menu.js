// // Un comentario por Rafael Arce 

// import { Pressable, StyleSheet, View, Text, ImageBackground} from 'react-native';
// import SquareButton from '../components/Square-Button';

// function Menu({navigation}) {

//     function pressHandler(page) {
//         navigation.navigate(page)
//     }

//     function pressHandlerAct () {
//         navigation.navigate('Actividades');
//     }

//     function pressHandlerPer () {
//         navigation.navigate('Perfil');
//     }

//     function pressHandlerComu () {
//         navigation.navigate('Comunidad');
//     }

//     function pressHandlerInfo () {
//         navigation.navigate('Informacion');
//     }

//     function pressHandlerConf () {
//         navigation.navigate('Configuracion');
//     }    

//   return (
//     // <View style={styles.root}>
//     //     <View style={styles.buttonDirection}>
//     //         <SquareButton title='Actividades' pressed={pressHandlerAct} color="#52ebde"/>
//     //         <SquareButton title='Perfil' pressed={pressHandlerPer} color="#2ca3de"/>
//     //         <SquareButton title='Comunidad' pressed={pressHandlerComu} color="#2a5dd4"/>
//     //         <SquareButton title='Informacion' pressed={pressHandlerInfo} color="#7c63ad"/>
//     //         <SquareButton title='Configuracion' pressed={pressHandlerConf} color="#e394df"/>
//     //     </View>
//     // </View>
//     <View style={styles.container}>
//         <ImageBackground source={require('../assets/images/menu.jpg')} resizeMode="cover" style={styles.backgroundImage}>
//             <Pressable style={styles.button} onPress={pressHandlerAct}>
//             </Pressable>
//             <Pressable style={styles.button} onPress={pressHandlerPer}>
//             </Pressable>
//         </ImageBackground>
//     </View>
//   )
// }

// export default Menu;

// const styles = StyleSheet.create({
//     root: {
//         backgroundColor: '#06314a',
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//         flexDirection: 'row',
//       },
//     buttonDirection: {
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//         flexDirection: 'row',
//         flexWrap: 'wrap'
//     },
// })

import { StyleSheet, View, ImageBackground, Pressable } from 'react-native';
import SquareButton from '../components/Square-Button';

function Menu ({navigation}) {

  return(
    <View style={styles.container}>
        <ImageBackground source={require('../assets/images/menu.jpg')} resizeMode="cover" style={styles.backgroundImage}>
            <SquareButton mtop='44%' mleft='7%' h='19%' w='87%' pressed={() => {navigation.navigate('Actividades')}}/>
            <SquareButton mtop='2%' mleft='7%' h='19%' w='42%' pressed={() => {navigation.navigate('PerfilPass')}}/>
            <SquareButton mtop='-41%' mleft='51%' h='19%' w='42%' pressed={() => {navigation.navigate('Comunidad')}}/>
            <SquareButton mtop='2%' mleft='7%' h='19%' w='42%' pressed={() => {navigation.navigate('Informacion')}}/>
            <SquareButton mtop='-40%' mleft='51%' h='19%' w='42%' pressed={() => {navigation.navigate('Configuracion')}}/>
        </ImageBackground>
    </View>
);
}

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
},
  backgroundImage: {
    flex: 1,
    //justifyContent: "center",
    //flexDirection: 'row',
  },
  flecD: {
    flexDirection: 'row'
  }
//   button: {
//     flexDirection: 'row',
//     marginTop: "95%",
//     //borderRadius: 8,
//     //padding: 6,
//     height: 89,
//     width: '42%',
//     justifyContent: 'center',
//     alignItems: 'center',
//     elevation: 5,
//     backgroundColor: 'pink', 
//     margin: 5
//   },
})