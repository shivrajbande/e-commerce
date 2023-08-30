import { ScrollView, View } from 'react-native';
import Data from '../../StaticData/BouquetsData';
import Utility from '../../Components/DisplayItemsComponent/Utility';
const Bouquests = ({navigation}) => {
    const items = ()=>{
        return <View className="flex-row flex-wrap ">
          {
            Data.map((e)=>{
               return <Utility data={e} navigation={navigation} type={"Bouquests"} key={e["ItemId"]}/> 
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

export default Bouquests;