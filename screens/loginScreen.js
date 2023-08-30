import { View } from 'react-native';
import React, { Component } from 'react';
import TopPart from '../Components/LoginComponents/topPart';
import BottomPart from '../Components/LoginComponents/bottomPart';

const LoginScreen = ({navigation}) => {
    return (
        <View className="flex-1 w-full  justify-center">
        <TopPart/>
        <BottomPart navigation = {navigation}/>
        </View>
        
        
    );
}

export default LoginScreen;