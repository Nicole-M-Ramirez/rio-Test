
import { StyleSheet, Text, View } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Opening from './screens/Opening';
import Menu from './screens/Menu';
import Actividades from './screens/Actividades';
import Perfil from './screens/Perfil';
import Comunidad from './screens/Comunidad';
import Informacion from './screens/Informacion';
import Configuracion from './screens/Configuracion';

const Stack = createNativeStackNavigator();

export default function App() {
  
  return(
    <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Opening"
              component={Opening}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen 
              name='Menu'
              component={Menu}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen 
              name='Actividades'
              component={Actividades}
            />
            <Stack.Screen 
              name='Perfil'
              component={Perfil}
            />
            <Stack.Screen 
              name='Comunidad'
              component={Comunidad}
            />
            <Stack.Screen 
              name='Informacion'
              component={Informacion}
            />
            <Stack.Screen 
              name='Configuracion'
              component={Configuracion}
            />
          </Stack.Navigator>
        </NavigationContainer>
          {/* <Opening /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
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