import React from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';
import { Icon,  Container, Content, Left } from 'native-base'
import {Header, SearchBar } from 'react-native-elements';
import {createStackNavigator, createAppContainer, createDrawerNavigator, createSwitchNavigator,  createNavigationContainer} from 'react-navigation';
//import OpeningHoursSreen from './screens/OpeningHoursSreen';
import '@expo/vector-icons';




class Hold extends React.Component{

  static navigationOptions = ({navigation}) => ({
    title: 'Hold'
    
  })

   /*  static navigationOptions = {
        headerTitle: <HomeScreen/>,
        headerLeft: (
          <Button
            onPress={() => alert('This is a button!')}
            title="Info"
            color="#fff"
          />
        ),
      }; */

    render(){
        return(

          
             <View style={styles.header}>
     {/*    <Header
        
          leftComponent={{
            icon: 'menu',
            color: '#fff',
            onPress: () => {this.props.navigation.openDrawer()},
          }}
          
          rightComponent={{ 
            icon: 'person', 
            color: '#fff',
            onPress: () => this.props.navigation.navigate('My Account')}}
          centerComponent={{  style: { color: '#fff' } }}
          backgroundColor="#028A7E"
        /> 
 */}
          <View style={styles.container}>  
            
              <Text>Hold</Text>

              
            
          </View>
        </View>  
        )
    }
}


export default Hold;

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
      }
})  