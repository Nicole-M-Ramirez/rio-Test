import { StyleSheet, View, Text, Pressable } from 'react-native';

function Informacion () {
    return (
        <View
          style={styles.root}>
          <Text>Pagina de Informacion</Text>
        </View>
      )
}

export default Informacion;

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }
})