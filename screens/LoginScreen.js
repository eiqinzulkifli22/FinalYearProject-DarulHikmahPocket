import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';
import { Icon,  Container, Content, Left } from 'native-base'
import {Header, SearchBar } from 'react-native-elements';
import {createStackNavigator, createAppContainer, createDrawerNavigator, createSwitchNavigator,  createNavigationContainer} from 'react-navigation';
//import OpeningHoursSreen from './screens/OpeningHoursSreen';
import '@expo/vector-icons';
import DrawerHeader from '../components/DrawerHeader';



class LoginScreen extends React.Component{

  static navigationOptions = ({navigation}) => ({
    header: null,
    
  })



    render(){
        return(

         

             <View style={styles.header}>
  
          <View style={styles.container}>  
            
              <Text>Login Screen</Text>

              
              <Button title='LOGIN'
                      onPress={
                        ()=>this.props.navigation.navigate('HomeScreen')}
                      />

              <Button title='SIGNUP'
                      onPress={
                        ()=>this.props.navigation.navigate('HomeScreen')}
                      />

              <Button title='Forgot Password '
                      onPress={
                        ()=>this.props.navigation.navigate('ResetPasswordScreen')}
                      />

            {/*   <View style={[{ width: "20%", height: 70,backgroundColor: "#028A7E" }]}>
                        <Button
                        
                          onPress={this.buttonClickListener}
                          title="Button Three"
                          color="#fff"
                        />
              </View>  */}
              
          </View>
        </View>  
        )
    }
}


export default LoginScreen;

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


//BIDIL PUNYA

/* import React, {Component} from 'react';
import {StyleSheet, Alert} from 'react-native';
import {Container, Text, Content, Form, Item, Input, Button} from 'native-base';
// import firebase from 'react-native-firebase';
// import { db } from '../config/db';
import firebase from '@firebase/app';
import '@firebase/database';
import '@firebase/storage';
import '@firebase/auth';

var config = {
    apiKey: "AIzaSyA62phh4l2jYHUaKD9DERTU8WLFO3zWziI",
    authDomain: "react-native-bb86a.firebaseapp.com",
    databaseURL: "https://react-native-bb86a.firebaseio.com",
    projectId: "react-native-bb86a",
    storageBucket: "react-native-bb86a.appspot.com",
    messagingSenderId: "606697324561"
  };
  firebase.initializeApp(config);

export default class LoginScreen extends Component {

  constructor () {
    super();
    this.state = {
      email: '',
      password: ''
    }
  }

  signUpButtonPress(){
    firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
    .then(() => {this.props.navigation.navigate('HomeScreen')} )
    .catch((error)=>{
      console.log("Auth failed " + error);

   })
    // .catch((error) => {
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    //   if (errorCode == 'auth/weak password') {
    //     Alert.alert('The password is too weak');
    //   }
    //   else {
    //     Alert.alert(errorMessage);
    //   }
    //   console.log(error);
    // });

    // this.props.navigation.navigate('Home');
    }

  loginButtonPress(){
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
    .then(() => {this.props.navigation.navigate('Home')})
    .catch((error) => {
      console.log("Auth failed " + error);
    })
  }

  render() {
    return (
        <Container style={styles.container}>
            <Text style={styles.headerText}>Login</Text>
                <Content>
                    <Form>
                        <Item style={styles.inputContainer}>
                            <Input placeholder="Email" onChangeText={(email) => this.setState({email})} />
                        </Item>
                        <Item style={styles.inputContainer}>
                            <Input secureTextEntry={true} placeholder="Password" onChangeText={(password) => this.setState({password})} />
                        </Item>

                        <Button style={styles.buttonStyle} onPress={this.signUpButtonPress()} >
                            <Text>Sign Up</Text>
                        </Button>

                        <Button success style={styles.buttonStyle} onPress={this.loginButtonPress()} >
                            <Text>Login</Text>
                        </Button>
                    </Form>
                </Content>
        </Container>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
    //   alignItems: 'center',
      backgroundColor: '#00b5ec'
    },
    headerText: {
      marginTop: 40,
      fontSize: 30,
      fontWeight: 'bold',
      alignSelf: 'center'
    },
    inputContainer:{
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      width:250,
      height:45,
      marginBottom:20,
      flexDirection: 'row',
      alignItems:'center',
    },
    buttonStyle: {
      marginTop: 10,
      alignSelf: 'center'
    }
  }); */