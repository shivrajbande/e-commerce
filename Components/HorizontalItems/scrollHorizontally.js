import { View, Text,Image, ScrollView } from 'react-native';
import React, { Component } from 'react';
import Utility from '../DisplayItemsComponent/Utility'
import Data from "./itemsHorizontalView"
const ScrollHorizontally = () => {

    const items = ()=>{
        return Data.map((e)=>{
            //each child should have a unique key
            return <Utility data = {e}/>
        })  
    }


    return (
        <ScrollView horizontal={true}>
            {items()}
        </ScrollView>
    );
}

export default ScrollHorizontally;