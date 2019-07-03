import React, { Component } from 'react';
import { Modal, View, Text, TouchableOpacity, Button } from 'react-native';

class DeleteModal extends Component{

  render() {

    return(
      <Modal
        transparent={true}
        visible={this.props.visible}
        onRequestClose={this.props.closeModal}>
          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0, 0.8)'}}>
            <TouchableOpacity
              activeOpacity={0.9} 
              style={{position: 'absolute', top: 0, bottom: 0, left: 0, right: 0}} 
              onPress={this.props.closeModal}>
            </TouchableOpacity>
                <View style={{backgroundColor: 'white', elevation: 20, width: '60%', height: 100, padding: 15, alignItems: 'center'}}>
                  <View>
                    <Text>Are you sure ?</Text>
                  </View>
                  <View style={{flexDirection: 'row', justifyContent: 'space-between' ,paddingTop: 15, paddingBottom: 15}}>
                    <View style={{flex: 2}}>
                      <Button onPress={this.props.deleteItem} title="Yes"/>
                    </View>
                    <View style={{flex: 1}}/>
                    <View style={{flex: 2}}>
                      <Button onPress={this.props.closeModal} title="Cancel"/>
                    </View>

                  </View>
                </View>
          </View>
      </Modal>
    )
  }
}

export default DeleteModal;