import { View,Text, ScrollView } from 'react-native';
import Data from "../../StaticData/ChairsData"
import Utility from '../../Components/DisplayItemsComponent/Utility';
const Chairs = ({navigation}) => {
    
    const items = ()=>{
        return <View className="flex-row flex-wrap ">
          {
            Data.map((e)=>{
               return <Utility data={e} navigation={navigation} type={"Chairs"} key={e["ItemId"]}/> 
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

export default Chairs;