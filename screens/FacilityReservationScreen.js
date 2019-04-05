import React from 'react';
import {View, Text,StyleSheet} from 'react-native';
import { Container, Content, Button } from 'native-base'
import { Header, SearchBar } from 'react-native-elements';
import {Ionicons} from '@expo/vector-icons';
class FacilityReservationScreen extends React.Component{
  static navigationOptions = ({navigation}) => ({
    header: null
  })

    render(){
        return(
          //<Ionicons name="keyboard_arrow_left" size={32} color="green" />
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
                <Text>Facility Reservation Screen</Text>
            </View>
        </View>
        )
    }
}
export default FacilityReservationScreen;

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