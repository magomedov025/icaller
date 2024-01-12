import React from 'react';
import { StyleSheet, Text, Button, View, SafeAreaView, ScrollView,  StatusBar } from 'react-native';
import * as Contacts from 'expo-contacts'
import { useEffect, useState } from 'react';


const Contact = ({ navigation }) => {
  let [error, setError] = useState(undefined);
  let [contacts, setContacts] = useState(undefined);
    useEffect(() => {
      (async () => {
        const { status } = await Contacts.requestPermissionsAsync();
        if (status === "granted") {
          const { data } = await Contacts.getContactsAsync({
            fields: [Contacts.Fields.FirstName, Contacts.Fields.PhoneNumbers]
          });

          if (data.length > 0) {
            setContacts(data);
          } else {
            setError("No contacts found");
          }
        } else {
          setError("Permission to access contacts denied.");
        }
      })();
    }, []);
    let getContactData = (data, property) => {
      if (data) {
        return data.map((data, index) => {
          return (
            <View key={index}>
              <Text>{data[property]}</Text>
            </View>
          )
        });
      }
    }
    let getContactRows = () => {
      if (contacts !== undefined) {
        return contacts.map((contact, index) => {
          return (
            <View key={index} style={styles.contact}>
              <Text>{contact.firstName}</Text>
              {getContactData(contact.phoneNumbers, "number")}
            </View>
          );
        });
      } else {
        return <Text>Awaiting contacts...</Text>
      }
    }

    



    const loadScene = () => {
        navigation.navigate('HomeScreen');
      }

      return (
        <View style={styles.container}>
          <Button title='Открыть страницу' onPress={loadScene} />
          <ScrollView>
            {getContactRows()}
          </ScrollView>
          <Text>{error}</Text>
          <StatusBar style="auto" />
        </View>
      )
}

const styles = StyleSheet.create({
  contact: {
    marginVertical: 8,
    width: '100%'
  }
});

export default Contact


