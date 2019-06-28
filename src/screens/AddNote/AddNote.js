import React, {Component} from 'react';
import {View, Image, StyleSheet, Button, TextInput, Picker} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class AddNote extends Component {

  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: 'Add Note',
      headerRight: (
        <TouchableOpacity onPress={() => navigation.navigate('Dashboard')} style={{padding: 15, marginRight: 10}}>
          <Image style={{width: 25, height: 25}} source={require('../../assets/DrawerIcons/ceklis.png')}/>
        </TouchableOpacity>
      ),
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textInput}>
          <TextInput
            style={{fontSize: 20, color: '#C4C4C4'}}
            placeholder="ADD TITLE"
            multiline={true}
          />
        </View>
        <View style={styles.description}>
          <TextInput
            style={{fontSize: 20, color: '#C4C4C4'}}
            multiline={true}
            placeholder="description"
          />
        </View>

        <View style={styles.bottom}>
          <Picker style={{width: '50%', marginLeft: 20, elevation: 10}}>
            <Picker.Item label="Work" value="key0" />
            <Picker.Item label="Personal" value="key1" />
            <Picker.Item label="Wishlist" value="key2" />
            <Picker.Item label="Creator" value="key3" />
          </Picker>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: 15,
    paddingLeft: 15
  },
  textInput: {
    flex: 1,
  },
  description: {
    flex: 5,
    backgroundColor: 'white',
  },
  bottom: {
    flex: 3,
    backgroundColor: 'white',
    alignItems: 'flex-start'
  }

});