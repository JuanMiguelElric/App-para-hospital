import React from "react";
import { StyleSheet, TextInput, View,Text  } from "react-native";
import Email from "./email";
import Area from "./dropdown";
import InscrevaSe from "./button";


export default function Formulario () {
    const [Texti,onChangeText]= React.useState('');

    return(
        <View style={style.flexcontainer}>


            <Text style={style.Titulo}>Cadastro</Text>
            
            
            <TextInput 
            style={style.input}
            placeholder="Digite o nome do usuari"
            onChangeText={onChangeText}
            value={Texti}
            />


            <Email />
            <TextInput
            onChangeText={(value) => console.log(value)}
            placeholder="Digite uma Senha :"
            secureTextEntry={true}
            //we pass secure component to identify its password
            style={style.input} //give custom styles
            />
            <TextInput
            onChangeText={(value) => console.log(value)}
            placeholder="confirmar senha :"
            secureTextEntry={true}
            //we pass secure component to identify its password
            style={style.input} //give custom styles
            />
           
            <Area />
            <InscrevaSe />
            
        </View>

    );

};
 const style= StyleSheet.create({
     flexcontainer:{
         display:"flex",
         alignItems:"flex-center",
         paddingTop:50,
         marginLeft:20,
         
         
     },
     Titulo:{
        textAlign:'center',
        fontSize:40,

     },
    input:{
        width: 300,
        height:50,
        margin:12,
        padding:10,
        backgroundColor: "#8fBeBe",
        borderRadius: 17,
        paddingLeft:3,
    },
 });