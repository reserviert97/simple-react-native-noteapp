import React from 'react';
import { Modal, TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const SortModal = (props) => {
  return(
    <Modal
      transparent={true}
      visible={props.visibility}
      onRequestClose={props.closeModal}>
        <TouchableOpacity activeOpacity={0.9} 
          style={styles.modalCloseWrapper} 
          onPress={props.closeModal}>
            <View style={styles.modalWrapper}>
              <Text style={{fontSize: 15, marginBottom: 5}}>ASCENDING</Text>
              <Text style={{fontSize: 15}}>DESCENDING</Text>
            </View>
        </TouchableOpacity>
    </Modal>
  )
}

const styles = StyleSheet.create({
  modalWrapper: {
    position: 'absolute',
    top: 50, 
    right: 20, 
    backgroundColor: 'white', 
    elevation: 5, 
    width: 120, 
    height: 65, 
    padding: 10 
  },
  modalCloseWrapper: {
    width: '100%', 
    height: '100%'
  }
})

export default SortModal;