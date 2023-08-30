import { View, Text,Image, TouchableOpacity, Pressable } from 'react-native';
import React, { Component, useState } from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
const ExploreUtility = ({data,navigation}) => {
     const image = data["imageString"];
     
     const [clicked, setClicked] = useState(false);

    const categorySelected=(name)=>{
        console.log(name);
      switch(name){
        case "Chairs" :
            navigation.navigate("Chairs");
            break;
        case "Laptops" :
            navigation.navigate("Laptops");
            break;
        case "Bouquets" :
              navigation.navigate("Bouquets");
              break;
        
      }
    }

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

    return (
        <View>
         <Pressable onPress={()=>categorySelected(data["itemName"])}>
        <View className = "h-56  w-44 bg-white ml-3 mr-1 rounded-2xl px-2 shadow-md shadow-black">
            <View>
            <Image source={image} className="h-44 w-40 rounded-xl  mt-1 "/>
            
            </View>
            <View className="mt-2 ml-2">
                <Text className="text-base font-semibold">{data["itemName"]}</Text>
                
            </View>
            
        </View>
        </Pressable>
        <Text>    </Text>
        </View>    
       

      
        
      
    );
}

export default ExploreUtility;