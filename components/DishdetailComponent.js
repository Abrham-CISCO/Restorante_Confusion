import React from 'react';
import { Text, View, Image } from 'react-native';
import { Card } from 'react-native-elements';

function RenderDish(props) {

    const dish = props.dish;
    
        if (dish != null) {
            return(
                <Card>
                    <Card.Title>{dish.name}</Card.Title>
                    <Card.Divider/>
                    <Image source={require('./images/uthappizza.png')}/>
                    <Text style={{margin:10}}>{dish.description}</Text>
                </Card>

                // <Card
                // featuredTitle={dish.name}
                // image={{uri:require('./images/uthappizza.png')}}>
                //     <Text style={{margin: 10}}>
                //         {dish.description}
                //     </Text>
                // </Card>
            );
        }
        else {
            return(<View></View>);
        }
}

function Dishdetail(props) {
    return(<RenderDish dish={props.dish} />);
}

export default Dishdetail;