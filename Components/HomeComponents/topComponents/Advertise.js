import { ScrollView, View, Image, FlatList, Text } from 'react-native';
import React, { Component } from 'react';
import {FlatListSlider} from 'react-native-flatlist-slider';

const Advertise = () => {

  //  const images = [
  //  {
  //   image:'https://www.google.com/imgres?imgurl=https%3A%2F%2Fd1csarkz8obe9u.cloudfront.net%2Fposterpreviews%2Fmodern-chair-ads-design-template-af0f5fdfa990566040ae851ffe9ee3be_screen.jpg%3Fts%3D1626934459&tbnid=RVNUAWXDgOn1eM&vet=12ahUKEwjrpYXyvOqAAxXk6DgGHYCgD-UQMygCegQIARBg..i&imgrefurl=https%3A%2F%2Fwww.postermywall.com%2Findex.php%2Fart%2Ftemplate%2Faf0f5fdfa990566040ae851ffe9ee3be%2Fmodern-chair-ads-design-template&docid=wHLrwAj0mPG6tM&w=691&h=691&q=chair%20ads&ved=2ahUKEwjrpYXyvOqAAxXk6DgGHYCgD-UQMygCegQIARBg',
  //   desc: 'chair ads',
  //  },
  // {
  //   image:'https://www.google.com/url?sa=i&url=https%3A%2F%2Falldgt.com%2Fflorist-e-commerce-advertising%2F&psig=AOvVaw0oV8L_clgAwdnJKNFQW4th&ust=1692594803521000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCLibz_y86oADFQAAAAAdAAAAABAE',
  //   desc:
  //     'Red fort in India New Delhi is a magnificient masterpeiece of humans',
  // },
  // {
  //   image:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nanzandkraft.com%2Fflowers%2Fdesigner-s-choice-valentine-day-bouquet%2F&psig=AOvVaw2K5uqdXRFeKxPJvWcvfYK4&ust=1692594842066000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCLjm_Y696oADFQAAAAAdAAAAABAK',
  //   desc:
  //     'Red fort in India New Delhi is a magnificient masterpeiece of humans',
  // },
  //]

  const images = [
    {
     image:'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',
     desc: 'Silent Waters in the mountains in midst of Himilayas',
    },
   {
     image:'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',
     desc:
       'Red fort in India New Delhi is a magnificient masterpeiece of humans',
   },
   ]
 
    return (
      <View className="px-5 py-2  mr-2 rounded-xl  shadow-2xl shadow-white"> 
        {/* <Image source = {require("../../../assets/chairad.jpg")} className="h-44 w-80"/> */}
       <Text className="text-2xl font-semibold mb-2 mt-2">Top Trends</Text>  
  <FlatListSlider 
    data={images} 
    />
      </View>
    );
}

export default Advertise;