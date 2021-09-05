import React,{useContext, useEffect} from "react";
import { Wrapper,  Heading, LoadingIcon } from "./styles";
import { Image } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { useNavigation } from "@react-navigation/native";

// use context
//use api

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

        </Wrapper>
    );

    


};
export default Preload;