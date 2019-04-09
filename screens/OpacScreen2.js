import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import SearchInput, { createFilter } from 'react-native-search-filter';
import emails from './mails';

import BarcodeScanner from './BarcodeScanner';
import { NavigationEvents } from 'react-navigation';
const KEYS_TO_FILTERS = ['user.name', 'subject'];

export default class OpacScreen2 extends Component {
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
    const { navigate } = this.props.navigation;
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
                <TouchableOpacity onPress={()=>this.props.navigation.navigate('OpacScreen3')} 
                                key={email.id}
                                style={styles.emailItem}>  

                {/*   <TouchableOpacity onPress={()=> this.props.navigation.navigate('OpacScreen3', {
                                  JSON_ListView_Clicked_Item: this.state.email.user.name,
                                 }
                                  )}>  */}
                                
                            

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


/*  import React, { Component } from 'react';
 
import { Text, StyleSheet, View, ListView, TextInput, ActivityIndicator, Alert, TouchableOpacity } from 'react-native';
import {Header,SearchBar} from 'react-native-elements';

export default class OpacScreen extends Component {
 
  constructor(props) {
 
    super(props);
 
    this.state = {
 
      isLoading: true,
      text: '',
    
    }
 
    this.arrayholder = [] ;
  }
 
  componentDidMount() {
 
    return fetch('http://172.20.10.3/Fruits_Site/FruitsList.php')
      .then((response) => response.json())
      .then((responseJson) => {
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.setState({
          isLoading: false,
          dataSource: ds.cloneWithRows(responseJson),
        }, function() {
 
          // In this block you can do something with new state.
          this.arrayholder = responseJson ;
 
        });
      })
      .catch((error) => {
        console.error(error);
      });
      
  }
 
  GetListViewItem (fruit_name) {
    
   Alert.alert(fruit_name);
  
  }
  
   SearchFilterFunction(text){
     
     const newData = this.arrayholder.filter(function(item){
         const itemData = item.fruit_name.toUpperCase()
         const textData = text.toUpperCase()
         return itemData.indexOf(textData) > -1
     })
     this.setState({
         dataSource: this.state.dataSource.cloneWithRows(newData),
         text: text
     })
 }
 
  ListViewItemSeparator = () => {
    return (
      <View
        style={{
          height: .5,
          width: "100%",
          backgroundColor: "#000",
        }}
      />
    );
  }
 
 
  render() {
    if (this.state.isLoading) {
      return (
        <View style={{flex: 1, paddingTop: 20}}>
          <ActivityIndicator />
        </View>
      );
    }
 
    return (
 
      <View style={styles.MainContainer}>
 
      <TextInput 
       style={styles.TextInputStyleClass}
       onChangeText={(text) => this.SearchFilterFunction(text)}
       value={this.state.text}
       underlineColorAndroid='transparent'
       placeholder="Author, Title.."
        />
 
        <ListView
 
          dataSource={this.state.dataSource}
 
          renderSeparator= {this.ListViewItemSeparator}
 
          renderRow={(rowData) => <Text style={styles.rowViewContainer} 
 
          onPress={this.GetListViewItem.bind(this, rowData.fruit_name)} >{rowData.fruit_name}</Text>}
 
          enableEmptySections={true}
 
          style={{marginTop: 10}}
 
        />
 
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
 
 MainContainer :{
 
  justifyContent: 'center',
  flex:1,
  margin: 7,
 
  },
 
 rowViewContainer: {
   fontSize: 17,
   padding: 10
  },
 
  TextInputStyleClass:{
        
   textAlign: 'center',
   height: 40,
   borderWidth: 1,
   borderColor: '#009688',
   borderRadius: 7 ,
   backgroundColor : "#FFFFFF"
        
   }
 
}); 
 */

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