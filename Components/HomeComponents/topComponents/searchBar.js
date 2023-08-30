import { Text, TextInput,View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import React from 'react';
const SearchBar = ({navigation}) => {

    const navigateToWishlist = ()=>{

        navigation.navigate("WishList")

    }
    return (
        <View className="flex">
            <View className="flex-row justify-end mr-6 mb-6 mt-3" >
             <Ionicons name ="heart-circle-outline" size={40} color={"grey"} onPress={navigateToWishlist}/>
             <Ionicons name="person-circle-outline" size={40} color="grey"  />
            </View>
            <View className="flex-row px-6">
                <TextInput
                placeholder=''
                className=" bg-white shadow-xl shadow-black rounded-xl text-xl px-4 w-72 mr-5"
                />
                <Ionicons name="cart" size={40} color="grey"  />
                

            </View>
              
        </View>
    );
}

export default SearchBar;