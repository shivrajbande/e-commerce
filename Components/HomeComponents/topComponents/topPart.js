import { ScrollView, Text,View } from 'react-native';
import React from 'react';
import Explore from './explore';
import SearchBar from "./searchBar"
import Advertise from './Advertise';
import ReacentSearch from './ReacentSearch';
const TopPart = ({navigation}) => {
    return (
        <ScrollView className="bg-slate-100 pt-7">
            <SearchBar navigation={navigation}/>
            <Explore navigation={navigation}/>
            <ReacentSearch/>
            <Advertise/>

        </ScrollView>
    );
}

export default TopPart;