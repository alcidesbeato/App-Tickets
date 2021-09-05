import React,{useState} from "react";
import {SafeAreaView, StyleSheet, View,Text, TouchableHighlight,TextInput, FlatList } from "react-native";
import styled from "styled-components/native";
import { Wrapper, Container, Main, Corpo } from './styles';

import Topo from '../../components/Topo';
import Cabeçalho from '../../components/Cabeçalho';
import Titulo from '../../components/Titulo';

interface Item {
    key: string;
    render: () => JSX.Element;
    isTitle?: boolean;
  }

const estilos = StyleSheet.create({
    sla:{
        padding: 15
    },

    display:{
        borderWidth: 1,
        borderRadius:10,
        padding:10,
        backgroundColor: "gray"
    },
    bottom:{
      backgroundColor:'white',
      paddingTop:10,
      padding:15
    },

});

const Eventos: React.FC = () => {
    
const [palavra1,setPalavra1] = useState(0)
const [palavra2,setPalavra2] = useState(0)
const [palavra3,setPalavra3] = useState(0)
const [palavra4,setPalavra4] = useState(0)
const [palavra5,setPalavra5] = useState(0)
const [palavra6,setPalavra6] = useState(0)

const { data, indices } = React.useMemo(() => {
    const items: Item[] = [
        {
          key: 'Cabeçalho',
          render: () => <Cabeçalho>Criar Evento</Cabeçalho>,
        },
  
        {
          key: 'Ingressos',
          render: () => <Titulo>Meus Ingressos</Titulo>,
          isTitle: true,
        },  
      ];
  
      const indices: number[] = [];
  
      items.forEach((item, index) => item.isTitle && indices.push(index));
  
      return {
        data: items,
        indices,
      };
    }, []);

    return (
        <Wrapper>
            <Container>
                <Topo />
            
            <Main>
            <FlatList<Item>
            data={data}
            renderItem={({ item }) => item.render()}
            keyExtractor={(item) => item.key}
            stickyHeaderIndices={indices}
            // Refresh Effect
            onRefresh={() => {}}
            refreshing={false}
            />
            </Main>

            <SafeAreaView style = {estilos.sla} >

            
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
            value={String(palavra2)}
            onChangeText={(texto)=>{setPalavra2(texto)}}
            keyboardType='default'
            ></TextInput>

            <Corpo> Categoria: </Corpo>
            <TextInput
            style={estilos.display}
            value={String(palavra3)}
            onChangeText={(texto)=>{setPalavra3(texto)}}
            keyboardType='default'
            ></TextInput>

            <Corpo> Local: </Corpo>
            <TextInput
            style={estilos.display}
            value={String(palavra4)}
            onChangeText={(texto)=>{setPalavra4(texto)}}
            keyboardType='default'
            ></TextInput>

            <Corpo> Data:  </Corpo>
            <TextInput
            style={estilos.display}
            value={String(palavra5)}
            onChangeText={(texto)=>{setPalavra5(texto)}}
            keyboardType='default'
            ></TextInput>

            <Corpo> Hora: </Corpo>
            <TextInput
            style={estilos.display}
            value={String(palavra6)}
            onChangeText={(texto)=>{setPalavra6(texto)}}
            keyboardType='default'
            ></TextInput>

        <TouchableHighlight style={estilos.bottom}> 
        <Text>Concluir</Text>
        </TouchableHighlight>


         </SafeAreaView>

         </Container>
         </Wrapper>
    );
    
};

export default Eventos;