import { View, Text,Image, Touchable, TouchableOpacity } from 'react-native';
import React, { Component, useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';


const Utility = ({data,navigation,type}) => {

    const image = data["imageString"];     
    const [clicked, setClicked] = useState(false);


  const changeLike = ()=>{
        if(data["itemLiked"] === true){
        data["itemLiked"] = false;
        }
        else{
        data["itemLiked"] = true;  
        }
        if(clicked===true)
        setClicked(false);
        else 
        setClicked(true)
    }

    const showDescription=(Id)=>{
        // console.log(Id);
        // console.log(type);
        navigation.navigate("ItemDetails",{ItemId : Id,Type : type});
    }

    return (
        <TouchableOpacity onPress={()=>showDescription(data["ItemId"])}>

        <View className = "h-72 w-44 bg-white ml-3 mb-3 px-2">
            <View>
            <Image source={image} className="h-44 w-40  mt-1 "/>
            
            </View>
            <View className="mt-2 ml-2">
                <Text className="text-base font-semibold">{data["itemName"]}</Text>
                <Text className="text-ellipsis">{data["itemDescrip"]}</Text>
            </View>
            <View className="px-2 pt-3 flex-row justify-between">
                <Text className="text-base">{"$"+data["itemCost"]}</Text>
                <Ionicons name='heart-circle' size={28} color={data["itemLiked"] === true? "red" : "black"} onPress={changeLike}/>            
            </View>

        </View>
        </TouchableOpacity>
      
    );
}

export default Utility;