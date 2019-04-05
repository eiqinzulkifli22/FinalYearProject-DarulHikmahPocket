import React from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';
import { Icon,  Container, Content, Left } from 'native-base'
import {Header, SearchBar } from 'react-native-elements';
import {createStackNavigator, createAppContainer, createDrawerNavigator, createSwitchNavigator,  createNavigationContainer} from 'react-navigation';
//import OpeningHoursSreen from './screens/OpeningHoursSreen';
import '@expo/vector-icons';
import DrawerHeader from '../components/DrawerHeader';



class HomeScreen extends React.Component{

  static navigationOptions = ({navigation}) => ({
    header: null,
    
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

           /*  <View>
              <DrawerHeader/>
            </View> */
          /*   <Container>

                <Header>
                    <Left>
                        <Icon name= 'android-menu'onPress={()=>this.props.navigation.navigate('DrawerOpen')}/>

                    </Left>
                </Header>
                <Content contentContainerStyle={{
                  flex: 1,
                  alignItems: 'center,',
                  justifyContent: 'center'
                
                }}>

                </Content>
            </Container>
            
        );
    }

  } */

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

          <View style={styles.container}>  
            
              <Text>Home Screen</Text>

              
              <Button title='IIUM Library'
                      onPress={
                        ()=>this.props.navigation.navigate('IIUMLibScreen')}
                      />

              <Button title='My Account'
                      onPress={
                        ()=>this.props.navigation.navigate('MyAccountScreen')}
                      />

              <Button title='OPAC'
                      onPress={
                        ()=>this.props.navigation.navigate('OpacScreen')}
                      />

              <Button title='Facilities'
                      onPress={
                        ()=>this.props.navigation.navigate('Facilities')}
                      />
          </View>
        </View>  
        )
    }
}


export default HomeScreen;

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