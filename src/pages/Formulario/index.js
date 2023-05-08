import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import{ useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup';




const schema= yup.object({
    username: yup.string().required("Informe seu nome"),
    email: yup.string().email("Email Invalido").required("Informe seu email"),
    password: yup.string().min(6, "A senha deve conter, no minimo, 6 digitos").required("Digite a senha")
})




export default function Formulario(){
   const {control, handleSubmit, formState: {errors}} =useForm({resolver: yupResolver(schema)})




   
   




    function handleSignIn(data){
        console.log(data); //pega os dados e vao ser impressos no terminal
    }




    return(
        <View style={styles.container}>
            <Text style={styles.title}> Bem Vindo (a)</Text>
            <Controller
            control={control}
            name="username"
            render={({field:{onChange, onBlur, value}}) => (
                <TextInput
                style={[
                styles.input,{
                    borderWidth: errors.username && 1,
                    borderColor: errors.username && '#ff375b'
                }]}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                placeholder="Nome completo"
                />
            )}
            />
            {errors.username && <Text style={styles.labelError}>{errors.username?.message}</Text>}




            <Controller
            control={control}
            name="email"
            render={({field:{onChange, onBlur, value}}) => (
                <TextInput
                style={[
                styles.input,{
                    borderWidth: errors.email && 1,
                    borderColor: errors.email && '#ff375b'
                }]}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                placeholder="Digite seu email"
                />
            )}
            />
            {errors.email && <Text style={styles.labelError}>{errors.email?.message}</Text>}




            <Controller
            control={control}
            name="password"
            render={({field:{onChange, onBlur, value}}) => (
                <TextInput
                style={[
                styles.input,{
                    borderWidth: errors.password && 1,
                    borderColor: errors.password && '#ff375b'
                }]}
                onChangeText={onChange}
                onBlur={onBlur}
                value={value}
                placeholder="Digite sua senha"
                secureTextEntry={true}
                />
            )}
            />
            {errors.password && <Text style={styles.labelError}>{errors.password?.message}</Text>}
           
            <TouchableOpacity style={styles.button} onPress={handleSubmit(handleSignIn)}>
                <Text style={styles.buttonText}> Acessar </Text>
            </TouchableOpacity>




        </View>
    );
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f0faff',
        paddingHorizontal: 18
    },
    title:{
        fontSize: 34,
        marginBottom: 34,
        color: '#121212',
        fontWeight: 'bold'
    },
    input:{
        width: '100%',
        height: 40,
        backgroundColor: '#fff',
        paddingHorizontal: 8,
        marginBottom: 8,
        borderRadius: 4,
        color: '#121212'
    },
    button:{
        width:'100%',
        height: 40,
        backgroundColor: '#14c38e',
        borderRadius:4,    
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText:{
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },
    labelError:{
        alignSelf: 'flex-start',
        color:'#ff375b',
        marginBottom: 8,
    }




})
