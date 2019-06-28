import React from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Header = (props) => {
  return(
    <View style={styles.header}>
      <TouchableOpacity style={styles.headerPicture} onPress={props.openDrawer}>
        <Image style={{width: 35, height: 35, borderRadius: 50}} source={require('../../assets/images/profile.jpg')}/>
      </TouchableOpacity>

      <View style={{flex: 4, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Arka Note</Text>
      </View>

      <TouchableOpacity style={styles.headerButton} onPress={props.openModal}>
        <Image style={{width: 22, height: 22}} source={require('../../assets/DrawerIcons/download.png')}/>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  header: { 
    height: 55, 
    flexDirection: 'row', 
    elevation: 6, 
    width: '100%', 
    padding: 0, 
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
})

export default Header;