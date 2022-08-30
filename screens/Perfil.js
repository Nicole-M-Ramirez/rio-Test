import { StyleSheet, View, Text, Pressable } from 'react-native';

function Perfil () {
    return (
        <View
          style={styles.root}>
          <Text>Pagina de Perfil</Text>
        </View>
      )
}

export default Perfil;

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      }
})