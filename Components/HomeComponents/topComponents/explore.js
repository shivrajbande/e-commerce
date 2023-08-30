import { View, Text, ScrollView } from 'react-native';
import React, { Component } from 'react';
import ScrollExploreItems from '../../HorizontalItems/ScrollExploreItems';

// import ScrollExploreItems from '../../HorizontalItems/ScrollExploreItems';
const Explore = ({navigation}) => {
    return (
    <ScrollView className="ml-5 mt-4 ">
        <Text className="text-2xl font-semibold mb-4">Explore</Text>
        <ScrollExploreItems navigation={navigation}/>
        
    </ScrollView>
    );
}

export default Explore;