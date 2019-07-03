/**
 * Arka Note
 * https://github.com/facebook/react-native
 *
 */

import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator, createStackNavigator} from 'react-navigation';
import {Image} from 'react-native';
import { Provider } from 'react-redux';

import Home from './src/screens/Home/Home';
import AddNote from './src/screens/AddNote/AddNote';
import EditNote from './src/screens/EditNote/EditNote';
import CustomDrawer from './src/components/customDrawer';

import store from './src/public/redux/store';
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer/>
      </Provider>
    );
  }
}


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
  }
}, { contentComponent: CustomDrawer });


const AppContainer = createAppContainer(AppDrawerNavigator);

export default App;



