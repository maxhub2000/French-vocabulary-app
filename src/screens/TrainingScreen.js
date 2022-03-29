import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Button, Pressable, TouchableOpacity } from 'react-native';


// associative array (array of key-value pairs) of french words and their translations
var terms = [ 
  { french_word: "Bonjour", translation: "Hello"},
  { french_word: "Oui", translation: "Yes" },
  { french_word: "Non", translation: "No" },
  { french_word: "Merci", translation: "Thank you" },
  { french_word: "Garcon", translation: "boy" },
  { french_word: "Fille", translation: "girl" },
  { french_word: "Bonsoir", translation: "Good evening"},
  { french_word: "Amour", translation: "Love" },
  { french_word: "Jour", translation: "Day" },
  { french_word: "Monde", translation: "World" },
  { french_word: "Beau", translation: "Handsome" },
  { french_word: "Belle", translation: "Beautiful" },
  { french_word: "Chat", translation: "Cat" },
  { french_word: "Chien", translation: "Dog" },
  { french_word: "Fort", translation: "Strong" },
];


// shuffle the terms array so that there will be a different order of french words
// each time I run the app
var terms = terms.sort((a, b) => 0.5 - Math.random())


const french_words = []
const translations = []

for (let i = 0; i < terms.length; i++) {
  french_words.push(terms[i].french_word)
  translations.push(terms[i].translation)
}

let map_terms = new Map();
for (let i = 0; i < terms.length; i++){
  map_terms.set(french_words[i], translations[i]);
}

function getRandom(arr, n) {
  var result = new Array(n),
      len = arr.length,
      taken = new Array(len);
  if (n > len)
      throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
      var x = Math.floor(Math.random() * len);
      result[n] = arr[x in taken ? taken[x] : x];
      taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}

const getWrongAnswers = (right_answer, translations) => {
  //var right_answer = map_terms.get(word_in_french);
  var clone_translations = [...translations]
  const index = clone_translations.indexOf(right_answer); // get index of right answer
  if (index > -1) {
    clone_translations.splice(index, 1); // remove the right answer using the index we got
  }
  // var filtered = translations.filter(function(value, index, arr){ 
  //   return value != right_answer}); 
  var wrong_answers = getRandom(clone_translations,3)
  return wrong_answers
}

const getAnswers = (word_in_french, translations ) => {
  var right_answer = map_terms.get(word_in_french);
  var wrong_answers = getWrongAnswers(right_answer, translations)
  // combine right answer and wrong answers into a single array
  var answers = wrong_answers.concat(right_answer)
  //console.log(right_answer)
  //console.log(wrong_answers)
  // shuffle the order of answers randomly
  var shuffledAnswers = answers.sort((a, b) => 0.5 - Math.random()) 
  return shuffledAnswers;
}


const updateColorsAtIndex = (answer_colors, Index, new_color) => {
  var clone_answer_colors = [...answer_colors]
  clone_answer_colors[Index] = new_color
  return clone_answer_colors
}

const renderButtons = (word_in_french, answers, answer_colors, setColors ) => {
  const buttons = [];
  for( let i = 0; i < answers.length; i++) {
     buttons.push(

      <Pressable 
        style= {[styles.answer_button, {backgroundColor: answer_colors[i]}]}
        onPress= {() => {
          if (answers[i] == map_terms.get(word_in_french)){
            console.log("Correct")
            setColors(updateColorsAtIndex(answer_colors, i,"green"))

          }
          else{
            console.log("Idiot")
            setColors(updateColorsAtIndex(answer_colors, i,"red"))
          }
        }}
      >
          <Text style={styles.answers_text}>{answers[i]}</Text>
      </Pressable>,


    //   <Button
    //     title= {answers[i]}
    //     onPress= {() => {
    //       if (answers[i] == map_terms.get(word_in_french)){
    //         console.log("Corrct")
    //         return(
    //           <Text>
    //             Correct
    //           </Text>
    //         )
    //       }
    //       else{
    //         console.log("Idiot")
    //         return(
    //           <Text>
    //             Idiot
    //           </Text>
    //         )
    //       }
    //     }}
    // />
    )
  }
  return buttons;
}


var Answers = []
for (let i = 0; i < french_words.length; i++){
  Answers.push(getAnswers(french_words[i], translations))
}
//console.log(Answers)


// IDEA:
// to make the order of the french words random I could just shuffle the terms array
// each time I ran this file, and it will make the french_words and translations arrays
// get shuffled accordingly, which will also shuffle the order of Answers array.
// that will result in a different order of words each time I ran the app 

// Note: already applied the idea above 


const TrainingScreen = () => {
  const [word_index, setIndex] = useState(0);
  //const [answer_color, setColor ] = useState("lightblue")
  const [answer_colors, setColors ] = useState(["lightblue","lightblue","lightblue","lightblue"])

  console.log(word_index);

  //var answers = getAnswers(terms[word_index].french_word, translations)  temporarily commented

  return (
    <Text style={styles.textStyle}>
        HERE WE ARE TRAINING
    </Text>,

    <View style = {styles.viewStyle} >
      <TouchableOpacity 
        style= {styles.next_question_button}
        onPress= {() => {
          //console.log(word_index);
          console.log(word_index);
          if (word_index < terms.length-1){
            //setIndex(Math.floor(Math.random() * (terms.length-1)));  temporarily commented
            setIndex(word_index +1)
          }
          else {
            setIndex(0)
          }
          setColors(["lightblue","lightblue","lightblue","lightblue"])
        } 
        }
      >
          <Text style={styles.next_question_button_text}>Next question</Text>
      </TouchableOpacity>




      {/* <Button
          title="Next question"
          onPress={() => {
            //console.log(word_index);
            console.log(word_index);
            if (word_index < terms.length-1){
              //setIndex(Math.floor(Math.random() * (terms.length-1)));  temporarily commented
              setIndex(word_index +1)
            }
            else {
              setIndex(0)
            }
            setColors(["lightblue","lightblue","lightblue","lightblue"])
          }}
        /> */}

      <View style={{ backgroundColor: "yellow" }}>
        <Text style = {styles.answers_text}>
          {terms[word_index].french_word}
        </Text>
      </View>
      
      <View>
        {renderButtons(terms[word_index].french_word, Answers[word_index], answer_colors, setColors)}

      </View>

    </View>
  );
};


// Function to get different random elements from an array, taken from stackoverflow:
// https://stackoverflow.com/questions/19269545/how-to-get-a-number-of-random-elements-from-an-array


const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
  answers_text: {
    fontSize: 40,
  },
  viewStyle: {
    //backgroundColor: "red"
  },


  answer_button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'orange',
    height: 100

  },

  next_question_button: {
    backgroundColor: '#1E90FF',
    //height: 100,
    elevation: 8,
    //backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  next_question_button_text: {
    color: "white",
    fontSize: 40,
    
  }

});

export default TrainingScreen;



// console.log(map_terms)
// console.log(french_words)
// console.log(translations)
// console.log("getRandom output:","\n",getRandom(french_words,3))
// console.log("getWrongAnswers:","\n", getWrongAnswers("Hello",translations ))
// console.log("getAnswers:","\n",getAnswers("Bonjour",translations))
