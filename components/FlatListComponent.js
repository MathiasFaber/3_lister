import * as React from 'react';
import {View, Text, StyleSheet, FlatList} from "react-native"
import { CARS } from '../const';

const FlatListComponent = (props) => { 

    const CarItem = ({item,msg}) => {
        return (
            <Text>{msg} "{item}"</Text>
        )
    }

    return (
        <View style={styles.container}>
            <Text style={styles.headline}>FlatListComponent</Text>
            <FlatList 
                style={{height:80}} 
                data={CARS}
                renderItem={
                    ({item}) => {
                        return(
                            <CarItem
                                item = {item}
                                msg = "Oh boy i love"
                                />
                            )
                        }
                }
                keyExtractor={item => item}
                >
            {}

            </FlatList>
        </View>
        )
}

export default FlatListComponent; 

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      flex:1,
      alignItems: 'center', 
      justifyContent: 'center'
    },
    headline: {
        fontWeight: 'bold',
        fontSize: 30,
    }
  });