// Un comentario por Rafael Arce 

import { Pressable, StyleSheet, View, Text} from 'react-native';
import SquareButton from '../components/Square-Button';

function Menu({navigation}) {

    function pressHandler(page) {
        navigation.navigate(page)
    }

    function pressHandlerAct () {
        navigation.navigate('Actividades');
    }

    function pressHandlerPer () {
        navigation.navigate('Perfil');
    }

    function pressHandlerComu () {
        navigation.navigate('Comunidad');
    }

    function pressHandlerInfo () {
        navigation.navigate('Informacion');
    }

    function pressHandlerConf () {
        navigation.navigate('Configuracion');
    }    

  return (
    <View style={styles.root}>
        <View style={styles.buttonDirection}>
            <SquareButton title='Actividades' pressed={pressHandlerAct} color="#52ebde"/>
            <SquareButton title='Perfil' pressed={pressHandlerPer} color="#2ca3de"/>
            <SquareButton title='Comunidad' pressed={pressHandlerComu} color="#2a5dd4"/>
            <SquareButton title='Informacion' pressed={pressHandlerInfo} color="#7c63ad"/>
            <SquareButton title='Configuracion' pressed={pressHandlerConf} color="#e394df"/>
        </View>
    </View>
  )
}

export default Menu;

const styles = StyleSheet.create({
    root: {
        backgroundColor: '#06314a',
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'row',
      },
    buttonDirection: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
})
