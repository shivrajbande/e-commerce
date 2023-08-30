
import React, { useState } from 'react';
import { Text,TextInput,View,TouchableOpacity, StyleSheet, Image} from 'react-native';

const topPart = ({navigation}) => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    
    const[index,setIndex] = useState(0);
    const navigateLogin=()=>{
        navigation.navigate("Login");
      }
    const incrementIndex =(value)=>{
        setIndex(value);
    }
    const submitDetails=()=>{
        navigation.navigate("Home");
    }
    return (
        <View className="flex-1 bg-white h-full w-full">
            <Text className="text-3xl px-3  text-black text font-semibold mt-14">Create Account</Text>
            <Text className="pt-2 opacity-40 px-3">Create an account to explore and buy products online</Text>
            <View className="px-3">
                <TextInput placeholder='Enter Name' className="px-5 py-4 border-2  mx-2 mt-7 mb-2 bg-white text-xl rounded-md"  />
                <TextInput placeholder='Enter Email' className="px-5 py-4 border-2  mx-2 mt-7 mb-2 bg-white text-xl rounded-md " />
                <TextInput placeholder='Enter Password' className="px-5 py-4  mx-2 border-2 mt-7 mb-2 bg-white text-xl rounded-md"/>
                <TextInput placeholder='Enter Confirm Password' className="px-5 py-4 border-2  mx-2 mt-7 mb-2 bg-white text-xl rounded-md"/>
            </View>
            <TouchableOpacity className="py-4 mx-8 mt-10 cursor-pointer bg-black rounded-3xl hover:cursor-pointer" onPress={submitDetails}>
                <Text className="text-center  text-lg text-white hover:cursor-pointer">Create Account</Text>
            </TouchableOpacity>
          <Text className="text-center font-normal text-base my-4"><Text className="text-opacity-40">-------------     </Text>OR Conitnue with<Text>     -------------</Text></Text>
          <View className={"flex-row justify-center"}>
             <TouchableOpacity className="bg-slate-100 px-5 py-1 rounded-2xl">
                <Image source={require("../../assets/google.png")} className="w-10 h-10" />
             </TouchableOpacity>
             <TouchableOpacity className="bg-slate-100 px-5 py-1 ml-3 rounded-2xl shadow-slate-800  shadow-md">
             <Image source={require("../../assets/apple.png")} className="w-10 h-10 px-1" />

             </TouchableOpacity>
             <TouchableOpacity className="bg-slate-100 px-5 py-1 ml-3 rounded-2xl">
             <Image source={require("../../assets/facebook.png")} className="w-10 h-10 px-1" />

             </TouchableOpacity>



</View>
            
        </View>
        
    );
}

export default topPart;