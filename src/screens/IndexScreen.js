import React,{useContext} from 'react';
import {Text,View,StyleSheet,Button,FlatList,TouchableOpacity} from 'react-native';
import {Context} from '../context/BlogContext';
import Icon from 'react-native-vector-icons/Feather';
const IndexScreen = ({navigation}) =>{
    const {state,addBlogPost,deleteBlogPost} = useContext(Context); 
    return(
        <View>
            <Button title="Add Post" onPress={addBlogPost}/>
            <FlatList
                data={state}
                keyExtractor={item=>item.title}
                renderItem={({item})=>{
                    return(
                        <TouchableOpacity onPress={()=>navigation.navigate('Show',{id:item.id})}>
                            <View style={styles.row}>
                                <Text style={styles.title}>{item.title} - {item.id}</Text>
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