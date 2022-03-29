import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity, Pressable  } from 'react-native';



const HomeScreen = ({ navigation }) => {
  const main_title = "Start training"
  const onPress_Training= () => navigation.navigate('Training')

  return (
    <View>

      <View>
        <Text style={styles.text}>French Vocabulary training</Text>
        
        <Button 
          //color = "purple"
          onPress={() => navigation.navigate('Components')}
          title="Go to Components Demo"
        />

        <Button
          title="Go to List Demo"
          onPress={() => navigation.navigate('List')}
        />
      </View>
    
      <View style={styles.view_button}>
        <Pressable style={styles.button} onPress= {onPress_Training}>
          <Text style={styles.text_button}>{main_title}</Text>
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
    backgroundColor: 'black',
    height: 100
  },
  text_button: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  view_button: {
    marginVertical : 200
    
  }



});





// const styles = StyleSheet.create({
//   text: {
//     fontSize: 30
//   },


//   button_view: {
//     backgroundColor: 'black'
//   }
// });



export default HomeScreen;
