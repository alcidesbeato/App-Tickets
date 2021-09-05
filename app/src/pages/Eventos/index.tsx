import React,{useState} from "react";
import {SafeAreaView, StyleSheet, View,Text, TouchableHighlight,TextInput } from "react-native";
import styled from "styled-components/native";
import { Wrapper, Heading, Corpo } from './styles';


const estilos = StyleSheet.create({
    conteiner:{
        padding: 15
    },

    display:{
        borderWidth: 1,
        borderRadius:10,
        padding:10,
        backgroundColor: "gray"
    }

});

const Eventos: React.FC = () => {
const [palavra1,setPalavra1] = useState(0)
const [palavra2,setPalavra2] = useState(0)
const [palavra3,setPalavra3] = useState(0)
const [palavra4,setPalavra4] = useState(0)
const [palavra5,setPalavra5] = useState(0)
const [palavra6,setPalavra6] = useState(0)

    return (
        <Wrapper>
            <Heading> Criar Eventos </Heading>

            <SafeAreaView style = {estilos.conteiner} >

            <Corpo> Nome evento: </Corpo>
            <TextInput
            style={estilos.display}
            value={String(palavra1)}
            onChangeText={(texto)=>{setPalavra1(texto)}}
            keyboardType='default'
            ></TextInput>
           
            <Corpo> Nome organizador:  </Corpo>
            <TextInput
            style={estilos.display}
            value={String(palavra1)}
            onChangeText={(texto)=>{setPalavra1(texto)}}
            keyboardType='default'
            ></TextInput>

            <Corpo> Categoria: </Corpo>
            <TextInput
            style={estilos.display}
            value={String(palavra1)}
            onChangeText={(texto)=>{setPalavra1(texto)}}
            keyboardType='default'
            ></TextInput>

            <Corpo> Local: </Corpo>
            <TextInput
            style={estilos.display}
            value={String(palavra1)}
            onChangeText={(texto)=>{setPalavra1(texto)}}
            keyboardType='default'
            ></TextInput>

            <Corpo> Data:  </Corpo>
            <TextInput
            style={estilos.display}
            value={String(palavra1)}
            onChangeText={(texto)=>{setPalavra1(texto)}}
            keyboardType='default'
            ></TextInput>

            <Corpo> Hora: </Corpo>
            <TextInput
            style={estilos.display}
            value={String(palavra1)}
            onChangeText={(texto)=>{setPalavra1(texto)}}
            keyboardType='default'
            ></TextInput>
            
         </SafeAreaView>
         </Wrapper>
    );
    
};

export default Eventos;