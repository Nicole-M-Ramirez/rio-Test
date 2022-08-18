import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';
import NavegacionMenu from '../components/navegacion-Menu';
function Menu () {

    const [configuracion, setConfiguracion] = useState(false);
    const [actividades, setActividades] = useState(false);
    const [comunidad, setComunidad] = useState(false);
    const [miPerfil, setMiPerfil] = useState(false);
    const [Informacion, setInformacion] = useState(false);

    let MenuOp = null;
    let screen = (
        <>
            <Text>Elige una opcion:</Text>
            <Button title='Configuracion' onPress={() => MenuOp="Configuracion"}/>
            {/* <Button title='Actividades' onPress={pressAct}/>
            <Button title='Comunidad' onPress={pressComun}/>
            <Button title='Mi Perfil' onPress={pressHandler}/>
            <Button title='Informacion' onPress={pressHandler}/> */}
            
        </>
    )
    function pressHandler() {
        console.log(MenuOp)
    }

    if(MenuOp === 'Configuracion'){
        setConfiguracion(true)
    }

    console.log(configuracion);


    return(
        <View>
            {screen}
        </View>
    );
}

export default Menu;