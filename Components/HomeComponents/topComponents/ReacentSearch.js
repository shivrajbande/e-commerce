import { View, Text, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import React, { Component } from 'react';

const ReacentSearch = () => {
    return (
        <View className="bg-slate-100 ml-5 mt-8 mb-4">

        <Text className="text-2xl font-semibold mb-4">Recent Search</Text>
        <View className="flex-row  bg-white justify-evenly rounded-2xl h-28 w-90 mr-5  py-5">
            <View >
                <Image source={require("../../../assets/chair4.jpg")} className="h-20 w-24 rounded-xl"/>
            </View>
            <View>
                <Text className="font-semibold text-base text-black">Minimal Chair</Text>
                <Text className="text-opacity-50">Lorem ipsum</Text>
                <Text className="font-medium">$125.00</Text>
            </View>
            <View className="bg-black h-8 w-8 rounded-lg px-1 pt-1 mt-9">
                 <Ionicons
                 name='arrow-forward'
                 size={24}
                 color="white"
                
                 />
            </View>
        </View>
        <View className="flex-row  bg-white justify-evenly rounded-2xl h-28 w-90 mr-5  py-5 mt-5">
            <View >
                <Image source={require("../../../assets/chairrecent.jpg")} className="h-20 w-24 rounded-xl"/>
            </View>
            <View>
                <Text className="font-semibold text-base text-black">Minimal Chair</Text>
                <Text className="text-opacity-50">Lorem ipsum</Text>
                <Text className="font-medium">$190.00</Text>
            </View>
            <View className="bg-black h-8 w-8 rounded-lg px-1 pt-1 mt-9">
                 <Ionicons
                 name='arrow-forward'
                 size={24}
                 color="white"
                
                 />
            </View>
        </View>
        <View className="flex-row  bg-white justify-evenly rounded-2xl h-28 w-90 mr-5 mt-5 py-5">
            <View >
                <Image source={require("../../../assets/chairrecent2.jpg")} className="h-20 w-24 rounded-xl"/>
            </View>
            <View>
                <Text className="font-semibold text-base text-black">Minimal Chair</Text>
                <Text className="text-opacity-50">Lorem ipsum</Text>
                <Text className="font-medium">$110.00</Text>
            </View>
            <View className="bg-black h-8 w-8 rounded-lg px-1 pt-1 mt-9">
                 <Ionicons
                 name='arrow-forward'
                 size={24}
                 color="white"
                
                 />
            </View>
        </View>
    </View>
    );
}

export default ReacentSearch;