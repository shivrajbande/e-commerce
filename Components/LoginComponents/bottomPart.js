import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import React, { Component,useState } from 'react';

const BottomPart = ({navigation}) => {


    const [name,setName] = useState("");
    const [password,setPassword] =(useState(""));
  
    const submitDetails=()=>{
    // navigation.navigate("SignUp")
    navigation.navigate("Home")
    }
    return (
        <View className=" w-full h-full flex-1 bg-white">
            <Text className="text-center text-4xl mx-4 mb-3 font-semibold" >Login Now</Text>
            <Text className="text-center opacity-40">please enter the details below to continue</Text>
            <TextInput  placeholder='Enter Email' className="px-5 py-4 border-2  mx-5 mt-7 mb-2 bg-slate-100 text-xl rounded-md" onChangeText={text=>setName(text)}/>
            <TextInput placeholder='Enter Password' className="px-6 py-4 border-2 mx-5 mt-2 mb-2 bg-slate-100 text-lg rounded-md" onChangeText={(text)=>setPassword(text)}/>
            <Text className="text-right mx-2 text-black text-base mb-2 mt-3">Forget Password?</Text>
            <TouchableOpacity className="py-4 mx-8 mt-3cursor-pointer bg-black rounded-3xl hover:cursor-pointer mt-2" onPress={submitDetails}>
                <Text className="text-center  text-lg text-white hover:cursor-pointer">LOGIN</Text>
            </TouchableOpacity>

        </View>
    );
}

export default BottomPart;