import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, button } from 'react-native';
import * as Contacts from 'expo-contacts';
import { LongPressGestureHandler, State } from 'react-native-gesture-handler';

export default function HomeScreen(){
  


  const [typedText, setTypedText] = useState('');

  const handlePress = (num) => {
    if (typedText.length < 12) {
      setTypedText(typedText + num.toString());
    }
  };
  
  const clearText = () => {
    setTypedText('');
  };

  return (
      <View style={styles.container}>
        <View style={styles.textTyped}>
          <Text style={styles.typedText}>{typedText}</Text>
        </View>
        <View style={styles.keyboard}>
          <TouchableOpacity onPress={() => handlePress(1)} style={styles.button}>
            <Text style={styles.buttonNumber}>1</Text>
            <View style={styles.buttonText}>
              <Text style={styles.rusText}>_</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress(2)} style={styles.button}>
            <Text style={styles.buttonNumber}>2</Text>
            <View style={styles.buttonText}>
              <Text style={styles.rusText}>АБВГ</Text>
              <Text style={styles.euText}>ABC</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress(3)} style={styles.button}>
            <Text style={styles.buttonNumber}>3</Text>
            <View style={styles.buttonText}>
              <Text style={styles.rusText}>АБВГ</Text>
              <Text style={styles.euText}>ABC</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.keyboard}>
          <TouchableOpacity onPress={() => handlePress(4)} style={styles.button}>
            <Text style={styles.buttonNumber}>4</Text>
            <View style={styles.buttonText}>
              <Text style={styles.rusText}>АБВГ</Text>
              <Text style={styles.euText}>ABC</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress(5)} style={styles.button}>
            <Text style={styles.buttonNumber}>5</Text>
            <View style={styles.buttonText}>
              <Text style={styles.rusText}>АБВГ</Text>
              <Text style={styles.euText}>ABC</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress(6)} style={styles.button}>
            <Text style={styles.buttonNumber}>6</Text>
            <View style={styles.buttonText}>
              <Text style={styles.rusText}>АБВГ</Text>
              <Text style={styles.euText}>ABC</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.keyboard}>
          <TouchableOpacity onPress={() => handlePress(7)} style={styles.button}>
            <Text style={styles.buttonNumber}>7</Text>
            <View style={styles.buttonText}>
              <Text style={styles.rusText}>АБВГ</Text>
              <Text style={styles.euText}>ABC</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress(8)} style={styles.button}>
            <Text style={styles.buttonNumber}>8</Text>
            <View style={styles.buttonText}>
              <Text style={styles.rusText}>АБВГ</Text>
              <Text style={styles.euText}>ABC</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress(9)} style={styles.button}>
            <Text style={styles.buttonNumber}>9</Text>
            <View style={styles.buttonText}>
              <Text style={styles.rusText}>АБВГ</Text>
              <Text style={styles.euText}>ABC</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.keyboard}>
          <TouchableOpacity onPress={clearText} style={styles.button}>
            <Text style={styles.buttonNumber}>C</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress(0)} style={styles.button}>
            <Text style={styles.buttonNumber}>0</Text>
            <View style={styles.buttonText}>
              <Text style={styles.rusText}>+</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => handlePress(0)} style={styles.button}>
            <Text style={styles.buttonNumber}>ABC</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  containerContact: {
    flex: 1,
    flexDirection: 'row',
  },
  keyboard: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center'
  },
  button: {
    width: '34%',
    height: 80,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    flex: 1,
    backgroundColor: '#202731',
    borderBottomWidth: 1,
    borderBottomColor: '#29303a',
    borderRightWidth: 1,
    borderRightColor: '#29303a',
  },
  buttonNumber: {
    fontSize: 32,
    marginRight: 5,
    color: '#fff'
  },
  buttonText: {
    marginLeft: 5,
  },
  rusText: {
    color: '#fff',
  },
  euText: {
    color: '#fff'
  },
  textTyped: {
    backgroundColor: '#333947',
    width: '100%',
    height: 70,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  typedText: {
    color: '#fff',
    fontSize: 34,
  },
  allcontact: {
    width: '100%',
  },
  nameContact: {
    fontSize: 24,
    marginLeft: 10,
    marginTop: 5,
    marginBottom: 1,
  },
  numberContact: {
    fontSize: 24,
    marginLeft: 10,
    marginTop: 1,
    marginBottom: 1,
    flexDirection: 'column'
  },
  contact: {
    border: 1,
    borderBottomWidth: 0.3,
    borderBottomColor: '#ebebebs',
    paddingBottom: 5,
  }
});
