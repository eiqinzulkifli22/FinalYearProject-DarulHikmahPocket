import React from 'react';
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
})