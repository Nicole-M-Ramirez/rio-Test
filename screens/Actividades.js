import { StyleSheet, View} from 'react-native';
import SquareButton from '../components/Square-Button';

function Actividades () {
    function pressHandler() {
      console.log('pressed');
    }

    return (
      <View style={styles.root}>
      <View style={styles.buttonDirection}>
          <SquareButton title='felicidad' pressed={pressHandler} color="#52ebde"/>
          <SquareButton title='Indiferencia' pressed={pressHandler} color="#2ca3de"/>
          <SquareButton title='Coraje' pressed={pressHandler} color="#2a5dd4"/>
          <SquareButton title='Tristesa' pressed={pressHandler} color="#7c63ad"/>
          <SquareButton title='Miedo' pressed={pressHandler} color="#e394df"/>
          <SquareButton title='Ansiedad' pressed={pressHandler} color="#d60d46"/>
      </View>
  </View>
      )
}

export default Actividades;

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