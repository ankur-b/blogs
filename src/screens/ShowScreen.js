import React, {useContext} from 'react';
import {Text,View,StyleSheet,TouchableOpacity, Touchable} from 'react-native';
import {Context} from '../context/BlogContext';
import Icon from 'react-native-vector-icons/Feather'

const ShowScreen = ({navigation}) =>{
    const {state} = useContext(Context);
    const id = navigation.getParam('id');
    const blogPost = state.find((blogPost)=> blogPost.id === id);
    return(
        <View>
            <Text>{blogPost.title}</Text>
            <Text>{blogPost.content}</Text>
        </View>
    )
}
ShowScreen.navigationOptions = ({navigation}) =>{
    return{
        headerRight :() => <TouchableOpacity onPress={()=>navigation.navigate("Edit",{id:navigation.getParam('id')})}>
                <Icon name="edit" size={24} color="black"/>
        </TouchableOpacity>
    }
}

const styles = StyleSheet.create({

})
export default ShowScreen