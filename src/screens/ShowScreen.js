import React, {useContext} from 'react';
import {Text,View,StyleSheet} from 'react-native';
import {Context} from '../context/BlogContext';

const ShowScreen = ({navigation}) =>{
    const {state} = useContext(Context);
    const id = navigation.getParam('id');
    const blogPost = state.find((blogPost)=> blogPost.id === id);
    return(
        <View>
            <Text>{blogPost.title}</Text>
        </View>
    )
}
const styles = StyleSheet.create({

})
export default ShowScreen