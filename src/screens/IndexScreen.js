import React,{useContext} from 'react';
import {Text,View,StyleSheet,Button,FlatList,TouchableOpacity} from 'react-native';
import {Context} from '../context/BlogContext';
import Icon from 'react-native-vector-icons/Feather';
const IndexScreen = ({navigation}) =>{
    const {state,deleteBlogPost} = useContext(Context); 
    return(
        <View>
            <FlatList
                data={state}
                keyExtractor={item=>item.title}
                renderItem={({item})=>{
                    return(
                        <TouchableOpacity onPress={()=>navigation.navigate('Show',{id:item.id})}>
                            <View style={styles.row}>
                                <Text style={styles.title}>{item.title} </Text>
                                <TouchableOpacity onPress={()=>deleteBlogPost(item.id)}>
                                    <Icon name="trash" size={24} color="black"/>
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )
                }
                }
            />
        </View>
    )
};
IndexScreen.navigationOptions = ({ navigation }) =>{
    return {
        headerRight: () => <TouchableOpacity onPress={()=> navigation.navigate('Create')}>
            <Icon name="plus" size={24} color="black" />
        </TouchableOpacity>
    };
};
const styles = StyleSheet.create({
    row:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingVertical:20,
        paddingHorizontal:15,
        borderTopWidth:1,
        borderColor:'grey'
    },
    title:{
        fontSize:24
    }
});
export default IndexScreen;