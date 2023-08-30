import React, { Component } from 'react';
import { ScrollView, Text,View } from 'react-native';
import BottomBar from "../Components/HomeComponents/bottomComponents/bottomBar";
import TopBar from "../Components/HomeComponents/topComponents/topPart"
const HomeScreen = ({navigation}) => {
    return (
        <ScrollView>
            <TopBar navigation = {navigation}/>
            <BottomBar/>
        </ScrollView>
    );
}

export default HomeScreen;