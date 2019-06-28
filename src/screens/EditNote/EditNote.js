import React, {Component} from 'react';
import {View, Image, StyleSheet, Button, TextInput, Picker} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class EditNote extends Component {

  state = {
    title: this.props.navigation.state.params.item.name,
    description: this.props.navigation.state.params.item.content
  }

  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: 'Edit Note',
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
            style={{fontSize: 20, color: 'black'}}
            value={this.state.title}
            multiline={true}
            onChangeText={(text) => this.setState({title: text})}
          />
        </View>
        <View style={styles.description}>
          <TextInput
            style={{fontSize: 20, color: 'black'}}
            multiline={true}
            value={this.state.description}
            onChangeText={(text) => this.setState({description: text})}
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