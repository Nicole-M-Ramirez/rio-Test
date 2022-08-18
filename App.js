import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import Opening from './screens/Opening';
import Menu from './screens/Menu';
import { useState } from 'react';

export default function App() {
  /*Hice lapantalla de Start y el Menu de esta manera porque supongo yo que al usuario no tiene que regresar a la pantalla de Start, por lo 
  que es una pantalla que se muestra la 1 vez cada que se abre la aplicacion. De lo contrario se imprementaria Navegation */

  const [menu, setMenu] = useState(false); //Define que solo se abre el menu cuando se da al boton de Start
  const [start, setStart] = useState(true);//Para que la pantalla de Start solo se vea una vez(cuando tocas el boton, ya no se puede accesar)

  //Por default, la primera pantalla es el opening con el boton de Start
  let screen = (
    <>
      <Text style={styles.textContainer}>RIO: Opening Sequence</Text>
      <Button 
        title='Start' 
        accessibilityLabel="Start App"
        onPress={pressHandler}
      />
    </>
  );
  
  //Cuando el boton de start se presiona, los valores de de menu y start cambian al opuesto
  function pressHandler() {
      setMenu(!menu);
      setStart(!start);
  }

  //Cuando menu sea cierto, se muestra la pantalla
  if(menu === true){
      screen = <Menu />
  }

  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.container}>
        {screen}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    fontSize: 24,
  }
});

{/* 
<Text style={styles.textContainer}>RIO: Opening Sequece</Text>
<View>
  <Button 
    title='Start' 
    accessibilityLabel="Start App"
    onPress={pressHandler}
    />
  </View> 
*/}