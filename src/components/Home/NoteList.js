import React, {Component} from 'react';
import { StyleSheet, FlatList, View, TouchableOpacity, Text } from 'react-native';

const NoteList = (props) => {
    return(
      <View style={styles.bottom}>
        <FlatList
          data={props.data}
          numColumns={2}
          renderItem={(data) => (
            <TouchableOpacity activeOpacity={0.9} style={styles.bottomItem} onPress={() => props.navigateEditNote(data)}>
              <View style={{flex: 1, borderRadius: 10, elevation: 10, padding: 10, backgroundColor: (data.item.category == 'Personal') ? '#C0EB6A' : 
                (data.item.category == 'Work') ? '#2FC2DF' : (data.item.category == 'Learn') ? '#FAD06C' : '#FF92A9'}}>
                <View style={{alignItems: 'flex-end', flex:1}}>
                  <Text style={{fontSize: 12, color: 'white'}}>{data.item.date}</Text>
                </View>
                <View style={{justifyContent: 'center', flex:2}}>
                  <Text style={{fontSize: 16, color: '#FFFFFF', fontWeight: 'bold'}} numberOfLines={2}>{data.item.name}</Text>
                  <Text style={{fontSize: 13, color: '#FFFFFF'}}>{data.item.category}</Text>
                </View>
                <View style={{justifyContent: 'center', flex:3}}>
                  <Text style={{fontSize: 13, color: '#FFFFFF'}} numberOfLines={3}>{data.item.content}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    )
}

const styles = StyleSheet.create({
  bottom: {
    marginTop: 5,
    height: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10
  },
  bottomItem: {
    width: '50%',
    height: 170,
    padding: 10
  },
})

export default NoteList;

