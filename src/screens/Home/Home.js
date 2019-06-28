import React, { Component } from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet, TextInput, FlatList, TouchableHighlight, Modal, TouchableWithoutFeedback} from 'react-native';
import {createDrawerNavigator, createStackNavigator} from 'react-navigation';

import AddNote from '../AddNote/AddNote';
import EditNote from '../EditNote/EditNote';
import CustomDrawer from '../../components/customDrawer';
import NoteList from '../../components/Home/NoteList';
import Header from '../../components/Home/Header';
import SortModal from '../../components/Home/SortModal';
class Home extends Component {
  state = {
    modalVisible: false,
  };

  static navigationOptions = ({navigation}) => ({
    header: null
  });

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  
  render(){
    const items = [
      { name: 'TURQUOISE', code: '#2FC2DF', content: 'lorem ipsum sesuatu bla bla bla bla bla asdas', key: Math.random() + "A" }, 
      { name: 'EMERALD', code: '#2FC2DF', content: 'lorem ipsum sesuatu bla bla bla bla bla', key: Math.random() + "A"  },
      { name: 'PETER RIVER', code: '#C0EB6A', content: 'lorem ipsum sesuatu bla bla bla bla bla', key: Math.random() + "A"  }, 
      { name: 'AMETHYST', code: '#FAD06C', content: 'lorem ipsum sesuatu bla bla bla bla bla', key: Math.random() + "A"  },
      { name: 'WET ASPHALT', code: '#C0EB6A', content: 'lorem ipsum sesuatu bla bla bla bla bla', key: Math.random() + "A"  }, 
      { name: 'GREEN SEA', code: '#FF92A9', content: 'lorem ipsum sesuatu bla bla bla bla bla', key: Math.random() + "A"  },
      { name: 'NEPHRITIS', code: '#27ae60', content: 'lorem ipsum sesuatu bla bla bla bla bla', key: Math.random() + "A"  },
      { name: 'NEPHRITIS', code: '#27ae60', content: 'lorem ipsum sesuatu bla bla bla bla bla', key: Math.random() + "A"  },
      { name: 'NEPHRITIS', code: '#27ae60', content: 'lorem ipsum sesuatu bla bla bla bla bla', key: Math.random() + "A"  },
      { name: 'NEPHRITIS', code: '#27ae60', content: 'lorem ipsum sesuatu bla bla bla bla bla', key: Math.random() + "A"  },
    ];

    return (
      <View style={styles.container}>
        <Header 
          openDrawer={() => this.props.navigation.toggleDrawer()} 
          openModal={() => this.setModalVisible(true)}
        />

        <View style={styles.searchContainer}>
          <TextInput style={styles.search} placeholder="search.."/>
        </View>

        <NoteList 
          data={items} 
          navigateEditNote={() => this.props.navigation.navigate('EditNote')} 
        />

        <TouchableOpacity 
          activeOpacity={0.8} 
          onPress={() => this.props.navigation.navigate('AddNote')} 
          style={styles.floatingButtonStyle}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>+</Text>
        </TouchableOpacity>

        <SortModal 
          closeModal={() => { this.setModalVisible(!this.state.modalVisible) }}
          visibility={this.state.modalVisible}
        />

      </View>
    )
  }
};


const styles = StyleSheet.create({
  container: {
    padding: 0,
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  searchContainer: {
    alignItems: 'center',
    marginTop: 15
  },
  search: {
    paddingLeft: 15,
    height: 40,
    width: '70%',
    borderWidth: 1,
    borderRadius: 13,
    borderColor: "#FFFFFF",
    backgroundColor : "#FFFFFF",
    elevation: 5
  },
  floatingButtonStyle: {
    backgroundColor: 'white',
    width: 50,
    height: 50,
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
    borderRadius: 50,
    elevation: 5
  }
});

const HomeStack = createStackNavigator({
  Dashboard: {
    screen: Home,
    header: () => null
  },
  AddNote: {
    screen: AddNote,
  },
  EditNote: {
    screen: EditNote
  }
});

const AppDrawerNavigator = createDrawerNavigator({
  Personal: {
    screen: HomeStack,
    navigationOptions: ({navigation}) => {
      return {
        drawerIcon: (
          <Image 
            source={require('../../assets/DrawerIcons/writing.png')} 
            style={{width: 20, height: 20}} />
        )
      }
    }
  },
  Work: {
    screen: HomeStack,
    navigationOptions: ({navigation}) => {
      return {
        drawerIcon: (
          <Image 
            source={require('../../assets/DrawerIcons/portfolio.png')} 
            style={{width: 20, height: 20}} />
        )
      }
    }
  },
  Wishlist: {
    screen: HomeStack,
    navigationOptions: ({navigation}) => {
      return {
        drawerIcon: (
          <Image 
            source={require('../../assets/DrawerIcons/wishlist.png')} 
            style={{width: 20, height: 20}}
          />
        )
      }
    }
  }
}, {
  contentComponent: CustomDrawer
});

export default AppDrawerNavigator;

