import React, {Component} from 'react';
import { ScrollView, View, Image, TouchableOpacity, Button, Text, Modal, TextInput, StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { addCategories, deleteCategories } from '../public/redux/actions/categories';
import { getNotesByCategory } from '../public/redux/actions/notes';

import DeleteModal from '../components/Home/DeleteModal';
class customDrawer extends Component{
  state = {
    modalVisible: false,
    categoryName: '',
    icon: '',
    deleteModal: false,
    selectedCategory: 0,
  };

  getNotesByCategory = (id) => {
    this.props.dispatch(getNotesByCategory(id));
    this.props.navigation.toggleDrawer();
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  _renderItem = ({item}) => (
    <TouchableOpacity 
      style={{flex: 1, flexDirection: 'row', paddingTop: 10, paddingBottom: 10 }}
      onPress={() => this.getNotesByCategory(item.id)}
      onLongPress={() => {
        this.setCategoryModal(true)
        this.setState({selectedCategory: item.id})
      }}
    >
      <View style={{flex: 1, alignItems: 'center'}}>
        <Image 
        source={{uri: item.icon}} 
        style={{width: 20, height: 20}}
        />
      </View>
      <View style={{flex: 3, alignItems: 'flex-start'}}>
        <Text style={{fontWeight: 'bold', color: 'black'}}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  )

  addCategory = () => {
    this.props.dispatch(addCategories(this.state));
    this.setModalVisible(!this.state.modalVisible)
  }

  deleteCategory() {
    this.props.dispatch(deleteCategories(this.state.selectedCategory));
    this.setCategoryModal(!this.state.deleteModal)
  }
  
  setCategoryModal(visible) {
    this.setState({deleteModal: visible})
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
            keyExtractor={(item, index) => item.id.toString()}
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

          <DeleteModal 
            visible={this.state.deleteModal} 
            closeModal={() => {this.setCategoryModal(!this.state.deleteModal)}}
            deleteItem={() => this.deleteCategory()}
          />
          
          <Modal
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => { this.setModalVisible(!this.state.modalVisible) }}>
              <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0, 0.8)'}}>
                <TouchableOpacity
                  activeOpacity={0.9} 
                  style={{position: 'absolute', top: 0, bottom: 0, left: 0, right: 0}} 
                  onPress={() => this.setModalVisible(!this.state.modalVisible) }>
                </TouchableOpacity>
                    <View style={{backgroundColor: 'white', elevation: 20, width: '60%', height: 170, padding: 15}}>
                      <View>
                        <TextInput 
                          placeholder="Category Name" 
                          style={{borderBottomWidth: 1, borderBottomColor: '#2ED1A2'}}
                          onChangeText={(text) => this.setState({categoryName: text})}
                        />
                        <TextInput 
                          placeholder="Image Url" 
                          style={{borderBottomWidth: 1, borderBottomColor: '#2ED1A2'}}
                          onChangeText={(text) => this.setState({icon: text})}
                        />
                      </View>
                      <View style={{flexDirection: 'row', marginTop: 8, justifyContent: 'space-around'}}>
                        <Button 
                          title="Add" style={{flex:1}}
                          onPress={this.addCategory}
                        />
                        <Button 
                          style={{flex:1}}
                          title="Cancel"
                          onPress={() => this.setModalVisible(!this.state.modalVisible)}
                        />
                      </View>
                    </View>
              </View>
          </Modal>
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