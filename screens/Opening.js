import { StyleSheet, Text, View, ImageBackground, Pressable} from 'react-native';
import {useState} from 'react'
import Menu from './Menu';

function Opening ({navigation}) {
    const image = { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPXR1uaV1p-F7ATBKHkc3j8qnuVrsuffOzOg&usqp=CAU" };

    function pressHandler () {
        //console.log("Comienzo")
        navigation.navigate("Menu");
    }
    

    return(
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.backgroundImage}>
            <Text style={styles.textContainer}>RIO</Text>
            <View>
                <Pressable style={styles.button} onPress={pressHandler}>
                    <Text style={styles.buttontext}>Start</Text>
                </Pressable>
            </View>
            {/* <View>
                //{screen}
            </View> */}
            </ImageBackground>
        </View>
    );
}

export default Opening;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    textContainer: {
        color: "#afc7cc",
        fontSize: 62,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 8,
        borderRadius: 8,
        marginHorizontal: 180,
        elevation: 3,
        backgroundColor: '#9aaeb3',
      },
      buttontext: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
      backgroundImage: {
        flex: 1,
        justifyContent: "center"
      },
  });