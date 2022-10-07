//Buscar componentes prehechos para el app
//cobol


import { StyleSheet, Text, View } from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Opening from './screens/Opening';
import Idioma from './screens/Idioma';
import Politica from './screens/Politica';
import BaseTeorica from './screens/BaseTeorica';
import Menu from './screens/Menu';
import Actividades from './screens/Actividades';
import Perfil from './screens/Perfil';
import Comunidad from './screens/Comunidad';
import Informacion from './screens/Informacion';
import Configuracion from './screens/Configuracion';

import Feliz from './screens/emociones/Feliz';
import Ansioso from './screens/emociones/Ansioso';
import Confundido from './screens/emociones/Confundido';
import Triste from './screens/emociones/Triste';
import Molesto from './screens/emociones/Molesto';
import Asustado from './screens/emociones/Asustado';

const Stack = createNativeStackNavigator();

export default function App() {
  
  return(
    <View style={styles.container}>
        <NavigationContainer>
          <Stack.Navigator>
            {/* <Stack.Screen
              name="Opening"
              component={Opening}
              options={{
                headerShown: false,
              }}
            /> */}
            <Stack.Screen 
              name='Idioma'
              component={Idioma}
              options={{
                headerTitle: "",
                headerShown: false,
              }}
            />
            <Stack.Screen 
              name='Politica'
              component={Politica}
              options={{
                headerTitle: "",
                headerShown: false,
              }}
            />
            <Stack.Screen 
              name='Teoria'
              component={BaseTeorica}
              options={{
                headerTitle: "",
                headerShown: false,
              }}
            />
            <Stack.Screen 
              name='Menu'
              component={Menu}
              options={{
                headerTitle: "",
                headerShown: false,
                
              }}
            />
            <Stack.Screen 
              name='Actividades'
              component={Actividades}
              options={{
                headerTitle:"",
                headerTransparent: true,
                headerTintColor: '#24e3c6',

              }}
            />
            <Stack.Screen 
              name='Feliz'
              component={Feliz}
              options={{
                headerTitle:"",
                headerTransparent: true,
                headerTintColor: '#24e3c6',
              }} 
            />
            <Stack.Screen 
              name='Ansioso'
              component={Ansioso}
              options={{
                headerTitle:"",
                headerTransparent: true,
                headerTintColor: '#24e3c6',
              }} 
            />
            <Stack.Screen 
              name='Confundido'
              component={Confundido}
              options={{
                headerTitle:"",
                headerTransparent: true,
                headerTintColor: '#24e3c6',
              }} 
            />
            <Stack.Screen 
              name='Triste'
              component={Triste}
              options={{
                headerTitle:"",
                headerTransparent: true,
                headerTintColor: '#24e3c6',
              }} 
            />
            <Stack.Screen 
              name='Molesto'
              component={Molesto}
              options={{
                headerTitle:"",
                headerTransparent: true,
                headerTintColor: '#24e3c6',
              }} 
            />
            <Stack.Screen 
              name='Asustado'
              component={Asustado}
              options={{
                headerTitle:"",
                headerTransparent: true,
                headerTintColor: '#24e3c6',
              }} 
            />
            <Stack.Screen 
              name='Perfil'
              component={Perfil}
              options={{
                headerTitle:"",
                headerTransparent: true,
                headerTintColor: '#24e3c6'
              }}
            />
            <Stack.Screen 
              name='Comunidad'
              component={Comunidad}
              options={{
                headerTitle:"",
                headerTransparent: true,
                headerTintColor: '#24e3c6'
              }}
            />
            <Stack.Screen 
              name='Informacion'
              component={Informacion}
              options={{
                headerTitle:"",
                headerTransparent: true,
                headerTintColor: '#24e3c6'
              }}
            />
            <Stack.Screen 
              name='Configuracion'
              component={Configuracion}
              options={{
                headerTitle:"",
                headerTransparent: true,
                headerTintColor: '#24e3c6'
              }}
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