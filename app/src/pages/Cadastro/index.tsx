import React,{useState} from "react";
import {SafeAreaView, Button, Alert, StyleSheet, View,Text, TouchableHighlight,TextInput, FlatList, KeyboardAvoidingView } from "react-native";
import { Wrapper, Container, Main, Corpo } from './styles';
import { Platform } from "react-native";
import Topo from '../../components/Topo';
import Cabeçalho from '../../components/Cabeçalho';
import Titulo from '../../components/Titulo';
import { ScrollView } from "react-native-gesture-handler";

interface Item {
    key: string;
    render: () => JSX.Element;
    isTitle?: boolean;
  }

const estilos = StyleSheet.create({
  a:{
      flex: 1
  },
    sla:{
        padding: 15
    },

    display:{
        borderWidth: 1,
        borderRadius:10,
        padding:10,
        backgroundColor: "red"
    },
    bottom:{
      backgroundColor:'white',
      paddingTop:10,
      padding:10
    },

});

const Cadastro: React.FC = () => {
    
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
          render: () => <Cabeçalho>Criar Usuário</Cabeçalho>,
        },
  
        {
          key: 'Ingressos',
          render: () => <Titulo>cadastro</Titulo>,
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
            <ScrollView>
              
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
        
            <Corpo> Nome completo: </Corpo>
            <TextInput
            style={estilos.display}
            value={String(palavra1)}
            onChangeText={(texto)=>{setPalavra1(texto)}}
            keyboardType='default'
            ></TextInput>
           
            <Corpo> Email:  </Corpo>
            <TextInput
            style={estilos.display}
            value={String(palavra2)}
            onChangeText={(texto)=>{setPalavra2(texto)}}
            keyboardType='default'
            ></TextInput>

            <Corpo> Telefone: </Corpo>
            <TextInput
            style={estilos.display}
            value={String(palavra3)}
            onChangeText={(texto)=>{setPalavra3(texto)}}
            keyboardType='default'
            ></TextInput>

            <Corpo> Cpf: </Corpo>
            <TextInput
            style={estilos.display}
            value={String(palavra4)}
            onChangeText={(texto)=>{setPalavra4(texto)}}
            keyboardType='default'
            ></TextInput>

            <Corpo> Usuario:  </Corpo>
            <TextInput
            style={estilos.display}
            value={String(palavra5)}
            onChangeText={(texto)=>{setPalavra5(texto)}}
            keyboardType='default'
            ></TextInput>

            <Corpo> Senha: </Corpo>
            <TextInput
            style={estilos.display}
            value={String(palavra6)}
            onChangeText={(texto)=>{setPalavra6(texto)}}
            keyboardType='default'
            ></TextInput>

        <Button 
        color='red'
        title="Concluir cadastro usuário"
        onPress={() => Alert.alert('Cadastro usuário concluido com sucesso')}
        />

         </SafeAreaView>
         </ScrollView>
         </Container>
         </Wrapper>
    );
    
};

export default Cadastro;