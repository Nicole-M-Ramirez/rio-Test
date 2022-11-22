import { StyleSheet, View, ImageBackground, Pressable } from 'react-native';
import SquareButton from '../../components/Square-Button';

function ProvocacionMol ({navigation}) {

  return(
    <View style={styles.container}>
        <ImageBackground source={require('../../assets/updateImages/provocacion.jpg')} resizeMode="cover" style={styles.backgroundImage}>
            <SquareButton mtop='86.5%' mleft='7%' h='4.5%' w='85%' pressed={() => {navigation.navigate('Molesto')}}/>
            <SquareButton mtop='0%' mleft='7%' h='4.5%' w='85%' pressed={() => {navigation.navigate('Molesto')}}/>
            <SquareButton mtop='1%' mleft='7%' h='4.5%' w='85%' pressed={() => {navigation.navigate('Molesto')}}/>
            <SquareButton mtop='1%' mleft='7%' h='4.5%' w='85%' pressed={() => {navigation.navigate('Molesto')}}/>
            <SquareButton mtop='1%' mleft='7%' h='4.5%' w='85%' pressed={() => {navigation.navigate('Molesto')}}/>
            <SquareButton mtop='1%' mleft='7%' h='4.5%' w='85%' pressed={() => {navigation.navigate('Molesto')}}/>
            <SquareButton mtop='28%' mleft='7%' h='4.5%' w='40%' pressed={() => {navigation.navigate('Actividades')}}/>
        </ImageBackground>
    </View>
);
}

export default ProvocacionMol;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
},
  backgroundImage: {
    flex: 1,
    //justifyContent: "center",
    //flexDirection: 'row',
  },
})