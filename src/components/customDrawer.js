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
              <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0, 0.8)'}}>
                <TouchableOpacity
                  activeOpacity={0.9} 
                  style={{position: 'absolute', top: 0, bottom: 0, left: 0, right: 0}} 
                  onPress={() => this.setModalVisible(!this.state.modalVisible) }>
                </TouchableOpacity>
                    <View style={{backgroundColor: 'white', elevation: 20, width: '60%', height: 170, padding: 15}}>
                      <View>
                        <TextInput placeholder="Category Name" style={{borderBottomWidth: 1, borderBottomColor: '#2ED1A2'}}/>
                        <TextInput placeholder="Image Url" style={{borderBottomWidth: 1, borderBottomColor: '#2ED1A2'}}/>
                      </View>
                      <View style={{flexDirection: 'row', marginTop: 15}}>
                        <View style={{flex: 2}}></View>
                        <Text style={{fontSize: 14, flex: 1}}>Add</Text>
                        <TouchableOpacity onPress={() => this.setModalVisible(!this.state.modalVisible)}>
                          <Text style={{fontSize: 14, flex: 1}}>Cancel</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
              </View>
          </Modal>
        </View>
      </ScrollView>
    )
  }
}