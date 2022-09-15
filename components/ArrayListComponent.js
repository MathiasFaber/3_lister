import * as React from 'react';
import {View, Text, StyleSheet, ScrollView} from "react-native"
import {COUNTRIES} from "../const"

const ArrayListComponent = (props) => { 
    return (
        <View style={styles.container}>
            <Text style={styles.headline}>ArrayListComponent</Text>
            <ScrollView style={{height:80}}>
                {COUNTRIES.map((country, key) => {
                    return (
                        <Text key={key}>
                            Oh boy i love " {country} "
                        </Text>
                    )
                })
            }
            </ScrollView>
        </View>
    )
}

export default ArrayListComponent; 

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 100
    },
    headline: {
        fontWeight: 'bold',
        fontSize: 30,
    }
  });