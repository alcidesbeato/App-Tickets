import React,{useContext, useEffect} from "react";
import { Wrapper,  Heading, LoadingIcon } from "./styles";
import {  Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';


const Preload: React.FC = () => {

    const navigation = useNavigation();

    useEffect(()=>{
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token');
            if (token){
                
            }//if

            else {
                navigation.navigate('SignIn');

            }//else

        }//checktoken

        checkToken();
    }, []);
   
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