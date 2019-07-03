import React, {Component} from 'react';
import {View, Image, StyleSheet, Text, TextInput, Picker} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import { connect } from 'react-redux';
import { editNote } from '../../public/redux/actions/notes';

class EditNote extends Component {

  state = {
    id: this.props.navigation.state.params.item.id,
    title: this.props.navigation.state.params.item.title,
    content: this.props.navigation.state.params.item.content,
    categoryId: this.props.navigation.state.params.item.Category.id
  }

  static navigationOptions = ({navigation}) => {
    return {
      header: null,
    }
  }

  sendEditedNote(){
    this.props.dispatch(editNote(this.state));
    this.props.navigation.navigate('Dashboard');
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.headerPicture} onPress={() => this.props.navigation.goBack()}>
            <Image style={{width: 24, height: 24}} source={require('../../assets/DrawerIcons/leftArrow.png')}/>
          </TouchableOpacity>

          <View style={{flex: 4, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Edit Note</Text>
          </View>

          <TouchableOpacity 
            style={styles.headerButton} 
            onPress={() => this.sendEditedNote()}
          >
            <Image style={{width: 22, height: 22}} source={require('../../assets/DrawerIcons/ceklis.png')}/>
          </TouchableOpacity>
        </View>

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
            value={this.state.content}
            onChangeText={(text) => this.setState({content: text})}
          />
        </View>

        <View style={styles.bottom}>
          <Text style={{fontSize: 16, color: 'black', fontWeight: 'bold'}}>CATEGORY</Text>
          <Picker 
            style={{width: '50%', marginLeft: 20, elevation: 10}} 
            selectedValue={this.state.categoryId}
            onValueChange={(value, index) => {
              this.setState({categoryId: value})
            }}
          >
            <Picker.Item label="Select Value" value="default"/>
            {this.props.categories.map((item, key) =>
              (<Picker.Item label={item.name} value={item.id} key={key} />)
            )}
          </Picker>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
      categories: state.categories.categories
  }
}

export default connect(mapStateToProps)(EditNote);

const styles = StyleSheet.create({
  container: {
    padding: 0,
    flex: 1,
    backgroundColor: '#FFFFFF'
  },
  textInput: {
    paddingTop: 20,
    marginLeft: 10,
    marginRight: 10,
    // flex: 1,
    height: '25%'
  },
  description: {
    // flex: 5,
    marginLeft: 10,
    marginRight: 10,
    height: '40%',
    backgroundColor: 'white',
  },
  bottom: {
    // flex: 3,
    height: '35%',
    backgroundColor: 'white',
    alignItems: 'flex-start',
    padding: 15
  },
  header: { 
    height: 55, 
    flexDirection: 'row', 
    elevation: 6, 
    width: '100%', 
    paddingLeft: 15,
    paddingRight: 15, 
    backgroundColor: 'white'
  },
  headerPicture: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  headerButton: {
    flex:1, 
    justifyContent: 'center',
    alignItems: 'center'
  },

});