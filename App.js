/**
 * Arka Note
 * https://github.com/facebook/react-native
 *
 */

import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';

import AppDrawerNavigator from './src/screens/Home/Home';

export default class App extends Component {
  render() {
    return (
      <AppContainer/>
    );
  }
}

const AppContainer = createAppContainer(AppDrawerNavigator);



