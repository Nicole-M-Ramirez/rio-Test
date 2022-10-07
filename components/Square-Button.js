import { StyleSheet, View, Text, Pressable } from 'react-native';

function SquareButton ({ pressed, mtop, mleft, h, w}) {
    return(
        <Pressable 
          style={[styles.button,  {marginTop: mtop, 
                                   marginLeft: mleft,
                                   height: h,
                                   width: w
          }]} onPress={pressed}
        >
        </Pressable>
    )
};

export default SquareButton;

const styles = StyleSheet.create({
      button: {
        //borderRadius: 8,
        //padding: 6,
        marginTop: '0%',
        marginLeft: '0%',
        height: '0%',
        width: '0%',
        //justifyContent: 'center',
        //alignItems: 'center',
        //elevation: 5,
        //backgroundColor: 'pink', 
        //margin: 0
      }
})