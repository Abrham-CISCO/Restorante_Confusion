import React from 'react';
import { View, FlatList, Text } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';

function Menu(props) {

    const renderMenuItem = ({item, index}) => {

        return (

            <ListItem key={index} bottomDivider onPress={() => props.onPress(item.id)}>
            <Avatar source={{ uri: require('./images/uthappizza.png')}} />
            <ListItem.Content>
              <ListItem.Title>{item.name}</ListItem.Title>
              <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        );
    };

    return (
            <FlatList 
                data={props.dishes}
                renderItem={renderMenuItem}
                keyExtractor={item => item.id.toString()}
                />
    );
}


export default Menu;