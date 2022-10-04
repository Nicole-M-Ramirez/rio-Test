import { StyleSheet, View, Text, Pressable } from 'react-native';

function Comunidad () {
    return (
        <View
          style={styles.root}>
          <Text>Pagina de Comunidad</Text>
          <Pressable style={[styles.button, , {backgroundColor: '#688dab'}]} onPress={console.log('pressed')}>
            <Text style={styles.buttonText}>Boton</Text>
          </Pressable>
        </View>
      )
}

export default Comunidad;

const styles = StyleSheet.create({
    root: {
        backgroundColor: '#1a66a3',
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      },
      button: {
        //borderRadius: 8,
        //padding: 6,
        height: 150,
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
        backgroundColor: 'pink', 
        margin: 5
      },
      buttonText: {
        marginTop: 110,
        marginRight: 60,
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold'
      },
})