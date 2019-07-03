import React, {Component} from 'react';
import { ScrollView, View, Image, TouchableOpacity, Button, Text, Modal, TextInput, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { addCategories } from '../public/redux/actions/categories';
class customDrawer extends Component{
  state = {
    modalVisible: false,
    categoryName: '',
    imageUri: ''
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  _renderItem = ({item}) => (
    <TouchableOpacity style={{flex: 1, flexDirection: 'row', paddingTop: 10, paddingBottom: 10 }}>
      <View style={{flex: 1, alignItems: 'center'}}>
        <Image 
        source={require('../assets/DrawerIcons/plus.png')} 
        style={{width: 20, height: 20}}
        />
      </View>
      <View style={{flex: 3, alignItems: 'flex-start'}}>
        <Text style={{fontWeight: 'bold', color: 'black'}}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  )

  addCategory = () => {
    this.props.dispatch(addCategories(this.state.categoryName));
    this.setModalVisible(!this.state.modalVisible)
  }
  

  render(){
    
    return (
      <ScrollView style={{flex: 1}}>
        <View style={{height: 250, backgroundColor: 'white', flex: 2}}>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Image style={{width: 150, height: 150, borderRadius: 100}} source={require('../assets/images/profile.jpg')} />
            <Text style={{marginTop: 15, fontWeight: 'bold', color: 'black'}}>Nurlatif Ardhi Pratama</Text>
          </View>
        </View>

        <View style={{flex: 3}}>
        <FlatList
          data={this.props.categories}
          keyExtractor={(item, index) => item.id+' '}
          renderItem={this._renderItem}
        />

        <TouchableOpacity onPress={() => this.setModalVisible(true)} style={{flex: 1, flexDirection: 'row', paddingTop: 10, paddingBottom: 10, marginBottom: 50 }}>
          <View style={{flex: 1, alignItems: 'center'}}>
            <Image 
              source={require('../assets/DrawerIcons/plus.png')} 
              style={{width: 20, height: 20}}
            />
          </View>
          <View style={{flex: 3, alignItems: 'flex-start'}}>
              <Text style={{fontWeight: 'bold', color: 'black'}}>Add Category</Text>
          </View>
        </TouchableOpacity>
        
        
          
        </View>
      </ScrollView>
    )
  }
}

const mapStateToProps = state => {
  return {
      categories: state.categories.categories
  }
}

export default connect(mapStateToProps)(customDrawer);

const styles = StyleSheet.create({

})