/* import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import SearchInput, { createFilter } from 'react-native-search-filter';
import emails from './mails';

import BarcodeScanner from './BarcodeScanner';
const KEYS_TO_FILTERS = ['user.name', 'subject'];

export default class App extends Component {
 constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    }
  }
  searchUpdated(term) {
    this.setState({ searchTerm: term })
  }
  render() {
    const filteredEmails = emails.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS))
    return (
      <View style={styles.container}>
        <SearchInput 
          onChangeText={(term) => { this.searchUpdated(term) }} 
          style={styles.searchInput}
          placeholder="Type a message to search"
          />
        <ScrollView>
          {filteredEmails.map(email => {
            return (
              <TouchableOpacity onPress={()=>alert(email.user.name)} key={email.id} style={styles.emailItem}>
                <View>
                  <Text>{email.user.name}</Text>
                  <Text style={styles.emailSubject}>{email.subject}</Text>
                </View>
              </TouchableOpacity>
            )
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start'
  },
  emailItem:{
    borderBottomWidth: 0.5,
    borderColor: 'rgba(0,0,0,0.3)',
    padding: 10
  },
  emailSubject: {
    color: 'rgba(0,0,0,0.5)'
  },
  searchInput:{
    padding: 10,
    borderColor: '#CCC',
    borderWidth: 1
  }
}); 
 */

// Second screen which we will use to get the data
import React, { Component } from 'react';
//import react in our code.
import { StyleSheet, View, Text } from 'react-native';
//import all the components we are going to use.
 
export default class BarcodeScanner2 extends Component {
  static navigationOptions = {
    //Setting the header of the screen
    title: 'Second Page',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      //View to hold our multiple components
      <View style={styles.container}>
        <Text>
          You are on SecondPage and the value passed from the first screen is
        </Text>
        {/*Using the navigation prop we can get the value passed from the first Screen*/}
        <Text style={styles.TextStyle}>
          {this.props.navigation.state.params.JSON_ListView_Clicked_Item}
        </Text>
        <Text style={{ marginTop: 16 }}>With Check</Text>
        {/*If you want to check the value is passed or not, 
         you can use conditional operator.*/}
        <Text style={styles.TextStyle}>
          {this.props.navigation.state.params.JSON_ListView_Clicked_Item
            ? this.props.navigation.state.params.JSON_ListView_Clicked_Item
            : 'No Value Passed'}
        </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextStyle: {
    fontSize: 23,
    textAlign: 'center',
    color: '#f00',
  },
});
 
/* import React from 'react';
import {View, Text,StyleSheet} from 'react-native';
import { Container, Content, Button } from 'native-base'
import { Header, SearchBar } from 'react-native-elements';
import '@expo/vector-icons';

class OpacScreen extends React.Component{
  
  state = {
    search:'',
  }
  static navigationOptions = ({navigation}) => ({
    header: null
  })
  

    render(){
        const{search} = this.state;

        return(

            <View style={styles.header}>
        <Header
          leftComponent={{
            icon: 'menu',
            color: '#fff',
            onPress: () => {this.props.navigation.openDrawer()},
          }}
          
          rightComponent={{ 
            icon: 'person', 
            color: '#fff',
            onPress: () => this.props.navigation.navigate('My Account')}}
          centerComponent={{ text:'SEARCH', style: { color: '#fff' } }}
          backgroundColor="#028A7E"
        />
             <View style={styles.SearchBar}>
        { <SearchBar
          placeholder="Author, Title.."
          onChangeText={this.updateSearch}
          value={search}
          //backgroundColor = ""
          />   }  
        </View>


            <View style={styles.container}>
                <Text>Opac Screen</Text>
            </View>
        </View>
        )
    }
}
export default OpacScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
        flex: 1,
        paddingTop: 4,
        backgroundColor: '#ecf0f1',
      },
      SearchBar: {
        flex: 1,
        paddingTop: 20,
       //backgroundColor: '#ecf0f1',
      },
}) */