import { View, Text,Image, ScrollView } from 'react-native';
import React, { Component } from 'react';
import ExploreUtility from './ExploreUtitlity';
import Data from "./exploreItems"
const ScrollExploreItems = ({navigation}) => {

    const items = ()=>{
        return Data.map((e)=>{
            //each child should have a unique key
            return <ExploreUtility data = {e} navigation = {navigation} key={e["itemID"]}/>
        })  
    }


    return (
        <ScrollView horizontal={true} className="" >
            {items()}
        </ScrollView>
    );
}

export default ScrollExploreItems;