import React, { useState } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import estiloColecao from './estiloColecao';
import Lista from '../../components/Lista/Lista'
import { MaterialIcons } from '@expo/vector-icons';

function Colecao({ navigation}) {

    const [colecao, setColecao] = useState( [
            {
                id: '1',
                nome: 'Nissan Skyline GT-R R34',
                mercado: 'Compra online',
                raridade: 'Premium',
                foto: require('../../../assets/imagens/1.png'),
            },
            {
                id: '2',
                nome: 'Jurassic Jeep Wrangler',
                mercado: 'DLC Jurassic world',
                raridade: 'Premium',
                foto: require('../../../assets/imagens/2.jpg'),
            },
            {
                id: '3',
                nome: '70 Dodge Charger R/T',
                mercado: 'Compra online',
                raridade: 'Premium',
                foto: require('../../../assets/imagens/3.jpg'),
            }, 
            {
                id: '4',
                nome: 'DeLorean Time Machine',
                mercado: 'DLC Back to the future',
                raridade: 'Premium',
                foto: require('../../../assets/imagens/4.jpg'),
            },
            {
                id: '5',
                nome: '89 Batmobile',
                mercado: 'DLC DC Super Heroes',
                raridade: 'Premium',
                foto: require('../../../assets/imagens/5.jpg'),
            }   
    ]);

    const voltar = () => {
        navigation.navigate('Inicial')
    }
    
    return (
        <View style={estiloColecao.container}>
        
            <View style={estiloColecao.header}>
                <TouchableOpacity onPress={voltar}>
                    <MaterialIcons name="arrow-back" size={24} color="white" />
                </TouchableOpacity>
                <Text style={estiloColecao.texto}>Coleção</Text>
                <MaterialIcons name="add" size={24} color="white" />
            </View>

            <FlatList 
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                data={colecao}
                renderItem={ ({item}) => <Lista data={item}/> }
            />
       </View>
    )
}

export default Colecao;
