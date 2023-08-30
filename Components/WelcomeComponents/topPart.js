import { View, Image, } from 'react-native';
import React, { Component, useState, useEffect } from 'react';

const TopPart = () => {
    const [currentImage, setCurrentImage] = useState(null);

    const backImages = [
        // require("../../assets/welcome8.jpg"),
        // require("../../assets/back21.jpg"),
        // require("../../assets/back3.jpg")
    ]
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImage(backImages[Math.floor((new Date().getTime()/1000)%3)]);
        }, 10000)
        
        return () => clearInterval(intervalId);
    }, [])


   
    return (
        <View className="w-full h-full">
            <Image source={require("../../assets/sample6.jpg")} className="w-full h-full opacity-8"/>
        </View>
    );
    setInterval
}

export default TopPart;