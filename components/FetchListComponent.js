import React, {useEffect, useState} from "react";
import {Image, ScrollView, StyleSheet, Text, TextInput, View} from "react-native"
import { GET_USERS_URL } from '../const';

const FetchListComponent = (props) => {
  
    const [users,setUsers] = useState({});
    const [msg,setMsg] = useState("");
    const [amount,setAmount] = useState(5)

    useEffect( () => {
      loadUsers();
    },[amount])

    const loadUsers = async () => {
      try {
          const response = await fetch(GET_USERS_URL+amount);
          const json = await response.json();
          setUsers(json.results);
      } catch (error) {
          setMsg(error)
      }
  }

    console.log(setUsers)
    return (
      users.length > 0 ? (
        <View style={styles.container}>
            <Text>Så er der brugere b</Text>
            <Text style={styles.headline}>FetchListComponent</Text>
            <TextInput style={styles.input} onChangeText={setAmount} value={amount.toString()} placeholder="lolleren alligevel" keyboardType={"numeric"}/>
            <ScrollView bounces={true} style={{height:500,width:"60%"}}> 
              {users.map((user,index)=> {
                return (
                  <View key={index} style={{alignItems:"center", padding:10}}>
                    <Text>Navn: {user.name.first} {user.name.last}</Text>
                    <Image source={{uri:user.picture.medium}} style={{width:50, height:50}}/>
                  </View>
                )
              })}
            </ScrollView>
            <Text> {msg ? msg :""} </Text>
        </View>      
      ):(
        <Text>...Loading</Text>
      )

    )
}

export default FetchListComponent; 

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      flex:1
    },
    input: {
      borderWidth:1,
      borderColor:"black",
      width: 200,
      padding:4,
    },
    headline: {
      fontWeight: 'bold',
      fontSize: 30,
  }
  });