import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert, ImageBackground} from 'react-native';
import estiloLogin from './estiloLogin';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { Entypo } from '@expo/vector-icons';

function Login({ navigation }) {

    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');

    const entrar = () => {
        if (login == '' || senha == '') {
            Alert.alert(
              'Preencimento obrigatório',
              'Informe o login e a senha!',
              [
                { text: 'OK' },
              ],
            );
        } else {

            navigation.replace('Inicial');
        }
    }

    return (
        <View style={estiloLogin.container}>

                <ImageBackground source={require('../../../assets/imagens/vaporwave.jpg')} style={estiloLogin.fundo}>


                <View style={estiloLogin.LogoContainer}>
                    <LinearGradient colors={['#FF00CC', '#FE67E0', '#F8F8F8']} style={estiloLogin.logo}>
                        <Entypo name="game-controller" size={50} color="white" />
                    </LinearGradient>
                </View>

                <View style={estiloLogin.campoContainer}>
                <MaterialIcons name="person" size={24} color="white" />
                <TextInput
                    style={estiloLogin.campo}
                    placeholder="Login"
                    placeholderTextColor="white"
                    onChangeText={login => setLogin(login)}
                    value={login}
                />
                </View>

                <View style={estiloLogin.campoContainer}>
                <MaterialIcons name="vpn-key" size={24} color="white" />
                <TextInput
                    style={estiloLogin.campo}
                    placeholder="Senha"
                    placeholderTextColor="white" 
                    onChangeText={senha => setSenha(senha)}
                    value={senha}
                />
                </View>

                <TouchableOpacity onPress={entrar}>
                    <LinearGradient colors={['#FF00CC', '#FE67E0', '#F8F8F8']} style={estiloLogin.botaoLinearGradient}>
                        <Feather name="send" size={24} color="white" />
                       <Text style={estiloLogin.botaoTexto}>Entrar</Text>
                    </LinearGradient>
                </TouchableOpacity>
                </ImageBackground>
            </View>
    )
}

export default Login;
