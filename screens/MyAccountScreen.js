import React from 'react';
import {View, Text,StyleSheet, Button} from 'react-native';
import { Container, Content } from 'native-base'
import { Header, SearchBar } from 'react-native-elements';
import {createStackNavigator, createDrawerNavigator} from 'react-navigation';

import '@expo/vector-icons';
//import IIUMLibScreen from './IIUMLibScreen';
//import OpeningHours from './OpeningHours';

class MyAccountScreen extends React.Component{

  static navigationOptions = ({navigation}) => ({
    header: null
  }) 
    render(){
        return(

          // header style
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
              
            centerComponent={{  style: { color: '#fff' } }}

            backgroundColor="#028A7E"
          />


          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
             <Text>My Account Screen</Text>

        
              <Button
                title=" Profile"
                onPress={() => this.props.navigation.navigate('Profile')}
              />

              <Button
                title="List"
                onPress={() => this.props.navigation.navigate('List')}
              />

               <Button
                title="Hold"
                onPress={() => this.props.navigation.navigate('Hold')}
              />  

              <Button
                title="Checkouts"
                onPress={() => this.props.navigation.navigate('Checkouts')}
              />

              <Button
                title="Fines"
                onPress={() => this.props.navigation.navigate('Fines')}
              />

              <Button
                title="Logout"
                onPress={() => this.props.navigation.navigate('LoginScreen')}
              />

          


            </View>

        </View>   
        )
    }
}
export default MyAccountScreen;

/* const AppStackNavigator = createAppStackNavigator({
  IIUMLibScreen: {
    screen: IIUMLibScreen},

  OpeningHours: {
    screen: OpeningHours}
}) */

//export default createAppContainer(AppStackNavigator);

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