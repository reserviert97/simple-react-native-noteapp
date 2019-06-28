import React, { Component } from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet, TextInput} from 'react-native';
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
      { name: 'Create something', category: 'Personal', date: '25 June', content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec', key: Math.random() + "A" }, 
      { name: 'Build a React Native apps', category: 'Work', date: '22 Mei', content: 'lorem ipsum sesuatu bla bla bla bla bla asdsad asdsad asdasdasdasda asdasdasdasd asdsa', key: Math.random() + "A"  },
      { name: 'Doing something,', category: 'Wishlist', date: '09 Maret', content: 'aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate ele', key: Math.random() + "A"  }, 
      { name: 'Going arround', category: 'Wishlist', date: '05 May', content: 'lorem ipsum sesuatu bla bla bla bla bla', key: Math.random() + "A"  },
      { name: 'Build a Flutter', category: 'Learn', date: '19 January', content: 'dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi', key: Math.random() + "A"  }, 
      { name: 'Cannot get a Data', category: 'Learn', date: '20 February', content: 'aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean', key: Math.random() + "A"  },
      { name: 'Doing a great app', category: 'Personal', date: '14 February', content: 'aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean', key: Math.random() + "A"  },
      { name: 'Bla Bla Bla', category: 'Work', date: '18 Mei', content: 'lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt.', key: Math.random() + "A"  },
      { name: 'Wow, amazing', category: 'Personal', date: '29 September', content: 'lorem ipsum sesuatu bla bla bla bla bla', key: Math.random() + "A"  },
      { name: 'My Today List', category: 'Wishlist', date: '19 November', content: 'Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nun', key: Math.random() + "A"  },
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
          navigateEditNote={(data) => this.props.navigation.navigate('EditNote', data)} 
        />

        <TouchableOpacity 
          activeOpacity={1} 
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

