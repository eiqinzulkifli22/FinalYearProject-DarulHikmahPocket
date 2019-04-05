import React, {Component} from 'react';
import {View, Text, StyleSheet, Image,ScrollView, TouchableOpacity} from 'react-native';
import {createStackNavigator, createAppContainer, createDrawerNavigator, createNavigationContainer, createSwitchNavigator, DrawerActions} from 'react-navigation';
import {Container, Content, Header, Body, Icon} from 'native-base';

//import AppStackNavigator from './Navigator/AppStackNavigator';
import HomeScreen from './screens/HomeScreen';
import OpacScreen from './screens/OpacScreen';
import FacilityReservationScreen from './screens/FacilityReservationScreen';
import NotificationScreen from './screens/NotificationScreen';
import SettingScreen from './screens/SettingScreen'; 


import IIUMLibScreen from './screens/IIUMLibScreen';
import OpeningHours from './screens/IIUMLibraryScreen/OpeningHours';
import Contacts from './screens/IIUMLibraryScreen/Contacts';
import News from './screens/IIUMLibraryScreen/News';
import Events from './screens/IIUMLibraryScreen/Events';
import Facilities from './screens/IIUMLibraryScreen/Facilities';
import Services from './screens/IIUMLibraryScreen/Services';
import Collections from './screens/IIUMLibraryScreen/Collections';

import MyAccountScreen from './screens/MyAccountScreen';
import Profile from './screens/MyAccount/Profile';
import List from './screens/MyAccount/List';
import Hold from './screens/MyAccount/Hold';
import Checkouts from './screens/MyAccount/Checkouts';
import Fines from './screens/MyAccount/Fines';
import Logout from './screens/MyAccount/Logout';




export default class App extends React.Component{ 

  
    render(){
        return(
            <AppContainer/>
           //<AppStackNavigator/>
          // <HomeScreen/>
          
        )
    }
}

/* export default createStackNavigator({
  HomeScreen: {
    screen: HomeScreen
  },
  IIUMLibScreen: {
    screen: IIUMLibScreen
  },

}) */

const AppStackNavigator = createStackNavigator({
  HomeScreen:HomeScreen,
  IIUMLibScreen: IIUMLibScreen,
 
  OpacScreen: OpacScreen,
  Facilities: Facilities, 
  FacilityReservationScreen: FacilityReservationScreen,

  OpeningHours: OpeningHours,
  Contacts:Contacts,
  News: News,
  Events: Events,
  Services: Services,
  Collections: Collections,

  MyAccountScreen: MyAccountScreen,
  Profile: Profile,
  List: List,
  Hold: Hold,
  Checkouts:Checkouts,
  Fines: Fines,
  Logout: Logout,
  
})  
 

/* export default createDrawerNavigator({
  HomeScreen: {
    screen: HomeScreen
  },
  IIUMLibScreen: {
    screen: IIUMLibScreen
  }
}) */

 const AppDrawerNavigator = createDrawerNavigator({
  Home: AppStackNavigator,
  'IIUM Library': IIUMLibScreen,
  OpeningHours: OpeningHours,
  Contacts: Contacts,
  'My Account': MyAccountScreen,
  'Online Public Access Catalog': OpacScreen,
  'Facility Reservation': FacilityReservationScreen,
  Notification: NotificationScreen,
  Setting: SettingScreen,
  
})


    
      
    
    

   // nak samakan nama header bila buka each page
    /* navigationOptions:({navigation}) => {
      const {routeName} = navigation.state.routes[navigation.state.index];
      return{
        headerTitle: routeName
      }
    } */
   
  
/* const AppSwitchNavigator = createSwitchNavigator({
  HomeScreen : {screen: HomeScreen},
  IIUMLibScreen: {screen: IIUMLibScreen},

}) */



const AppContainer = createAppContainer(AppDrawerNavigator);

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    header: {
      flex: 1,
      paddingTop: 7,
      backgroundColor: '#ecf0f1',
    },
   /*  drawerImage: {
      height: 150,
      width: 150,
      boarderRadius: 75

    } */
})




/* import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import {createStackNavigator, createAppContainer, createDrawerNavigator} from 'react-navigation';

export default class App extends React.Component {
  render() {
    return (
      <AppContainer/>
    );
  }
}

class Home extends React.Component {
  render() {
    return (

      
      <View style={styles.container}>
        <Text>Home...</Text>
      </View>
    );
  }
}

class Dashboard extends React.Component {
  render() {
    return (

      <ScrollView>
      <View style={{height: 1000}}>
        <Text>Dashboard</Text>
      </View>
      </ScrollView>
    );
  }
}


class Feed extends React.Component {
  render() {
    return (

      
      <View style={styles.container}>
        <Button title='Goto Detail Screen' onPress={()=>this.props.navigation.navigate('Detail')}/>
      </View>
    );
  }
}

class IIUMLibrary extends React.Component {
  render() {
    return (

      
      <View style={styles.container}>
        <Text>IIUM Library...</Text>
      </View>
    );
  }
}

const AppStackNavigator = createStackNavigator({
  Home: Home
},
{
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#028A7E'
    }
  },
}
)

const AppDrawerNavigator = createDrawerNavigator({
  
    Home: Home,
    Dashboard: Dashboard,
    IIUMLibrary: IIUMLibrary
  },
  {
    //dia pergi ke atas balik (refresh)
    unmountInactiveRoutes: true,
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#028A7E'
      }
    }
  }
)

const AppContainer = createAppContainer(AppDrawerNavigator);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 */