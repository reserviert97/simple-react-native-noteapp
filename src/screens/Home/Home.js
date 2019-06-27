import React, { Component } from 'react';
import {View, Text, Button, TouchableOpacity, Image, Modal, StyleSheet } from 'react-native';
import {createDrawerNavigator, createStackNavigator} from 'react-navigation';

import AddNote from '../AddNote/AddNote';
import EditNote from '../EditNote/EditNote';

class Home extends Component {

  state = {
    sortModalVisibility: false
  }

  sortModalVisibility = () => {
    this.setState({
      sortModalVisibility: true
    })
  }

  static navigationOptions = ({navigation}) => ({
    headerTitle: 'Arka Note',
    headerTitleStyle: {
      textAlign: 'center',
      flexGrow: 1
    },
    headerLeft: (
      <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={{paddingLeft: 10}}>
        <Image style={{width: 35, height: 35, borderRadius: 50}} source={require('../../assets/images/profile.jpg')}/>
      </TouchableOpacity>
    ),
    headerRight: (
      <TouchableOpacity onPress={() => navigation.toggleDrawer()} style={{paddingRight: 10}}>
        <Image style={{width: 22, height: 22}} source={require('../../assets/DrawerIcons/download.png')}/>
      </TouchableOpacity>
    )
  })
    
  render(){
    return (
      <View>
        <Text>Sesuatu</Text>
        <Button title="Edit Note" onPress={() => this.props.navigation.navigate('EditNote')}/>
        <Text>Sesuatu</Text>
        <Button title="Add Note" onPress={() => this.props.navigation.navigate('AddNote')}/>
      </View>
    )
  }
}

const HomeStack = createStackNavigator({
  Dashboard: {
    screen: Home
  },
  AddNote: {
    screen: AddNote
  },
  EditNote: {
    screen: EditNote
  }
});


const AppDrawerNavigator = createDrawerNavigator({
  Dashboard: {
    screen: HomeStack
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5'
  }
})

export default AppDrawerNavigator;




// Bagian Styling