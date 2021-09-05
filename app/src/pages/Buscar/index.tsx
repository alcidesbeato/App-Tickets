import React,{useState} from "react";
import {SafeAreaView, Button, Alert, StyleSheet, View,TextInput, FlatList } from "react-native";
import { Wrapper, Container, Main, Corpo } from './styles';
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
    buttom:{
      backgroundColor:'white',
      paddingTop:10,
      padding:10
    },
    area: {
      flexDirection: 'row',
      alignItems: 'center',
    },

});

const Eventos: React.FC = () => {
const [searchText1, setSearchText1] = useState('');
const [searchText2, setSearchText2] = useState('');
const [searchText3, setSearchText3] = useState('');
const [searchText4, setSearchText4] = useState('');
const [searchText5, setSearchText5] = useState('');
const [searchText6, setSearchText6] = useState('');



const { data, indices } = React.useMemo(() => {
    const items: Item[] = [
        {
          key: 'Cabeçalho',
          render: () => <Cabeçalho>Criar Evento</Cabeçalho>,
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
        
            <Corpo> Nome evento: </Corpo>
            <View style={estilos.area}>
              <TextInput
              style={estilos.display}
              placeholder="Digite nome do evento:"
              placeholderTextColor="#888"
              value={searchText1}
              onChangeText={(t) => setSearchText1(t)} />
            </View>
           
            <Corpo> Nome organizador:  </Corpo>
            <View style={estilos.area}>
              <TextInput
                style={estilos.display}
                placeholder="Digite nome do organizador:"
                placeholderTextColor="#888"
                value={searchText2}
                onChangeText={(t) => setSearchText2(t)} />
            </View>

            <Corpo> Categoria: </Corpo>
            <View style={estilos.area}>
              <TextInput
                style={estilos.display}
                placeholder="Digite a categoria:"
                placeholderTextColor="#888"
                value={searchText3}
                onChangeText={(t) => setSearchText3(t)} />
            </View>

            <Corpo> Local: </Corpo>
            <View style={estilos.area}>
              <TextInput
                style={estilos.display}
                placeholder="Digite o local:"
                placeholderTextColor="#888"
                value={searchText4}
                onChangeText={(t) => setSearchText4(t)} />
            </View>

            <Corpo> Data:  </Corpo>
            <View style={estilos.area}>
              <TextInput
                style={estilos.display}
                placeholder="Digite a data:"
                placeholderTextColor="#888"
                value={searchText5}
                onChangeText={(t) => setSearchText5(t)} />
            </View>

            <Corpo> Hora: </Corpo>
            <View style={estilos.area}>
              <TextInput
                style={estilos.display}
                placeholder="Digite a hora:"
                placeholderTextColor="#888"
                value={searchText6}
                onChangeText={(t) => setSearchText6(t)} />
               </View>

        <Button 
        color='red'
        title="Concluir cadastro evento"
        onPress={() => Alert.alert('Cadastro evento concluido com sucesso')}
        />

         </SafeAreaView>
         </ScrollView>
         </Container>
         </Wrapper>
    );
    
};

export default Eventos;