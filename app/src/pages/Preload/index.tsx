import React from "react";
import { Wrapper,  Heading } from "./styles";
import { Image } from "react-native";
 
const Preload: React.FC = () => {
    return(
        <Wrapper>
            <Image
                source={require('../../images/logo.png')}
            />
            <Heading> 
                Bem-vindo a Ticket
            </Heading>
        </Wrapper>
    );

    


};
export default Preload;