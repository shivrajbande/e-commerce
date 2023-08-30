import { View,Text,Image,TouchableOpacity } from 'react-native';
import React, { Component, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator } from '@react-native-material/core';

const WishlistScreen = () => {

    //fetch data from backend and display here
    
    return (  
      itemObject === null?
      <Text>no wishlist data</Text>: <View></View>
    );
}

export default WishlistScreen;