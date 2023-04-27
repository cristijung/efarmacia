import React from "react";
import { Dimensions, Image, StyleSheet, Text } from "react-native";
import topo from '../../assets/farmacia.png';

//se quiser colocar, para o caso da imagem não ter o tamanho adequado
//neste projeto a img tem, mas usei o Dimensions para obter o tamanho da tela
//do dispositivo
const width = Dimensions.get('screen').width;

export default function Cesta() {
    return (
        <>
        <Image source={topo} style={estilos.topo}/>
        <Text>Detalhes da Cesta de compras</Text>
        </>
    )
    
}

const estilos = StyleSheet.create({
    topo: {
        width: "100%",
        height: 390 / 768 * width,

    }
})