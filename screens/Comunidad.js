import { StyleSheet, View, Text, Pressable } from 'react-native';

function Comunidad () {
    return (
        <View
          style={styles.root}>
          <Text>Pagina de Comunidad</Text>
        </View>
      )
}

export default Comunidad;

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }
})