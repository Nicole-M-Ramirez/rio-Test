import { StyleSheet, View, ImageBackground, Pressable } from 'react-native';
import SquareButton from '../components/Square-Button';

function PerfilPass ({navigation}) {
  let num;
  let password = '';

  function pressHandler (num) {
    if(password.length < 5){
      password+= num
    }

    if(password.length === 5){
      console.log(password)
      password = ''
      navigation.navigate('Perfil');
    }
  }

  return(
    <View style={styles.container}>
        <ImageBackground source={require('../assets/updateImages/password.jpg')} resizeMode="cover" style={styles.backgroundImage}>
          <SquareButton mtop='88%' mleft='7.5%' h='9.5%' w='27%' pressed={()=>{ num = '1'; pressHandler('1')}}/>
          <SquareButton mtop='-21%' mleft='36%' h='9.5%' w='27%' pressed={()=>{num = '2'; pressHandler('2')}}/>
          <SquareButton mtop='-20%' mleft='65%' h='9.5%' w='27%' pressed={()=>{num = '3'; pressHandler('3')}}/>
          <SquareButton mtop='1%' mleft='8%' h='9.5%' w='27%' pressed={()=>{num = '4'; pressHandler('4')}}/>
          <SquareButton mtop='-21%' mleft='36%' h='9.5%' w='27%' pressed={()=>{num = '5'; pressHandler('5')}}/>
          <SquareButton mtop='-20%' mleft='65%' h='9.5%' w='27%' pressed={()=>{num = '6'; pressHandler('6')}}/>
          <SquareButton mtop='1%' mleft='8%' h='9.5%' w='27%' pressed={()=>{num = '7'; pressHandler('7')}}/>
          <SquareButton mtop='-21%' mleft='36%' h='9.5%' w='27%' pressed={()=>{num = '8'; pressHandler('8')}}/>
          <SquareButton mtop='-20%' mleft='65%' h='9.5%' w='27%' pressed={()=>{num = '9'; pressHandler('9')}}/>
          <SquareButton mtop='1%' mleft='36%' h='9.5%' w='27%' pressed={()=>{num = '0'; pressHandler('0')}}/>
        </ImageBackground>
    </View>
);
}

export default PerfilPass;

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