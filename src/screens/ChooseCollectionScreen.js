import React from 'react';
import {Text, StyleSheet, View, Button, TouchableOpacity, Pressable  } from 'react-native';


const ChooseCollectionScreen = ({ navigation }) => {

  return (
    <View>
      <View>
        <Text style={styles.text}>Choose a words collection</Text>
      </View>
    
      <View style={styles.view_button}>
        <Pressable style={styles.button} onPress= {() => navigation.navigate('Training')}>
          <Text style={styles.text_button}>Basic collection</Text>
        </Pressable>

        <Pressable style={styles.button} onPress= {() => navigation.navigate('Training')}>
          <Text style={styles.text_button}>100+ French words collection </Text>
        </Pressable>
      </View>
    </View>
  );
};



const styles = StyleSheet.create({

  text: {
        fontSize: 30,
        color: "black"
      },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'orange',
    height: 100,
    borderColor: "red",
    borderWidth: 1,
    marginVertical: 20

  },
  text_button: {
    fontSize: 24,
    //lineHeight: 40,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'blue',
  },
  view_button: {
    marginVertical : 200,
    //justifyContent: "space-between",
    
  }



});

export default ChooseCollectionScreen;

