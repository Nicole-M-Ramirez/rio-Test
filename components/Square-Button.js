import { StyleSheet, View, Text, Pressable } from 'react-native';

function SquareButton ({title, pressed, color}) {
    return(
        <Pressable style={[styles.button, , {backgroundColor: color}]} onPress={pressed}>
            <Text style={styles.buttonText}>{title}</Text>
        </Pressable>
    )
};

export default SquareButton;

const styles = StyleSheet.create({
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
        color: 'white',
        fontWeight: 'bold'
      },
})