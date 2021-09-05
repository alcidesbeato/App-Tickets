import React,{useContext, useEffect} from "react";
import { Wrapper,  Heading, LoadingIcon } from "./styles";
import {  Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Preload: React.FC = () => {
    return(
        <Wrapper>

            <Image
                source={require('../../images/logo.png')}
            />

            <LoadingIcon />

            <Heading> 
                Bem-vindo a Ticket
            </Heading>

        </Wrapper>
    );

};
export default Preload;