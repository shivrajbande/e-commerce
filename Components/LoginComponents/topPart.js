import { View, Image, Text } from 'react-native';

const TopPart = () => {
    return (
        <View className="items-center bg-white  h-80 px-20 "> 
        <Image source={require("../../assets/shoppingbag.png")} className="w-full h-full" />
        </View>
        
    );
}
export default TopPart;
