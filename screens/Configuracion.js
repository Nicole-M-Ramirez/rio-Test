import { StyleSheet, View, Text, Pressable } from 'react-native';

function Configuracion () {
    return (
        <View
          style={styles.root}>
          <Text>Pantalla de Configuracion</Text>
        </View>
      )
}

export default Configuracion;

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }
})