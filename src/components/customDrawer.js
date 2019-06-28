import React, {Component} from 'react';
import { ScrollView, View, Image, TouchableOpacity, Text, Modal, TextInput } from 'react-native';
import { DrawerItems } from 'react-navigation';

export default class customDrawer extends Component{
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render(){
    return (
      <ScrollView>
        <View style={{height: 250, backgroundColor: 'white'}}>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Image style={{width: 150, height: 150, borderRadius: 100}} source={require('../assets/images/profile.jpg')} />
            <Text style={{marginTop: 15, fontWeight: 'bold', color: 'black'}}>Nurlatif Ardhi Pratama</Text>
          </View>
        </View>

        <View>
          <DrawerItems {...this.props} />
          
          <TouchableOpacity onPress={() => this.setModalVisible(true)} style={{padding: 10}}>
            <View style={{ flexDirection: 'row', flex: 1}}>
              <View  style={{marginLeft: 8}}>
                  <Image 
                    source={require('../assets/DrawerIcons/plus.png')} 
                    style={{width: 20, height: 20}}
                  />
              </View>
              <View>
                  <Text style={{fontWeight: 'bold', color: 'black', marginLeft: 33}}>Add Category</Text>
              </View>
            </View>
          </TouchableOpacity>

          <Modal
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => { this.setModalVisible(!this.state.modalVisible) }}>
            <TouchableOpacity activeOpacity={0.9} style={{width: '100%', height: '100%'}} onPress={() => this.setModalVisible(!this.state.modalVisible) }>
                <View style={{position: 'absolute', top: 250, right: 75, left: 75, bottom: 250, backgroundColor: 'white', elevation: 20, width: 200, height: 142, padding: 15, zIndex: 9 }}>
                  <View>
                    <TextInput placeholder="Category Name"/>
                    <TextInput placeholder="Image Url"/>
                  </View>
                  <View style={{flexDirection: 'row',}}>
                    <View style={{flex: 2}}></View>
                    <Text style={{fontSize: 14, flex: 1}}>Add</Text>
                    <Text style={{fontSize: 14, flex: 1}}>Cancel</Text>
                  </View>
                  
                </View>
            </TouchableOpacity>
          </Modal>
          
        </View>
      </ScrollView>
    )
  }
}