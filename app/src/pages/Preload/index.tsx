import React from "react";
import { Wrapper,  Heading, LoadingIcon } from "./styles";
import {  Button, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";



const Preload: React.FC = () => {
    
const navigation = useNavigation();

    return(
        <Wrapper>
            <Image
                source={require('../../images/logo.png')}
            />
            <LoadingIcon />
            <Heading> 
                Bem-vindo a Ticket
            </Heading>
        
        <Button 
        color='white'
        title="Clique aqui para entrar..."
        onPress={() => navigation.navigate('Inicio') }
        />
        </Wrapper>
    );

};
export default Preload;