import React, { Component, } from 'react';
import { View, Text } from 'react-native';
import TopPart from '../Components/WelcomeComponents/topPart';
import BottomPart from '../Components/WelcomeComponents/bottomPart';
const WelcomeScreen = ({navigation}) => {
    return (
        <View className="flex-1">
             <TopPart/>
            <BottomPart navigation = {navigation}/>
        </View>
    );
}

export default WelcomeScreen;