import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/loginScreen';
import SignUpScreen from './screens/signupScreen';
import WelcomeScreen from './screens/welcomeScreen'
import HomeScreen from './screens/homeScreen'
import Chairs  from './screens/Chairs/Chairs'
import Bouquets from './screens/Bouquets/Bouquests'
import Laptops  from './screens/Laptops/Laptops'
import ItemDetails from './screens/ItemDescriptionScreen'
import Wishlist from './screens/wishlistScreen';
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Welcome" component={WelcomeScreen} 
        options={{
          headerShown:false
        }}
        />
        <Stack.Screen name="SignUp" component={SignUpScreen}
        options={{
          headerShown:false
        }}
        />
        <Stack.Screen name="Login" component={LoginScreen}
        options={{
          headerShown:false
        }}
         />  */}
        <Stack.Screen name="Home" component={HomeScreen} options={{
           headerShown : false
        }} />
        <Stack.Screen name="Chairs" component={Chairs} options={{
          
        }} />
        <Stack.Screen name="Laptops" component={Laptops} options={{
          
        }} />
        <Stack.Screen name="Bouquets" component={Bouquets} options={{
        }} />
         <Stack.Screen name="ItemDetails" component={ItemDetails} options={{
           headerShown : true
        }} />
        <Stack.Screen name="WishList" component={Wishlist} options={{
           headerShown : true
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
