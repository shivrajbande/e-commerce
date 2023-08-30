import { View } from 'react-native';
import React, { Component } from 'react';
import TopPart from '../Components/SignupComponent/topPart';
// import BottomPart from '../Components/SignupComponent/bottomPart';

const SignUpScreen = ({navigation}) => {
    return (
        <View className="flex-1 w-full pt-2">
        <TopPart navigation={navigation}/>
        </View>
        
        
    );
}

export default SignUpScreen;