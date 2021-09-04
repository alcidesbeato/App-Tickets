import React from "react";
import { Text } from "react-native";
import { Wrapper, Container, Main } from './styles';

const Inicio: React.FC = () => {
    return (
        <Wrapper>

            <Container>
                <Text style={{color :'white'}}> Inicio </Text>
                
                <Main/>

                
                
            </Container>
        </Wrapper>
    );
    
};

export default Inicio;