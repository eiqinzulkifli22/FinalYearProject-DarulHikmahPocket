import React from 'react';
import {View, Text,StyleSheet, Button} from 'react-native';
import { Container, Content } from 'native-base'
import { Header, SearchBar } from 'react-native-elements';
import {createStackNavigator, createDrawerNavigator} from 'react-navigation';

import '@expo/vector-icons';
//import IIUMLibScreen from './IIUMLibScreen';
//import OpeningHours from './OpeningHours';

class IIUMLibScreen extends React.Component{
/* 
  static navigationOptions = ({navigation}) => ({
    header: null
  }) */
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
             <Text>IIUM Lib Screen Screen</Text>

        
              <Button
                title=" Opening Hours"
                onPress={() => this.props.navigation.navigate('OpeningHours')}
              />

              <Button
                title="Contacts"
                onPress={() => this.props.navigation.navigate('Contacts')}
              />

               <Button
                title="News"
                onPress={() => this.props.navigation.navigate('News')}
              />  

              <Button
                title="Events"
                onPress={() => this.props.navigation.navigate('Events')}
              />

              <Button
                title="Facilities"
                onPress={() => this.props.navigation.navigate('Facilities')}
              />

              <Button
                title="Services"
                onPress={() => this.props.navigation.navigate('Services')}
              />

              <Button
                title="Collections"
                onPress={() => this.props.navigation.navigate('Collections')}
              />


            </View>

        </View>   
        )
    }
}
export default IIUMLibScreen;

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