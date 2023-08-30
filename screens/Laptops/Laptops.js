import { View,ScrollView } from 'react-native';
import Data from '../../StaticData/LaptopsData';
import Utility from '../../Components/DisplayItemsComponent/Utility';
const Laptops = ({navigation}) => {
    const items = ()=>{
        return <View className="flex-row flex-wrap ">
          {
            Data.map((e)=>{
               return <Utility data={e} navigation={navigation} type={"Laptops"} key={e["ItemId"]}/> 
            })
          }
        </View> 
    }
    return (
        <ScrollView> 
        {items()}
      </ScrollView>
    );
}

export default Laptops;