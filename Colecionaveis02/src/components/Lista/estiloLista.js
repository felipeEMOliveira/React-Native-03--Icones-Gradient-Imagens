import { StyleSheet } from 'react-native';

const estiloLista = StyleSheet.create({
    areaItens: {
        backgroundColor: '#92afd7',
        flex: 1,
    },
    itemNome: {
        height: 40,
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
        paddingTop: 15,
    },  
    itemRaridade: {
        fontSize: 16,
        textAlign: 'center',
    },
    itemFoto: {
        height: 100,
        marginTop: 20,
        marginBottom: 35,
    },  
});

export default estiloLista;