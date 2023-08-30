import { View,Text,Image, ScrollView,ActivityIndicator, Pressable, TouchableOpacity } from 'react-native';
import ChairsData from '../StaticData/ChairsData';
import BouquetsData from '../StaticData/BouquetsData';
import LaptopsData from '../StaticData/LaptopsData'
import { useState } from 'react';
import {FlatListSlider} from 'react-native-flatlist-slider';
import { Button, TextInput } from '@react-native-material/core';
import Ionicons from '@expo/vector-icons/Ionicons';
import axios from 'axios';
import openDatabase from 'react-native-sqlite-storage';
import React, { Component, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ItemDescriptionScreen = (SelectedData) => {

    // //why i need to type such log to get access the prop  
    const Category = SelectedData["route"]["params"]["Type"];
    const SelectedItemId = SelectedData["route"]["params"]["ItemId"];
    const [ImageDetails,setImageDetails] = useState({});
    const [itemSelected,setItemSelected] = useState(false);
 
     
    const GetItemsDetails= (data)=>{
      console.log(data);
      
        data.map((e)=>{
            if(e["ItemId"] === SelectedItemId){
              
                
              const Object = {
                "ItemId" : SelectedItemId,
                "ItemName" : e["itemName"],
                "ItemCost" : e["itemCost"],
                "ItemDescrip" : e["itemDescrip"],
                "ItemImages" : e["itemsImages"],
                "ItemLiked" : e["itemLiked"],
                "Type" : Category,
              }
            const temp = Object;
              setImageDetails(temp);
              setItemSelected(true);
            }
        })
    }

    if(itemSelected === false){

        switch (Category) {
                case  "Chairs":
                  GetItemsDetails(ChairsData);
                break;
                case  "Bouquests":
                  GetItemsDetails(BouquetsData);
                break;
                case  "Laptops":
                  GetItemsDetails(LaptopsData);
                break;
        }
    }
  
    const AddToWishList=async()=>{
        

        const Data = {
            itemName : "shiva",
            itemCost :23,
            itemLiked :false,
            itemId :123
        }
    
       await axios.post(("http://10.0.2.2:3000/AddToWishlist"),ImageDetails
       ).then((response)=>{
        console.log("response is : "+ response.data["name"]);

       }).catch((error)=>{
        console.log("error : "+error)
       })
      
    }
    

    const DiplayItemImages= ()=>{
    
     return   ImageDetails["ItemImages"].map((image)=>{
    
        return <Image source ={image} className="w-96 h-96 " key={ImageDetails["ItemId"]}/>

       })

        // return <Image source ={ImageDetails["ItemImages"][0]} className="w-96 h-96 "/>
        // return  <Text>{ImageDetails["ItemName"]}</Text>
    

    }
    const AddToCart=()=>{

    }
    
  //http://10.0.2.2:3000/admin%22

 
    
    return (
        itemSelected === false?<ActivityIndicator/> :
        <View>
        <ScrollView className="w-full pl-1 bg-slate-100">
            <ScrollView horizontal={true} className="w-96 h-1/2  py-3 pr-2">
            {DiplayItemImages()} 
            </ScrollView>
            <View className="w-full">
               <View className="bg-white px-3 py-4">
                <Text>
                <Text className="text-base font-semibold">{ImageDetails["ItemName"]}</Text>
                 <Text> {ImageDetails["ItemDescrip"]} </Text>
                 </Text>
                 <Text className="text-base font-semibold" >${ImageDetails["ItemCost"]}</Text>
                </View>
               <View className="bg-white px-3 py-2 mt-2">
                <Text className="text-base font-semibold">Bank Offers</Text>
                <Text>7.5% Instant Discount on SnapCart Axis Credit Card.- Max Discount upto 750 on every spend</Text>
                </View>
               <View className="bg-white px-3 py-2 mt-2">
                <Text className="text-base font-semibold">${ImageDetails["ItemCost"]}</Text>
                <Text>Delivery by : Tue,22 Aug - 500029</Text>
                <Text></Text>
                
                </View>
                <View className="bg-white px-3 py-2 mt-2">
                <Text className="text-base font-semibold">Delivery and services for</Text>
                <TextInput placeholder='500029(Shivraj)'/>
                <Text className="font-medium">Express Delivery by Tue, 22 Aug</Text>
                <Text>         </Text>
                <Text className="font-medium">Pay on Delivery is available</Text>
                <Text> </Text>
                <Text className="font-medium">Hasle free 14 days Return & Exchange</Text>
                </View>
                <View className="bg-white px-3 py-7 mt-2">
                </View>
            </View>
        </ScrollView>
        <View className="bg-slate-200  flex-row absolute mt-[640px] justify-around w-full mx-1">
               <TouchableOpacity className="bg-stone-400 w-1/2 px-7 py-5 mr-2" onPress={AddToWishList}>
                <View className="flex-row ">
                <Ionicons name='heart' size={22} color={"white"}></Ionicons>
                <Text className="tracking-wider text-base ml-3 text-black">WHISHLIST</Text>
                </View>
               </TouchableOpacity>

               <TouchableOpacity className="bg-black  w-1/2 px-7 py-5" onPress={AddToCart}>
                <View className="flex-row">
                <Ionicons name='cart' size={22} color={"white"}></Ionicons>
                <Text className="tracking-wider text-white text-base ml-3">ADD TO CART</Text>
                </View>
               </TouchableOpacity>
               

            </View>
        </View>

    );
}

export default ItemDescriptionScreen;