import { View, Image,Text, Button, TouchableOpacity } from 'react-native';
import React, { Component } from 'react';


const BottomPart = ({navigation}) => {
  const navigateSignUp=()=>{
    navigation.navigate("SignUp");
  }
  const navigateLogin=()=>{
    navigation.navigate("Login");
  }
    return (
      <View className="w-full h-full absolute mt-16 flex justify-between">
        <View>
          <Text className=" text-black  text-center font-semibold text-3xl">Welcome to SnapCart!</Text> 
          <Text className=" text-black opacity-70  text-center font-semibold mt-4 text-base">Step into a world of endless possibilities where shopping meets convenience</Text>
        </View> 
        <View className="h-80 items-center">
          <TouchableOpacity className="outline outline-2  outline-offset-2 bg-black px-10 py-5  mb-2 rounded-2xl shadow" onPress={navigateSignUp}>
            <Text className="text-white text-xl">GET STARTED</Text>
          </TouchableOpacity>
          <Text className="">OR</Text>
          <View className="items-center  px-2 flex-row ">
          <Text className="text-black text-base">Already Have an account? 
  
          </Text>
          <TouchableOpacity
          onPress={navigateLogin}
          >
            <View className="">
            <Text className="text- font-bold text-base">
                 <Text>  </Text>Login
               </Text>
            </View>

          </TouchableOpacity>
          </View>
          
        </View>

      </View>
    );
}

export default BottomPart;