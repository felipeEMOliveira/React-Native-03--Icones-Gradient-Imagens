import React, { useState } from 'react';
import { Text, View, Image } from 'react-native';
import estiloLista from './estiloLista';
import { LinearGradient } from 'expo-linear-gradient';


const Lista = ({data}) => {

    const [item, setItem] = useState(data);

    return (
        <View style={estiloLista.areaItens}>
            
            <LinearGradient colors={['#C1BBF5', '#D5D1F8', '#D5D1F8', '#C1BBF5']}>
                <Text style={estiloLista.itemNome}> {item.nome} </Text>
                <Text style={estiloLista.itemRaridade} > {item.raridade} </Text> 
                <Image 
                    style={estiloLista.itemFoto} 
                    source={item.foto} 
                    resizeMode='contain'
                />
            </LinearGradient>
        </View>
    );
}

export default Lista;