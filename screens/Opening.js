import { StyleSheet, Text, View, Button, Alert} from 'react-native';
import {useState} from 'react'
import Menu from './Menu';

function Opening () {
    const [menu, setMenu] = useState(false);
    let screen = null;
    
    function pressHandler() {
        setMenu(!menu)
    }

    console.log(menu)

    if(menu === true){
        screen = <Menu />
    }
    

    return(
        <View>
            <Text style={styles.textContainer}>RIO: Opening Sequece</Text>
            <View>
                <Button 
                    title='Start' 
                    accessibilityLabel="Start App"
                    onPress={pressHandler}
                />
            </View>
            <View>
                {screen}
            </View>
        </View>
    );
}

export default Opening;

const styles = StyleSheet.create({
    textContainer: {
      fontSize: 24,
    }
  });